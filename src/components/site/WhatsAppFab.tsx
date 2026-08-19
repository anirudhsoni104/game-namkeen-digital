import { MessageCircle } from "lucide-react";
import { brand, waLink } from "@/lib/brand";

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi Game Namkeen, I would like to know more about your products.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Enquire on WhatsApp at ${brand.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lift transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Enquire on WhatsApp</span>
    </a>
  );
}
