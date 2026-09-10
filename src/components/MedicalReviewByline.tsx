import { doctor } from "@/data";

interface MedicalReviewBylineProps {
  lastReviewed?: string;
  /** true sobre fondos oscuros (Hero de vistas de detalle) */
  isDark?: boolean;
}

/** AISO v3.1 §3.1 — obligatorio bajo el Hero de páginas de enfermedad/servicio/síntoma. */
export default function MedicalReviewByline({ lastReviewed, isDark = false }: MedicalReviewBylineProps) {
  const fecha = lastReviewed
    ? new Date(`${lastReviewed}T00:00:00`).toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" })
    : null;

  return (
    <p
      className={`border-l-2 py-1 pl-3 text-sm ${
        isDark ? "border-[var(--color-blue-accent)] text-[var(--color-blue-100)]" : "border-[var(--color-blue-accent)] text-[var(--color-ink-600)]"
      }`}
    >
      Revisado médicamente por {doctor.title} {doctor.name} — Cédula Profesional {doctor.cedula}.
      {fecha ? ` Última revisión: ${fecha}.` : ""}
    </p>
  );
}
