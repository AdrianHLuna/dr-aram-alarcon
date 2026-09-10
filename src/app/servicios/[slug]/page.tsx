import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { doctor, emergencyPhone } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaClock, FaHeartbeat, FaShieldAlt } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${doctor.whatsapp.replace(/\D/g, "")}&text=${encodeURIComponent(`Hola Dr. Aram Alarcón, me gustaría consultar información sobre ${service.name}.`)}`;
  const emergencyUrl = `tel:${emergencyPhone}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.description,
    bodyLocation: "Cadera, Pelvis y Rodilla",
    howPerformed: service.longDescription
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <StructuredData data={schema} />

      <div className="max-w-7xl mx-auto space-y-10">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Procedimientos", href: "/servicios" },
            { label: service.name }
          ]}
          isDark={false}
        />

        {/* Hero Header */}
        <div className="bg-[#102634] text-white p-8 lg:p-12 rounded-[3rem] shadow-2xl space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#B1D2E7] bg-[#4494C5]/20 px-4 py-1.5 rounded-full border border-[#4494C5]/30">
            Ficha del Procedimiento Quirúrgico
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            {service.name}
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            {service.longDescription}
          </p>
        </div>

        {/* Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Beneficios */}
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-[#102634]">Beneficios Principales</h2>
              <ul className="space-y-3 text-xs font-semibold text-slate-800">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <FaCheckCircle className="text-[#4494C5] text-base mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recomendaciones Postoperatorias */}
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-[#102634]">Cuidados y Recomendaciones Postoperatorias</h2>
              <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
                {service.postOpRecommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#4494C5] font-black">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Especificaciones */}
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-[#102634]">Ficha Técnica del Procedimiento</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {service.duration && (
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-[10px] font-black text-[#4494C5] uppercase block">Duración Estimada:</span>
                    <span className="font-bold text-[#102634]">{service.duration}</span>
                  </div>
                )}
                {service.anesthesiaType && (
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-[10px] font-black text-[#4494C5] uppercase block">Tipo de Anestesia:</span>
                    <span className="font-bold text-[#102634]">{service.anesthesiaType}</span>
                  </div>
                )}
                {service.recoveryTime && (
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-[10px] font-black text-[#4494C5] uppercase block">Tiempo de Recuperación:</span>
                    <span className="font-bold text-[#102634]">{service.recoveryTime}</span>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Dock Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 bg-[#102634] text-white p-8 rounded-[2.5rem] border-2 border-[#4494C5]/30 shadow-2xl space-y-6">
              <div className="space-y-2 text-center">
                <span className="text-[10px] font-black text-[#B1D2E7] uppercase tracking-widest bg-[#4494C5]/20 px-3 py-1 rounded-full border border-[#4494C5]/30">
                  Agendamiento Quirúrgico
                </span>
                <h3 className="text-xl font-black text-white">{doctor.name}</h3>
                <span className="text-xs text-slate-300 font-bold block">{doctor.specialistTitle}</span>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-2xl bg-[#4494C5] hover:bg-[#347aa4] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-xl"
                >
                  <FaWhatsapp size={18} /> Agendar Cita por WhatsApp
                </a>
                <a
                  href={emergencyUrl}
                  className="w-full py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <FaPhoneAlt size={14} /> Urgencias 24/7 ({emergencyPhone})
                </a>
              </div>

              <div className="pt-2 text-center text-[10px] text-slate-400 font-medium">
                <p>Aceptamos Seguros de Gastos Médicos Mayores</p>
                <p>Balcones de Galerías consultorio 929, Monterrey, N.L.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
