import { notFound } from "next/navigation";
import Link from "next/link";
import { diseases } from "@/data/diseases";
import { doctor, emergencyPhone } from "@/data/doctor";
import Breadcrumbs from "@/components/Breadcrumbs";
import StructuredData from "@/components/StructuredData";
import { FaWhatsapp, FaPhoneAlt, FaCheckCircle, FaExclamationTriangle, FaShieldAlt, FaQuestionCircle } from "react-icons/fa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return diseases.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
  };
}

export default async function DiseaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);

  if (!disease) {
    notFound();
  }

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${doctor.whatsapp.replace(/\D/g, "")}&text=${encodeURIComponent(`Hola Dr. Aram Alarcón, me gustaría agendar una valoración sobre ${disease.name}.`)}`;
  const emergencyUrl = `tel:${emergencyPhone}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: disease.name,
    description: disease.description,
    possibleTreatment: disease.treatments.map((t) => ({ "@type": "MedicalTherapy", name: t })),
    signOrSymptom: disease.symptoms.map((s) => ({ "@type": "MedicalSymptom", name: s }))
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6">
      <StructuredData data={schema} />

      <div className="max-w-7xl mx-auto space-y-10">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Padecimientos", href: "/enfermedades" },
            { label: disease.name }
          ]}
          isDark={false}
        />

        {/* Hero Dossier Header */}
        <div className="bg-[#102634] text-white p-8 lg:p-12 rounded-[3rem] shadow-2xl space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#B1D2E7] bg-[#4494C5]/20 px-4 py-1.5 rounded-full border border-[#4494C5]/30">
            Dossier Clínico Especializado
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            {disease.name}
          </h1>
          {disease.technicalName && (
            <span className="text-sm font-bold text-[#4494C5] block">
              Nombre Técnico: {disease.technicalName}
            </span>
          )}
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            {disease.description}
          </p>
        </div>

        {/* Medical Dashboard 8/4 Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Síntomas */}
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-[#102634] flex items-center gap-2">
                <FaExclamationTriangle className="text-rose-500 text-xl" /> Síntomas Característicos
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                {disease.symptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-[#F8FAFC] p-3 rounded-xl border border-slate-200">
                    <FaCheckCircle className="text-[#4494C5] text-sm mt-0.5 flex-shrink-0" />
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Causas y Factores de Riesgo */}
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-[#102634]">Etiología y Factores de Riesgo</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 font-medium">
                <div className="space-y-2">
                  <span className="text-xs font-black text-[#1A4174] uppercase tracking-wider block">Causas Principales:</span>
                  <ul className="space-y-1.5">
                    {disease.causes.map((c, i) => (
                      <li key={i} className="flex items-center gap-2">✓ {c}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-black text-[#1A4174] uppercase tracking-wider block">Factores de Riesgo:</span>
                  <ul className="space-y-1.5">
                    {disease.riskFactors.map((r, i) => (
                      <li key={i} className="flex items-center gap-2">✓ {r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Abordajes Médicos y Quirúrgicos (Sin Fármacos de Patente) */}
            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-[#102634]">Tratamientos y Opciones Quirúrgicas</h2>
              <ul className="space-y-3 text-xs font-semibold text-slate-800">
                {disease.treatments.map((tr, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <FaCheckCircle className="text-[#4494C5] text-base mt-0.5 flex-shrink-0" />
                    <span>{tr}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            {disease.faqs && (
              <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-4">
                <h2 className="text-2xl font-black text-[#102634] flex items-center gap-2">
                  <FaQuestionCircle className="text-[#4494C5]" /> Preguntas Frecuentes
                </h2>
                <div className="space-y-3">
                  {disease.faqs.map((f, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                      <h3 className="text-xs font-black text-[#102634]">{f.question}</h3>
                      <p className="text-xs text-slate-600 font-medium">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Side Dock Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="sticky top-28 bg-[#102634] text-white p-8 rounded-[2.5rem] border-2 border-[#4494C5]/30 shadow-2xl space-y-6">
              <div className="space-y-2 text-center">
                <span className="text-[10px] font-black text-[#B1D2E7] uppercase tracking-widest bg-[#4494C5]/20 px-3 py-1 rounded-full border border-[#4494C5]/30">
                  Consulta de Valoración
                </span>
                <h3 className="text-xl font-black text-white">{doctor.name}</h3>
                <span className="text-xs text-slate-300 font-bold block">{doctor.specialistTitle}</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A4174]/40 border border-[#4494C5]/20 space-y-2 text-xs text-slate-300 text-center">
                <span className="block text-xl font-black text-white">${doctor.consultationPrice} MXN</span>
                <span className="text-[10px] uppercase tracking-wider block text-[#B1D2E7]">Balcones de Galerías Cons. 929</span>
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
                <p>Céd. Prof. {doctor.cedula} • Céd. Esp. {doctor.cedulaEspecialidad}</p>
                <p>Aceptamos Seguros de Gastos Médicos Mayores</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
