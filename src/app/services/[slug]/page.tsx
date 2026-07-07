import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { services, getService } from "@/data/services";
import { locations } from "@/data/locations";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const featuredCities = locations
    .filter((l) => l.ring === "core-mo" || l.ring === "core-ks")
    .slice(0, 16);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <ServiceJsonLd service={service} />
      <FaqJsonLd faqs={service.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-36 pb-16 md:px-10 md:pt-48 md:pb-20">
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <Link href="/services" className="hover:text-amber-hot">Services</Link>
              <span className="text-line">/</span>
              {service.name}
            </p>
            <div className="flex items-start justify-between gap-8">
              <h1 className="display max-w-4xl text-5xl md:text-7xl">{service.headline}</h1>
              <span className="hidden shrink-0 text-amber lg:block">
                <ServiceIcon icon={service.icon} className="h-20 w-20" />
              </span>
            </div>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
              {service.intro}
            </p>
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

      {/* Content sections */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col gap-16">
            {service.sections.map((sec, i) => (
              <Reveal key={sec.title} className="grid gap-6 md:grid-cols-[80px_1fr]">
                <span className="display text-2xl text-amber">0{i + 1}</span>
                <div>
                  <h2 className="display mb-4 text-3xl md:text-4xl">{sec.title}</h2>
                  <p className="max-w-2xl text-base leading-relaxed text-muted">{sec.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sticky sidebar */}
          <aside>
            <div className="sticky top-28 flex flex-col gap-6">
              <Reveal className="border border-line bg-ink-2 p-7">
                <p className="eyebrow mb-5">What&apos;s included</p>
                <ul className="flex flex-col gap-3">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ivory/80">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 bg-amber" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal className="border border-amber/40 bg-ink-2 p-7">
                <p className="eyebrow mb-3">Same-day service</p>
                <p className="mb-5 text-sm leading-relaxed text-muted">
                  Call before noon and we&apos;re usually there the same day,
                  anywhere in the core KC metro.
                </p>
                <a
                  href={site.phoneHref}
                  className="display block bg-amber px-6 py-3.5 text-center text-lg text-ink transition-colors hover:bg-amber-hot"
                >
                  {site.phone}
                </a>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <Reveal>
            <p className="eyebrow mb-4">Questions we hear a lot</p>
            <h2 className="display text-4xl md:text-6xl">
              {service.name} <span className="text-amber">FAQs</span>
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-col border-t border-line">
            {service.faqs.map((f) => (
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

      {/* Cities + related */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-4">Where we offer this</p>
          <h2 className="display text-4xl md:text-5xl">
            {service.name} across the <span className="text-amber">KC metro</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {featuredCities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="border border-line px-4 py-2 text-sm text-ivory/75 transition-colors hover:border-amber hover:text-amber"
              >
                {c.name}, {c.state}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="border border-amber px-4 py-2 text-sm font-semibold text-amber transition-colors hover:bg-amber hover:text-ink"
            >
              All {locations.length} cities →
            </Link>
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <p className="eyebrow mb-6">Related services</p>
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-lift group border border-transparent bg-ink p-7"
              >
                <span className="mb-4 block text-amber">
                  <ServiceIcon icon={s.icon} />
                </span>
                <span className="display block text-xl group-hover:text-amber">{s.name}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
