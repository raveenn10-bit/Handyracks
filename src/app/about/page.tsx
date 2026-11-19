import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Handy Racks in Angoda, Sri Lanka — crafting custom residential shelving and commercial retail display systems.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold">
            About {BUSINESS_INFO.name}
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal leading-tight">
            Customized Shelving &amp; Display Solutions Crafted in Sri Lanka.
          </h1>
          <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed">
            Based at {BUSINESS_INFO.address}, Handy Racks specializes in custom-built residential shelving, space-saving home furniture, and architectural commercial display systems.
          </p>
          <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed">
            Whether you are furnishing a compact apartment with floating shelves and a foldable study desk, or outfitting a boutique showroom with brushed gold and black steel display racks, every piece is built to match your exact space and finish preferences.
          </p>
          <div className="pt-2">
            <Link
              href="/custom-design"
              className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-natural-oak transition-colors px-6 py-3 text-sm font-semibold"
            >
              Request a Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 relative aspect-[4/3] border border-soft-beige overflow-hidden">
          <Image
            src="/images/about/workshop-craftsmanship.webp"
            alt="Handy Racks Craftsmanship & Fabrication"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Residential Shelving & Storage",
            desc: "Floating shelves in Melamine Coated MDF, picture ledges, cubicles, honeycomb shelves, book trees, desk organisers, and shoe cupboards.",
          },
          {
            title: "Commercial Display Systems",
            desc: "Brushed gold and matte black steel wall racks, centre display tables, garment rails, and gondola shelving for retail stores.",
          },
          {
            title: "Direct WhatsApp Consultation",
            desc: `Backed by ${BUSINESS_INFO.facebookFollowers} Facebook followers and ${BUSINESS_INFO.facebookRecommendations}, with fast direct WhatsApp quotations.`,
          },
        ].map((card) => (
          <div key={card.title} className="bg-white border border-soft-beige p-6 space-y-2">
            <CheckCircle2 className="w-5 h-5 text-brand-green" />
            <h2 className="font-heading font-semibold text-lg text-charcoal">
              {card.title}
            </h2>
            <p className="text-sm text-charcoal/75 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
