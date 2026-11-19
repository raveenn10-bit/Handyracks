"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Maximize2,
  X,
  Check,
  Ruler,
  ShieldAlert,
} from "lucide-react";
import { Product } from "@/data/products";
import { buildWhatsAppUrl } from "@/data/business";
import TechnicalDiagram from "./TechnicalDiagram";
import ProductCard from "./ProductCard";
import WhatsAppIcon from "./WhatsAppIcon";
import AutoScrollRow from "./AutoScrollRow";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [selectedFinishIdx, setSelectedFinishIdx] = useState(0);
  const [activeImageUrl, setActiveImageUrl] = useState(
    product.finishes[0]?.image || product.images[0]?.url
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Customization controls
  const [selectedSize, setSelectedSize] = useState(product.standardSizes[0] || "Custom");
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const [customDepth, setCustomDepth] = useState("");
  const [unit, setUnit] = useState("cm");
  const [quantity, setQuantity] = useState("1");
  const [notes, setNotes] = useState("");

  const activeFinish = product.finishes[selectedFinishIdx] || product.finishes[0];

  const handleFinishSelect = (idx: number) => {
    setSelectedFinishIdx(idx);
    const fin = product.finishes[idx];
    if (fin?.image) {
      setActiveImageUrl(fin.image);
    }
  };

  const whatsappMessage = [
    "Hello Handy Racks!",
    "",
    `I would like to request a quote for: ${product.name}`,
    `Standard Size Option: ${selectedSize}`,
    `Custom Width: ${customWidth || "Not specified"}`,
    `Custom Height: ${customHeight || "Not specified"}`,
    `Custom Depth: ${customDepth || "Not specified"}`,
    `Measurement Unit: ${unit}`,
    `Selected Finish: ${activeFinish?.name || "Standard"}`,
    `Quantity: ${quantity}`,
    `Additional Requirements: ${notes || "None"}`,
    "",
    "Please share quotation and availability details.",
  ].join("\n");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav
        className="flex items-center gap-2 text-xs text-charcoal/60 mb-8 overflow-x-auto whitespace-nowrap"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-charcoal">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
        <Link href="/products" className="hover:text-charcoal">
          Products
        </Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
        <Link
          href={`/products/${product.categorySlug}`}
          className="hover:text-charcoal"
        >
          {product.categoryName}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
        <span className="text-charcoal font-medium">{product.name}</span>
      </nav>

      {/* Main Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-square w-full bg-white border border-soft-beige overflow-hidden group">
            <Image
              src={activeImageUrl}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            />
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label="Open full-screen image preview"
              className="absolute bottom-4 right-4 bg-white/90 border border-soft-beige p-2.5 text-charcoal hover:bg-charcoal hover:text-white transition-colors shadow-sm"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImageUrl(img.url)}
                  className={`relative aspect-square bg-white border overflow-hidden transition-all ${
                    activeImageUrl === img.url
                      ? "border-charcoal ring-1 ring-charcoal"
                      : "border-soft-beige hover:border-natural-oak"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="120px"
                    className="object-contain p-1.5"
                  />
                </button>
              ))}
            </div>
          )}

          {/* SVG Technical Diagram */}
          {product.diagramType && <TechnicalDiagram type={product.diagramType} />}
        </div>

        {/* Right: Specifications & Customization Configurator */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-natural-oak mb-2">
              {product.badge} &bull; {product.categoryName}
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base text-charcoal/75 mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Confirmed Material / Specs */}
          {(product.material || product.dimensionsNote || product.loadNote) && (
            <div className="bg-white border border-soft-beige p-4 space-y-2 text-xs sm:text-sm">
              {product.material && (
                <p>
                  <span className="font-semibold text-charcoal">Material: </span>
                  <span className="text-charcoal/80">{product.material}</span>
                </p>
              )}
              {product.dimensionsNote && (
                <p className="flex items-start gap-2 text-charcoal/80">
                  <Ruler className="w-4 h-4 text-natural-oak shrink-0 mt-0.5" />
                  <span>{product.dimensionsNote}</span>
                </p>
              )}
              {product.loadNote && (
                <p className="flex items-start gap-2 text-charcoal/75">
                  <ShieldAlert className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                  <span>{product.loadNote}</span>
                </p>
              )}
            </div>
          )}

          {/* Finish Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                Finish / Frame
              </span>
              <span className="text-xs text-natural-oak font-medium">
                {activeFinish?.name}
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {product.finishes.map((fin, idx) => (
                <button
                  key={fin.id}
                  type="button"
                  onClick={() => handleFinishSelect(idx)}
                  className={`inline-flex items-center gap-2 px-3 py-2 border text-xs font-medium transition-colors ${
                    selectedFinishIdx === idx
                      ? "border-charcoal bg-white text-charcoal"
                      : "border-soft-beige bg-warm-ivory/60 text-charcoal/75 hover:border-natural-oak"
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{
                      backgroundColor: fin.hex,
                      border: fin.borderHex
                        ? `1px solid ${fin.borderHex}`
                        : "1px solid transparent",
                    }}
                  />
                  {fin.name}
                  {selectedFinishIdx === idx && <Check className="w-3 h-3" />}
                </button>
              ))}
            </div>
          </div>

          {/* Standard Sizes */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
              Standard Reference Sizes
            </label>
            <div className="flex flex-wrap gap-2">
              {product.standardSizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`px-3 py-2 text-xs border transition-colors ${
                    selectedSize === sz
                      ? "bg-charcoal text-white border-charcoal"
                      : "bg-white text-charcoal border-soft-beige hover:border-natural-oak"
                  }`}
                >
                  {sz}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setSelectedSize("Custom Dimensions")}
                className={`px-3 py-2 text-xs border transition-colors ${
                  selectedSize === "Custom Dimensions"
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-white text-charcoal border-soft-beige hover:border-natural-oak"
                }`}
              >
                Custom Dimensions
              </button>
            </div>
          </div>

          {/* Custom Dimensions Input */}
          <div className="bg-white border border-soft-beige p-4 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-charcoal">
              Custom Dimensions &amp; Quantity
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <input
                type="text"
                placeholder="Width"
                value={customWidth}
                onChange={(e) => setCustomWidth(e.target.value)}
                className="border border-soft-beige bg-warm-ivory/40 px-3 py-2 text-xs focus:outline-none focus:border-natural-oak"
              />
              <input
                type="text"
                placeholder="Height"
                value={customHeight}
                onChange={(e) => setCustomHeight(e.target.value)}
                className="border border-soft-beige bg-warm-ivory/40 px-3 py-2 text-xs focus:outline-none focus:border-natural-oak"
              />
              <input
                type="text"
                placeholder="Depth"
                value={customDepth}
                onChange={(e) => setCustomDepth(e.target.value)}
                className="border border-soft-beige bg-warm-ivory/40 px-3 py-2 text-xs focus:outline-none focus:border-natural-oak"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                aria-label="Measurement unit"
                className="border border-soft-beige bg-warm-ivory/40 px-2.5 py-2 text-xs focus:outline-none focus:border-natural-oak"
              >
                <option value="cm">cm</option>
                <option value="inches">inches</option>
                <option value="feet">feet</option>
                <option value="mm">mm</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div>
                <label className="block text-[11px] text-charcoal/65 mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full border border-soft-beige bg-warm-ivory/40 px-3 py-2 text-xs focus:outline-none focus:border-natural-oak"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] text-charcoal/65 mb-1">
                  Additional Requirements
                </label>
                <input
                  type="text"
                  placeholder="Optional colour, bracket, or delivery note"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-soft-beige bg-warm-ivory/40 px-3 py-2 text-xs focus:outline-none focus:border-natural-oak"
                />
              </div>
            </div>
          </div>

          {/* Primary WhatsApp Quote CTA */}
          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-charcoal text-warm-ivory hover:bg-natural-oak transition-colors py-4 px-6 text-sm font-semibold tracking-wide"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Request a Quote on WhatsApp
          </a>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20 pt-12 border-t border-soft-beige">
          <h2 className="font-heading font-bold text-2xl text-charcoal mb-6">
            Related Designs
          </h2>
          <AutoScrollRow bleedClassName="-mx-4 px-4 scroll-px-4">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </AutoScrollRow>
        </section>
      )}

      {/* Full-Screen Image Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Product image zoom"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image preview"
            className="absolute top-5 right-5 text-white hover:text-natural-oak p-2"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="relative w-full max-w-3xl aspect-square bg-white">
            <Image
              src={activeImageUrl}
              alt={product.name}
              fill
              className="object-contain p-6"
            />
          </div>
        </div>
      )}
    </div>
  );
}
