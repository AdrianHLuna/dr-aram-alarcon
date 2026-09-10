import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { doctor, diseases, services } from "@/data";
import { generateServiceSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import DetailHeroImage from "@/components/DetailHeroImage";
import EntityCTA from "@/components/EntityCTA";
import FloatingButtons from "@/components/FloatingButtons";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: { title: service.seo.title, description: service.seo.description, url: `/servicios/${service.slug}`, type: "article", locale: "es_MX" },
  };
}

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedConditions = diseases.filter((d) => service.relatedConditions?.includes(d.id));
  const related = relatedConditions.map((d) => ({ label: d.name, href: `/enfermedades/${d.slug}` }));

  return (
    <>
      <StructuredData data={generateServiceSchemas(service)} />

      <DetailHeroImage
        src={service.image}
        alt={service.name}
        category="Procedimiento"
        title={service.name}
        breadcrumbItems={[{ label: "Inicio", href: "/" }, { label: "Servicios", href: "/servicios" }, { label: service.name }]}
      >
        <MedicalReviewByline lastReviewed={service.lastReviewed} isDark />
      </DetailHeroImage>

      <div className="grid grid-cols-2 divide-x divide-[var(--color-line)] border-b border-[var(--color-line)] bg-[var(--color-blue-100)]/15 sm:grid-cols-4">
        {[
          { label: "Tipo", value: service.type },
          { label: "Anestesia", value: service.anesthesiaType ?? "—" },
          { label: "Duración", value: service.duration ?? "—" },
          { label: "Recuperación", value: service.recoveryTime ?? "—" },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-4 text-center">
            <p className="font-mono text-sm font-semibold text-[var(--color-blue-accent)]">{stat.value}</p>
            <p className="clinical-label mt-1 text-[var(--color-ink-600)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-12">
      <article className="lg:col-span-8">
        <section>
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">¿En qué consiste {service.name.toLowerCase()}?</h2>
          <p className="mt-3 text-[var(--color-ink-600)]">{service.longDescription}</p>
        </section>

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Beneficios</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink-600)]">
            {service.benefits.map((b, i) => (<li key={i} className="flex gap-2"><span className="text-[var(--color-blue-accent)]" aria-hidden="true">—</span>{b}</li>))}
          </ul>
        </section>

        <section className="mt-10 border-t border-[var(--color-line)] pt-8">
          <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Cuidados Posteriores</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-ink-600)]">
            {service.postOpRecommendations.map((p, i) => (<li key={i} className="flex gap-2"><span className="text-[var(--color-blue-accent)]" aria-hidden="true">—</span>{p}</li>))}
          </ul>
        </section>

        {service.faqs && service.faqs.length > 0 && (
          <section className="mt-10 border-t border-[var(--color-line)] pt-8">
            <h2 className="section-heading text-xl font-semibold text-[var(--color-ink-900)]">Preguntas Frecuentes</h2>
            <div className="mt-4 space-y-4">
              {service.faqs.map((faq, i) => (
                <div key={i} className="border border-[var(--color-line)] p-4">
                  <h3 className="font-medium text-[var(--color-ink-900)]">{faq.question}</h3>
                  <p className="mt-1 text-sm text-[var(--color-ink-600)]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {service.priceRange && (
          <section className="mt-10 border-l-4 border-[var(--color-blue-accent)] bg-[var(--color-blue-100)]/20 p-6">
            <span className="clinical-label text-[var(--color-ink-600)]">Precio</span>
            <p className="mt-2 text-[var(--color-ink-600)]">{service.priceRange}</p>
          </section>
        )}
      </article>

      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <EntityCTA
            message={`Para darte el mejor tratamiento posible, ${doctor.title} ${doctor.name} requiere una valoración previa para ${service.name.toLowerCase()}.`}
            related={related}
          />
        </div>
      </aside>
      </div>

      <FloatingButtons context={service.name.toLowerCase()} />
    </>
  );
}
