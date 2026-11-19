export const BUSINESS_INFO = {
  name: "Handy Racks",
  tagline: "Customized Shelving & Display Solutions — Made for Your Space.",
  industry: "Customized Furniture, Shelving, Display Racks & Interior Storage Solutions",
  address: "72/6, Mahabuthgamuwa, Angoda, Sri Lanka",
  telephoneDisplay: "070 704 8888",
  telephoneHref: "tel:+94707048888",
  whatsappNumber: "94707048888",
  whatsappDisplay: "+94 70 704 8888",
  whatsappBaseUrl: "https://wa.me/94707048888",
  email: "handyracks@gmail.com",
  facebookUrl: "https://www.facebook.com/handyracks/",
  googleMapsUrl: "https://maps.app.goo.gl/x4jQ6eHkHmXytZhN9?g_st=ic",
  facebookFollowers: "17K",
  facebookRecommendations: "100% recommend (11 Reviews)",
  developerCredit: "Developed by Harsh Apex Digital Solutions",
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export interface CustomQuotePayload {
  name: string;
  phone: string;
  product: string;
  preferredDesign: string;
  width: string;
  height: string;
  depth: string;
  unit: string;
  finish: string;
  quantity: string;
  location: string;
  additionalRequirements: string;
}

export function formatCustomQuoteMessage(data: CustomQuotePayload): string {
  return [
    "Hello Handy Racks!",
    "",
    "I would like to request a customized furniture quotation.",
    "",
    `Name: ${data.name || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Product: ${data.product || "-"}`,
    `Preferred Design: ${data.preferredDesign || "-"}`,
    `Width: ${data.width || "-"}`,
    `Height: ${data.height || "-"}`,
    `Depth: ${data.depth || "-"}`,
    `Measurement Unit: ${data.unit || "cm"}`,
    `Finish: ${data.finish || "-"}`,
    `Quantity: ${data.quantity || "1"}`,
    `Location: ${data.location || "-"}`,
    `Additional Requirements: ${data.additionalRequirements || "None"}`,
    "",
    "Please provide a quotation and further details.",
  ].join("\n");
}
