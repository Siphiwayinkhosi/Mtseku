export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  "https://mtseku.vercel.app";

export const BUSINESS = {
  name: "Mtseku Transport Services",
  legalName: "Mtseku Transport Services (Pty) Ltd",
  phoneDisplay: "+27 78 868 6706",
  phoneHref: "tel:+27788686706",
  whatsapp: "https://wa.me/27788686706",
  email: "Tony.Noyila@outlook.com",
  emailHref: "mailto:Tony.Noyila@outlook.com",
  addresses: [
    {
      city: "Johannesburg",
      area: "Ferndale, Randburg",
      lines: ["11 Bottlebrush St, Ferndale", "Randburg, 2194", "South Africa"],
      directions:
        "https://maps.google.com/?q=11+Bottlebrush+St,+Ferndale,+Randburg,+2194,+South+Africa",
    },
    {
      city: "Cape Town",
      area: "Parklands, Cape Town",
      lines: ["61 Ravenswood Drive", "Parklands, Cape Town", "South Africa"],
      directions:
        "https://maps.google.com/?q=61+Ravenswood+Drive,+Parklands,+Cape+Town,+7441,+South+Africa",
    },
  ],
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Fleet", href: "/fleet" },
  { label: "Contact", href: "/contact" },
] as const;

export const whatsappBookingUrl = `${BUSINESS.whatsapp}?text=${encodeURIComponent(
  "Hello Mtseku Transport Services. I would like to request transport. Please assist me with a quote.",
)}`;
