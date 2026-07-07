import { site } from "@/data/site";
import { locations } from "@/data/locations";
import type { Service } from "@/data/services";
import type { Location } from "@/data/locations";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description:
      "Garage door repair, installation, spring replacement, opener service and commercial overhead doors serving the Kansas City metro from Oak Grove, MO.",
    url: site.url,
    telephone: site.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.name}, ${l.state}`,
    })),
    openingHours: site.openingHoursSchema,
    sameAs: [site.social.facebook, site.social.google],
    foundingDate: String(site.foundingYear),
    knowsAbout: [
      "Garage door repair",
      "Garage door installation",
      "Garage door spring replacement",
      "Garage door opener repair",
      "Commercial overhead doors",
    ],
  };
  return <Script data={data} />;
}

export function ServiceJsonLd({ service, location }: { service: Service; location?: Location }) {
  const areaName = location ? `${location.name}, ${location.state}` : "Kansas City Metro";
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.seoTitle,
    description: service.metaDescription,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: areaName },
    url: `${site.url}/services/${service.slug}`,
  };
  return <Script data={data} />;
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <Script data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
  return <Script data={data} />;
}
