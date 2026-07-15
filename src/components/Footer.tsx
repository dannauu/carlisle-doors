import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

// Ordered by monthly search volume (Semrush, July 2026) so internal
// linking favors the highest-value city pages. Oak Grove stays as home base.
const footerCities = [
  "kansas-city-mo",
  "overland-park-ks",
  "lenexa-ks",
  "olathe-ks",
  "lees-summit-mo",
  "topeka-ks",
  "lawrence-ks",
  "shawnee-ks",
  "liberty-mo",
  "independence-mo",
  "blue-springs-mo",
  "oak-grove-mo",
];

export default function Footer() {
  const cities = footerCities
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <footer className="border-t border-line bg-ink-2">
      {/* CTA band */}
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="eyebrow mb-4">Ready when you are</p>
            <p className="display text-5xl md:text-7xl">
              Let&apos;s fix
              <br />
              <span className="text-amber">your door.</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="display inline-block bg-amber px-8 py-4 text-center text-2xl text-ink transition-colors hover:bg-amber-hot"
            >
              {site.phone}
            </a>
            <span className="text-center font-mono text-xs tracking-widest text-muted">
              SAME-DAY SERVICE · KC METRO
            </span>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-4 md:px-10">
        <div>
          <p className="display mb-4 text-xl">{site.shortName}</p>
          <p className="mb-4 text-sm leading-relaxed text-muted">
            Family-owned garage door company based in Oak Grove, MO, serving
            homes and businesses across the Kansas City metro and a 100-mile
            radius on both sides of the state line.
          </p>
          <address className="text-sm not-italic leading-relaxed text-muted">
            {site.address.city}, {site.address.state} {site.address.zip}
            <br />
            <a href={site.phoneHref} className="text-amber hover:text-amber-hot">
              {site.phone}
            </a>
          </address>
        </div>

        <div>
          <p className="eyebrow mb-5">Services</p>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-ivory/70 transition-colors hover:text-amber"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Service Areas</p>
          <ul className="flex flex-col gap-2.5">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}`}
                  className="text-sm text-ivory/70 transition-colors hover:text-amber"
                >
                  {c.name}, {c.state}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/service-areas"
                className="text-sm font-semibold text-amber hover:text-amber-hot"
              >
                All {locations.length} cities →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Hours</p>
          <ul className="flex flex-col gap-2.5">
            {site.hours.map((h) => (
              <li key={h.days} className="text-sm text-ivory/70">
                <span className="block font-mono text-[0.65rem] tracking-widest text-muted">
                  {h.days.toUpperCase()}
                </span>
                {h.hours}
              </li>
            ))}
          </ul>
          <p className="mt-5 border border-line px-4 py-3 text-xs leading-relaxed text-muted">
            <Link
              href="/services/emergency-garage-door-repair"
              className="text-amber hover:text-amber-hot"
            >
              24/7 emergency garage door repair
            </Link>{" "}
            for doors stuck open, off track, or blocking a vehicle.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted md:flex-row md:px-10">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="font-mono tracking-widest">
            OAK GROVE, MO → KANSAS CITY METRO
          </span>
        </div>
      </div>
    </footer>
  );
}
