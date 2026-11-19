"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Product } from "@/data/products";
import { buildWhatsAppUrl } from "@/data/business";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedFinishIdx, setSelectedFinishIdx] = useState(0);
  const activeFinish = product.finishes[selectedFinishIdx] || product.finishes[0];
  const displayImage = activeFinish?.image || product.images[0]?.url;

  const quoteUrl = buildWhatsAppUrl(
    `Hello Handy Racks! I would like to request a quote for ${product.name} (${
      activeFinish?.name || "Standard"
    } finish).`
  );

  return (
    <article className="group bg-white border border-soft-beige flex flex-col transition-all duration-300 hover:border-natural-oak/70 hover:shadow-md">
      {/* Studio Image Container */}
      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-square w-full bg-white overflow-hidden block border-b border-soft-beige/60"
      >
        <Image
          src={displayImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 ${
            product.segment === "commercial"
              ? "bg-charcoal text-gold-accent"
              : "bg-warm-ivory text-charcoal border border-soft-beige"
          }`}
        >
          {product.badge}
        </span>
      </Link>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-natural-oak font-medium mb-1">
            {product.categoryName}
          </p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-heading font-semibold text-base sm:text-lg text-charcoal group-hover:text-natural-oak transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs sm:text-sm text-charcoal/70 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-soft-beige/60">
          {/* Interactive Finish Swatches */}
          {product.finishes.length > 0 && (
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                {product.finishes.map((finish, idx) => (
                  <button
                    key={finish.id}
                    type="button"
                    onClick={() => setSelectedFinishIdx(idx)}
                    title={finish.name}
                    aria-label={`Select ${finish.name} finish`}
                    className={`w-4 h-4 rounded-full transition-transform ${
                      selectedFinishIdx === idx
                        ? "ring-2 ring-offset-2 ring-charcoal scale-110"
                        : "hover:scale-110"
                    }`}
                    style={{
                      backgroundColor: finish.hex,
                      border: finish.borderHex
                        ? `1px solid ${finish.borderHex}`
                        : "1px solid transparent",
                    }}
                  />
                ))}
              </div>
              <span className="text-[11px] text-charcoal/60 truncate">
                {activeFinish?.name}
              </span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/product/${product.slug}`}
              className="inline-flex items-center justify-center gap-1 text-xs font-medium py-2 px-2.5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors"
            >
              View Product <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 text-xs font-medium py-2 px-2.5 bg-warm-ivory border border-soft-beige text-charcoal hover:border-natural-oak hover:text-natural-oak transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-brand-green" />
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
