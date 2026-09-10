import React from "react";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: `Aviso de Privacidad | ${doctor.name}`,
  description: `Aviso de Privacidad Integral del consultorio del ${doctor.name} en Monterrey, N.L.`,
};

export default function AvisoPrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8 text-slate-700">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Aviso de Privacidad" }]} isDark={false} />
        
        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-6 text-xs leading-relaxed font-medium">
          <h1 className="text-3xl font-black text-[#102634]">Aviso de Privacidad Integral</h1>
          <p>
            El consultorio médico del {doctor.name} (en adelante "El Responsable"), con domicilio en {doctor.address}, es responsable del tratamiento y protección de sus datos personales.
          </p>
          <h2 className="text-base font-black text-[#102634] pt-2">1. Finalidad del Tratamiento de Datos</h2>
          <p>
            Los datos personales recabados serán utilizados para la apertura e integración de su expediente clínico ortopédico, agendamiento de citas, programación de cirugías o procedimientos de reemplazo articular, trámites con aseguradoras de gastos médicos mayores y comunicación de seguimiento postoperatorio.
          </p>
          <h2 className="text-base font-black text-[#102634] pt-2">2. Transparencia de Cédulas Profesionales</h2>
          <p>
            El {doctor.name} cuenta con la Cédula Profesional {doctor.cedula} como Médico Cirujano expedida por la Universidad Juárez del Estado de Durango y la Cédula de Especialidad {doctor.cedulaEspecialidad} en Traumatología y Ortopedia expedida por la Universidad de Monterrey. Permiso COFEPRIS en trámite oficial.
          </p>
          <h2 className="text-base font-black text-[#102634] pt-2">3. Derechos ARCO</h2>
          <p>
            Usted tiene derecho a conocer qué datos personales tenemos, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
          </p>
        </div>
      </div>
    </div>
  );
}
