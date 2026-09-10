import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateDiseaseSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import DetailHeroImage from "@/components/DetailHeroImage";
import EntityCTA from "@/components/EntityCTA";
import FloatingButtons from "@/components/FloatingButtons";

export const dynamicParams = false;

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/enfermedades/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};
  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
    alternates: { canonical: `/enfermedades/${disease.slug}` },
    openGraph: { title: disease.seo.title, description: disease.seo.description, url: `/enfermedades/${disease.slug}`, type: "article", locale: "es_MX" },
  };
}

export default async function DiseasePage(props: PageProps<"/enfermedades/[slug]">) {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServices = services.filter((s) => disease.relatedServices?.includes(s.id));
  const relatedSymptoms = symptoms.filter((s) => disease.relatedSymptoms?.includes(s.id));
  const related = [
    ...relatedServices.map((s) => ({ label: s.name, href: `/servicios/${s.slug}` })),
    ...relatedSymptoms.map((s) => ({ label: s.name, href: `/sintomas/${s.slug}` })),
  ];

  return (
    <>
      <StructuredData data={generateDiseaseSchemas(disease)} />

      <DetailHeroImage
        src={disease.image}
        alt={disease.name}
        category="Enfermedad"
        title={disease.name}
        breadcrumbItems={[{ label: "Inicio", href: "/" }, { label: "Enfermedades", href: "/enfermedades" }, { label: disease.name }]}
      >
        <MedicalReviewByline lastReviewed={disease.lastReviewed} isDark />
      </DetailHeroImage>

      <div className="grid grid-cols-2 divide-x divide-[var(--color-line)] border-b border-[var(--color-line)] bg-[var(--color-blue-100)]/15 sm:grid-cols-4">
        {[
          { label: "Síntomas", value: String(disease.symptoms.length) },
          { label: "Factores de Riesgo", value: String(disease.riskFactors.length) },
          { label: "Relacionados", value: String(related.length) },
          { label: "Revisado", value: disease.lastReviewed ?? "—" },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-4 text-center">
            <p className="font-mono text-lg font-semibold text-[var(--color-blue-accent)]">{stat.value}</p>
            <p className="clinical-label mt-1 text-[var(--color-ink-600)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-12">
      <article className="lg:col-span-8">
        <section>
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">¿Qué es {disease.name.toLowerCase()}?</h2>
          <p className="mt-3 text-[var(--color-ink-600)]">{disease.description}</p>
        </section>

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Síntomas</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink-600)]">
            {disease.symptoms.map((s, i) => (<li key={i} className="flex gap-2"><span className="text-[var(--color-blue-accent)]" aria-hidden="true">—</span>{s}</li>))}
          </ul>
        </section>

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Causas</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink-600)]">
            {disease.causes.map((c, i) => (<li key={i} className="flex gap-2"><span className="text-[var(--color-blue-accent)]" aria-hidden="true">—</span>{c}</li>))}
          </ul>
        </section>

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Factores de Riesgo</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink-600)]">
            {disease.riskFactors.map((r, i) => (<li key={i} className="flex gap-2"><span className="text-[var(--color-blue-accent)]" aria-hidden="true">—</span>{r}</li>))}
          </ul>
        </section>

        {disease.mexicoStats && (
          <section className="mt-10 border-l-4 border-[var(--color-blue-accent)] bg-[var(--color-blue-100)]/20 p-6">
            <span className="clinical-label text-[var(--color-ink-600)]">Estadísticas en México</span>
            <p className="mt-2 text-[var(--color-ink-600)]">{disease.mexicoStats}</p>
          </section>
        )}

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Complicaciones</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink-600)]">
            {disease.complications.map((c, i) => (<li key={i} className="flex gap-2"><span className="text-[var(--color-blue-accent)]" aria-hidden="true">—</span>{c}</li>))}
          </ul>
        </section>

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Tratamientos</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink-600)]">
            {disease.treatments.map((t, i) => (<li key={i} className="flex gap-2"><span className="text-[var(--color-blue-accent)]" aria-hidden="true">—</span>{t}</li>))}
          </ul>
        </section>

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Preguntas Frecuentes</h2>
          <div className="mt-4 space-y-4">
            {disease.faqs.map((faq, i) => (
              <div key={i} className="border border-[var(--color-line)] p-4">
                <h3 className="font-medium text-[var(--color-ink-900)]">{faq.question}</h3>
                <p className="mt-1 text-sm text-[var(--color-ink-600)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {disease.sources && disease.sources.length > 0 && (
          <section className="mt-10 border-t border-[var(--color-line)] pt-8 text-sm text-[var(--color-ink-600)]">
            <span className="clinical-label text-[var(--color-ink-600)]">Fuentes</span>
            <ul className="mt-2 list-inside list-disc">{disease.sources.map((src, i) => (<li key={i}>{src}</li>))}</ul>
          </section>
        )}
      </article>

      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <EntityCTA
            message={`${doctor.title} ${doctor.name} atiende ${disease.name.toLowerCase()} en ${doctor.city}.`}
            related={related}
          />
        </div>
      </aside>
      </div>

      <FloatingButtons context={disease.name.toLowerCase()} />
    </>
  );
}
