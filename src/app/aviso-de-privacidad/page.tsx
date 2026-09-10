import type { Metadata } from "next";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: `Aviso de Privacidad Integral del consultorio del ${doctor.title} ${doctor.name} en ${doctor.city}, ${doctor.state}.`,
  alternates: { canonical: "/aviso-de-privacidad" },
};

export default function AvisoPrivacidadPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Aviso de Privacidad" }]} />
      <section className="mx-auto max-w-3xl space-y-8 px-4 py-12 text-sm leading-relaxed text-[var(--color-ink-600)]">
        <h1 className="text-3xl font-semibold text-[var(--color-ink-900)]">Aviso de Privacidad Integral</h1>

        <p>
          El consultorio médico del {doctor.title} {doctor.name} (en adelante &ldquo;El Responsable&rdquo;), con domicilio en{" "}
          {doctor.address}, {doctor.city}, {doctor.state}, es responsable del tratamiento y protección de sus datos personales, en cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
        </p>

        <div>
          <h2 className="border-t border-[var(--color-line)] pt-6 text-lg font-semibold text-[var(--color-ink-900)]">1. Finalidad del Tratamiento de Datos</h2>
          <p className="mt-2">
            Los datos personales recabados serán utilizados para la apertura e integración de su expediente clínico traumatológico y ortopédico, agendamiento de citas, programación de cirugías o procedimientos, trámites con aseguradoras de gastos médicos mayores y comunicación de seguimiento postoperatorio.
          </p>
        </div>

        <div>
          <h2 className="border-t border-[var(--color-line)] pt-6 text-lg font-semibold text-[var(--color-ink-900)]">2. Transparencia de Cédulas Profesionales</h2>
          <p className="mt-2">{formatCredentials(doctor)}</p>
        </div>

        <div>
          <h2 className="border-t border-[var(--color-line)] pt-6 text-lg font-semibold text-[var(--color-ink-900)]">3. Cookies y Analítica</h2>
          <p className="mt-2">
            Este sitio puede utilizar cookies y herramientas de analítica web (Google Analytics) para medir el uso del sitio de forma agregada. No se comparten datos clínicos a través de estas herramientas.
          </p>
        </div>

        <div>
          <h2 className="border-t border-[var(--color-line)] pt-6 text-lg font-semibold text-[var(--color-ink-900)]">4. Derechos ARCO</h2>
          <p className="mt-2">
            Usted tiene derecho a conocer qué datos personales tenemos, para qué los utilizamos y las condiciones del uso que les damos (Acceso); a solicitar la corrección de su información en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); a que la eliminemos de nuestros registros cuando considere que no está siendo utilizada adecuadamente (Cancelación); así como a oponerse al uso de sus datos personales para fines específicos (Oposición).
          </p>
        </div>
      </section>
    </>
  );
}
