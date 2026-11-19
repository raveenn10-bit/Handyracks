"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CATEGORIES, FINISH_SWATCHES, FinishId, PRODUCTS } from "@/data/products";
import ProductCard from "./ProductCard";

interface CatalogueViewProps {
  initialCategory?: string;
}

export default function CatalogueView({ initialCategory = "all" }: CatalogueViewProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSegment, setSelectedSegment] = useState<"all" | "residential" | "commercial">(
    "all"
  );
  const [selectedFinish, setSelectedFinish] = useState<FinishId | "all">("all");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q !== null) setSearchQuery(q);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== "all" && p.categorySlug !== selectedCategory) return false;
      if (selectedSegment !== "all" && p.segment !== selectedSegment) return false;
      if (
        selectedFinish !== "all" &&
        !p.finishes.some((f) => f.id === selectedFinish)
      ) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const hay = `${p.name} ${p.categoryName} ${p.shortDescription} ${p.description}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedSegment, selectedFinish]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(initialCategory);
    setSelectedSegment("all");
    setSelectedFinish("all");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== initialCategory ||
    selectedSegment !== "all" ||
    selectedFinish !== "all";

  return (
    <div className="space-y-6">
      {/* Search & Controls Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white border border-soft-beige rounded-2xl p-4 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-charcoal/45 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search floating shelves, gold racks, book trees..."
            aria-label="Search products"
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F6F4EF] border border-soft-beige rounded-full focus:outline-none focus:border-natural-oak focus:bg-white transition-colors"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex border border-soft-beige bg-[#F6F4EF] p-1 rounded-full">
            {(["all", "residential", "commercial"] as const).map((seg) => (
              <button
                key={seg}
                type="button"
                onClick={() => setSelectedSegment(seg)}
                className={`px-3.5 py-1.5 text-xs font-semibold capitalize rounded-full transition-colors ${
                  selectedSegment === seg
                    ? "bg-charcoal text-white"
                    : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {seg}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-charcoal rounded-full text-charcoal"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>

          <span className="text-xs font-semibold text-charcoal/60">
            {filteredProducts.length} {filteredProducts.length === 1 ? "design" : "designs"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Sidebar */}
        <aside
          className={`${
            mobileFilterOpen ? "block" : "hidden"
          } lg:block bg-white border border-soft-beige rounded-2xl p-5 space-y-6 shadow-sm`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-charcoal">
              Filter Catalogue
            </h2>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-natural-oak hover:underline inline-flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear
              </button>
            )}
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-charcoal/50 mb-2.5">
              Category
            </p>
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-charcoal text-white font-semibold"
                    : "text-charcoal/75 hover:bg-[#F6F4EF]"
                }`}
              >
                All Categories
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                    selectedCategory === cat.slug
                      ? "bg-charcoal text-white font-semibold"
                      : "text-charcoal/75 hover:bg-[#F6F4EF]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-soft-beige">
            <p className="text-[11px] font-bold uppercase tracking-wider text-charcoal/50 mb-2.5">
              Finish / Frame
            </p>
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setSelectedFinish("all")}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  selectedFinish === "all"
                    ? "bg-charcoal text-white font-semibold"
                    : "text-charcoal/75 hover:bg-[#F6F4EF]"
                }`}
              >
                All Finishes
              </button>
              {Object.values(FINISH_SWATCHES).map((fin) => (
                <button
                  key={fin.id}
                  type="button"
                  onClick={() => setSelectedFinish(fin.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-2.5 transition-colors ${
                    selectedFinish === fin.id
                      ? "bg-charcoal text-white font-semibold"
                      : "text-charcoal/75 hover:bg-[#F6F4EF]"
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full shrink-0"
                    style={{
                      backgroundColor: fin.hex,
                      border: fin.borderHex
                        ? `1px solid ${fin.borderHex}`
                        : "1px solid rgba(255,255,255,0.4)",
                    }}
                  />
                  <span>{fin.name}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="bg-white border border-soft-beige rounded-2xl p-12 text-center space-y-3">
              <p className="font-heading font-bold text-lg text-charcoal">
                No matching designs found
              </p>
              <p className="text-sm text-charcoal/65 max-w-md mx-auto">
                We manufacture custom furniture to order. Reset filters or send your requirements directly via WhatsApp.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center justify-center bg-charcoal text-white text-xs font-semibold px-5 py-2.5 rounded-full"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
