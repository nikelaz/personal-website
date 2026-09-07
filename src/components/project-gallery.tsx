"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";

type ProjectGalleryProps = Readonly<{
  name: string;
  screenshots: ProjectScreenshot[];
}>;

const ArrowIcon = (props: Readonly<{ flip?: boolean }>) => {
  return (
    <svg
      width="0.875em"
      height="0.875em"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(props.flip && "rotate-180")}
      aria-hidden="true"
    >
      <path d="M12.7272 6.6558C13.09 6.29308 13.09 5.70401 12.7272 5.34129L8.08438 0.698434C7.72165 0.335711 7.13259 0.335711 6.76987 0.698434C6.40714 1.06116 6.40714 1.65022 6.76987 2.01294L9.83125 5.07142H0.928571C0.414955 5.07142 0 5.48638 0 6C0 6.51361 0.414955 6.92857 0.928571 6.92857H9.82835L6.77277 9.98705C6.41004 10.3498 6.41004 10.9388 6.77277 11.3016C7.13549 11.6643 7.72455 11.6643 8.08728 11.3016L12.7301 6.6587L12.7272 6.6558Z" fill="currentColor" />
    </svg>
  );
};

const ProjectGallery = (props: ProjectGalleryProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = props.screenshots.length;

  const scrollTo = (index: number) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const clamped = Math.max(0, Math.min(index, total - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) {
      return;
    }
    setActive(Math.round(track.scrollLeft / track.clientWidth));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollTo(active - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollTo(active + 1);
    }
  };

  if (total === 1) {
    const screenshot = props.screenshots[0];
    return (
      <figure className="m-0">
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          width={1520}
          height={855}
          priority
          className="rounded-lg w-full h-auto"
        />
      </figure>
    );
  }

  return (
    <figure className="m-0">
      <div className="relative">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label={`${props.name} screenshots`}
          className="flex aspect-video overflow-x-auto snap-x snap-mandatory rounded-lg bg-[#1a1a1a] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {props.screenshots.map((screenshot, index) => (
            <div
              key={screenshot.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}`}
              className="relative aspect-video w-full shrink-0 snap-center"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                sizes="(min-width: 768px) 42rem, 100vw"
                className="object-contain"
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous screenshot"
          className="absolute top-1/2 -translate-y-1/2 left-3 rounded-full p-2 bg-black/60 text-white hover:bg-black/80 transition-colors"
        >
          <ArrowIcon flip />
        </button>
        <button
          type="button"
          onClick={() => scrollTo(active + 1)}
          disabled={active === total - 1}
          aria-label="Next screenshot"
          className="absolute top-1/2 -translate-y-1/2 right-3 rounded-full p-2 bg-black/60 text-white hover:bg-black/80 transition-colors"
        >
          <ArrowIcon />
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 pt-3" role="tablist" aria-label={`${props.name} screenshot selector`}>
        {props.screenshots.map((screenshot, index) => (
          <button
            key={screenshot.src}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-label={`Go to screenshot ${index + 1} of ${total}`}
            onClick={() => scrollTo(index)}
            className={clsx(
              "w-2 h-2 rounded-full transition-colors",
              active === index ? "bg-neutral-900 dark:bg-white" : "bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500"
            )}
          />
        ))}
      </div>
    </figure>
  );
};

export default ProjectGallery;
