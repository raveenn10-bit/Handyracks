"use client";

import React, { useState } from "react";
import { MessageCircle, Upload, AlertCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl, formatCustomQuoteMessage } from "@/data/business";

const PRODUCT_TYPES = [
  "Floating Shelf",
  "Ledge Shelf",
  "Cubicle Shelves",
  "Honeycomb Shelves",
  "Desk Organiser",
  "Floating Cubic Set",
  "Corner Shelf",
  "Wall Hanging Shelf",
  "Handy Shelf (180cm)",
  "Book Tree",
  "Foldable Table",
  "Shoe Cupboard",
  "Commercial Display Rack",
  "Custom Furniture / TV Unit",
];

const FINISH_OPTIONS = [
  "Natural Oak",
  "Rich Teak",
  "Matte White",
  "Matte Black",
  "Brushed Gold Metal + White",
  "Black Metal + Oak / Teak",
  "Other (Specify in Requirements)",
];

export default function CustomQuoteForm({
  defaultProduct = "Floating Shelf",
}: {
  defaultProduct?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(defaultProduct);
  const [preferredDesign, setPreferredDesign] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");
  const [unit, setUnit] = useState("cm");
  const [finish, setFinish] = useState("Natural Oak");
  const [quantity, setQuantity] = useState("1");
  const [location, setLocation] = useState("");
  const [additionalRequirements, setAdditionalRequirements] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewName, setPreviewName] = useState<string>("");
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and contact number so we can prepare your quotation.");
      return;
    }
    setError("");
    const msg = formatCustomQuoteMessage({
      name,
      phone,
      product,
      preferredDesign,
      width,
      height,
      depth,
      unit,
      finish,
      quantity,
      location,
      additionalRequirements: previewName
        ? `${additionalRequirements} (I will attach reference image: ${previewName})`.trim()
        : additionalRequirements,
    });
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-soft-beige p-6 sm:p-8 space-y-6"
    >
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-800 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Customer Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Contact Number (WhatsApp) *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07X XXX XXXX"
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Product Type
          </label>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          >
            {PRODUCT_TYPES.map((pt) => (
              <option key={pt} value={pt}>
                {pt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Preferred Design / Style
          </label>
          <input
            type="text"
            value={preferredDesign}
            onChange={(e) => setPreferredDesign(e.target.value)}
            placeholder="e.g., 3-tier wall mounted or corner unit"
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
        </div>
      </div>

      {/* Dimensions */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
          Custom Dimensions
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <input
            type="text"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            placeholder="Width"
            className="border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
            className="border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
          <input
            type="text"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            placeholder="Depth"
            className="border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          >
            <option value="cm">cm</option>
            <option value="inches">inches</option>
            <option value="feet">feet</option>
            <option value="mm">mm</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Preferred Finish
          </label>
          <select
            value={finish}
            onChange={(e) => setFinish(e.target.value)}
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          >
            {FINISH_OPTIONS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
            Installation Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Colombo 05 / Kandy"
            className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
          Additional Requirements
        </label>
        <textarea
          rows={3}
          value={additionalRequirements}
          onChange={(e) => setAdditionalRequirements(e.target.value)}
          placeholder="Tell us about wall type, mounting preferences, or custom layout notes..."
          className="w-full border border-soft-beige bg-warm-ivory/40 px-3.5 py-2.5 text-sm focus:outline-none focus:border-natural-oak"
        />
      </div>

      {/* Reference Image Preview */}
      <div className="border border-dashed border-natural-oak/50 bg-warm-ivory/50 p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <Upload className="w-5 h-5 text-natural-oak shrink-0" />
          <div className="text-sm">
            <span className="font-medium text-charcoal">
              Attach a Reference Sketch or Photo (Preview Only)
            </span>
            <p className="text-xs text-charcoal/60">
              Preview your reference image here. Note: You will need to attach the image manually inside the WhatsApp chat after opening.
            </p>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {previewUrl && (
          <div className="mt-4 flex items-center gap-4 bg-white p-3 border border-soft-beige">
            <img
              src={previewUrl}
              alt="Reference preview"
              className="w-16 h-16 object-cover border border-soft-beige"
            />
            <div className="text-xs space-y-1">
              <p className="font-medium text-charcoal flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                {previewName}
              </p>
              <p className="text-charcoal/65">
                Reminder: Please attach this image manually in WhatsApp once the message opens.
              </p>
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2.5 bg-charcoal text-warm-ivory hover:bg-natural-oak transition-colors py-3.5 px-6 text-sm font-semibold tracking-wide"
      >
        <MessageCircle className="w-4 h-4 text-brand-green" />
        Send Custom Quotation via WhatsApp
      </button>
    </form>
  );
}
