"use client";

import { useState } from "react";
import { MapPin, MapIcon, Clock, Phone, Wallet, MessageCircle, PhoneCall } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(doctor.address)}&output=embed`;

  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <span className="clinical-label text-[var(--color-blue-accent)]">Ubicación y Contacto</span>
          <h1 className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">Contacto</h1>

          <div className="mt-8 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-[3fr_2fr]">
            {/* Mapa con facade — nunca el iframe (~1MB) en la carga inicial (§8.2). Bordeado, no full-bleed. */}
            <div className="relative h-[380px] bg-white lg:h-auto">
              {mapLoaded ? (
                <iframe src={mapsEmbedUrl} className="h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación del consultorio" />
              ) : (
                <button
                  type="button"
                  onClick={() => { trackEvent("clic_google_maps"); setMapLoaded(true); }}
                  className="group flex h-full w-full flex-col items-center justify-center gap-3 bg-[var(--color-blue-100)]/20 text-[var(--color-ink-600)] transition-colors hover:bg-[var(--color-blue-100)]/40"
                >
                  <span className="flex h-16 w-16 items-center justify-center border-2 border-[var(--color-blue-accent)] transition-transform group-hover:scale-105">
                    <MapPin className="h-7 w-7 text-[var(--color-blue-accent)]" aria-hidden="true" />
                  </span>
                  <span className="clinical-label text-[var(--color-ink-900)]">Ver mapa e indicaciones</span>
                </button>
              )}
            </div>

            {/* Panel de datos tabular — reemplaza el "dock flotante de vidrio" que usan los otros sitios. */}
            <div className="bg-white p-8">
              <dl className="space-y-6">
                <div className="flex gap-3">
                  <MapIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-blue-accent)]" aria-hidden="true" />
                  <div>
                    <dt className="clinical-label text-[var(--color-ink-600)]">Dirección</dt>
                    <dd className="mt-1 text-[var(--color-ink-900)]">{doctor.address}, {doctor.city}, {doctor.state}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-blue-accent)]" aria-hidden="true" />
                  <div>
                    <dt className="clinical-label text-[var(--color-ink-600)]">Horario</dt>
                    <dd className="mt-1 text-[var(--color-ink-900)]">{doctor.schedule}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-blue-accent)]" aria-hidden="true" />
                  <div>
                    <dt className="clinical-label text-[var(--color-ink-600)]">Citas</dt>
                    <dd className="mt-1 text-[var(--color-ink-900)]">{doctor.phone}</dd>
                  </div>
                </div>
                {doctor.emergencyPhone && (
                  <div className="flex gap-3 border-l-4 border-red-500 bg-red-50 py-2 pl-3">
                    <div>
                      <dt className="clinical-label text-red-600">Urgencias</dt>
                      <dd className="mt-1 font-medium text-red-600">{doctor.emergencyPhone}</dd>
                    </div>
                  </div>
                )}
                <div className="flex gap-3">
                  <Wallet className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-blue-accent)]" aria-hidden="true" />
                  <div>
                    <dt className="clinical-label text-[var(--color-ink-600)]">Métodos de Pago</dt>
                    <dd className="mt-1 text-[var(--color-ink-900)]">{doctor.paymentMethods.join(", ")}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#25D366] bg-[#25D366] py-3.5 text-center font-medium text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Agendar por WhatsApp
                </a>
                <a
                  href={`tel:${doctor.phone}`}
                  className="flex items-center justify-center gap-2 border border-[var(--color-ink-900)] py-3.5 text-center font-medium text-[var(--color-ink-900)] transition-colors hover:bg-[var(--color-ink-900)] hover:text-white"
                >
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  Llamar al Consultorio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
