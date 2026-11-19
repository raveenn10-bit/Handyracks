import type { Metadata } from "next";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";
import CustomQuoteForm from "@/components/CustomQuoteForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Handy Racks at 72/6, Mahabuthgamuwa, Angoda, Sri Lanka. Call 070 704 8888 or message on WhatsApp for custom furniture quotes.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold">
              Get in Touch
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
              Contact Handy Racks
            </h1>
            <p className="text-sm text-charcoal/75">
              Reach out by phone, WhatsApp, or email to discuss custom shelving, measurements, or commercial showroom installations.
            </p>
          </div>

          <div className="bg-white border border-soft-beige p-6 space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-natural-oak shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-charcoal">Workshop &amp; Address</p>
                <p className="text-charcoal/75">{BUSINESS_INFO.address}</p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:underline mt-1"
                >
                  Get Directions on Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-natural-oak shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-charcoal">Telephone</p>
                <a
                  href={BUSINESS_INFO.telephoneHref}
                  className="text-charcoal/75 hover:text-natural-oak"
                >
                  {BUSINESS_INFO.telephoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <WhatsAppIcon className="w-6 h-6" />
              <div>
                <p className="font-semibold text-charcoal">WhatsApp</p>
                <a
                  href={BUSINESS_INFO.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal/75 hover:text-natural-oak"
                >
                  {BUSINESS_INFO.whatsappDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-natural-oak shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-charcoal">Email</p>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-charcoal/75 hover:text-natural-oak"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Enquiry Form */}
        <div className="lg:col-span-7">
          <CustomQuoteForm />
        </div>
      </div>
    </div>
  );
}
