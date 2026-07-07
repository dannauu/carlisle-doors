import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Garage Door Services Kansas City | Repair, Installation & More",
  description: `Full-service garage door company in Kansas City: repair, installation, springs, openers, off-track doors, maintenance & commercial overhead doors. Call ${site.phone}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-5 pt-36 pb-16 md:px-10 md:pt-48">
        <Reveal>
          <p className="eyebrow mb-4">Services</p>
          <h1 className="display max-w-4xl text-6xl md:text-8xl">
            If it rolls up,
            <br />
            <span className="text-amber">we work on it.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Residential and commercial overhead door service across the Kansas
            City metro: same-day repairs, honest quotes, and installations
            that protect the manufacturer&apos;s warranty.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-28 md:px-10">
        <div className="flex flex-col border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid items-center gap-4 border-b border-line py-8 transition-colors duration-300 md:grid-cols-[80px_56px_1fr_auto] md:gap-8 hover:bg-ink-2"
              >
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <span className="hidden text-amber md:block">
                  <ServiceIcon icon={s.icon} className="h-10 w-10" />
                </span>
                <span>
                  <span className="display block text-3xl transition-colors duration-300 group-hover:text-amber md:text-5xl">
                    {s.name}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted">
                    {s.intro.split(". ").slice(0, 1).join(". ")}.
                  </span>
                </span>
                <span className="display hidden text-2xl text-line transition-all duration-300 group-hover:translate-x-2 group-hover:text-amber md:block">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border border-amber/40 bg-ink-2 p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="eyebrow mb-3">Not sure what&apos;s wrong?</p>
              <p className="display text-3xl md:text-4xl">
                Describe the symptom. We&apos;ll diagnose it on the phone, free.
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
