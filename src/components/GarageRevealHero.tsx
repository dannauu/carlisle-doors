"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const SLATS = 6;

const showcase = [
  {
    src: "/gallery/carriage-style-garage-doors-brick-home.jpg",
    alt: "Carriage-style wood-grain garage doors on a brick home",
    label: "Residential",
  },
  {
    src: "/gallery/commercial-steel-building-doors.jpg",
    alt: "Commercial sectional doors on a steel building",
    label: "Commercial",
  },
  {
    src: "/gallery/pole-barn-garage-doors.jpg",
    alt: "New overhead doors on a pole barn",
    label: "Barns & Shops",
  },
];

export default function GarageRevealHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      // Curtain roll-up: every slat travels at the same speed, so the top
      // slat exits first while lower slats are still moving, like a real door.
      const slats = gsap.utils.toArray<HTMLElement>("[data-slat]", wrap);
      const n = slats.length;
      slats.forEach((slat, i) => {
        tl.to(
          slat,
          { yPercent: -(i + 1) * 103, duration: ((i + 1) / n) * 0.8 },
          0.06
        );
      });

      // headline rides up with the door face
      tl.to("[data-hero-head]", { opacity: 0, y: -90, duration: 0.16 }, 0);
      tl.to("[data-hero-hint]", { opacity: 0, duration: 0.08 }, 0);

      // light spills as the curtain clears
      tl.fromTo(
        "[data-hero-glow]",
        { opacity: 0.15 },
        { opacity: 1, duration: 0.5 },
        0.15
      );

      // payoff: type first, then the real-work cards
      tl.fromTo(
        "[data-payoff-line]",
        { opacity: 0, y: 70 },
        { opacity: 1, y: 0, duration: 0.16, stagger: 0.05, ease: "power2.out" },
        0.52
      );
      tl.fromTo(
        "[data-payoff-card]",
        { opacity: 0, y: 90, rotate: (i: number) => (i - 1) * 2.5 },
        { opacity: 1, y: 0, rotate: (i: number) => (i - 1) * 1.25, duration: 0.2, stagger: 0.06, ease: "power2.out" },
        0.62
      );
      tl.fromTo(
        "[data-payoff-cta]",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" },
        0.78
      );

      // intro: headline lines rise on load
      gsap.fromTo(
        "[data-line]",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.12, ease: "power4.out", delay: 0.15 }
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="relative h-[260vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        {/* ---- Behind the door: warm glow + payoff ---- */}
        <div
          data-hero-glow
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(242,163,60,0.14) 0%, rgba(242,163,60,0.05) 40%, transparent 70%)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-5 pt-10 md:gap-10">
          <div className="text-center">
            <p data-payoff-line className={`eyebrow mb-5 ${reduced ? "" : "opacity-0"}`}>
              No stock photos. Our actual installs.
            </p>
            <h2
              data-payoff-line
              className={`display text-5xl md:text-7xl ${reduced ? "" : "opacity-0"}`}
            >
              Sales. Service.
              <br />
              <span className="text-amber">Installation.</span>
            </h2>
          </div>

          {/* real-work cards */}
          <div className="flex w-full max-w-4xl items-center justify-center gap-4 md:gap-6">
            {showcase.map((card, i) => (
              <Link
                key={card.src}
                data-payoff-card
                href="/gallery"
                className={`group relative w-1/3 max-w-56 overflow-hidden border border-line bg-ink-2 transition-colors hover:border-amber ${
                  reduced ? "" : "opacity-0"
                } ${i === 1 ? "md:-mt-6" : "md:mt-4"}`}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={448}
                  height={320}
                  priority={i === 0}
                  className="h-32 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-40 md:h-48"
                />
                <span className="block px-3 py-2.5 font-mono text-[0.6rem] tracking-[0.2em] text-muted uppercase transition-colors group-hover:text-amber">
                  {card.label}
                </span>
              </Link>
            ))}
          </div>

          <div data-payoff-cta className={`flex flex-wrap items-center justify-center gap-4 ${reduced ? "" : "opacity-0"}`}>
            <a
              href={site.phoneHref}
              className="display bg-amber px-7 py-4 text-xl text-ink transition-colors hover:bg-amber-hot"
            >
              {site.phone}
            </a>
            <Link
              href="/gallery"
              className="display border border-ivory/30 px-7 py-4 text-xl text-ivory transition-colors hover:border-amber hover:text-amber"
            >
              See Our Work
            </Link>
          </div>
        </div>

        {/* ---- The door: steel curtain of slats ---- */}
        {!reduced && (
          <div className="absolute inset-0" aria-hidden>
            {Array.from({ length: SLATS }, (_, i) => (
              <div
                key={i}
                data-slat
                className="relative w-full"
                style={{
                  height: `${100 / SLATS}%`,
                  background:
                    "linear-gradient(180deg, #232326 0%, #2a2a2e 38%, #242427 62%, #1c1c1f 100%)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.055), inset 0 -2px 3px rgba(0,0,0,0.55)",
                }}
              >
                {/* twin grooves pressed into each slat */}
                <div
                  className="absolute inset-x-0 top-1/3 h-px"
                  style={{ background: "rgba(0,0,0,0.45)", boxShadow: "0 1px 0 rgba(255,255,255,0.04)" }}
                />
                <div
                  className="absolute inset-x-0 top-2/3 h-px"
                  style={{ background: "rgba(0,0,0,0.45)", boxShadow: "0 1px 0 rgba(255,255,255,0.04)" }}
                />
                {/* faint vertical sheen */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, transparent 12%, transparent 46%, rgba(255,255,255,0.03) 50%, transparent 54%, transparent 88%, rgba(0,0,0,0.35) 100%)",
                  }}
                />
                {/* bottom slat: lift handle + amber light leak under the door */}
                {i === SLATS - 1 && (
                  <>
                    <div
                      className="absolute left-1/2 top-1/2 h-2.5 w-14 -translate-x-1/2 rounded-xs"
                      style={{
                        background: "linear-gradient(180deg, #55575c, #2e3033)",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.25)",
                      }}
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-1"
                      style={{
                        background: "rgba(242,163,60,0.8)",
                        boxShadow: "0 4px 18px 4px rgba(242,163,60,0.45)",
                      }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ---- Headline over the closed door ---- */}
        <div
          data-hero-head
          className="absolute inset-x-0 bottom-0 z-10 px-5 pb-20 md:px-10 md:pb-16"
        >
          <div className="mx-auto w-full max-w-[1400px]">
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span className="inline-block h-px w-10 bg-amber" />
              Oak Grove, MO. Serving the KC Metro
            </p>
            <h1 className="display text-[13vw] leading-[0.9] md:text-[8.5vw]">
              <span className="block overflow-hidden">
                <span data-line className="block">Kansas City&apos;s</span>
              </span>
              <span className="block overflow-hidden">
                <span data-line className="block text-amber">Garage Door</span>
              </span>
              <span className="block overflow-hidden">
                <span data-line className="block">Experts</span>
              </span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={site.phoneHref}
                className="display bg-amber px-7 py-4 text-xl text-ink transition-colors hover:bg-amber-hot"
              >
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="display border border-ivory/30 px-7 py-4 text-xl text-ivory transition-colors hover:border-amber hover:text-amber"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </div>

        {/* ---- Scroll hint ---- */}
        {!reduced && (
          <div
            data-hero-hint
            className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center"
          >
            <span className="eyebrow block animate-pulse">Scroll to open</span>
            <svg className="mx-auto mt-2" width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden>
              <rect x="1" y="1" width="12" height="20" rx="6" stroke="#f2a33c" strokeWidth="1.2" />
              <circle cx="7" cy="7" r="2" fill="#f2a33c">
                <animate attributeName="cy" values="6;13;6" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
