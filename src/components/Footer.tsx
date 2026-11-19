import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import { CATEGORIES } from "@/data/products";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-ivory border-t border-charcoal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 bg-white rounded-sm p-1 shrink-0">
                <Image
                  src="/images/brand/handy-racks-logo.png"
                  alt="Handy Racks Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-natural-oak uppercase tracking-widest">
                  Sri Lanka
                </p>
              </div>
            </div>
            <p className="text-sm text-warm-ivory/75 leading-relaxed">
              Customized shelving, residential storage furniture, and luxury gold &amp;
              black metal commercial display systems built to your exact space.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium px-3 py-1.5 border border-warm-ivory/25 hover:border-natural-oak hover:text-natural-oak transition-colors inline-flex items-center gap-1.5"
              >
                Facebook ({BUSINESS_INFO.facebookFollowers})
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium px-3 py-1.5 bg-brand-green text-charcoal hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-warm-ivory/75">
              <li>
                <Link href="/" className="hover:text-natural-oak transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-natural-oak transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial-solutions"
                  className="hover:text-natural-oak transition-colors"
                >
                  Commercial Solutions
                </Link>
              </li>
              <li>
                <Link href="/custom-design" className="hover:text-natural-oak transition-colors">
                  Custom Design Quote
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-natural-oak transition-colors">
                  Projects &amp; Inspiration
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-natural-oak transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-natural-oak transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-sm text-warm-ivory/75">
              {CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="hover:text-natural-oak transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-4">
              Contact &amp; Workshop
            </h4>
            <ul className="space-y-3 text-sm text-warm-ivory/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-natural-oak shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-natural-oak shrink-0" />
                <a
                  href={BUSINESS_INFO.telephoneHref}
                  className="hover:text-natural-oak transition-colors"
                >
                  {BUSINESS_INFO.telephoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-5 h-5" />
                <a
                  href={BUSINESS_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-natural-oak transition-colors"
                >
                  {BUSINESS_INFO.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-natural-oak shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-natural-oak transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-accent hover:underline"
                >
                  Get Directions on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-ivory/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-ivory/60">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p>{BUSINESS_INFO.developerCredit}</p>
        </div>
      </div>
    </footer>
  );
}
