import Link from "next/link";
import type { Metadata } from "next";
import GarageRevealHero from "@/components/GarageRevealHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/data/services";
import { locations, locationsByRing, ringLabels, type Ring } from "@/data/locations";
import { site } from "@/data/site";

export const metadata: Metadata = {
  description: `Looking for a garage door company near you? Carlisle Overhead Doors is a local, family-run garage door company serving Kansas City, MO & KS: repair, installation, springs, openers & commercial overhead doors. Same-day service, free estimates. Call ${site.phone}.`,
  alternates: { canonical: "/" },
};

const marqueeItems = [
  "Garage Door Repair",
  "Same-Day Service",
  "Spring Replacement",
  "Garage Door Installation",
  "Opener Repair",
  "24/7 Emergency",
  "Commercial Overhead Doors",
  "Free Estimates",
];

const stats = [
  { value: "24/7", label: "Emergency response, nights & weekends" },
  { value: "100mi", label: "Service radius from Oak Grove, MO" },
  { value: "90%+", label: "Repairs completed in a single visit" },
  { value: `${locations.length}`, label: "Cities served across MO & KS" },
];

const testimonials = [
  {
    quote:
      "Responded promptly and diagnosed what was going on with my garage door. Very professional and cleaned up after. If I need garage door work in the future he will be the first call!",
    name: "Taylor Frazier",
    source: "Facebook Review",
  },
  {
    quote:
      "Tyler was prompt and took the time to make sure everything came together. His price was very reasonable and he cleaned up well. Will be sure to look him up if I ever need garage doors again.",
    name: "Nic Hamilton",
    source: "Facebook Review",
  },
  {
    quote:
      "Carlisle Overhead door did an amazing job on this project. Highly recommended.",
    name: "Project Comment",
    source: "Facebook",
  },
];

const rings: Ring[] = ["core-mo", "core-ks", "extended", "outer"];

export default function Home() {
  return (
    <>
      <GarageRevealHero />

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line bg-ink-2 py-4">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {marqueeItems.map((item) => (
                <span key={item} className="flex items-center">
                  <span className="display px-6 text-xl text-ivory/80">{item}</span>
                  <span className="text-amber">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="display max-w-3xl text-5xl md:text-7xl">
            Every door.
            <br />
            <span className="text-amber">Every problem.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            From a snapped torsion spring in Lee&apos;s Summit to a full dock-door
            install in the West Bottoms, one local crew handles it all,
            with trucks stocked to finish the job in a single visit.
          </p>
        </Reveal>

        <Reveal stagger="[data-card]" className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              data-card
              href={`/services/${s.slug}`}
              className="card-lift group flex min-h-64 flex-col justify-between border border-transparent bg-ink p-7"
            >
              <div className="flex items-start justify-between">
                <span className="text-amber transition-transform duration-500 group-hover:scale-110">
                  <ServiceIcon icon={s.icon} />
                </span>
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </div>
              <div>
                <h3 className="display mb-2 text-2xl group-hover:text-amber">{s.name}</h3>
                <p className="text-sm leading-relaxed text-muted line-clamp-2">
                  {s.metaDescription.split(".")[0]}.
                </p>
                <span className="mt-4 inline-block font-mono text-[0.65rem] tracking-[0.2em] text-amber opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  VIEW SERVICE →
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* Why Carlisle */}
      <section className="relative overflow-hidden border-y border-line bg-ink-2">
        <div className="ghost-text display pointer-events-none absolute -top-6 left-0 whitespace-nowrap text-[11rem] leading-none opacity-60 select-none md:text-[16rem]" aria-hidden>
          CARLISLE
        </div>
        <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 py-24 md:grid-cols-2 md:px-10 md:py-36">
          <Reveal>
            <p className="eyebrow mb-4">Why Carlisle</p>
            <h2 className="display text-5xl md:text-6xl">
              Local. Honest.
              <br />
              <span className="text-amber">Actually shows up.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              When you search for a garage door company near you, you get a
              national call center reselling your repair to the lowest bidder.
              We&apos;re the opposite: Carlisle Overhead Doors is a family-run,
              local garage door company out of Oak Grove, Missouri. The person
              who answers the phone knows the person who shows up at your house,
              and both of them know garage doors.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              Upfront flat-rate pricing. High-cycle parts as standard. A clean
              driveway when we leave. That&apos;s the whole pitch.
            </p>
            <Link
              href="/about"
              className="link-sweep mt-8 inline-block font-mono text-xs tracking-[0.25em] text-amber"
            >
              MORE ABOUT US →
            </Link>
          </Reveal>
          <Reveal stagger="[data-stat]" className="grid grid-cols-2 content-center gap-px border border-line bg-line">
            {stats.map((s) => (
              <div key={s.label} data-stat className="bg-ink-2 p-8">
                <span className="display block text-5xl text-amber md:text-6xl">{s.value}</span>
                <span className="mt-3 block text-sm leading-snug text-muted">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <p className="eyebrow mb-4">Where we work</p>
          <h2 className="display max-w-3xl text-5xl md:text-7xl">
            Both sides of
            <br />
            the <span className="text-amber">state line.</span>
          </h2>
        </Reveal>
        <div className="mt-14 flex flex-col gap-10">
          {rings.map((ring) => {
            const cities = locationsByRing(ring);
            return (
              <Reveal key={ring}>
                <p className="mb-4 font-mono text-xs tracking-[0.25em] text-muted">
                  {ringLabels[ring].toUpperCase()}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/service-areas/${c.slug}`}
                      className="border border-line px-4 py-2 text-sm text-ivory/75 transition-colors duration-300 hover:border-amber hover:text-amber"
                    >
                      {c.name}, {c.state}
                    </Link>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
          <Reveal>
            <p className="eyebrow mb-4">Word gets around</p>
            <h2 className="display text-5xl md:text-7xl">
              KC talks. <span className="text-amber">We listen.</span>
            </h2>
          </Reveal>
          <Reveal stagger="[data-quote]" className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} data-quote className="flex flex-col justify-between bg-ink-2 p-8">
                <blockquote className="text-base leading-relaxed text-ivory/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <span className="display block text-lg text-amber">{t.name}</span>
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted">
                    {t.source.toUpperCase()}
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 px-5 py-24 md:flex-row md:items-center md:justify-between md:px-10">
          <Reveal>
            <p className="eyebrow mb-4">Door stuck right now?</p>
            <h2 className="display text-5xl md:text-7xl">
              We answer at <span className="text-amber">2 AM.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base text-muted">
              Stuck open, off the tracks, car trapped inside? Emergency calls
              ring straight to a technician, not an answering service.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="shrink-0">
            <a
              href={site.phoneHref}
              className="display inline-block border-2 border-amber bg-amber px-10 py-6 text-3xl text-ink transition-colors hover:bg-transparent hover:text-amber"
            >
              {site.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
