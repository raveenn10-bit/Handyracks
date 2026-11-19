"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/products";

const TABS = [
  "All",
  "Residential Shelving",
  "Commercial Display Racks",
  "Retail Showrooms",
  "Home Office",
  "Kitchen",
  "Custom Storage",
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<(typeof GALLERY_ITEMS)[number] | null>(
    null
  );

  const items =
    activeTab === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((g) => g.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      <div className="max-w-2xl space-y-2">
        <span className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold">
          Portfolio &amp; Concepts
        </span>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
          Projects &amp; Design Inspiration
        </h1>
        <p className="text-sm sm:text-base text-charcoal/75">
          Explore illustrative residential shelving concepts and commercial retail showroom visualizations crafted around Handy Racks designs.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-soft-beige pb-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs font-medium transition-colors ${
              activeTab === tab
                ? "bg-charcoal text-white"
                : "bg-white border border-soft-beige text-charcoal/75 hover:border-natural-oak"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxItem(item)}
            className="group text-left bg-white border border-soft-beige overflow-hidden hover:border-natural-oak transition-colors"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] uppercase tracking-wider text-natural-oak font-semibold">
                {item.tag} &bull; {item.category}
              </span>
              <h2 className="font-heading font-semibold text-sm sm:text-base text-charcoal mt-1">
                {item.title}
              </h2>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxItem(null)}
            aria-label="Close lightbox"
            className="absolute top-5 right-5 text-white hover:text-natural-oak p-2"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="max-w-4xl w-full space-y-3">
            <div className="relative aspect-[16/10] w-full bg-charcoal">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-white text-center">
              <p className="text-xs text-gold-accent uppercase tracking-wider">
                {lightboxItem.tag}
              </p>
              <p className="font-heading font-semibold text-base">{lightboxItem.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
