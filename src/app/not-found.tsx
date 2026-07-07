import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-screen max-w-[1400px] flex-col items-start justify-center px-5 md:px-10">
      <p className="eyebrow mb-4">404: Door not found</p>
      <h1 className="display max-w-3xl text-6xl md:text-8xl">
        This one&apos;s <span className="text-amber">stuck shut.</span>
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist, but unlike a rusted
        torsion spring, this is an easy fix.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/"
          className="display bg-amber px-7 py-4 text-xl text-ink transition-colors hover:bg-amber-hot"
        >
          Back Home
        </Link>
        <a
          href={site.phoneHref}
          className="display border border-ivory/30 px-7 py-4 text-xl transition-colors hover:border-amber hover:text-amber"
        >
          {site.phone}
        </a>
      </div>
    </section>
  );
}
