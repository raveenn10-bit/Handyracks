"use client";

import React from "react";
import { buildWhatsAppUrl } from "@/data/business";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const url = buildWhatsAppUrl(
    "Hello Handy Racks! I would like to enquire about customized furniture and shelving."
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Handy Racks on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 focus:outline-none"
    >
      {/* Label pill (desktop / tablet) */}
      <span className="hidden sm:inline-flex items-center bg-white text-charcoal text-sm font-semibold px-4 py-2 rounded-full shadow-lg border border-black/5 transition-transform duration-200 group-hover:-translate-x-1">
        Chat on WhatsApp
      </span>

      {/* Logo with pulse rings */}
      <span className="relative flex w-14 h-14 sm:w-16 sm:h-16 items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-wa-pulse"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-wa-pulse [animation-delay:1s]"
        />
        <span className="relative rounded-full shadow-xl transition-transform duration-200 group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-charcoal/40">
          <WhatsAppIcon className="w-14 h-14 sm:w-16 sm:h-16" />
        </span>
      </span>
    </a>
  );
}
