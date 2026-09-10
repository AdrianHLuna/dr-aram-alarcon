import Link from "next/link";
import type { Route } from "next";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { doctor } from "@/data";

interface RelatedItem {
  label: string;
  href: string;
}

interface EntityCTAProps {
  message: string;
  related: RelatedItem[];
  relatedLabel?: string;
}

/**
 * CTA individual + Relacionados — v3. Corrección sobre la v2: el usuario
 * pidió que ambos compartan la MISMA columna lateral (uno arriba del otro),
 * no que se repartan en 2 columnas independientes. Esta columna se coloca
 * junto al contenido principal en el layout de la página (no al final de
 * todo, apilada a lo ancho) — ver enfermedades/[slug]/page.tsx y hermanas,
 * que envuelven esto en un grid de 2 columnas junto al <article>.
 */
export default function EntityCTA({ message, related, relatedLabel = "Relacionados" }: EntityCTAProps) {
  const whatsappLink = `https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <div className="border border-[var(--color-line)]">
      <div className="bg-[var(--color-ink-900)] p-6 text-white">
        <span className="clinical-label text-[var(--color-blue-100)]">Siguiente Paso</span>
        <p className="mt-3 font-medium">{message}</p>
        <div className="mt-5 flex flex-col gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 border border-[#25D366] bg-[#25D366] px-4 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Agendar por WhatsApp
          </a>
          <a
            href={`tel:${doctor.phone}`}
            className="flex items-center justify-center gap-2 border border-white/40 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[var(--color-ink-900)]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Llamar al Consultorio
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <div className="border-t border-[var(--color-line)] bg-white p-6">
          <span className="clinical-label text-[var(--color-ink-600)]">{relatedLabel}</span>
          <ul className="mt-3 divide-y divide-[var(--color-line)]">
            {related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href as Route}
                  className="group flex items-center justify-between py-3 text-sm text-[var(--color-ink-900)] transition-colors hover:text-[var(--color-blue-accent)]"
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-blue-accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
