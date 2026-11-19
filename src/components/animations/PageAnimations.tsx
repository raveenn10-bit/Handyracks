"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

type Job = { prep?: () => void; play: (delay: number) => void };

/**
 * Site-wide scroll animations applied to every page's <main> content.
 * Opt out on any element (and its subtree) with data-no-anim.
 *
 *  - Section headings (h2): line-by-line masked text reveal (SplitText)
 *  - Card titles (h3): word reveal
 *  - Eyebrow labels: static
 *  - Accent rules: draw in from the left
 *  - Card grids (and mobile auto-scroll product rows): staggered rise-in
 *  - Card icons: pop in
 *  - Content photos: clip-path wipe reveal + gentle parallax (desktop)
 *
 * Performance & robustness:
 *  - Nothing is split, measured or hidden up front. One IntersectionObserver prepares and plays each
 *    effect only as its element approaches the viewport, so page load does almost no extra work.
 *  - Anything already on screen when the page loads is left exactly as rendered (no flicker, no hiding).
 *  - If JavaScript or GSAP fails, all content remains visible because hidden states are only applied
 *    by script, just before an element scrolls into view.
 */
export function PageAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (!main) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const skip = (el: Element) => !!el.closest("[data-no-anim]");
    const firstSection = main.querySelector("section");
    const inScope = (el: Element) => !skip(el) && !(firstSection && firstSection.contains(el));
    const all = <T extends Element>(sel: string) => Array.from(main.querySelectorAll<T>(sel)).filter(inScope);

    const splits: SplitText[] = [];
    const ctx = gsap.context(() => {}, main);
    const jobs = new Map<Element, Job>();
    const seen = new WeakSet<Element>();
    let io: IntersectionObserver | null = null;
    let idleId = 0;
    let cancelled = false;

    // Inner-page hero banner: plays immediately on load (it is the first thing visitors see)
    ctx.add(() => {
      const pageHero = main.querySelector<HTMLElement>("[data-page-hero]");
      if (!pageHero) return;
      const h1 = pageHero.querySelector<HTMLElement>("h1");
      const lead = pageHero.querySelector<HTMLElement>("p");
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(pageHero.querySelectorAll("nav > span"), { opacity: 0, x: -12, duration: 0.6, stagger: 0.06 });
      if (lead) {
        tl.to(
          lead,
          {
            duration: 1.1,
            scrambleText: { text: lead.textContent?.trim() ?? "", chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", speed: 0.6, revealDelay: 0.25 },
          },
          "<0.1",
        );
      }
      if (h1) {
        const split = SplitText.create(h1, { type: "words,chars", mask: "words" });
        splits.push(split);
        tl.from(split.chars, { yPercent: 115, opacity: 0, rotate: 8, duration: 0.9, stagger: 0.02 }, "<0.1");
      }
      tl.from(pageHero.querySelectorAll("h1 ~ p"), { opacity: 0, y: 20, duration: 0.8 }, "<0.3");
      const glow = pageHero.querySelector(".page-hero-glow");
      if (glow) {
        tl.from(glow, { opacity: 0, scale: 0.6, duration: 1.6, ease: "power2.out" }, 0);
        gsap.to(glow, { xPercent: -15, yPercent: 10, duration: 6, ease: "sine.inOut", repeat: -1, yoyo: true });
      }
    });

    const register = () => {
      if (cancelled) return;

      // 1. Section headings — masked line reveal
      all<HTMLElement>("h2").forEach((h) =>
        jobs.set(h, {
          play: () => {
            const split = SplitText.create(h, { type: "lines", mask: "lines" });
            splits.push(split);
            gsap.from(split.lines, { yPercent: 100, duration: 0.7, stagger: 0.08, ease: "power3.out" });
          },
        }),
      );

      // 2. Card titles — word reveal
      all<HTMLElement>("h3").forEach((h) =>
        jobs.set(h, {
          play: (delay) => {
            gsap.from(h, { opacity: 0, y: 8, duration: 0.5, delay, ease: "power2.out" });
          },
        }),
      );

      // 3. Eyebrow labels: left static (a scramble effect felt gimmicky for this brand).

      // 4. Accent rules
      all<HTMLElement>('span[class*="h-[2px]"]').forEach((el) =>
        jobs.set(el, {
          prep: () => gsap.set(el, { scaleX: 0, transformOrigin: "left center" }),
          play: () => gsap.to(el, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }),
        }),
      );

      // 5. Card grids — staggered rise-in
      // Mobile auto-scroll rows are left alone below 640px: their off-screen cards slide in sideways.
      const rowsAreGrids = window.matchMedia("(min-width: 640px)").matches;
      all<HTMLElement>(rowsAreGrids ? ".grid > *, [data-anim-grid] > *" : ".grid > *")
        .filter((el) => (el.parentElement?.children.length ?? 0) >= 3)
        .forEach((el) =>
          jobs.set(el, {
            prep: () => gsap.set(el, { opacity: 0, y: 20 }),
            play: (delay) => gsap.to(el, { opacity: 1, y: 0, duration: 0.6, delay, ease: "power2.out", clearProps: "transform" }),
          }),
        );

      // 5b. Trade chips — quick pop-in cascade
      all<HTMLElement>(".trade-chips > li").forEach((el) =>
        jobs.set(el, {
          prep: () => gsap.set(el, { opacity: 0, y: 14, scale: 0.96 }),
          play: (delay) =>
            gsap.to(el, { opacity: 1, y: 0, scale: 1, duration: 0.5, delay: delay * 0.5, ease: "back.out(1.6)", clearProps: "transform" }),
        }),
      );

      // 6. Card icons — pop in
      all<HTMLElement>('[class*="rounded-xl"][class*="bg-[#F6F4EF]"]').forEach((el) =>
        jobs.set(el, {
          prep: () => gsap.set(el, { opacity: 0 }),
          play: (delay) => gsap.to(el, { opacity: 1, duration: 0.5, delay }),
        }),
      );

      // 7. Content photos — wipe reveal, plus scroll parallax on larger screens only
      const desktop = window.matchMedia("(min-width: 768px)").matches;
      all<HTMLImageElement>("section img").forEach((img) => {
        const box = img.parentElement;
        if (!box || img.classList.contains("object-contain")) return;
        if (!/(relative|absolute)/.test(box.className)) return;
        jobs.set(box, {
          prep: () => gsap.set(box, { clipPath: "inset(12% 8% 12% 8% round 12px)", opacity: 0.4 }),
          play: () => gsap.to(box, { clipPath: "inset(0% 0% 0% 0% round 12px)", opacity: 1, duration: 1.2, ease: "expo.out" }),
        });
        if (desktop) {
          ctx.add(() =>
            gsap.fromTo(
              img,
              { scale: 1.18, yPercent: -5 },
              { scale: 1.18, yPercent: 5, ease: "none", scrollTrigger: { trigger: box, start: "top bottom", end: "bottom top", scrub: true } },
            ),
          );
        }
      });

      io = new IntersectionObserver(
        (entries) => {
          let stagger = 0;
          for (const entry of entries) {
            const el = entry.target;
            const job = jobs.get(el);
            if (!job) continue;
            if (!seen.has(el)) {
              seen.add(el);
              if (entry.isIntersecting) {
                // Already visible when the page loaded: leave it exactly as rendered.
                jobs.delete(el);
                io?.unobserve(el);
                continue;
              }
              ctx.add(() => job.prep?.());
              continue;
            }
            if (entry.isIntersecting) {
              jobs.delete(el);
              io?.unobserve(el);
              const delay = Math.min(stagger, 6) * 0.08;
              stagger += 1;
              ctx.add(() => job.play(delay));
            }
          }
        },
        // Fire a little before an element scrolls into view so it is ready before it is seen
        { rootMargin: "0px 0px 8% 0px" },
      );
      jobs.forEach((_, el) => io?.observe(el));
      ScrollTrigger.refresh();
    };

    // Register after the browser is idle so hydration and first paint are never delayed
    const ric = window.requestIdleCallback as ((cb: () => void, o?: { timeout: number }) => number) | undefined;
    if (ric) idleId = ric(register, { timeout: 1200 });
    else idleId = window.setTimeout(register, 250);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      cancelled = true;
      if (ric && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
      else window.clearTimeout(idleId);
      window.removeEventListener("load", refresh);
      io?.disconnect();
      splits.forEach((s) => s.revert());
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
