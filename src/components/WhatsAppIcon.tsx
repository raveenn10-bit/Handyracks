import React from "react";

type Props = {
  className?: string;
};

/** Official-style WhatsApp logo used on every WhatsApp button/link. */
export default function WhatsAppIcon({ className = "w-5 h-5" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/whatsapp-icon.png"
      alt=""
      aria-hidden="true"
      width={192}
      height={192}
      loading="lazy"
      decoding="async"
      className={`${className} shrink-0 rounded-full select-none pointer-events-none`}
    />
  );
}
