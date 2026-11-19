"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Ruler,
  Palette,
  Building2,
  ShieldCheck,
  Truck,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import {
  CATEGORIES,
  FINISH_SWATCHES,
  PRODUCTS,
} from "@/data/products";
import { BUSINESS_INFO, buildWhatsAppUrl } from "@/data/business";
import ProductCard from "./ProductCard";
import WhatsAppIcon from "./WhatsAppIcon";
import AutoScrollRow from "./AutoScrollRow";


const HERO_SLIDES = [
  {
    id: 0,
    eyebrow: "CUSTOM SHELVING • SRI LANKA",
    leftTitle: "Residential Craft",
    headline: "Beautiful Spaces. Built Around You.",
    subtitle:
      "Floating shelves in Melamine Coated MDF, geometric wall cubicles, and sculptural Book Trees crafted to your exact dimensions.",
    image: "/images/hero/hero-residential-living.webp",
    ctaHref: "/products/floating-shelves",
    ctaLabel: "Explore Residential",
  },
  {
    id: 1,
    eyebrow: "LUXURY RETAIL FIT-OUTS",
    leftTitle: "Gold Display Series",
    headline: "Designed to Display. Built for Business.",
    subtitle:
      "Brushed gold metal wall racks, freestanding boutique units, and centre tables tailored for Sri Lankan retail showrooms.",
    image: "/images/hero/hero-commercial-gold-showroom.webp",
    ctaHref: "/commercial-solutions",
    ctaLabel: "Explore Commercial",
  },
  {
    id: 2,
    eyebrow: "BLACK STEEL & NATURAL WOOD",
    leftTitle: "Studio & Storage",
    headline: "Architectural Racks. Endless Configurations.",
    subtitle:
      "Powder-coated matte black steel frames paired with warm Natural Oak and Rich Teak shelves for offices, cafés, and stores.",
    image: "/images/hero/hero-black-metal-studio.webp",
    ctaHref: "/custom-design",
    ctaLabel: "Request Custom Quote",
  },
];

// Trust strip renders icons at w-4; the WhatsApp logo reads better a bit larger.
const TrustWhatsAppIcon = (_props: { className?: string }) => <WhatsAppIcon className="w-7 h-7" />;

const TRUST_FEATURES = [
  { icon: Ruler, title: "Custom Dimensions", desc: "Built to your exact wall or floor size" },
  { icon: Palette, title: "Curated Finishes", desc: "Oak, Teak, White, Black & Gold Metal" },
  { icon: Building2, title: "Home & Commercial", desc: "Apartments to full retail showrooms" },
  { icon: TrustWhatsAppIcon, title: "Instant WhatsApp", desc: "Direct quotations at +94 70 704 8888" },
  { icon: Truck, title: "Angoda Workshop", desc: "Crafted locally in Sri Lanka" },
];

const COMMERCIAL_SECTORS = [
  { num: "01", title: "Clothing Boutiques", desc: "Gold & black garment rails and nesting display tables" },
  { num: "02", title: "Homeware & Ceramics", desc: "High-load multi-tier wall shelving and centre islands" },
  { num: "03", title: "Cosmetics & Salons", desc: "Brushed gold guard-rail stands with crisp white tiers" },
  { num: "04", title: "Flower & Gift Shops", desc: "Teak & matte black steel tiered merchandising racks" },
  { num: "05", title: "Retail Showrooms", desc: "Architectural open geometric dividers & stock cabinets" },
  { num: "06", title: "Offices & Studios", desc: "Modular wall storage, bookshelves & foldable workstations" },
];

const EDITORIAL_CARDS = [
  {
    step: "01 / 03",
    title: "Exact-Fit Residential Shelving",
    desc: "From 40cm to 120cm+ floating shelves in Quality Melamine Coated MDF to quarter-circle corner units and 180cm vertical Handy Shelves.",
    image: "/images/products/floating-shelf/floating-shelf-oak.webp",
    href: "/products/floating-shelves",
    cta: "Browse Wall Shelves",
  },
  {
    step: "02 / 03",
    title: "Showroom-Grade Gold & Black Racks",
    desc: "Precision-welded brushed gold and matte black steel frames built to elevate Sri Lankan retail stores, boutiques, and display spaces.",
    image: "/images/products/commercial-racks/gold-frame-display-shelving-unit.webp",
    href: "/commercial-solutions",
    cta: "View Commercial Racks",
  },
  {
    step: "03 / 03",
    title: "Direct WhatsApp Custom Quotations",
    desc: "Skip complex checkout forms. Pick a design, enter your width, height, depth, and finish, and send your spec straight to our workshop.",
    image: "/images/products/book-tree/book-tree-oak.webp",
    href: "/custom-design",
    cta: "Start Custom Quote",
  },
];

