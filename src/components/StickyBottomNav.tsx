"use client";

import { CalendarCheck, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

/** Sticky Bottom Nav móvil — AISO v3.1 §3.1. Solo visible en móvil. */
export default function StickyBottomNav() {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`
  );

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex shadow-[0_-8px_20px_-6px_rgba(16,38,52,0.25)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${doctor.phone}`}
        onClick={() => trackEvent("clic_agendar_cita", { source: "sticky_nav" })}
        className="clinical-label relative flex min-h-[44px] w-[70%] items-center justify-center gap-2 border-t border-r border-[var(--color-ink-700)] bg-[var(--color-ink-900)] py-3 text-white"
      >
        <span className="motion-safe:animate-ping absolute inset-0 bg-[var(--color-blue-accent)]/40" aria-hidden="true" />
        <CalendarCheck className="relative h-4 w-4" aria-hidden="true" />
        <span className="relative">Agendar Cita</span>
      </a>
      <a
        href={`https://wa.me/${cleanWhatsapp}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("clic_whatsapp", { source: "sticky_nav" })}
        className="clinical-label flex min-h-[44px] w-[30%] items-center justify-center gap-1.5 border-t border-[#1c8f4d] bg-[#25D366] py-3 text-white"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
