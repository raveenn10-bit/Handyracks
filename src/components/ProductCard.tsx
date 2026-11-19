"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight } from "lucide-react";
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
    <article className="group bg-white border border-soft-beige/90 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-natural-oak/60">
      {/* Pure White Studio Image Area */}
      <Link
        href={`/product/${product.slug}`}
        className="relative aspect-square w-full bg-white overflow-hidden block border-b border-soft-beige/60"
      >
        <Image
          src={displayImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            product.segment === "commercial"
              ? "bg-charcoal text-gold-accent"
              : "bg-[#F6F4EF] text-charcoal border border-soft-beige"
          }`}
        >
          {product.badge}
        </span>
      </Link>

      {/* Clean Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 truncate">
              {product.categoryName}
            </span>
            <span className="text-[10px] font-semibold text-natural-oak shrink-0">
              Custom Sizing
            </span>
          </div>

          <Link href={`/product/${product.slug}`}>
            <h3 className="font-heading font-semibold text-sm sm:text-base text-charcoal group-hover:text-natural-oak transition-colors line-clamp-2 min-h-[2.5rem] leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Finish Swatches + Action Row */}
        <div className="space-y-3 pt-2 border-t border-soft-beige/60">
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
              <span className="text-[11px] text-charcoal/55 truncate">
                {activeFinish?.name}
              </span>
            </div>
          )}

          <p className="text-[11px] text-charcoal/55">
            Custom dimensions &amp; quote via WhatsApp
          </p>

          {/* Tondel-style Primary Pill Button + Square Green WhatsApp Button */}
          <div className="flex items-center gap-2">
            <Link
              href={`/product/${product.slug}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-charcoal hover:bg-natural-oak text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors"
            >
              View &amp; Customize <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Request quote for ${product.name} on WhatsApp`}
              className="w-10 h-10 shrink-0 inline-flex items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#1fb857] text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