const FAQS = [
  {
    q: "Can I customize lengths, heights, and depths for any design?",
    a: "Yes. Every residential shelf and commercial display rack can be manufactured to your exact dimensions. Use our Custom Design form or click WhatsApp on any product.",
  },
  {
    q: "What finishes do you offer?",
    a: "We offer Matte White, Natural Oak, Rich Teak, and Matte Black board finishes, plus Brushed Gold Metal and Matte Black Powder-Coated Metal frames for commercial racks.",
  },
  {
    q: "How does ordering and quotation work?",
    a: "Handy Racks is a custom manufacturing showcase. Select your preferred design and dimensions, then tap 'Request Quote' to send your pre-filled specification directly via WhatsApp to +94 70 704 8888.",
  },
  {
    q: "Do you handle full retail shop and showroom shelving setups?",
    a: "Yes. We manufacture wall racks, freestanding display units, garment rails, centre display tables, and gondola shelving for commercial interiors across Sri Lanka.",
  },
];

export default function HomeClient() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [activeSwatch, setActiveSwatch] = useState(FINISH_SWATCHES.oak);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  // Scroll reveal animations are handled site-wide by <PageAnimations /> in the root layout.

  const slide = HERO_SLIDES[heroIdx];
  const residentialCatalogue = PRODUCTS.filter((p) => p.segment === "residential").slice(0, 8);
  const commercialShowcase = PRODUCTS.filter((p) => p.segment === "commercial").slice(0, 8);

  return (
    <div ref={rootRef} className="overflow-x-hidden">
      {/* 1. CLEAN FULL-WIDTH STUDIO HERO CAROUSEL */}
      <section className="relative bg-charcoal text-white overflow-hidden">
        <div className="relative min-h-[540px] lg:min-h-[600px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0.25, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/55 to-charcoal/35" />
            </motion.div>
          </AnimatePresence>

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="max-w-2xl space-y-5">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-gold-accent text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full">
                {slide.eyebrow}
              </span>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white">
                {slide.headline}
              </h1>
              <p className="text-sm sm:text-base text-warm-ivory/85 max-w-xl leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-2 bg-white text-charcoal hover:bg-natural-oak hover:text-white transition-colors px-6 py-3.5 rounded-full text-sm font-semibold"
                >
                  {slide.ctaLabel} <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={buildWhatsAppUrl(
                    "Hello Handy Racks! I would like to enquire about customized shelving and display racks."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-charcoal/80 backdrop-blur-md border border-white/30 hover:border-[#25D366] text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp Quote
                </a>
              </div>

              {/* Clean Trust Badges */}
              <div className="flex flex-wrap items-center gap-5 pt-3 text-xs text-warm-ivory/80">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  {BUSINESS_INFO.facebookFollowers} Facebook Followers
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gold-accent" />
                  {BUSINESS_INFO.facebookRecommendations}
                </span>
              </div>
            </div>
          </div>

          {/* Left/Right Carousel Controls */}
          <button
            type="button"
            onClick={() =>
              setHeroIdx((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
            }
            aria-label="Previous slide"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setHeroIdx((prev) => (prev + 1) % HERO_SLIDES.length)}
            aria-label="Next slide"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Bottom Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setHeroIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  heroIdx === idx ? "w-8 bg-white" : "w-2 bg-white/45 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. 5-CARD HORIZONTAL TRUST STRIP (Tondel-Inspired) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {TRUST_FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-soft-beige rounded-2xl p-4 shadow-sm flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F6F4EF] flex items-center justify-center shrink-0 text-natural-oak">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h2 className="font-heading font-bold text-xs sm:text-sm text-charcoal truncate">
                    {item.title}
                  </h2>
                  <p className="text-[11px] text-charcoal/60 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. BROWSE FASTER — BALANCED 8-ITEM CATEGORY GRID */}
      <section className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-natural-oak mb-1">
              Browse Faster
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
              Explore by Category
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-natural-oak hover:text-charcoal inline-flex items-center gap-1"
          >
            Full Catalogue <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group flex flex-col items-center text-center gap-2.5"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border border-soft-beige group-hover:border-natural-oak shadow-sm overflow-hidden transition-all duration-300 group-hover:-translate-y-1">
                <Image
                  src={cat.coverImage}
                  alt={cat.name}
                  fill
                  sizes="120px"
                  className="object-contain p-3.5 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-heading font-semibold text-xs text-charcoal group-hover:text-natural-oak transition-colors leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. RESIDENTIAL CATALOGUE HIGHLIGHTS (CLEAN 4-COL GRID) */}
      <section className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white border border-soft-beige rounded-3xl p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4 mb-7">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-natural-oak mb-1">
                WhatsApp Catalogue
              </p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
                Residential Shelving &amp; Furniture
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs sm:text-sm font-semibold text-charcoal hover:text-natural-oak inline-flex items-center gap-1 shrink-0"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <AutoScrollRow>
            {residentialCatalogue.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AutoScrollRow>
        </div>
      </section>

      {/* 5. COMMERCIAL & RETAIL FIT-OUTS (Tondel-Inspired 6-Column Numbered Grid) */}
      <section className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-charcoal text-white rounded-3xl p-7 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-accent">
                Commercial &bull; Retail Showrooms
              </p>
              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white">
                Custom Display Systems for Sri Lankan Businesses
              </h2>
            </div>
            <Link
              href="/commercial-solutions"
              className="inline-flex items-center gap-2 bg-gold-accent text-charcoal hover:bg-white transition-colors px-5 py-3 rounded-full text-xs sm:text-sm font-semibold shrink-0 w-fit"
            >
              Request Commercial Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5">
            {COMMERCIAL_SECTORS.map((sec) => (
              <Link
                key={sec.num}
                href="/commercial-solutions"
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-accent/60 rounded-2xl p-4 transition-all flex flex-col justify-between gap-3"
              >
                <span className="font-heading font-extrabold text-xs text-gold-accent">
                  {sec.num}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-white group-hover:text-gold-accent transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-warm-ivory/65 mt-1 leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMMERCIAL DISPLAY RACK COLLECTION (8 CARDS) */}
      <section className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white border border-soft-beige rounded-3xl p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4 mb-7">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-accent mb-1">
                High-Priority Showcase
              </p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
                Gold &amp; Black Metal Display Racks
              </h2>
            </div>
            <Link
              href="/commercial-solutions"
              className="text-xs sm:text-sm font-semibold text-charcoal hover:text-natural-oak inline-flex items-center gap-1 shrink-0"
            >
              Explore Commercial <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <AutoScrollRow>
            {commercialShowcase.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AutoScrollRow>
        </div>
      </section>

      {/* 7. CLEAN EDITORIAL SPLIT SECTION (Fixed Contrast & Crisp Spacing) */}
      <section className="reveal-section bg-leaf-gradient border-y border-leaf-dark/20 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-leaf-dark">
              Discover Handy Racks
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-charcoal leading-[1.12] tracking-tight">
              CUSTOM SPACES BUILT DIFFERENT.
            </h2>
            <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed">
              Thoughtful geometry, clean studio finishes, and direct-from-workshop fabrication in Angoda — designed for both modern homes and standout retail showrooms.
            </p>
            <div className="pt-2">
              <Link
                href="/custom-design"
                className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-natural-oak transition-colors px-6 py-3 rounded-full text-sm font-semibold"
              >
                Start Your Custom Order <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            {EDITORIAL_CARDS.map((card) => (
              <div
                key={card.step}
                className="bg-white border border-soft-beige rounded-3xl p-6 sm:p-7 shadow-sm grid grid-cols-1 sm:grid-cols-12 gap-6 items-center"
              >
                <div className="sm:col-span-7 space-y-3">
                  <span className="inline-block text-[11px] font-bold tracking-widest text-natural-oak bg-[#F6F4EF] px-3 py-1 rounded-full">
                    {card.step}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-charcoal">
                    {card.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {card.desc}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal hover:text-natural-oak pt-1"
                  >
                    {card.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="sm:col-span-5 relative aspect-square bg-[#FAF8F3] rounded-2xl border border-soft-beige/60 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="object-contain p-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 2-COLUMN VISUAL FEATURE BANNERS */}
      <section className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/projects"
            className="group relative aspect-[16/10] rounded-3xl overflow-hidden bg-charcoal text-white flex items-end p-7"
          >
            <Image
              src="/images/inspiration/living-room-tv-wall.webp"
              alt="Residential Living Room TV Wall Concept"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-charcoal/10" />
            <div className="relative z-10 space-y-1.5">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#F3D58A] bg-charcoal/75 backdrop-blur-sm border border-[#F3D58A]/30 px-3 py-1 rounded-full">
                Home Upgrade
              </span>
              <h3 className="font-heading font-bold text-2xl">
                Living Room &amp; Kitchen Shelving
              </h3>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-warm-ivory/90 pt-1">
                View Inspiration Gallery <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>

          <Link
            href="/commercial-solutions"
            className="group relative aspect-[16/10] rounded-3xl overflow-hidden bg-charcoal text-white flex items-end p-7"
          >
            <Image
              src="/images/inspiration/showroom-ceramics-gold.webp"
              alt="Commercial Gold Retail Showroom"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/55 to-charcoal/10" />
            <div className="relative z-10 space-y-1.5">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#F3D58A] bg-charcoal/75 backdrop-blur-sm border border-[#F3D58A]/30 px-3 py-1 rounded-full">
                Retail Collection
              </span>
              <h3 className="font-heading font-bold text-2xl">
                Boutique &amp; Showroom Display Racks
              </h3>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-warm-ivory/90 pt-1">
                Explore Commercial Solutions <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 9. INTERACTIVE MATERIALS + FAQ */}
      <section className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Materials Card */}
        <div className="lg:col-span-5 bg-white border border-soft-beige rounded-3xl p-6 sm:p-8 space-y-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-natural-oak">
            Materials &amp; Swatches
          </p>
          <h2 className="font-heading font-bold text-2xl text-charcoal">
            Select Your Finish
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {Object.values(FINISH_SWATCHES).map((swatch) => (
              <button
                key={swatch.id}
                type="button"
                onClick={() => setActiveSwatch(swatch)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold transition-colors ${
                  activeSwatch.id === swatch.id
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-soft-beige bg-[#F6F4EF] text-charcoal hover:border-natural-oak"
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{
                    backgroundColor: swatch.hex,
                    border: swatch.borderHex
                      ? `1px solid ${swatch.borderHex}`
                      : "1px solid rgba(255,255,255,0.4)",
                  }}
                />
                {swatch.name}
              </button>
            ))}
          </div>
          <div className="p-4 rounded-2xl bg-[#F6F4EF] border border-soft-beige flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl shrink-0 border border-soft-beige"
              style={{ backgroundColor: activeSwatch.hex }}
            />
            <div>
              <p className="font-heading font-bold text-sm text-charcoal">
                {activeSwatch.name}
              </p>
              <p className="text-xs text-charcoal/70 mt-0.5">
                Custom cut &amp; finished to order. Floating shelves use Quality Melamine Coated MDF.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Card */}
        <div className="lg:col-span-7 bg-white border border-soft-beige rounded-3xl p-6 sm:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-natural-oak mb-1">
            Common Questions
          </p>
          <h2 className="font-heading font-bold text-2xl text-charcoal mb-5">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-soft-beige">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="py-3.5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-heading font-semibold text-sm text-charcoal"
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <p className="mt-2 text-xs sm:text-sm text-charcoal/70 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. INSTANT WHATSAPP QUOTATION BANNER (Tondel-Inspired Dark CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-leaf-gradient-dark text-white rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-leaf-light">
              <WhatsAppIcon className="w-5 h-5" />
              Direct Workshop Support
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Order &amp; Quote Instantly on WhatsApp
            </h2>
            <p className="text-sm text-white/85 leading-relaxed">
              Send your measurements, room sketch, or commercial showroom requirements directly to Handy Racks ({BUSINESS_INFO.whatsappDisplay}).
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/custom-design"
              className="inline-flex items-center gap-2 bg-white text-charcoal hover:bg-natural-oak hover:text-white transition-colors px-6 py-3.5 rounded-full text-sm font-semibold"
            >
              Custom Quote Form <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppUrl(
                "Hello Handy Racks! I would like to request a customized furniture or shelving quotation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb857] text-white transition-colors px-6 py-3.5 rounded-full text-sm font-semibold"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Chat on WhatsApp
            </a>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-charcoal hover:bg-leaf-dark text-white px-5 py-3.5 rounded-full text-xs font-semibold transition-colors"
            >
              Facebook ({BUSINESS_INFO.facebookFollowers})
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
