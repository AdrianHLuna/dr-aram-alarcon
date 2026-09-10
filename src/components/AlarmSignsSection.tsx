import { AlertTriangle } from "lucide-react";

interface AlarmSignsSectionProps {
  signs: string[];
}

/** AISO v3.1 §3.8 — obligatoria en toda página de síntoma. Dirige a urgencias, nunca a WhatsApp. */
export default function AlarmSignsSection({ signs }: AlarmSignsSectionProps) {
  return (
    <section className="my-8 border-l-4 border-red-600 bg-red-50 p-6">
      <h2 className="clinical-label flex items-center gap-2 text-red-700">
        <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden="true" />
        Señales de alarma — acude a urgencias
      </h2>
      <p className="mt-3 text-sm text-red-700/90">
        Si presentas cualquiera de lo siguiente, acude de inmediato a un servicio de urgencias o llama a
        emergencias. No esperes a agendar una consulta ni escribas por WhatsApp.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-red-800">
        {signs.map((sign, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true">—</span>
            <span>{sign}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
