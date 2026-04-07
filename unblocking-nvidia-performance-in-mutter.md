# Unblocking Nvidia Performance in Mutter: Studying a GNOME Compositor Change

4/7/2026

Nikola Lazarov

## Abstract

This article examines merge request 4725 in GNOME/Mutter [[1]](#references), authored by Daniel van Vugt, which addresses a performance issue specific to Nvidia GPUs. On Nvidia systems, a buffer locking call inside the compositor thread could block synchronously for several milliseconds per frame, stalling input handling and frame preparation while the GPU finished its work. The fix replaces this blocking wait with an event-driven approach: a sync file descriptor obtained after submitting GPU work is registered with GLib's main loop, which notifies the compositor when the GPU is done rather than holding the thread until it is. The result is that the compositor thread remains responsive throughout, and the blocking time is reduced from milliseconds to microseconds.

## Introduction

Contributing to open source software is one of the best ways to deepen your understanding of how complex systems actually work. With the release of GNOME 50, I took the opportunity to study this change in Mutter (GNOME's Wayland compositor). The purpose of this study is purely educational. I am not a Mutter maintainer or a deep expert on its internals. If I've gotten something wrong, I genuinely welcome corrections in the comments.

## What is Mutter

Mutter is the Wayland compositor at the heart of GNOME. A compositor's job is to collect rendered surfaces from client applications and assemble them into a final frame to display on screen. Each client (a terminal, a browser, a game) renders its own content independently, and the compositor decides how to layer and present those surfaces.

One of the more nuanced aspects of compositing on modern Linux desktops is synchronization: making sure GPU work is actually finished before a buffer is handed off to the display hardware. This is the root of the problem that MR 4725 addresses. The fix is not a dramatic architectural change; it's a targeted, surgical improvement to how Mutter handles frame buffer locking specifically for Nvidia GPUs.

Understanding it requires understanding three things: what GBM is, why Nvidia behaves differently from AMD and Intel in this context, and how GLib's main loop can be leveraged to turn a blocking wait into a non-blocking event notification.

## Background: Wayland, GBM, and the Compositor Thread

### Wayland and the Compositor's Role

Wayland is a display server protocol, a specification for how client applications communicate with a compositor to get their windows displayed. Unlike X11, which centralizes many responsibilities in a single server process, Wayland hands display compositing directly to the compositor. Mutter is that compositor for GNOME.

Each client application renders into a buffer. A game might use Vulkan; a GTK application uses Cairo or Skia. However the pixels are produced, the result is a buffer of rendered content that gets handed to the compositor. Mutter collects these buffers, determines layering and occlusion, and produces the final frame that gets sent to the display.

It's also worth noting that in some cases (typically a full-screen game) the compositor can be bypassed entirely via a mechanism called direct scanout, where the application's buffer goes straight to the display hardware. That path is not what this merge request is primarily about, though the code touches it at the edges.

### GBM: The Generic Buffer Manager

Different GPU drivers (Mesa for AMD and Intel, the proprietary Nvidia driver) use different internal buffer layouts and management strategies. GBM, the Generic Buffer Manager [[2]](#references), is a userspace abstraction layer that allows programs like Mutter to create and manage GPU buffers without caring about driver-specific details.

The function at the center of this issue is `gbm_surface_lock_front_buffer`. When Mutter has finished rendering a frame with EGL, it calls this function to lock the front buffer of a GBM surface, essentially claiming the finished render result so it can be forwarded to KMS (Kernel Mode Setting) for display.

KMS is a subsystem of the Direct Rendering Manager (DRM) [[3]](#references), the kernel component responsible for driving the display. Mutter hands the locked buffer to KMS, which schedules it to be scanned out to the monitor.

### The Divergence: Implicit Sync on AMD/Intel vs. Nvidia

Here is where AMD/Intel and Nvidia part ways, and where the bug lives.

AMD and Intel Mesa drivers implement implicit synchronization. By the time `gbm_surface_lock_front_buffer` is called, the driver has already ensured that all GPU rendering work has completed. The function returns immediately. There is nothing to wait for.

Nvidia's driver does not implement implicit sync in the same way. When Mutter calls `gbm_surface_lock_front_buffer` on an Nvidia system, the driver may still be finishing GPU work. If it is, the call blocks, synchronously waiting until the GPU is done before returning and handing back the locked buffer.

This blocking happens on Mutter's compositor thread. That thread is responsible for far more than just locking buffers: it handles input events, prepares future frames, and runs the core compositing loop. A blocking call on this thread means none of that other work can happen while Mutter waits for Nvidia to finish rendering. On a slow frame, that wait could stretch into the milliseconds, long enough to noticeably degrade responsiveness.

The commit message in MR 4725 puts it plainly: "Historically, all GBM drivers have been assumed to support implicit sync and not block when locking the front buffer... However, this doesn't apply to the Nvidia driver."

## The Problem in Code

Before this fix, the buffer locking happened inside the swap buffers function, the function Mutter calls at the end of each frame's render cycle, after submitting GPU work via `eglSwapBuffers`. On AMD and Intel, this was fine; by the time that function ran, the driver had already ensured the GPU was done. On Nvidia, it wasn't. The lock call could arrive while the GPU was still working, and when that happened, it would sit and wait.

That wait happens on the compositor thread, which is also responsible for handling input events and preparing subsequent frames. Nothing else on that thread can make progress until the lock returns. The frame does need to be fully rendered before it can be displayed, so the wait itself is not wrong. The problem is where it happens.

## The Solution: A File Descriptor and a GLib Source

The core idea is straightforward: instead of blocking synchronously until the GPU is done, obtain a readiness signal up front and let the main event loop tell you when to proceed.

### Using a File Descriptor as a Readiness Signal

In Unix, almost everything is a file, including abstractions that have nothing to do with files on disk. A file descriptor in this context is a handle that the kernel uses to notify userspace when a condition is met.

After submitting GPU work via `eglSwapBuffers`, Mutter can obtain a sync file descriptor from the EGL context. This is a non-blocking operation; Mutter does not wait for the GPU to finish, it just receives a handle. That handle becomes readable precisely when the GPU has completed rendering. The kernel manages this; Mutter just needs to watch for it.

This is the mechanism that replaces the blocking wait. Instead of calling `gbm_surface_lock_front_buffer` immediately and stalling the compositor thread, Mutter holds onto that file descriptor and lets GLib's main loop poll it passively alongside all other events.

### Integrating with GLib's Main Loop

GLib's main loop [[4]](#references) is the event system at the heart of GNOME applications and, by extension, Mutter. It polls a set of registered file descriptors and dispatches callbacks when conditions are met. The change introduces a new event source, called `RenderSource`, that plugs directly into this system.

The render source holds a reference to the current frame and watches its associated sync file descriptor. The main loop checks readiness before and after each poll cycle. When the file descriptor becomes readable, meaning the GPU is done, the main loop dispatches the render source's callback, which proceeds with posting the frame to KMS and locking the front buffer.

At that point, `gbm_surface_lock_front_buffer` returns immediately, because the GPU has already finished. The wait has happened, but passively, without blocking the compositor thread.

The change also introduces a gating function that sits in front of the frame posting logic. Every path that previously called into the frame posting code directly now goes through this gate first. If the render source exists and the GPU is not yet done, the gate returns early. If the GPU is done, or if there is no render source (meaning this is not an Nvidia system), it proceeds normally. This keeps the non-Nvidia path completely unchanged.

## The Net Effect

The architecture after this change follows a clean event-driven pattern:

1. `eglSwapBuffers` submits GPU work and returns immediately.
2. Mutter obtains a sync file descriptor and registers it with the render source.
3. The compositor thread is free to handle input, prepare the next frame, and respond to events.
4. When the GPU finishes, the kernel signals the file descriptor.
5. The GLib main loop wakes up the render source.
6. The render source confirms readiness and calls the posting path.
7. `gbm_surface_lock_front_buffer` is called and returns immediately because the GPU is done.
8. The frame goes to KMS.

The wait still happens; physics has not been repealed. But it happens passively, inside the main loop's poll call, rather than blocking the compositor thread directly. The commit message captures the expected outcome well: "this effectively reduces the blocking time of this function from milliseconds to microseconds."

## Conclusion

MR 4725 is a good example of the kind of targeted fix that makes open source software genuinely better over time. It doesn't rewrite the world. It identifies a specific, concrete problem and replaces a synchronous stall with an event-driven alternative using primitives that already exist in GLib and the Linux kernel.

It's also a good reminder that performance problems in system software are often not about algorithms or data structures, but about where work happens. Moving a wait off the critical thread, without changing what gets waited on, is enough.

For anyone interested in going deeper, the merge request [[1]](#references) and the full Mutter source [[5]](#references) are publicly available. Reading real compositor code is one of the better ways to understand how the Linux desktop actually works.

## References

1. van Vugt, D. (2025). Unblock video and performance in Mutter. GNOME / Mutter GitLab. https://gitlab.gnome.org/GNOME/mutter/-/merge_requests/4725
2. Freedesktop: GBM (Generic Buffer Manager). https://gitlab.freedesktop.org/mesa/mesa
3. Linux kernel documentation: DRM/KMS subsystem. https://www.kernel.org/doc/html/latest/gpu/drm-kms.html
4. GLib documentation: The Main Event Loop. https://docs.gtk.org/glib/main-loop.html
5. Mutter source code. https://gitlab.gnome.org/GNOME/mutter
