import type { Metadata } from "next";
import { symptoms } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClinicalCard from "@/components/ClinicalCard";

export const metadata: Metadata = {
  title: "Síntomas",
  description: "Guía de síntomas traumatológicos y ortopédicos que atiende el Dr. Aram Alarcón Valdéz en Monterrey, N.L.",
  alternates: { canonical: "/sintomas" },
};

export default function SymptomsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <span className="clinical-label text-[var(--color-blue-accent)]">Orientación</span>
          <h1 className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">Síntomas</h1>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((symptom, i) => (
              <ClinicalCard
                key={symptom.id}
                index={i + 1}
                title={symptom.name}
                description={`${symptom.description.slice(0, 110)}...`}
                href={`/sintomas/${symptom.slug}`}
                ctaLabel="Ver Orientación Médica"
                image={symptom.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
