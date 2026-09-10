import React from "react";
import { doctor, emergencyPhone } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaShieldAlt, FaAmbulance, FaDirections } from "react-icons/fa";

export const metadata = {
  title: `Ubicación y Contacto | ${doctor.name} - Monterrey`,
  description: `Ubicación del consultorio del ${doctor.name} en Balcones de Galerías, Monterrey, N.L. Teléfonos de agendamiento y Urgencias 24/7.`,
};

export default function ContactoPage() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${doctor.whatsapp.replace(/\D/g, "")}&text=${encodeURIComponent("Hola Dr. Aram Alarcón, me gustaría agendar una consulta de valoración.")}`;
  const emergencyUrl = `tel:${emergencyPhone}`;

  // Google Maps embed URL for Ecuador 2331, Balcones de Galerias, Monterrey
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.666113697926!2d-100.36294!3d25.67406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8672995a9ff752b7%3A0xa1969a60edcf1c3e!2sEcuador%202331%2C%20Balcones%20de%20Galer%C3%ADas%2C%2064620%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx";

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* Header Breadcrumb section */}
      <div className="bg-[#102634] text-white py-8 px-6 border-b border-[#4494C5]/20">
        <div className="max-w-7xl mx-auto space-y-4">
          <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto y Ubicación" }]} isDark={true} />
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Ubicación del Consultorio y Urgencias 24/7
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-medium">
            Atención ortopédica y traumatológica especializada en Balcones de Galerías, Monterrey, N.L.
          </p>
        </div>
      </div>

      {/* ─── RULE 7: 100% FULL-WIDTH INTERACTIVE GOOGLE MAPS CANVAS WITH FLOATING GLASS DOCK OVERLAY ─── */}
      <section className="relative w-full h-[540px] bg-slate-200 overflow-hidden border-b border-slate-300">
        
        {/* Full-width Google Maps Iframe */}
        <iframe
          title="Ubicación Dr. Aram Alarcón Valdéz"
          src={mapEmbedUrl}
          className="w-full h-full border-0 filter grayscale-[20%] contrast-[105%]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Floating Glass Dock Overlay */}
        <div className="absolute top-6 left-6 right-6 sm:right-auto sm:max-w-md bg-[#102634]/95 text-white p-6 rounded-[2.5rem] border-2 border-[#4494C5]/40 shadow-2xl backdrop-blur-xl space-y-4 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#4494C5] text-white font-black flex items-center justify-center text-lg">
              AA
            </div>
            <div>
              <h3 className="text-base font-black text-white">{doctor.name}</h3>
              <span className="text-[10px] font-bold text-[#B1D2E7] uppercase tracking-wider block">
                Balcones de Galerías • Consultorio 929
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            {doctor.address}
          </p>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={doctor.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#4494C5] hover:bg-[#347aa4] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md"
            >
              <FaDirections size={16} /> Abrir en Google Maps
            </a>
            <a
              href={emergencyUrl}
              className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-md"
            >
              <FaAmbulance size={16} /> Llamar Urgencias ({emergencyPhone})
            </a>
          </div>
        </div>

      </section>

      {/* 3 Horizontal Information Cards Below Map */}
      <section className="py-16 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Dirección y Consultorio */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#4494C5]/10 text-[#4494C5] flex items-center justify-center text-2xl font-black">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-black text-[#102634]">Dirección del Consultorio</h3>
            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              Ecuador 2331-Consultorio 929, Piso 9, Balcones de Galerías, C.P. 64620, Monterrey, N.L.
            </p>
            <span className="text-[11px] font-bold text-[#4494C5] block">
              Consulta Presencial: $1,000 MXN
            </span>
          </div>

          {/* Card 2: Horarios de Atención */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1A4174]/10 text-[#1A4174] flex items-center justify-center text-2xl font-black">
              <FaClock />
            </div>
            <h3 className="text-xl font-black text-[#102634]">Horario de Atención</h3>
            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              Lunes a Domingo: 09:00 a 18:00 hrs <br />
              Atención médica de urgencias las 24 horas.
            </p>
            <span className="text-[11px] font-bold text-rose-600 block">
              Urgencias: 618 167 7169
            </span>
          </div>

          {/* Card 3: Formas de Pago y Seguros */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#102634]/10 text-[#102634] flex items-center justify-center text-2xl font-black">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-black text-[#102634]">Cobro y Seguros</h3>
            <p className="text-xs text-slate-600 font-semibold leading-relaxed">
              Efectivo, Transferencia, Tarjeta de Débito y Crédito. Aceptamos Seguros de Gastos Médicos Mayores.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black text-[#4494C5] hover:underline"
            >
              <FaWhatsapp /> Contactar por WhatsApp &rarr;
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
