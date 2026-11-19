"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/data/business";

export default function CommercialEnquiryForm() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Clothing Boutique");
  const [location, setLocation] = useState("");
  const [rackType, setRackType] = useState("Gold Frame Display Shelving Unit");
  const [dimensions, setDimensions] = useState("");
  const [units, setUnits] = useState("2");
  const [frameFinish, setFrameFinish] = useState("Brushed Gold Metal");
  const [shelfFinish, setShelfFinish] = useState("Matte White");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Hello Handy Racks! (Commercial Display Enquiry)",
      "",
      `Business Name: ${businessName || "-"}`,
      `Business Type: ${businessType}`,
      `Location: ${location || "-"}`,
      `Required Rack Type: ${rackType}`,
      `Preferred Dimensions: ${dimensions || "To be discussed"}`,
      `Number of Units: ${units}`,
      `Frame Finish: ${frameFinish}`,
      `Shelf Finish: ${shelfFinish}`,
      `Additional Requirements: ${additionalNotes || "None"}`,
      "",
      "Please share a commercial quotation and consultation details.",
    ].join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-soft-beige p-6 sm:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Business Name *
          </label>
          <input
            type="text"
            required
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Your store or company name"
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Business Type
          </label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          >
            <option>Clothing Boutique</option>
            <option>Homeware &amp; Ceramic Store</option>
            <option>Cosmetics &amp; Salon</option>
            <option>Flower &amp; Gift Shop</option>
            <option>Retail Showroom</option>
            <option>Office / Studio</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Store Location *
          </label>
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Colombo 03 / Kandy / Galle"
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Required Rack Type
          </label>
          <select
            value={rackType}
            onChange={(e) => setRackType(e.target.value)}
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          >
            <option>Gold Metal Retail Wall Rack</option>
            <option>Gold Frame Display Shelving Unit</option>
            <option>Black Metal Retail Display Rack</option>
            <option>Multi-Level Commercial Display Rack</option>
            <option>Gold Frame Centre Display Table</option>
            <option>Two-Tier Retail Display Table</option>
            <option>Open Geometric Gold Display Unit</option>
            <option>Gold / Black Clothing Display Rack</option>
            <option>Cosmetics Display Shelving</option>
            <option>Commercial Gondola-Style Display Unit</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Preferred Dimensions
          </label>
          <input
            type="text"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
            placeholder="e.g., 120cm W × 200cm H × 40cm D"
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Number of Units
          </label>
          <input
            type="number"
            min="1"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Frame Finish
          </label>
          <select
            value={frameFinish}
            onChange={(e) => setFrameFinish(e.target.value)}
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          >
            <option>Brushed Gold Metal</option>
            <option>Matte Black Powder-Coated Metal</option>
            <option>Custom Colour</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Shelf Finish
          </label>
          <select
            value={shelfFinish}
            onChange={(e) => setShelfFinish(e.target.value)}
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          >
            <option>Matte White</option>
            <option>Natural Oak</option>
            <option>Rich Teak</option>
            <option>Matte Black</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
          Additional Requirements
        </label>
        <textarea
          rows={3}
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
          placeholder="Tell us about your showroom layout, timeline, or custom branding needs..."
          className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2.5 bg-charcoal text-warm-ivory hover:bg-natural-oak transition-colors py-3.5 px-6 text-sm font-semibold"
      >
        <MessageCircle className="w-4 h-4 text-brand-green" />
        Request Commercial Quote on WhatsApp
      </button>
    </form>
  );
}
