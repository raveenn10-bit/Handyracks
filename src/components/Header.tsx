"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  LayoutGrid,
  ArrowRight,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { BUSINESS_INFO, buildWhatsAppUrl } from "@/data/business";
import WhatsAppIcon from "./WhatsAppIcon";

const SECONDARY_LINKS = [
  { href: "/products", label: "Full Catalogue" },
  { href: "/commercial-solutions", label: "Commercial Racks" },
  { href: "/products/floating-shelves", label: "Floating Shelves" },
  { href: "/products/decorative-wall-shelves", label: "Wall Shelves" },
  { href: "/products/bookshelves", label: "Book Trees" },
  { href: "/custom-design", label: "Custom Design" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchValue.trim();
    if (q) {
      router.push(`/products?q=${encodeURIComponent(q)}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Tier 1: Top Utility Bar */}
      <div className="bg-charcoal text-warm-ivory/90 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-natural-oak shrink-0" />
              <span className="truncate">
                Customized Shelving &amp; Display Racks &bull; Angoda, Sri Lanka
              </span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-warm-ivory/80">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
              Direct Workshop Quality
            </span>
            <a
              href={BUSINESS_INFO.whatsappBaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-green hover:underline"
            >
              WhatsApp: {BUSINESS_INFO.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Clean White Header with Centered Pill Search */}
      <div className="bg-white border-b border-soft-beige/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          {/* Original Handy Racks Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-natural-oak rounded-lg"
            aria-label="Handy Racks Home"
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0">
              <Image
                src="/images/brand/handy-racks-logo.png"
                alt="Handy Racks Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-charcoal block">
                HANDY RACKS
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-natural-oak font-semibold hidden sm:block">
                Custom Furniture &amp; Shelving
              </span>
            </div>
          </Link>

          {/* Centered Rounded Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-xl items-center bg-[#F6F4EF] border border-soft-beige rounded-full pl-4 pr-1.5 py-1 focus-within:border-natural-oak focus-within:bg-white transition-colors"
          >
            <Search className="w-4 h-4 text-charcoal/45 shrink-0 mr-2.5" />
            <input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search floating shelves, gold retail racks, book trees..."
              aria-label="Search Handy Racks catalogue"
              className="w-full bg-transparent text-sm text-charcoal placeholder:text-charcoal/45 focus:outline-none py-1.5"
            />
            <button
              type="submit"
              className="bg-charcoal hover:bg-natural-oak text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors shrink-0"
            >
              Search
            </button>
          </form>

          {/* Right Action Controls (Showcase-Only: Custom Quote + WhatsApp) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              href="/custom-design"
              className="hidden sm:inline-flex items-center gap-1.5 bg-charcoal hover:bg-natural-oak text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              Get Custom Quote
            </Link>
            <a
              href={buildWhatsAppUrl(
                "Hello Handy Racks! I would like to request a custom furniture quotation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Handy Racks"
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-sm hover:scale-110 hover:shadow-md transition-transform"
            >
              <WhatsAppIcon className="w-9 h-9 sm:w-10 sm:h-10" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-[#F6F4EF] focus:outline-none"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Tier 3: Clean Secondary Category Navigation Bar */}
      <div className="hidden lg:block bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6">
          {/* All Categories Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className="inline-flex items-center gap-2 bg-natural-oak hover:bg-gold-accent text-white text-xs font-semibold px-4 py-3 transition-colors"
              aria-expanded={megaMenuOpen}
            >
              <LayoutGrid className="w-4 h-4" />
              All Categories
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${
                  megaMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {megaMenuOpen && (
              <div className="absolute left-0 top-full w-[660px] bg-white text-charcoal border border-soft-beige shadow-2xl rounded-b-2xl p-6 grid grid-cols-2 gap-3">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className="group flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F6F4EF] transition-colors"
                  >
                    <div className="relative w-12 h-12 rounded-lg bg-white border border-soft-beige/80 shrink-0 overflow-hidden">
                      <Image
                        src={cat.coverImage}
                        alt={cat.name}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-charcoal group-hover:text-natural-oak truncate">
                        {cat.name}
                      </p>
                      <p className="text-[11px] text-charcoal/55 capitalize">
                        {cat.segment}
                      </p>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 pt-3 mt-1 border-t border-soft-beige flex items-center justify-between">
                  <span className="text-xs text-charcoal/60">
                    Every design can be customized to your exact dimensions
                  </span>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-natural-oak hover:text-charcoal"
                  >
                    View All Designs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Horizontal Nav Links */}
          <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar" aria-label="Category Navigation">
            {SECONDARY_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium py-3 whitespace-nowrap transition-colors ${
                    active
                      ? "text-gold-accent font-semibold"
                      : "text-warm-ivory/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-soft-beige px-4 py-5 space-y-4 max-h-[82vh] overflow-y-auto shadow-xl">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-[#F6F4EF] border border-soft-beige rounded-full pl-3.5 pr-1 py-1"
          >
            <Search className="w-4 h-4 text-charcoal/45 mr-2" />
            <input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search shelves or display racks..."
              className="w-full bg-transparent text-sm focus:outline-none py-1"
            />
            <button
              type="submit"
              className="bg-charcoal text-white text-xs font-semibold px-3.5 py-1.5 rounded-full"
            >
              Go
            </button>
          </form>

          <nav className="grid grid-cols-2 gap-2">
            {SECONDARY_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium ${
                  pathname === link.href
                    ? "bg-charcoal text-white"
                    : "bg-[#F6F4EF] text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/custom-design"
            className="w-full inline-flex items-center justify-center gap-2 bg-natural-oak text-white py-3 rounded-full text-sm font-semibold"
          >
            Get a Custom Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
