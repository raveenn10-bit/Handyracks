"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import {
  CATEGORIES,
  FINISH_SWATCHES,
  GALLERY_ITEMS,
  PRODUCTS,
} from "@/data/products";
import { BUSINESS_INFO, buildWhatsAppUrl } from "@/data/business";
import ProductCard from "./ProductCard";

gsap.registerPlugin(ScrollTrigger);

const HERO_SLIDES = [
  {
    id: 0,
    label: "Residential Shelving Interior",
    image: "/images/hero/hero-residential-living.webp",
    caption: "Natural Oak Floating Shelves, Cubic Sets & Book Trees",
  },
  {
    id: 1,
    label: "Luxury Gold-Frame Retail Showroom",
    image: "/images/hero/hero-commercial-gold-showroom.webp",
    caption: "Brushed Gold Metal Display Systems & Centre Tables",
  },
  {
    id: 2,
    label: "Black Metal & Wood Studio",
    image: "/images/hero/hero-black-metal-studio.webp",
    caption: "Powder-Coated Steel Frames with Natural Oak & Teak",
  },
];

const SPACES = [
  { name: "Living Room", image: "/images/inspiration/living-room-tv-wall.webp", href: "/products/floating-shelves" },
  { name: "Kitchen", image: "/images/inspiration/kitchen-floating-shelves.webp", href: "/products/floating-shelves" },
  { name: "Bedroom", image: "/images/products/cubicle-shelves/cubicle-shelves-white-set.webp", href: "/products/decorative-wall-shelves" },
  { name: "Home Office", image: "/images/inspiration/home-office-foldable-desk.webp", href: "/products/desk-organisers" },
  { name: "Retail Store", image: "/images/inspiration/flower-gift-shop-teak-black.webp", href: "/commercial-solutions" },
  { name: "Showroom", image: "/images/inspiration/showroom-ceramics-gold.webp", href: "/commercial-solutions" },
];

