import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | Family-Owned Garage Door Company in Oak Grove, MO",
  description: `Carlisle Overhead Doors and Services is a family-owned garage door company in Oak Grove, MO serving the Kansas City metro. Meet the crew behind the trucks. Call ${site.phone}.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Flat-rate, quoted first.",
    body: "You hear the number before we pick up a tool. No trip-fee ambushes, no 'while we're here' padding. If the smart move is replacement instead of repair, we say so and show the math.",
  },
  {
    title: "Parts that outlast the invoice.",
    body: "High-cycle springs as standard, nylon rollers, sealed bearings. We install what we'd put on our own garages, because callbacks cost us more than good parts do.",
  },
  {
    title: "Local enough to matter.",
    body: "The tech in your driveway lives in this metro. We shop the same hardware stores, sit in the same traffic on I-70, and run into our customers at Price Chopper. Reputation is the whole business.",
  },
  {
    title: "Clean exit, every time.",
    body: "Old door hauled away, hardware swept up, opener programmed, and a walkthrough of what we did. The job isn't done when the door works. It's done when the garage is cleaner than we found it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-5 pt-36 pb-20 md:px-10 md:pt-48">
        <Reveal>
          <p className="eyebrow mb-4">About Carlisle</p>
          <h1 className="display max-w-5xl text-6xl md:text-8xl">
            A door company
            <br />
            <span className="text-amber">that acts like a neighbor.</span>
          </h1>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-ivory/85">
              Carlisle Overhead Doors and Services is a family-owned overhead
              door company based in Oak Grove, Missouri, twenty minutes east of
              downtown Kansas City on I-70. We repair, install, and maintain
              garage doors for homeowners and businesses across the entire KC
              metro and a hundred-mile ring around it, from St. Joseph down to
              Fort Scott, Topeka over to Sedalia.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted">
              We built this company on a simple observation: the garage door
              business is full of national franchises that spend more on search
              ads than technician training. Our bet is the opposite: stocked
              trucks, experienced techs, honest flat-rate quotes, and a phone
              that gets answered at 2 AM by someone who can actually fix your
              door. That bet has kept our schedule full since day one, almost
              entirely on referrals and repeat customers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <Reveal>
            <p className="eyebrow mb-4">How we operate</p>
            <h2 className="display text-5xl md:text-6xl">
              Four rules. <span className="text-amber">No fine print.</span>
            </h2>
          </Reveal>
          <Reveal stagger="[data-value]" className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} data-value className="bg-ink-2 p-8 md:p-10">
                <span className="font-mono text-xs text-amber">0{i + 1}</span>
                <h3 className="display mt-3 mb-4 text-2xl md:text-3xl">{v.title}</h3>
                <p className="text-base leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Put us to work</p>
            <h2 className="display text-4xl md:text-6xl">
              Your door. <span className="text-amber">Our problem.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-4">
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
              Get a Free Estimate
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
