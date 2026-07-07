import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GalleryGrid from "@/components/GalleryGrid";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Work | Garage Door Installation Photos Kansas City",
  description: `Real installations by Carlisle Overhead Doors: carriage house doors, commercial sectional doors, pole barns and shops across the Kansas City metro. Call ${site.phone} for a free estimate.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-5 pt-36 pb-14 md:px-10 md:pt-48">
        <Reveal>
          <p className="eyebrow mb-4">Our Work</p>
          <h1 className="display max-w-4xl text-6xl md:text-8xl">
            Doors we&apos;ve
            <br />
            <span className="text-amber">hung lately.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            No stock photos, no staged showrooms. Every door below was measured,
            hauled, and installed by our crew somewhere in the Kansas City metro:
            brick colonials, pole barns, warehouses, and everything between.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <Reveal>
          <GalleryGrid />
        </Reveal>

        <Reveal className="mt-16 border border-amber/40 bg-ink-2 p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="eyebrow mb-3">Want yours here?</p>
              <p className="display text-3xl md:text-4xl">
                Free estimates. We bring door samples to your driveway.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <a
                href={site.phoneHref}
                className="display bg-amber px-8 py-4 text-xl text-ink transition-colors hover:bg-amber-hot"
              >
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="display border border-ivory/30 px-8 py-4 text-xl transition-colors hover:border-amber hover:text-amber"
              >
                Get an Estimate
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
