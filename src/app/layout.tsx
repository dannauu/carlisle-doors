import type { Metadata } from "next";
import { Anton, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Garage Door Repair & Installation Kansas City | ${site.shortName}`,
    template: `%s | ${site.shortName}`,
  },
  description: `${site.name}: garage door repair, installation, springs, openers & commercial overhead doors across the Kansas City metro. Same-day service from Oak Grove, MO. Call ${site.phone}.`,
  keywords: [
    "garage door repair Kansas City",
    "garage door installation Kansas City",
    "garage door spring repair",
    "garage door opener repair",
    "commercial overhead doors Kansas City",
    "emergency garage door repair",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `Garage Door Repair & Installation Kansas City | ${site.shortName}`,
    description: `Same-day garage door repair & installation across the Kansas City metro. Call ${site.phone}.`,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} ${jetbrains.variable}`}>
      <body>
        <LocalBusinessJsonLd />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
