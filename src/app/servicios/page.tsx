import type { Metadata } from "next";
import { services } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClinicalCard from "@/components/ClinicalCard";

export const metadata: Metadata = {
  title: "Cirugías y Procedimientos",
  description: "Catálogo de cirugías y procedimientos traumatológicos y ortopédicos realizados por el Dr. Aram Alarcón Valdéz en Monterrey, N.L.",
  alternates: { canonical: "/servicios" },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <span className="clinical-label text-[var(--color-blue-accent)]">Procedimientos</span>
          <h1 className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">Cirugías y Procedimientos</h1>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ClinicalCard
                key={service.id}
                index={i + 1}
                title={service.name}
                description={service.description}
                href={`/servicios/${service.slug}`}
                ctaLabel="Ver Ficha del Procedimiento"
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
