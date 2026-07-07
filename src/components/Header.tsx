"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { site } from "@/data/site";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    if (open) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        overlay,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "power4.inOut" }
      );
      gsap.fromTo(
        overlay.querySelectorAll("[data-menu-item]"),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, delay: 0.25, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-100 transition-all duration-500 ${
          scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <Link href="/" className="group relative z-102 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-amber">
              <DoorMark />
            </span>
            <span className="display text-lg leading-none tracking-wide">
              Carlisle
              <span className="block text-[0.6rem] font-body font-medium normal-case tracking-[0.22em] text-muted">
                Overhead Doors &amp; Services
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`link-sweep text-sm font-medium tracking-wide ${
                  pathname.startsWith(item.href) ? "text-amber" : "text-ivory/80 hover:text-ivory"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="group relative overflow-hidden border border-amber px-5 py-2.5 text-sm font-semibold tracking-wide text-amber transition-colors duration-300 hover:text-ink"
            >
              <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 bg-amber transition-transform duration-300 ease-out group-hover:scale-y-100" />
              <span className="relative">{site.phone}</span>
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-102 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`h-px w-7 bg-ivory transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-7 bg-ivory transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-101 flex flex-col justify-between bg-ink-2 px-6 pt-28 pb-10 lg:hidden ${
          open ? "" : "pointer-events-none invisible"
        }`}
        style={{ clipPath: open ? undefined : "inset(0 0 100% 0)" }}
      >
        <nav className="flex flex-col gap-2">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              data-menu-item
              className="display border-b border-line py-4 text-4xl text-ivory transition-colors hover:text-amber"
            >
              <span className="mr-4 font-mono text-xs text-amber">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div data-menu-item className="flex flex-col gap-3">
          <span className="eyebrow">24/7 Emergency Service</span>
          <a href={site.phoneHref} className="display text-3xl text-amber">
            {site.phone}
          </a>
          <span className="text-sm text-muted">
            Oak Grove, MO, serving the Kansas City metro
          </span>
        </div>
      </div>
    </>
  );
}

function DoorMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="1" y="1" width="16" height="16" stroke="var(--color-amber)" strokeWidth="1.5" />
      <line x1="1" y1="6" x2="17" y2="6" stroke="var(--color-amber)" strokeWidth="1.2" />
      <line x1="1" y1="10" x2="17" y2="10" stroke="var(--color-amber)" strokeWidth="1.2" />
      <line x1="1" y1="14" x2="17" y2="14" stroke="var(--color-amber)" strokeWidth="1.2" />
    </svg>
  );
}
