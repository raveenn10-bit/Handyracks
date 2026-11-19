import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/data/business";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PageAnimations } from "@/components/animations/PageAnimations";
import { ScrollProgressBar } from "@/components/animations/ScrollProgressBar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Handy Racks | Custom Furniture, Shelving & Commercial Display Racks Sri Lanka",
    template: "%s | Handy Racks Sri Lanka",
  },
  description:
    "Handy Racks manufactures customized floating shelves, residential storage furniture, and gold & black metal commercial display racks in Angoda, Sri Lanka. Request custom dimensions via WhatsApp.",
  keywords: [
    "Handy Racks Sri Lanka",
    "Floating shelves Sri Lanka",
    "Custom shelves Colombo",
    "Commercial display racks Sri Lanka",
    "Gold display racks Sri Lanka",
    "Shop display racks Colombo",
    "Customized furniture Sri Lanka",
    "Desk organisers Sri Lanka",
    "Wall shelves Angoda",
    "Custom retail shelving Sri Lanka",
  ],
  openGraph: {
    title: "Handy Racks | Custom Furniture & Commercial Display Racks Sri Lanka",
    description:
      "Thoughtfully designed shelving, customized furniture, and commercial display solutions made to suit your space in Sri Lanka.",
    type: "website",
    locale: "en_LK",
    siteName: "Handy Racks",
    images: [
      {
        url: "/images/og/handy-racks-og.webp",
        width: 1200,
        height: 630,
        alt: "Handy Racks Custom Shelving & Commercial Display Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.industry,
    telephone: "+94707048888",
    email: BUSINESS_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "72/6, Mahabuthgamuwa",
      addressLocality: "Angoda",
      addressRegion: "Western Province",
      addressCountry: "LK",
    },
    sameAs: [BUSINESS_INFO.facebookUrl],
    hasMap: BUSINESS_INFO.googleMapsUrl,
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-transparent text-charcoal antialiased flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <ScrollProgressBar />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <PageAnimations />
      </body>
    </html>
  );
}
