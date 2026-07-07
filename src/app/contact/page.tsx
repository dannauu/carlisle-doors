import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Call for a Free Garage Door Estimate in Kansas City",
  description: `Call ${site.phone} for garage door repair, installation, and free estimates across the Kansas City metro. 24/7 emergency line. A real technician answers.`,
  alternates: { canonical: "/contact" },
};

const reasons = [
  {
    title: "Repairs & emergencies",
    body: "Describe the symptom and we'll diagnose most problems right on the phone, then give you an honest arrival window.",
  },
  {
    title: "Free estimates",
    body: "New door or opener? We'll talk through options, styles, and budget on the call, then schedule a free in-home measure.",
  },
  {
    title: "Commercial service",
    body: "Down dock door or planned maintenance program: call and ask for commercial dispatch. Program customers get priority.",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-5 pt-36 pb-16 md:px-10 md:pt-48">
        <Reveal>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="display max-w-4xl text-6xl md:text-8xl">
            One number.
            <br />
            <span className="text-amber">A real person.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            No forms, no ticket queues, no callback robots. Call or text and you
            get someone who knows garage doors and can actually put a truck on
            the road.
          </p>
        </Reveal>
      </section>

      {/* Giant phone CTA */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-16 text-center md:px-10 md:py-24">
          <Reveal>
            <p className="eyebrow mb-6">Call or text, day or night</p>
            <a
              href={site.phoneHref}
              className="display inline-block text-6xl leading-none text-amber transition-colors hover:text-amber-hot md:text-[7.5rem]"
            >
              {site.phone}
            </a>
            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-muted">
              24/7 emergency line for doors stuck open, off track, or trapping a
              vehicle. After-hours rates quoted on the phone before we roll a
              truck.
            </p>
            <a
              href={site.phoneHref}
              className="display mt-8 inline-block bg-amber px-10 py-5 text-2xl text-ink transition-colors hover:bg-amber-hot"
            >
              Tap to Call
            </a>
          </Reveal>
        </div>
      </section>

      {/* What to call about + practical info */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal stagger="[data-card]" className="grid gap-px border border-line bg-line md:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.title} data-card className="bg-ink p-8">
              <span className="font-mono text-xs text-amber">0{i + 1}</span>
              <h2 className="display mt-3 mb-3 text-2xl">{r.title}</h2>
              <p className="text-sm leading-relaxed text-muted">{r.body}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal className="border border-line bg-ink-2 p-7">
            <p className="eyebrow mb-4">Hours</p>
            <ul className="flex flex-col gap-3">
              {site.hours.map((h) => (
                <li key={h.days} className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="text-muted">{h.days}</span>
                  <span className="text-ivory/85">{h.hours}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="border border-line bg-ink-2 p-7">
            <p className="eyebrow mb-4">Based in</p>
            <address className="text-sm not-italic leading-relaxed text-ivory/85">
              {site.name}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Serving the Kansas City metro and a 100-mile radius, both sides of
              the state line.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
