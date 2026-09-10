import type { Metadata } from "next";
import { diseases } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClinicalCard from "@/components/ClinicalCard";

export const metadata: Metadata = {
  title: "Enfermedades que Atendemos",
  description: "Catálogo de enfermedades y padecimientos traumatológicos y ortopédicos atendidos por el Dr. Aram Alarcón Valdéz en Monterrey, N.L.",
  alternates: { canonical: "/enfermedades" },
};

export default function DiseasesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <span className="clinical-label text-[var(--color-blue-accent)]">Padecimientos</span>
          <h1 className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">Enfermedades que Atendemos</h1>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {diseases.map((disease, i) => (
              <ClinicalCard
                key={disease.id}
                index={i + 1}
                title={disease.name}
                description={`${disease.description.slice(0, 110)}...`}
                href={`/enfermedades/${disease.slug}`}
                ctaLabel="Ver Guía Médica"
                image={disease.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
