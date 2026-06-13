import { MessageCircle } from "lucide-react";
import { whatsappBookingUrl } from "@/lib/site";

const WhatsAppFloat = () => (
  <a
    className="whatsapp-button"
    href={whatsappBookingUrl}
    target="_blank"
    rel="noreferrer"
    aria-label="Book transport with Mtseku on WhatsApp"
  >
    <MessageCircle aria-hidden="true" />
    <span>WhatsApp</span>
  </a>
);

export default WhatsAppFloat;
