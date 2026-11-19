"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Milliseconds between automatic moves on mobile. */
  interval?: number;
  /** Grid classes used from the `sm` breakpoint upward. */
  gridClassName?: string;
  /** Mobile edge-to-edge bleed; match the parent's horizontal padding. */
  bleedClassName?: string;
};

/**
 * Mobile (< 640px): swipeable horizontal row that auto-advances one card at a
 * time, left to right, looping back to the start. Pauses while the visitor
 * touches/scrolls it and resumes a few seconds later.
 * Tablet/desktop: a normal grid (no auto-scroll).
 */
export default function AutoScrollRow({
  children,
  interval = 2800,
  gridClassName = "sm:grid-cols-2 lg:grid-cols-4",
  bleedClassName = "-mx-6 px-6 scroll-px-6",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    const mobile = window.matchMedia("(max-width: 639px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let timer: ReturnType<typeof setInterval> | null = null;
    let resumeTimer: ReturnType<typeof setTimeout> | null = null;
    let visible = false;

    const step = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
      const cardWidth = first.offsetWidth + gap;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };

    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };

    const start = () => {
      stop();
      if (!mobile.matches || reduced.matches || !visible) return;
      timer = setInterval(step, interval);
    };

    const pause = () => {
      stop();
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(start, interval * 2);
    };

    // Only run while the row is on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("pointerdown", pause);
    el.addEventListener("wheel", pause, { passive: true });
    mobile.addEventListener("change", start);
    reduced.addEventListener("change", start);

    return () => {
      stop();
      if (resumeTimer) clearTimeout(resumeTimer);
      io.disconnect();
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("wheel", pause);
      mobile.removeEventListener("change", start);
      reduced.removeEventListener("change", start);
    };
  }, [interval]);

  return (
    <div
      ref={ref}
      className={`no-scrollbar ${bleedClassName} flex gap-4 overflow-x-auto snap-x snap-mandatory sm:mx-0 sm:px-0 sm:grid sm:gap-5 sm:overflow-visible sm:snap-none ${gridClassName}`}
    >
      {React.Children.map(children, (child) => (
        <div className="snap-start shrink-0 w-[78%] sm:w-auto">{child}</div>
      ))}
    </div>
  );
}
