"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", hasMegaMenu: true },
  { href: "/commercial-solutions", label: "Commercial Solutions" },
  { href: "/custom-design", label: "Custom Designs" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-soft-beige ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5"
          : "bg-warm-ivory/95 backdrop-blur-sm py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Original Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-natural-oak rounded"
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
            <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-charcoal block">
              Handy Racks
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-natural-oak font-medium hidden sm:block">
              Custom Shelving &amp; Display
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary Navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            if (link.hasMegaMenu) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                      isActive
                        ? "text-natural-oak"
                        : "text-charcoal/80 hover:text-charcoal"
                    }`}
                    aria-expanded={megaMenuOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        megaMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {megaMenuOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[680px]">
                      <div className="bg-white border border-soft-beige shadow-xl p-6 grid grid-cols-2 gap-4">
                        {CATEGORIES.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/products/${cat.slug}`}
                            className="group flex items-center gap-3 p-2 hover:bg-warm-ivory transition-colors"
                          >
                            <div className="relative w-12 h-12 bg-white border border-soft-beige shrink-0 overflow-hidden">
                              <Image
                                src={cat.coverImage}
                                alt={cat.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-charcoal group-hover:text-natural-oak transition-colors truncate">
                                {cat.name}
                              </p>
                              <p className="text-xs text-charcoal/60 capitalize">
                                {cat.segment}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-3 border-t border-soft-beige flex items-center justify-between">
                          <span className="text-xs text-charcoal/60">
                            All designs customisable to your dimensions &amp; finish
                          </span>
                          <Link
                            href="/products"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-natural-oak hover:text-charcoal transition-colors"
                          >
                            View Full Catalogue <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors py-2 ${
                  isActive
                    ? "text-natural-oak border-b-2 border-natural-oak"
                    : "text-charcoal/80 hover:text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/custom-design"
            className="hidden sm:inline-flex items-center gap-2 bg-charcoal text-warm-ivory hover:bg-natural-oak transition-colors text-xs sm:text-sm font-medium px-4 py-2.5 tracking-wide"
          >
            Get a Custom Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-natural-oak focus:outline-none focus-visible:ring-2 focus-visible:ring-natural-oak"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-soft-beige px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2.5 px-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-warm-ivory text-natural-oak"
                      : "text-charcoal hover:bg-warm-ivory"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-soft-beige">
            <p className="text-xs uppercase tracking-wider text-charcoal/50 mb-3 px-3">
              Categories
            </p>
            <div className="grid grid-cols-2 gap-2 px-1">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="text-xs font-medium text-charcoal/80 hover:text-natural-oak py-1.5 px-2 bg-warm-ivory/60"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/custom-design"
              className="w-full inline-flex justify-center items-center gap-2 bg-charcoal text-warm-ivory py-3 px-4 text-sm font-medium"
            >
              Get a Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
