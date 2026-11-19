import type { Metadata } from "next";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import CommercialEnquiryForm from "@/components/CommercialEnquiryForm";

export const metadata: Metadata = {
  title: "Commercial Display Solutions",
  description:
    "Luxury brushed gold and matte black metal retail display racks, garment rails, centre tables, and showroom shelving systems manufactured in Sri Lanka.",
};

export default function CommercialSolutionsPage() {
  const commercialProducts = PRODUCTS.filter((p) => p.segment === "commercial");

  return (
    <div>
      {/* Architectural Hero */}
      <section className="relative bg-charcoal text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/hero/hero-commercial-gold-showroom.webp"
            alt="Commercial Retail Display Showroom"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-accent font-semibold">
            Commercial Retail &amp; Showrooms
          </span>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl leading-tight">
            Commercial Display Racks &amp; Retail Systems
          </h1>
          <p className="text-sm sm:text-base text-warm-ivory/85 leading-relaxed">
            Custom-built brushed gold and matte black metal display racks, garment hanging rails, centre tables, and modular wall shelving for boutiques, cosmetics stores, flower shops, and ceramic showrooms across Sri Lanka.
          </p>
        </div>
      </section>

      {/* Commercial Collection Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
            Commercial Showcase Collection
          </h2>
          <p className="text-sm text-charcoal/70 mt-1">
            All units are fabricated to your store dimensions, frame colour, and shelf material.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {commercialProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Commercial Enquiry Form */}
      <section className="bg-white border-t border-soft-beige py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center space-y-2">
            <span className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold">
              B2B &amp; Retail Fit-Outs
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
              Request a Commercial Quotation
            </h2>
            <p className="text-sm text-charcoal/70">
              Specify your store type, rack style, and required quantity to receive a tailored quotation via WhatsApp.
            </p>
          </div>
          <CommercialEnquiryForm />
        </div>
      </section>
    </div>
  );
}