const FAQS = [
  {
    q: "Can I order custom dimensions outside the standard catalogue sizes?",
    a: "Yes. Every shelf, desk organiser, and commercial display rack can be manufactured to your exact width, height, and depth. Use our Custom Design Quote form or send your measurements directly on WhatsApp.",
  },
  {
    q: "What finishes are available for residential and commercial orders?",
    a: "Residential shelves are available in Matte White, Natural Oak, Rich Teak, and Matte Black. Commercial display frames are crafted in Brushed Gold Metal and Matte Black Powder-Coated Metal with White, Oak, or Teak shelves.",
  },
  {
    q: "How do I receive a quotation?",
    a: "Select any product and click 'Request Quote' or fill out the Custom Design form. Your selected dimensions, finish, and quantity are formatted directly into a WhatsApp message to +94 70 704 8888.",
  },
  {
    q: "Do you supply display racks for retail shops and showrooms across Sri Lanka?",
    a: "Yes. We design and manufacture custom commercial display racks, clothing rails, centre tables, and wall shelving systems for boutiques, cosmetics stores, flower shops, and homeware showrooms.",
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
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((el) => {
        gsap.from(el, {
          y: 28,
          opacity: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            once: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 12);

  return (
    <div ref={rootRef} className="overflow-x-hidden">
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-[76vh] lg:min-h-[84vh] flex items-end bg-charcoal text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={HERO_SLIDES[heroIdx].id}
            initial={{ opacity: 0.25, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[heroIdx].image}
              alt={HERO_SLIDES[heroIdx].label}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-24">
          <div className="max-w-2xl space-y-5">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-gold-accent font-semibold">
              {HERO_SLIDES[heroIdx].caption}
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white">
              Beautiful Spaces.
              <br />
              Built Around You.
            </h1>
            <p className="text-sm sm:text-base text-warm-ivory/85 max-w-xl leading-relaxed">
              Discover thoughtfully designed shelving, customized furniture, and commercial display solutions made to suit your space.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-charcoal hover:bg-natural-oak hover:text-white transition-colors px-6 py-3.5 text-sm font-semibold"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/custom-design"
                className="inline-flex items-center gap-2 border border-white/70 text-white hover:bg-white hover:text-charcoal transition-colors px-6 py-3.5 text-sm font-semibold"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>

          {/* Slide Switcher Dots */}
          <div className="flex flex-wrap items-center gap-3 mt-10">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setHeroIdx(idx)}
                className={`text-xs px-3 py-1.5 border transition-colors ${
                  heroIdx === idx
                    ? "bg-white text-charcoal border-white font-semibold"
                    : "border-white/35 text-white/80 hover:border-white"
                }`}
              >
                0{idx + 1}. {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. QUICK TRUST STRIP */}
      <section className="bg-white border-b border-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Custom Designs",
            "Multiple Finish Options",
            "Residential & Commercial",
            "Direct WhatsApp Support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPLORE OUR COLLECTIONS */}
      <section className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold mb-1.5">
              Collections
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
              Explore Our Collections
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-natural-oak hover:text-charcoal inline-flex items-center gap-1 shrink-0"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group min-w-[230px] lg:min-w-0 bg-white border border-soft-beige hover:border-natural-oak transition-colors flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full bg-white overflow-hidden border-b border-soft-beige/60">
                <Image
                  src={cat.coverImage}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 1024px) 240px, 25vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-sm sm:text-base text-charcoal group-hover:text-natural-oak transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-charcoal/65 mt-1 line-clamp-2">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS */}
      <section className="reveal-section bg-white border-y border-soft-beige py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold mb-1.5">
                Catalogue Highlights
              </p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
                Featured Products
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs sm:text-sm font-semibold text-charcoal hover:text-natural-oak inline-flex items-center gap-1"
            >
              Browse Full Catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMERCIAL SOLUTIONS (HIGH PRIORITY) */}
      <section className="reveal-section relative bg-charcoal text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-gold-accent font-semibold">
              Commercial Display Systems
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Designed to Display.
              <br />
              Built for Business.
            </h2>
            <p className="text-sm sm:text-base text-warm-ivory/80 leading-relaxed">
              From luxury brushed gold boutique shelving and centre tables to matte black steel gondola racks for homeware, ceramics, cosmetics, and flower shops across Sri Lanka.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/commercial-solutions"
                className="inline-flex items-center gap-2 bg-gold-accent text-charcoal hover:bg-white transition-colors px-6 py-3.5 text-sm font-semibold"
              >
                Explore Commercial Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/15">
              <Image
                src="/images/inspiration/showroom-ceramics-gold.webp"
                alt="Gold Metal Retail Wall Shelving in Sri Lankan Ceramic Store"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden border border-white/15 mt-6">
              <Image
                src="/images/inspiration/flower-gift-shop-teak-black.webp"
                alt="Black Metal and Teak Commercial Display Racks"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CUSTOM MANUFACTURING + SHOP BY SPACE */}
      <section className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-soft-beige p-6 sm:p-10">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold">
              Bespoke Fabrication
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
              Your Space. Your Style. Your Design.
            </h2>
            <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed">
              Need a 140cm floating shelf, a custom-height gold boutique rack, or a corner unit tailored to an apartment nook? Share your measurements and finish preferences — we craft to fit your exact wall and floor plan.
            </p>
            <Link
              href="/custom-design"
              className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-natural-oak transition-colors px-5 py-3 text-sm font-medium"
            >
              Start Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden border border-soft-beige">
            <Image
              src="/images/about/workshop-craftsmanship.webp"
              alt="Custom Woodworking and Metal Frame Craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Shop by Space */}
        <div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mb-6">
            Shop by Space
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SPACES.map((space) => (
              <Link
                key={space.name}
                href={space.href}
                className="group relative aspect-[3/4] overflow-hidden border border-soft-beige bg-white"
              >
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                  {space.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MATERIALS & FINISHES + HOW IT WORKS */}
      <section className="reveal-section bg-white border-y border-soft-beige py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Materials */}
          <div className="space-y-5">
            <span className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold">
              Materials &amp; Finishes
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
              Curated Wood &amp; Metal Finishes
            </h2>
            <p className="text-sm text-charcoal/75">
              Select a swatch below to inspect our core residential melamine finishes and commercial steel frame options.
            </p>
            <div className="flex flex-wrap gap-3">
              {Object.values(FINISH_SWATCHES).map((swatch) => (
                <button
                  key={swatch.id}
                  type="button"
                  onClick={() => setActiveSwatch(swatch)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 border text-xs font-medium transition-colors ${
                    activeSwatch.id === swatch.id
                      ? "border-charcoal bg-warm-ivory text-charcoal"
                      : "border-soft-beige bg-white text-charcoal/75 hover:border-natural-oak"
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: swatch.hex,
                      border: swatch.borderHex
                        ? `1px solid ${swatch.borderHex}`
                        : "1px solid transparent",
                    }}
                  />
                  {swatch.name}
                </button>
              ))}
            </div>
            <div className="p-4 bg-warm-ivory border border-soft-beige flex items-center gap-4">
              <div
                className="w-12 h-12 shrink-0 border border-soft-beige"
                style={{ backgroundColor: activeSwatch.hex }}
              />
              <div>
                <p className="font-heading font-semibold text-sm text-charcoal">
                  {activeSwatch.name}
                </p>
                <p className="text-xs text-charcoal/70 mt-0.5">
                  Available across custom widths and depths. Floating shelves feature Quality Melamine Coated MDF.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-5">
            <span className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold">
              Simple Process
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { step: "01", title: "Explore Designs", desc: "Browse residential shelves and commercial display racks." },
                { step: "02", title: "Share Your Requirements", desc: "Choose dimensions, finishes, and quantity." },
                { step: "03", title: "Receive Your Quotation", desc: "Get a direct quotation via WhatsApp." },
                { step: "04", title: "Confirm Your Custom Design", desc: "We craft your order to match your space." },
              ].map((item) => (
                <div key={item.step} className="bg-warm-ivory/70 border border-soft-beige p-4">
                  <span className="text-xs font-bold text-natural-oak">{item.step}</span>
                  <h3 className="font-heading font-semibold text-sm text-charcoal mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROJECTS & INSPIRATION + CUSTOMER TRUST */}
      <section className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold">
              Design Inspiration
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal mt-1">
              Projects &amp; Interior Concepts
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs sm:text-sm font-semibold text-natural-oak hover:text-charcoal inline-flex items-center gap-1"
          >
            View Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              href="/projects"
              className="group relative aspect-[4/3] overflow-hidden border border-soft-beige bg-white"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase tracking-wider text-gold-accent block">
                  {item.tag}
                </span>
                <p className="text-xs font-semibold line-clamp-1">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Customer Trust Banner */}
        <div className="bg-white border border-soft-beige p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Verified Facebook Community
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-charcoal">
              {BUSINESS_INFO.facebookFollowers} Followers &bull; {BUSINESS_INFO.facebookRecommendations}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70">
              Trusted by homeowners and retail businesses across Sri Lanka on our official Facebook page.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-charcoal px-5 py-3 text-xs sm:text-sm font-semibold text-charcoal hover:bg-charcoal hover:text-white transition-colors shrink-0"
          >
            Visit Facebook Page <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="reveal-section bg-white border-t border-soft-beige py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-soft-beige border-y border-soft-beige">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-heading font-semibold text-sm sm:text-base text-charcoal"
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
                  <p className="mt-2.5 text-sm text-charcoal/75 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="bg-soft-beige/60 border-t border-soft-beige py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
            Let&rsquo;s Create Something Perfect for Your Space.
          </h2>
          <p className="text-sm sm:text-base text-charcoal/75 max-w-xl mx-auto">
            Share your measurements, room photos, or retail layout ideas and get a customized quotation directly on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/custom-design"
              className="inline-flex items-center gap-2 bg-charcoal text-white hover:bg-natural-oak transition-colors px-6 py-3.5 text-sm font-semibold"
            >
              Request a Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppUrl(
                "Hello Handy Racks! I would like to discuss a custom furniture or shelving order."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:opacity-90 transition-opacity px-6 py-3.5 text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
