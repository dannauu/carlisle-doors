import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { locationsByRing, ringLabels, locations, type Ring } from "@/data/locations";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Areas | Garage Door Repair Across the Kansas City Metro",
  description: `Carlisle Overhead Doors serves ${locations.length}+ cities within 100 miles of Oak Grove, MO: the full Kansas City metro on both sides of the state line. Find your city.`,
  alternates: { canonical: "/service-areas" },
};

const ringDescriptions: Record<Ring, string> = {
  "core-mo":
    "Our home turf. Same-day service is the norm here: most repair calls get a truck within hours.",
  "core-ks":
    "Across the state line is still local for us. Same-day repair service throughout Johnson and Wyandotte counties.",
  extended:
    "The towns around the metro's edge, including our home base of Oak Grove. Same-day service on most calls.",
  outer:
    "We run scheduled routes through the outer ring weekly, and emergency calls get dispatched same-day, distance be damned.",
};

const rings: Ring[] = ["core-mo", "core-ks", "extended", "outer"];

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-5 pt-36 pb-16 md:px-10 md:pt-48">
        <Reveal>
          <p className="eyebrow mb-4">Service Areas</p>
          <h1 className="display max-w-4xl text-6xl md:text-8xl">
            100 miles.
            <br />
            <span className="text-amber">Two states.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Based in Oak Grove, Missouri, we cover the entire Kansas City metro
            and a 100-mile radius around it: {locations.length} cities and the
            farm roads between them. If you can see the KC skyline from a water
            tower, we probably service your door.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto flex max-w-[1400px] flex-col gap-16 px-5 pb-28 md:px-10">
        {rings.map((ring, i) => {
          const cities = locationsByRing(ring);
          return (
            <Reveal key={ring}>
              <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-[320px_1fr]">
                <div>
                  <span className="font-mono text-xs text-muted">RING 0{i + 1}</span>
                  <h2 className="display mt-2 text-3xl">{ringLabels[ring]}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {ringDescriptions[ring]}
                  </p>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/service-areas/${c.slug}`}
                      className="border border-line px-4 py-2 text-sm text-ivory/75 transition-colors hover:border-amber hover:text-amber"
                    >
                      {c.name}, {c.state}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}

        <Reveal className="border border-amber/40 bg-ink-2 p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="eyebrow mb-3">Don&apos;t see your town?</p>
              <p className="display text-3xl md:text-4xl">
                If you&apos;re close to the circle, call anyway. We&apos;ll make it work.
              </p>
            </div>
            <a
              href={site.phoneHref}
              className="display shrink-0 bg-amber px-8 py-4 text-xl text-ink transition-colors hover:bg-amber-hot"
            >
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
