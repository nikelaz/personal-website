# Projects Section — Final Implementation Plan

## Objective

Add a polished **Projects** section to `nikolalazarov.com` that strengthens the positioning toward:

**Rust · C++ · Linux · Native Applications · Systems Programming · Graphics · Developer Tools**

The section should complement the site's existing identity as a technical YouTuber and developer.

The homepage should provide a **simple overview**. Individual project pages should contain the detailed technical and recruitment-oriented material.

---

# 1. Homepage structure

Keep the existing homepage hierarchy:

```text
Hero / Intro
↓
Latest Videos
↓
Selected Projects
↓
Latest Articles
↓
Footer
```

**Projects must remain below Videos and above Articles.**

Do not move Projects above Latest Videos.

---

# 2. Homepage "Selected Projects" section

Add a new section titled:

> **Selected Projects**

Optional supporting line:

> Native applications, systems software, graphics tools, and Rust/C++ libraries.

The homepage cards must remain **simple and visually lightweight**.

### Each card contains only

* Project screenshot
* Project name
* Status
* Short summary
* Technology tags
* Link to the project detail page

Do **not** include long explanations, architecture, "why I built it", implementation details, or case-study content on the homepage.

The homepage answers:

> **What has Nikola built?**

The detail page answers:

> **Why and how did Nikola build it?**

### Example

```text
┌────────────────────────────────────────┐
│                                        │
│          [Project screenshot]           │
│                                        │
│  Machina                    Active      │
│  Native Linux system information      │
│                                        │
│  C++23 · Linux · ImGui · OpenGL       │
│                                        │
│  View project →                        │
└────────────────────────────────────────┘
```

Cards should link to `/projects/<slug>`.

The card itself may be clickable, but normal accessible links must still be used.

---

# 3. Featured projects

Show these six projects on the homepage, in this order:

### 1. Machina

**Status:** Active

**Summary:**

> Native Linux system information and process viewer.

**Tags:**

`C++23` `Linux` `ImGui` `OpenGL` `CMake`

Repository:

`https://github.com/nikelaz/machina`

---

### 2. CTL Dash

**Status:** Active

**Summary:**

> Native COSMIC desktop application for managing systemd services.

**Tags:**

`Rust` `Linux` `COSMIC` `systemd`

Repository:

`https://github.com/nikelaz/ctldash`

---

### 3. Budget Warden

**Status:** Active

**Summary:**

> Cross-platform native budgeting application built around a shared Rust core.

**Tags:**

`Rust` `FFI` `CRDT` `Native`

Repository:

`https://github.com/nikelaz/budget-warden-next`

---

### 4. CSS Structs

**Status:** Released

**Summary:**

> Rust library for parsing, manipulating, and serializing CSS.

**Tags:**

`Rust` `nom` `Parser`

Repository:

`https://github.com/nikelaz/css-structs`

---

### 5. ESVG

**Status:** Experimental

**Summary:**

> Experimental Rust tool for optimizing SVG representations.

**Tags:**

`Rust` `SVG` `Graphics`

Repository:

`https://github.com/nikelaz/esvg-rs`

Do not describe this as production-ready.

---

### 6. Retrieval Kit

**Status:** Active

**Summary:**

> Rust library for local document ingestion, vector search, and retrieval.

**Tags:**

`Rust` `ONNX Runtime` `LanceDB`

Repository:

`https://github.com/nikelaz/retrieval-kit`

---

# 4. Do not feature Ask yet

Do not include `ask` in the initial Selected Projects section.

Its current state is too early/non-functional for the main portfolio.

It can be added later once there is a usable implementation.

---

# 5. Project data model

Make the entire system **data-driven**.

Adding a new project should require adding project content and assets, not creating new UI components.

Use a model equivalent to:

```text
slug
name
status
shortDescription
categories[]
technologies[]
repositoryUrl
homepageUrl?
heroImage
screenshots[]
featured
relatedArticles[]
relatedVideos[]
```

### Status enum

```text
Active
Released
Experimental
Archived
```

### Categories

```text
Native
Linux
Systems
Rust
C++
Graphics
Libraries
Developer Tools
Distributed Systems
AI Infrastructure
```

---

# 6. Project index

Create:

```text
/projects
```

This should show the complete collection of projects using the same reusable project card component as the homepage.

The page may eventually support filtering by category:

```text
All
Native
Linux
Rust
C++
Graphics
Systems
Libraries
```

Keep filtering simple and unobtrusive. Do not build a complex dashboard.

---

# 7. Individual project pages

Create:

```text
/projects/machina
/projects/ctldash
/projects/budget-warden
/projects/css-structs
/projects/esvg
/projects/retrieval-kit
```

These are the important pages for detailed recruitment value.

---

# 8. Project detail page structure

Each detail page should have the following structure:

```text
Project name
Status

Short description

Technology tags

Hero screenshot

[GitHub]
[Website / Download / Demo where applicable]

Why I Built It

What I Wanted to Learn

Technical Overview

Architecture

Interesting Engineering Decisions

Implementation Details

Challenges / Trade-offs

What I Learned

Screenshots / Gallery

Related Articles

Related Videos
```

Not every section needs to exist for every project.

For a small library such as CSS Structs, for example, "Architecture" may be unnecessary while parser design and API decisions are more useful.

The content should be written specifically around what the project demonstrates technically.

---

# 9. Project stories

Use the following initial "why" content as the starting point for the detail pages.

## Machina

> I built Machina while learning Linux system programming and wanted to turn that learning into a real desktop application. Instead of hiding behind high-level system APIs, Machina reads information from Linux interfaces such as `/proc` and `uname` and turns process, CPU and memory data into a native desktop application.

