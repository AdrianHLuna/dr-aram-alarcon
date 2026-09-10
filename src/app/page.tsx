import Link from "next/link";
import { GraduationCap, Award, Wallet, Banknote, CreditCard, ArrowLeftRight, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateHomeSchemas } from "@/lib/schemas";
import { formatCredentials } from "@/lib/credentials";
import StructuredData from "@/components/StructuredData";
import ClinicalCard from "@/components/ClinicalCard";

const paymentIcons: Record<string, typeof Wallet> = {
  Efectivo: Banknote,
  Transferencia: ArrowLeftRight,
  "Tarjeta de débito": CreditCard,
  "Tarjeta de crédito": CreditCard,
};

export default function Home() {
  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* HERO — corte diagonal, no el bento/split rectangular de los otros 3 sitios. */}
      <section className="relative min-h-screen overflow-hidden bg-[var(--color-ink-900)] text-white">
        <div
          className="absolute inset-y-0 right-0 hidden w-[45%] bg-[var(--color-ink-800)] lg:block"
          style={{ clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-24 lg:flex-row lg:items-center lg:gap-12">
          <div className="animate-scan-reveal max-w-xl">
            <span className="clinical-label text-[var(--color-blue-100)]">{doctor.specialty}</span>
            <h1 className="mt-4 text-4xl leading-tight font-semibold lg:text-6xl">
              {doctor.title} {doctor.name}
            </h1>
            <p className="mt-6 text-lg text-[var(--color-blue-100)]">{doctor.subspecialty}</p>
            <p className="mt-2 text-sm text-[var(--color-blue-100)]/80">
              {doctor.city}, {doctor.state}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-white px-8 py-4 font-medium transition-colors hover:bg-white hover:text-[var(--color-ink-900)]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Agendar Cita
              </a>
              {doctor.emergencyPhone && (
                <a
                  href={`tel:${doctor.emergencyPhone}`}
                  className="clinical-label flex items-center gap-2 border-2 border-red-500 bg-red-950/30 px-6 py-4 text-red-400 transition-colors hover:bg-red-500 hover:text-white"
                >
                  Urgencias · {doctor.emergencyPhone}
                </a>
              )}
            </div>
          </div>

          {/* Panel de foto — placeholder hasta recibir "Fotos 2024" reales del doctor. */}
          <div className="relative mt-16 aspect-[4/5] w-full max-w-sm lg:mt-0" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}>
            <div className="flex h-full w-full items-center justify-center border border-[var(--color-blue-accent)]/30 bg-[var(--color-ink-800)] text-sm text-[var(--color-blue-100)]/70">
              Foto de {doctor.title} {doctor.name}
            </div>
          </div>
        </div>

        {/* Barra de estadísticas — datos tabulares en monospace, firma del sistema Estructura Clínica. */}
        {doctor.stats && doctor.stats.length > 0 && (
          <div className="relative grid grid-cols-1 border-t border-[var(--color-ink-700)] sm:grid-cols-3">
            {doctor.stats.map((stat, i) => (
              <div key={i} className="border-[var(--color-ink-700)] px-6 py-6 text-center sm:border-r last:border-r-0">
                <p className="font-mono text-3xl font-semibold text-[var(--color-blue-accent)]">{stat.value}</p>
                <p className="clinical-label mt-1 text-[var(--color-blue-100)]/80">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SOBRE MÍ — foto + bio + cédulas repetidas como badges (estructura habitual, AGENTS.md §3). */}
      <section aria-labelledby="about-heading" className="mx-auto max-w-5xl px-4 py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div className="relative aspect-[3/4] w-full max-w-xs">
            <div className="absolute -top-3 -left-3 h-full w-full border-2 border-[var(--color-blue-accent)]" aria-hidden="true" />
            <div className="relative flex h-full w-full items-center justify-center border border-[var(--color-line)] bg-[var(--color-blue-100)]/20 text-sm text-[var(--color-ink-600)]">
              Foto de {doctor.title} {doctor.name}
            </div>
          </div>
          <div>
            <span className="clinical-label text-[var(--color-blue-accent)]">Sobre el Especialista</span>
            <h2 id="about-heading" className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">
              {doctor.title} {doctor.name}
            </h2>
            <p className="mt-4 text-[var(--color-ink-600)]">{doctor.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {formatCredentials(doctor).split(" · ").map((cred, i) => (
                <span
                  key={i}
                  className="border border-[var(--color-blue-accent)]/40 bg-[var(--color-blue-100)]/30 px-3 py-1.5 font-mono text-[0.6875rem] font-medium tracking-wide text-[var(--color-ink-900)]"
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICACIONES Y FORMACIÓN — icono por tipo (no hay logos reales de instituciones aún). */}
      <section aria-labelledby="certifications-heading" className="border-y border-[var(--color-line)] bg-[var(--color-blue-100)]/15 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <span className="clinical-label text-[var(--color-blue-accent)]">Formación</span>
          <h2 id="certifications-heading" className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">
            Certificaciones y Formación
          </h2>
          <div className="mt-8 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
            {doctor.education.map((ed, i) => (
              <div key={`ed-${i}`} className="flex items-center gap-4 bg-white p-5">
                <GraduationCap className="h-8 w-8 shrink-0 text-[var(--color-blue-accent)]" aria-hidden="true" />
                <div>
                  <p className="font-medium text-[var(--color-ink-900)]">{ed.degree}</p>
                  <p className="clinical-label mt-1 text-[var(--color-ink-600)]">{ed.institution}</p>
                </div>
              </div>
            ))}
            {doctor.certifications.map((cert, i) => (
              <div key={`cert-${i}`} className="flex items-center gap-4 bg-white p-5">
                <Award className="h-8 w-8 shrink-0 text-[var(--color-blue-accent)]" aria-hidden="true" />
                <div>
                  <p className="font-medium text-[var(--color-ink-900)]">{cert.name}</p>
                  <p className="clinical-label mt-1 text-[var(--color-ink-600)]">{cert.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section aria-labelledby="services-heading" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <span className="clinical-label text-[var(--color-blue-accent)]">Procedimientos</span>
          <h2 id="services-heading" className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">
            Cirugías y Procedimientos
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
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

      {/* ENFERMEDADES */}
      <section aria-labelledby="diseases-heading" className="border-y border-[var(--color-line)] bg-[var(--color-blue-100)]/15 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <span className="clinical-label text-[var(--color-blue-accent)]">Padecimientos</span>
          <h2 id="diseases-heading" className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">
            Enfermedades que Atendemos
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
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

      {/* SÍNTOMAS — muestra 6 de 10, con enlace al listado completo. */}
      <section aria-labelledby="symptoms-heading" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <span className="clinical-label text-[var(--color-blue-accent)]">Orientación</span>
          <h2 id="symptoms-heading" className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">
            Síntomas
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {symptoms.slice(0, 6).map((symptom, i) => (
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
          <Link
            href="/sintomas"
            className="clinical-label mt-8 inline-flex items-center gap-2 border-b-2 border-[var(--color-blue-accent)] pb-1 text-[var(--color-blue-accent)]"
          >
            Ver los {symptoms.length} síntomas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* CTA GLOBAL */}
      <section className="relative overflow-hidden border-y border-[var(--color-ink-700)] bg-[var(--color-ink-900)] px-4 py-24 text-center text-white">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "repeating-linear-gradient(135deg, white 0, white 1px, transparent 1px, transparent 14px)" }}
          aria-hidden="true"
        />
        <div className="relative">
          <span className="clinical-label text-[var(--color-blue-100)]">Siguiente Paso</span>
          <h2 className="mt-3 text-3xl font-semibold">No dejes pasar tu movilidad</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-blue-100)]">
            Agenda tu valoración con {doctor.title} {doctor.name} y recibe un diagnóstico claro desde la primera consulta.
          </p>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-2 border-[var(--color-blue-accent)] bg-[var(--color-blue-accent)] px-8 py-4 font-medium text-white transition-colors hover:bg-transparent hover:text-[var(--color-blue-accent)]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Agendar Cita Ahora
          </a>
        </div>
      </section>

      {/* PRECIO + PAGOS + SEGUROS */}
      <section aria-labelledby="price-heading" className="px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="price-heading" className="text-3xl font-semibold text-[var(--color-ink-900)]">
            Precio de Consulta
          </h2>
          <p className="mt-6 font-mono text-5xl font-semibold text-[var(--color-blue-accent)]">
            ${doctor.consultationPrice.toLocaleString("es-MX")} <span className="text-2xl">MXN</span>
          </p>

          <div className="mt-10 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
            <div className="bg-white p-6 text-left">
              <p className="clinical-label text-[var(--color-ink-600)]">Métodos de Pago</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {doctor.paymentMethods.map((method) => {
                  const Icon = paymentIcons[method] ?? Wallet;
                  return (
                    <span key={method} className="flex items-center gap-2 border border-[var(--color-line)] px-3 py-2 text-sm text-[var(--color-ink-900)]">
                      <Icon className="h-4 w-4 text-[var(--color-blue-accent)]" aria-hidden="true" />
                      {method}
                    </span>
                  );
                })}
              </div>
            </div>
            {doctor.insurances && doctor.insurances.length > 0 && (
              <div className="bg-white p-6 text-left">
                <p className="clinical-label text-[var(--color-ink-600)]">Seguros Médicos</p>
                <div className="mt-4 flex items-start gap-3">
                  <ShieldCheck className="h-8 w-8 shrink-0 text-[var(--color-blue-accent)]" aria-hidden="true" />
                  <p className="text-sm text-[var(--color-ink-600)]">{doctor.insurances.join(", ")}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GALERÍA — oculta a pedido del usuario hasta tener fotos reales del
          consultorio. Comentada con `false &&` (no JSX comment normal) porque
          contiene su propio comentario interno anidado. Reactivar quitando
          el `false &&` cuando lleguen las fotos reales. */}
      {false && (
        <section aria-labelledby="gallery-heading" className="border-t border-[var(--color-line)] bg-[var(--color-blue-100)]/15 px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <span className="clinical-label text-[var(--color-blue-accent)]">Instalaciones</span>
            <h2 id="gallery-heading" className="section-heading mt-3 text-3xl font-semibold text-[var(--color-ink-900)]">
              Nuestro Consultorio
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-4 sm:grid-rows-2">
              <div className="col-span-2 row-span-2 flex aspect-square items-center justify-center bg-white text-sm text-[var(--color-ink-600)] sm:aspect-auto">
                Foto principal del consultorio
              </div>
              {["Sala de espera", "Consultorio", "Recepción", "Equipo médico"].map((label) => (
                <div key={label} className="flex aspect-square items-center justify-center bg-white p-3 text-center text-xs text-[var(--color-ink-600)]">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
