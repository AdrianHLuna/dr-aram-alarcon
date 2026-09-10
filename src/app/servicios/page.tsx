import Link from "next/link";
import { services } from "@/data/services";
import { doctor } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardImageHeader from "@/components/CardImageHeader";
import { FaArrowRight, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: `Procedimientos y Cirugías de Cadera y Rodilla | ${doctor.name}`,
  description: `Cirugía de prótesis de cadera, reemplazo de rodilla, reconstrucción pélvica y artroscopia en Monterrey por el Dr. Aram Alarcón Valdéz.`,
};

export default function ServiciosPage() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${doctor.whatsapp.replace(/\D/g, "")}&text=${encodeURIComponent("Hola Dr. Aram Alarcón, me gustaría agendar una consulta de valoración.")}`;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Procedimientos" }]} isDark={false} />
        
        <div className="bg-[#102634] text-white p-8 lg:p-12 rounded-[3rem] shadow-2xl space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#B1D2E7] bg-[#4494C5]/20 px-4 py-1.5 rounded-full border border-[#4494C5]/30">
            Procedimientos Ortopédicos & Reemplazo Articular
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Cirugías y Procedimientos de Alta Especialidad
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            Reemplazo total de cadera de mínima invasión, cirugía de prótesis de rodilla, artroscopia y reconstrucción de pelvis en Monterrey, N.L.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv) => (
            <div key={srv.id} className="bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-xl overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-[#4494C5]/40 transition duration-300">
              <div>
                <CardImageHeader src={srv.image} alt={srv.name} category="servicio" badgeText={srv.type} />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-black text-[#102634] leading-snug">{srv.name}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">{srv.description}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/servicios/${srv.slug}`}
                  className="w-full py-4 px-6 rounded-2xl bg-[#102634] hover:bg-[#1A4174] text-white font-black text-xs uppercase tracking-wider flex items-center justify-between transition leading-snug"
                >
                  <span>Ver Ficha del Procedimiento</span>
                  <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl text-center space-y-4">
          <h3 className="text-2xl font-black text-[#102634]">¿Requieres valoración quirúrgica o segunda opinión?</h3>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#4494C5] text-white font-black text-xs uppercase tracking-wider hover:bg-[#347aa4] transition shadow-lg"
          >
            <FaWhatsapp size={18} /> Agendar Cita con el Dr. Aram Alarcón
          </a>
        </div>
      </div>
    </div>
  );
}