## CTL Dash

> I wanted to build something that interacts with the Linux desktop rather than simply running on Linux. CTL Dash is a native COSMIC application for inspecting and controlling systemd services, giving me a practical way to learn Rust desktop development and Linux service management.

## Budget Warden

> Budget Warden started as a personal finance application, but became an experiment in building software around local ownership of data. I moved the core domain into Rust and built native clients around it, which gave me practical problems to solve across FFI boundaries, persistence, synchronization and platform-specific application architectures.

## CSS Structs

> I wanted to understand parser construction by building a real library rather than only studying parsing theory. CSS Structs models CSS as structured Rust types and provides parsing, manipulation and serialization capabilities.

## ESVG

> I became interested in SVG optimization as a small graphics and tooling problem: how can multiple transformations compete to produce a smaller representation without changing what the user actually sees? ESVG explores that idea through a pipeline of competing transformations.

Clearly mark this project as **Experimental**.

## Retrieval Kit

> I wanted to understand what a local retrieval system looks like when the pieces are treated as a reusable library rather than an application-specific pipeline.

---

# 10. Screenshots

Use actual project screenshots.

### Homepage

One screenshot per project.

### Detail page

Support:

* hero screenshot
* 2–4 additional screenshots
* architecture diagrams where useful

Use consistent image proportions and high-resolution assets.

Screenshots should be a major visual element rather than a small thumbnail.

Provide meaningful `alt` text.

Lazy-load non-hero images.

---

# 11. GitHub integration

Every project must have an obvious GitHub link.

Use wording such as:

> **View on GitHub ↗**

Do not depend on tiny GitHub icons as the only access point.

Where a project has a download page, website, documentation, or demo, expose that on the detail page as an additional CTA.

---

# 12. Relationship with articles and videos

Projects should be able to reference existing content.

Use relationships such as:

```text
Project
  ↓
Related Articles
  ↓
Related Videos
```

For example:

```text
Budget Warden
    ↓
CRDT article
    ↓
YouTube video
    ↓
GitHub
```

This creates a coherent technical portfolio rather than independent pieces of content.

---

# 13. Visual design

Reuse the existing site's:

* typography
* colors
* spacing
* responsive layout
* navigation
* visual language

Do not create a separate portfolio theme.

The project cards should be:

* minimal
* technical
* editorial
* screenshot-driven
* easy to scan

Avoid:

* excessive gradients
* large decorative illustrations
* skill bars
* fake metrics
* excessive animation
* generic SaaS-style cards

Project content should feel like **serious software work**, not marketing copy.

---

# 14. Recruitment positioning

The project section should make the technical direction obvious without explicitly marketing it as "recruitment material."

A visitor should quickly see:

```text
Machina
→ C++ / Linux / native desktop

CTL Dash
→ Rust / Linux / systemd / native desktop

Budget Warden
→ Rust / FFI / architecture / CRDT

CSS Structs
→ Rust / parsing / library design

ESVG
→ Rust / graphics / tooling

Retrieval Kit
→ Rust / storage / local AI infrastructure
```

Together these establish a much stronger native/systems profile than a conventional web-development portfolio.

---

# 15. Accessibility

Implement:

* semantic heading hierarchy
* keyboard-accessible controls
* visible focus states
* meaningful image alt text
* accessible status indicators
* responsive layouts
* regular `<a>` links for navigation

Do not make navigation dependent on JavaScript-only click handlers.

---

# 16. SEO

For `/projects`:

```text
Projects | Nikola Lazarov
```

For individual pages, use project-specific titles, e.g.:

```text
Machina — Native Linux System Information App | Nikola Lazarov
```

Add:

* meta descriptions
* Open Graph metadata
* canonical URLs where appropriate

Descriptions should contain the project name, purpose and relevant technologies.

---

# 17. Content architecture

Use a structure that makes adding future projects straightforward.

For example:

```text
projects/
    machina
    ctldash
    budget-warden
    css-structs
    esvg
    retrieval-kit
```

The exact directory structure should follow the site's existing framework conventions.

The important requirement is:

> **Content changes should not require UI code changes.**

A future graphics renderer, Linux application, Rust library, Vulkan project, or Unix CLI should be easy to add.

---

# 18. Implementation phases

## Phase 1 — Homepage + project index

Implement:

* project data model
* reusable project card
* Selected Projects homepage section
* `/projects`
* six projects
* screenshots
* status labels
* technology tags
* GitHub links
* responsive behavior

Homepage ordering:

```text
Videos
Projects
Articles
```

---

## Phase 2 — Detail pages

Implement:

* `/projects/<slug>`
* project-specific long-form content
* screenshots/gallery
* technical sections
* GitHub/external links
* related articles
* related videos

---

## Phase 3 — Final polish

Implement:

* responsive refinement
* accessibility pass
* SEO
* Open Graph metadata
* image optimization
* keyboard/focus testing
* visual consistency pass
* mobile testing

---

# 19. Final desired user experience

The homepage should allow someone to scan the Projects section in seconds:

```text
Machina
Native Linux system information
C++23 · Linux · ImGui · OpenGL

CTL Dash
COSMIC systemd service manager
Rust · Linux · COSMIC · systemd

Budget Warden
Cross-platform native budgeting application
Rust · FFI · CRDT
```

Then a recruiter or engineer interested in a particular project clicks through and gets the full technical story.

The distinction is deliberate:

**Homepage = portfolio overview.**

**Project page = technical case study.**

**GitHub = implementation evidence.**

That is the structure I would implement.

