"use client";

import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

interface FloatingButtonsProps {
  context?: string;
}

const FloatingButtons = ({ context }: FloatingButtonsProps) => {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const message = context
    ? `Hola, ${doctor.title} ${doctor.name}. Vi su página sobre ${context} y me gustaría agendar una valoración.`
    : `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`;
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`;

  const buttonBaseClass =
    "group flex h-14 items-center gap-2 overflow-hidden border text-white shadow-[0_8px_20px_-6px_rgba(16,38,52,0.4)] transition-all relative z-50 pl-3 pr-3 hover:pr-5";

  return (
    <div className="fixed right-5 bottom-5 z-50 hidden flex-col items-end gap-3 md:flex">
      <a
        target="_blank"
        href={whatsappLink}
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className={`${buttonBaseClass} border-[#1c8f4d] bg-[#25D366]`}
        onClick={() => trackEvent("clic_whatsapp", { source: "floating" })}
      >
        <MessageCircle size={22} className="shrink-0" />
        <span className="clinical-label max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all group-hover:max-w-[120px] group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
      <a
        href={`tel:${doctor.phone}`}
        aria-label="Llamar al doctor"
        className={`${buttonBaseClass} border-[var(--color-ink-700)] bg-[var(--color-ink-900)]`}
        onClick={() => trackEvent("clic_llamar", { source: "floating" })}
      >
        <Phone size={18} className="shrink-0" />
        <span className="clinical-label max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all group-hover:max-w-[80px] group-hover:opacity-100">
          Llamar
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
