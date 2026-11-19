"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/data/business";

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
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="text-xs sm:text-sm font-semibold hidden sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}
