"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/gallery";

type Filter = GalleryCategory | "all";

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = gallery.filter((g) => filter === "all" || g.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((cur) => {
        if (cur === null) return cur;
        return (cur + dir + items.length) % items.length;
      });
    },
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c.key}
            onClick={() => {
              setFilter(c.key);
              setLightbox(null);
            }}
            className={`border px-5 py-2.5 font-mono text-xs tracking-[0.18em] uppercase transition-colors ${
              filter === c.key
                ? "border-amber bg-amber text-ink"
                : "border-line text-ivory/70 hover:border-amber hover:text-amber"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setLightbox(i)}
            className={`group relative block overflow-hidden border border-line text-left transition-colors hover:border-amber ${
              item.wide ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.wide ? 1200 : 700}
              height={item.wide ? 700 : 700}
              className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-80"
            />
            <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="pointer-events-none absolute bottom-4 left-4 right-4 translate-y-2 font-mono text-[0.65rem] tracking-[0.15em] text-ivory uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {item.alt}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox: portaled to <body> so ancestor transforms can't trap the fixed overlay */}
      {lightbox !== null && items[lightbox] && createPortal(
        <div
          className="fixed inset-0 z-105 flex items-center justify-center bg-ink/95 p-4 md:p-12"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={close}
            className="display absolute top-5 right-6 z-10 text-4xl text-ivory transition-colors hover:text-amber"
            aria-label="Close"
          >
            ×
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="display absolute left-3 z-10 hidden text-5xl text-ivory/60 transition-colors hover:text-amber md:block"
            aria-label="Previous image"
          >
            ←
          </button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              className="max-h-[80vh] w-auto max-w-full border border-line object-contain"
            />
            <figcaption className="mt-4 text-center font-mono text-xs tracking-[0.15em] text-muted uppercase">
              {items[lightbox].alt}
            </figcaption>
          </figure>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="display absolute right-3 z-10 hidden text-5xl text-ivory/60 transition-colors hover:text-amber md:block"
            aria-label="Next image"
          >
            →
          </button>
        </div>,
        document.body
      )}
    </>
  );
}
