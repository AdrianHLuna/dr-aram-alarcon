import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { doctor, diseases, services, symptoms } from "@/data";
import { formatCredentials } from "@/lib/credentials";

const MAX_LINKS = 6;

export default function Footer() {
  const columns = [
    { title: "Enfermedades", href: "/enfermedades", items: diseases.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` })) },
    { title: "Servicios", href: "/servicios", items: services.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })) },
    { title: "Síntomas", href: "/sintomas", items: symptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })) },
  ];

  return (
    <footer className="border-t border-[var(--color-ink-700)] bg-[var(--color-ink-900)] text-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image src="/logo-light.png" alt="" width={400} height={400} className="h-28 w-auto md:h-32" aria-hidden="true" />
          <div>
            <p className="text-2xl font-semibold text-white">
              {doctor.title} {doctor.name}
            </p>
            <p className="clinical-label mt-1 text-[var(--color-blue-100)]">{doctor.specialty}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[var(--color-ink-700)] pt-8 text-sm md:grid-cols-3">
          <div>
            <p className="clinical-label mb-2 text-[var(--color-blue-100)]">Dirección</p>
            <p className="text-[var(--color-blue-100)]">
              {doctor.address}, {doctor.city}, {doctor.state}
            </p>
          </div>
          <div>
            <p className="clinical-label mb-2 text-[var(--color-blue-100)]">Horario</p>
            <p className="text-[var(--color-blue-100)]">{doctor.schedule}</p>
          </div>
          <div>
            <p className="clinical-label mb-2 text-[var(--color-blue-100)]">Contacto</p>
            <p className="text-[var(--color-blue-100)]">
              Citas: {doctor.phone}
              <br />
              {doctor.emergencyPhone && <span className="text-red-400">Urgencias: {doctor.emergencyPhone}</span>}
            </p>
          </div>
        </div>

        {/* Sitemap de navegación por categoría — refuerza el internal linking del grafo. */}
        <nav aria-label="Mapa del sitio" className="mt-8 grid gap-8 border-t border-[var(--color-ink-700)] pt-8 text-sm sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <Link href={col.href as Route} className="clinical-label text-[var(--color-blue-accent)] hover:text-white">
                {col.title}
              </Link>
              <ul className="mt-3 space-y-2 text-[var(--color-blue-100)]">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href as Route} className="hover:text-white hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
                {col.items.length > MAX_LINKS && (
                  <li>
                    <Link href={col.href as Route} className="underline hover:text-white">
                      Ver todos
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <p className="mt-8 border-t border-[var(--color-ink-700)] pt-6 text-xs text-[var(--color-blue-100)]/70">
          {formatCredentials(doctor)}
        </p>
        <p className="mt-4 max-w-2xl text-xs text-[var(--color-blue-100)]/70">
          El contenido de este sitio es informativo y educativo; no sustituye una consulta médica profesional.
        </p>
      </div>
    </footer>
  );
}
