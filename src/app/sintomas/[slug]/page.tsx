import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { doctor, diseases, symptoms } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import DetailHeroImage from "@/components/DetailHeroImage";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import EntityCTA from "@/components/EntityCTA";
import FloatingButtons from "@/components/FloatingButtons";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};
  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: { title: symptom.seo.title, description: symptom.seo.description, url: `/sintomas/${symptom.slug}`, type: "article", locale: "es_MX" },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions.includes(d.id));
  const related = relatedConditions.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` }));

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />

      <DetailHeroImage
        src={symptom.image}
        alt={symptom.name}
        category="Síntoma"
        title={symptom.name}
        breadcrumbItems={[{ label: "Inicio", href: "/" }, { label: "Síntomas", href: "/sintomas" }, { label: symptom.name }]}
      >
        <MedicalReviewByline lastReviewed={symptom.lastReviewed} isDark />
      </DetailHeroImage>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-12">
      <article className="lg:col-span-8">
        <section>
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">¿Qué es {symptom.name.toLowerCase()}?</h2>
          <p className="mt-3 text-[var(--color-ink-600)]">{symptom.description}</p>
        </section>

        <AlarmSignsSection signs={symptom.alarmSigns} />

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Causas Posibles</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink-600)]">
            {symptom.causes.map((c, i) => (<li key={i} className="flex gap-2"><span className="text-[var(--color-blue-accent)]" aria-hidden="true">—</span>{c}</li>))}
          </ul>
        </section>

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">¿Por qué consultar?</h2>
          <p className="mt-3 text-[var(--color-ink-600)]">{symptom.whyConsult}</p>
        </section>

        {symptom.faqs && symptom.faqs.length > 0 && (
          <section className="mt-10 border-t border-[var(--color-line)] pt-8">
            <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Preguntas Frecuentes</h2>
            <div className="mt-4 space-y-4">
              {symptom.faqs.map((faq, i) => (
                <div key={i} className="border border-[var(--color-line)] p-4">
                  <h3 className="font-medium text-[var(--color-ink-900)]">{faq.question}</h3>
                  <p className="mt-1 text-sm text-[var(--color-ink-600)]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <EntityCTA
            message={`${doctor.title} ${doctor.name} atiende ${symptom.name.toLowerCase()} en consulta programada (no urgente).`}
            related={related}
          />
        </div>
      </aside>
      </div>

      <FloatingButtons context={symptom.name.toLowerCase()} />
    </>
  );
}
