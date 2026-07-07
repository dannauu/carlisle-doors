import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { services } from "@/data/services";
import { locations, getLocation, type Location, type Ring } from "@/data/locations";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

const ringResponse: Record<Ring, { time: string; note: string }> = {
  "core-mo": {
    time: "same-day",
    note: "You're in our core service zone: repair calls placed before noon are almost always handled the same day, and emergency dispatch typically arrives within 60–90 minutes.",
  },
  "core-ks": {
    time: "same-day",
    note: "The state line doesn't slow us down. Johnson and Wyandotte county calls are part of our daily routes, with same-day repair on most calls placed before noon.",
  },
  extended: {
    time: "same-day to next-day",
    note: "We run this ring daily from our Oak Grove home base. Most repairs are same-day; emergency calls get priority dispatch around the clock.",
  },
  outer: {
    time: "scheduled + emergency",
    note: "We route the outer ring weekly for installations and scheduled repairs, and true emergencies (door stuck open, vehicle trapped) get same-day dispatch regardless of distance.",
  },
};

function cityFaqs(l: Location) {
  const r = ringResponse[l.ring];
  return [
    {
      q: `Do you offer same-day garage door repair in ${l.name}, ${l.state}?`,
      a: `${r.note} Call ${site.phone} and we'll give you an honest arrival window on the phone.`,
    },
    {
      q: `How much does garage door repair cost in ${l.name}?`,
      a: `The same flat rates we charge everywhere in the KC metro: no distance surcharges inside our service area. Most common repairs run $150–$450, springs typically $200–$400 including parts and labor, quoted upfront before work begins.`,
    },
    {
      q: `Do you install new garage doors in ${l.name}?`,
      a: `Yes. We install steel, insulated, carriage house and modern glass doors from Clopay, Amarr and C.H.I. throughout ${l.name} and the rest of ${l.county ?? "the county"}. In-home estimates are free and old-door haul-away is included.`,
    },
    {
      q: `Is ${l.name} in your emergency service area?`,
      a: `Yes. Our 24/7 emergency service covers our full 100-mile radius, ${l.name} included. A technician, not an answering service, picks up, and after-hours rates are quoted on the phone before we roll a truck.`,
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return {
    title: `Garage Door Repair ${l.name}, ${l.state} | Installation & Springs`,
    description: `Garage door repair, installation, spring & opener service in ${l.name}, ${l.state}. ${
      ringResponse[l.ring].time === "same-day" ? "Same-day service" : "Fast local service"
    } from Carlisle Overhead Doors. Call ${site.phone}.`,
    alternates: { canonical: `/service-areas/${l.slug}` },
    openGraph: {
      title: `Garage Door Repair ${l.name}, ${l.state} | ${site.shortName}`,
      description: `Garage door repair & installation in ${l.name}, ${l.state}. Call ${site.phone}.`,
      url: `${site.url}/service-areas/${l.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();

  const r = ringResponse[l.ring];
  const faqs = cityFaqs(l);
  const nearby = locations.filter((n) => n.ring === l.ring && n.slug !== l.slug).slice(0, 10);

  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: `${l.name}, ${l.state}`, href: `/service-areas/${l.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-36 pb-16 md:px-10 md:pt-48 md:pb-20">
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <Link href="/service-areas" className="hover:text-amber-hot">Service Areas</Link>
              <span className="text-line">/</span>
              {l.county ?? l.state}
            </p>
            <h1 className="display max-w-5xl text-5xl md:text-7xl">
              Garage door repair in
              <br />
              <span className="text-amber">{l.name}, {l.state}.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
              Broken spring, dead opener, door off its track, or time for a new
              door entirely? Carlisle Overhead Doors serves {l.name} from our
              shop in Oak Grove, MO with {r.time} service, upfront flat-rate
              pricing, and trucks stocked to finish most jobs in one visit.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{r.note}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={site.phoneHref}
                className="display bg-amber px-7 py-4 text-xl text-ink transition-colors hover:bg-amber-hot"
              >
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="display border border-ivory/30 px-7 py-4 text-xl transition-colors hover:border-amber hover:text-amber"
              >
                Free Estimate
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* City deep-dive (high-search-volume cities only) */}
      {l.deepDive && (
        <section className="border-b border-line bg-ink-2">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-14 px-5 py-20 md:px-10 md:py-28">
            {l.deepDive.map((sec, i) => (
              <Reveal key={sec.title} className="grid gap-6 md:grid-cols-[80px_1fr]">
                <span className="display text-2xl text-amber">0{i + 1}</span>
                <div>
                  <h2 className="display mb-4 text-3xl md:text-4xl">{sec.title}</h2>
                  <p className="max-w-3xl text-base leading-relaxed text-muted">{sec.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Services available in this city */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">Available in {l.name}</p>
          <h2 className="display text-4xl md:text-6xl">
            Every service. <span className="text-amber">Full stop.</span>
          </h2>
        </Reveal>
        <Reveal stagger="[data-card]" className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              data-card
              href={`/services/${s.slug}`}
              className="card-lift group flex min-h-44 flex-col justify-between border border-transparent bg-ink p-6"
            >
              <span className="text-amber">
                <ServiceIcon icon={s.icon} className="h-7 w-7" />
              </span>
              <span className="display mt-6 block text-xl leading-tight group-hover:text-amber">
                {s.name}
              </span>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* Local FAQs */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <Reveal>
            <p className="eyebrow mb-4">{l.name} homeowners ask</p>
            <h2 className="display text-4xl md:text-5xl">
              Straight answers for <span className="text-amber">{l.name}</span>
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-col border-t border-line">
            {faqs.map((f) => (
              <Reveal key={f.q}>
                <details className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium text-ivory/90 transition-colors hover:text-amber [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="display shrink-0 text-2xl text-amber transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-7 text-base leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
        <Reveal>
          <p className="eyebrow mb-6">Also serving near {l.name}</p>
          <div className="flex flex-wrap gap-2">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/service-areas/${n.slug}`}
                className="border border-line px-4 py-2 text-sm text-ivory/75 transition-colors hover:border-amber hover:text-amber"
              >
                {n.name}, {n.state}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="border border-amber px-4 py-2 text-sm font-semibold text-amber transition-colors hover:bg-amber hover:text-ink"
            >
              All service areas →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
