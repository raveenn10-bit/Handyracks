import type { Metadata } from "next";
import CustomQuoteForm from "@/components/CustomQuoteForm";

export const metadata: Metadata = {
  title: "Custom Design & Quotation",
  description:
    "Request customized furniture, shelving dimensions, finishes, and commercial display racks from Handy Racks Sri Lanka via WhatsApp.",
};

export default function CustomDesignPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="space-y-3 mb-8 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-natural-oak font-semibold">
          Tailored to Your Measurements
        </span>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
          Request a Custom Furniture Quotation
        </h1>
        <p className="text-sm sm:text-base text-charcoal/75 max-w-2xl mx-auto">
          Enter your preferred design, custom dimensions, finish, and installation location. Clicking submit formats your full specification directly into WhatsApp.
        </p>
      </div>
      <CustomQuoteForm />
    </div>
  );
}
