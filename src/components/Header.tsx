import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Header — "Estructura Clínica". v2: la v1 dependía solo de la imagen del
 * logo para el nombre/especialidad y a tamaño chico no se leía bien
 * (feedback real). Ahora el isotipo (imagen) va acompañado de texto HTML
 * real — nombre en negrita + especialidad en monospace — que SIEMPRE es
 * nítido sin importar la resolución de la imagen (AGENTS.md §6).
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur relative">
      <div className="hidden items-center justify-center gap-1 border-b border-[var(--color-line)] bg-[var(--color-ink-900)] px-4 py-2 md:flex">
        {/* Formato exacto "Céd Prof"/"Céd Esp" (mayúsculas/minúsculas tal cual) — NO usar
            .clinical-label aquí porque su text-transform:uppercase lo rompería. */}
        <span className="font-mono text-[0.6875rem] font-medium tracking-wide text-[var(--color-blue-100)]">
          {formatCredentials(doctor)}
        </span>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-3 py-3" aria-label={`${doctor.title} ${doctor.name}`}>
          <Image src="/logo-navy.png" alt="" width={220} height={220} className="h-14 w-auto md:h-16" priority aria-hidden="true" />
          <span className="leading-tight">
            <span className="block text-base font-semibold text-[var(--color-ink-900)] md:text-lg">
              {doctor.title} {doctor.name}
            </span>
            <span className="clinical-label block text-[var(--color-blue-accent)]">{doctor.specialty}</span>
          </span>
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="clinical-label whitespace-nowrap text-[var(--color-ink-900)] transition-colors hover:text-[var(--color-blue-accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="clinical-label flex shrink-0 items-center gap-2 whitespace-nowrap border border-[#25D366] bg-[#25D366] px-4 py-2.5 text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
