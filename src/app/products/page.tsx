import type { Metadata } from "next";
import { Suspense } from "react";
import CatalogueView from "@/components/CatalogueView";

export const metadata: Metadata = {
  title: "Products & Catalogue",
  description:
    "Browse Handy Racks floating shelves, desk organisers, book trees, shoe cupboards, and commercial display racks in Sri Lanka.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="max-w-2xl mb-8 space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold">
          Product Catalogue
        </p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
          Shelving, Furniture &amp; Display Systems
        </h1>
        <p className="text-sm sm:text-base text-charcoal/75">
          Explore our residential catalogue and commercial retail display collection. All designs can be customized to your dimensions and finish.
        </p>
      </div>
      <Suspense fallback={<div className="py-12 text-sm text-charcoal/60">Loading catalogue...</div>}>
        <CatalogueView />
      </Suspense>
    </div>
  );
}
