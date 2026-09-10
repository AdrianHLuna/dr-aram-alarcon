"use client";

import Link from "next/link";
import Image from "next/image";
import { doctor, emergencyPhone } from "@/data/doctor";
import { diseases } from "@/data/diseases";
import { services } from "@/data/services";
import { symptoms } from "@/data/symptoms";
import { faqs } from "@/data/faq";
import { testimonials } from "@/data/testimonials";
import CardImageHeader from "@/components/CardImageHeader";
import StructuredData from "@/components/StructuredData";
import { motion } from "framer-motion";
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaAmbulance, 
  FaCheckCircle, 
  FaShieldAlt, 
  FaStar, 
  FaMapMarkerAlt, 
  FaUserMd, 
  FaBone, 
  FaHeartbeat, 
  FaArrowRight,
  FaHospital,
  FaClock,
  FaAward
} from "react-icons/fa";

export default function Home() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${doctor.whatsapp.replace(/\D/g, "")}&text=${encodeURIComponent("Hola Dr. Aram Alarcón, me gustaría agendar una consulta de valoración.")}`;
  const emergencyUrl = `tel:${emergencyPhone}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: doctor.specialty,
    telephone: doctor.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: doctor.address,
      addressLocality: doctor.city,
      addressRegion: doctor.state,
      postalCode: "64620",
      addressCountry: "MX"
    },
    url: "https://dr-aram-alarcon.com"
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans relative overflow-hidden">
      <StructuredData data={schema} />

      {/* ─── HERO SECTION (100vh) ──────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center py-16 px-6 relative overflow-hidden bg-gradient-to-b from-[#102634] via-[#1A4174] to-[#102634] text-white border-b border-[#4494C5]/30">
        
        {/* Soft Ambient Light Circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4494C5]/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeUp}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4494C5]/20 text-[#B1D2E7] font-extrabold text-xs uppercase tracking-widest border border-[#4494C5]/40 backdrop-blur-md shadow-sm">
                <FaAward className="text-[#4494C5]" /> Alta Especialidad en Cadera y Pelvis (IMSS UMAE 21)
              </div>

              <h1 className="text-4xl sm:text-6xl font-black leading-[1.08] tracking-tight text-white">
                Recupera tu Movilidad Sin Dolor <br />
                con la Experiencia del <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4494C5] via-[#B1D2E7] to-white">
                  {doctor.name}
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
                Especialista en Traumatología y Ortopedia enfocado en Reemplazo Articular (Prótesis de Cadera y Rodilla), Reconstrucción de Pelvis y Artroscopia Mínima Invasiva en Monterrey.
              </p>

              {/* Action Buttons Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-[#4494C5] hover:bg-[#347aa4] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition shadow-xl shadow-[#4494C5]/30"
                >
                  <FaWhatsapp size={18} /> Agendar Consulta ($1,000 MXN)
                </a>
                <a
                  href={emergencyUrl}
                  className="w-full sm:w-auto px-7 py-4.5 rounded-2xl bg-rose-600/90 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider border border-rose-400/40 flex items-center justify-center gap-2 transition shadow-md"
                >
                  <FaPhoneAlt size={14} /> Urgencias 24/7 ({emergencyPhone})
                </a>
              </div>

              {/* Quick Info Badges */}
              <div className="pt-4 border-t border-[#4494C5]/20 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-semibold">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#4494C5]" />
                  <span>Acepta Seguros de Gastos Médicos</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#4494C5]" />
                  <span>Balcones de Galerías Cons. 929</span>
                </div>
              </div>
            </motion.div>

            {/* Right Card Feature Column (Stats & Visual Frame) */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeUp}
              className="lg:col-span-5 space-y-4"
            >
              <div className="bg-[#102634]/90 p-8 rounded-[3rem] border-2 border-[#4494C5]/30 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-[#4494C5]/20 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#4494C5]/20 text-[#4494C5] font-black text-xl flex items-center justify-center">
                      AA
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{doctor.name}</h3>
                      <span className="text-[11px] font-bold text-[#B1D2E7] uppercase tracking-wider block">
                        Céd. Prof. {doctor.cedula} • Céd. Esp. {doctor.cedulaEspecialidad}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3D Clinical Stat Counters */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3.5 rounded-2xl bg-[#1A4174]/50 border border-[#4494C5]/20">
                    <span className="block text-2xl font-black text-[#4494C5]">+3,500</span>
                    <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider">Pacientes</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#1A4174]/50 border border-[#4494C5]/20">
                    <span className="block text-2xl font-black text-[#B1D2E7]">+1,500</span>
                    <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider">Cirugías</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#1A4174]/50 border border-[#4494C5]/20">
                    <span className="block text-2xl font-black text-white">+5 Años</span>
                    <span className="text-[10px] font-extrabold text-slate-300 uppercase tracking-wider">Experiencia</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#1A4174]/30 border border-[#4494C5]/20 space-y-1 text-xs text-slate-300 font-medium">
                  <span className="text-[11px] font-black text-[#4494C5] uppercase tracking-wider block">
                    Consejo Mexicano de Ortopedia:
                  </span>
                  <p>Miembro activo certificado en constante actualización de técnicas mínimamente invasivas.</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ─── SECCIÓN ABOUT ME / SEMBLANZA MÉDICA ─────────────────────────────── */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Dedicated Photo Frame Container (Rule 5 aspect-[3/4]) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-[3rem] overflow-hidden border-4 border-slate-100 shadow-2xl bg-[#102634] p-2">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative bg-gradient-to-br from-[#102634] via-[#1A4174] to-[#102634] flex flex-col items-center justify-between p-8 text-center text-white">
                  <div className="w-24 h-24 rounded-full bg-[#4494C5] text-white font-black text-4xl flex items-center justify-center shadow-xl border-4 border-white/20 my-auto">
                    AA
                  </div>
                  <div className="space-y-2 mb-4">
                    <h3 className="text-xl font-black text-white">{doctor.name}</h3>
                    <span className="text-xs font-extrabold text-[#B1D2E7] uppercase tracking-wider block">
                      Alta Especialidad en Cadera y Pelvis
                    </span>
                    <span className="text-[11px] font-bold text-slate-300 block">
                      IMSS UMAE Hospital de Traumatología No. 21
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography & Certifications Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#4494C5] bg-[#4494C5]/10 px-4 py-1.5 rounded-full border border-[#4494C5]/20">
                Trayectoria Quirúrgica
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-[#102634]">
                Excelencia en Cirugía Reconstructiva de Cadera, Pelvis y Rodilla
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {doctor.bio}
              </p>

              {/* Dual Cédula & Certification Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <span className="text-[10px] font-black text-[#4494C5] uppercase tracking-wider block">
                    Cédula Profesional Médico Cirujano
                  </span>
                  <span className="text-sm font-black text-[#102634]">
                    Céd. Prof. {doctor.cedula}
                  </span>
                  <p className="text-[11px] text-slate-500 font-semibold">Universidad Juárez del Estado de Durango</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                  <span className="text-[10px] font-black text-[#4494C5] uppercase tracking-wider block">
                    Cédula Especialidad Traumatología
                  </span>
                  <span className="text-sm font-black text-[#102634]">
                    Céd. Esp. {doctor.cedulaEspecialidad}
                  </span>
                  <p className="text-[11px] text-slate-500 font-semibold">Universidad de Monterrey (UDEM)</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#102634] hover:bg-[#1A4174] text-white font-black text-xs uppercase tracking-wider transition shadow-lg"
                >
                  <FaWhatsapp size={16} className="text-[#4494C5]" /> Agendar Cita de Valoración Presencial
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── SECCIÓN PROCEDIMIENTOS DE ALTA ESPECIALIDAD (CIRUGÍAS) ────────────── */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#4494C5] bg-[#4494C5]/10 px-4 py-1.5 rounded-full border border-[#4494C5]/20">
              Soluciones Quirúrgicas
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#102634]">
              Cirugías y Procedimientos Ortopédicos Principales
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Técnicas avanzadas de reemplazo articular, reconstrucción pélvica y artroscopia de mínima invasión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-xl overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-[#4494C5]/40 transition duration-300"
              >
                <div>
                  <CardImageHeader
                    src={srv.image}
                    alt={srv.name}
                    category="servicio"
                    aspectRatio="aspect-video"
                    badgeText={srv.type}
                  />

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-black text-[#102634] leading-snug">
                      {srv.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                      {srv.description}
                    </p>

                    <ul className="space-y-1.5 text-xs text-slate-700 font-semibold pt-1">
                      {srv.benefits.slice(0, 2).map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <FaCheckCircle className="text-[#4494C5] text-xs mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/servicios/${srv.slug}`}
                    className="w-full py-4 px-6 rounded-2xl bg-[#102634] hover:bg-[#1A4174] text-white font-black text-xs uppercase tracking-wider flex items-center justify-between transition group-hover:bg-[#4494C5] leading-snug"
                  >
                    <span>Ver Ficha del Procedimiento</span>
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECCIÓN PADECIMIENTOS Y ENFERMEDADES (CADERA, RODILLA, PELVIS) ─────── */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#4494C5] bg-[#4494C5]/10 px-4 py-1.5 rounded-full border border-[#4494C5]/20">
              Guías Médicas
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#102634]">
              Padecimientos Atendidos por el Dr. Aram Alarcón
            </h2>
            <p className="text-slate-600 text-sm font-medium">
              Diagnóstico preciso y plan terapéutico individualizado para recuperar tu calidad de vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diseases.map((dis) => (
              <div
                key={dis.id}
                className="bg-[#F8FAFC] rounded-[2.5rem] border-2 border-slate-200/80 shadow-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-[#4494C5]/40 transition duration-300"
              >
                <div>
                  <CardImageHeader
                    src={dis.image}
                    alt={dis.name}
                    category="enfermedad"
                    aspectRatio="aspect-video"
                    badgeText="Padecimiento Articular"
                  />

                  <div className="p-6 space-y-4">
                    <span className="text-[10px] font-black text-[#4494C5] uppercase tracking-wider block">
                      {dis.technicalName || dis.name}
                    </span>
                    <h3 className="text-xl font-black text-[#102634] leading-snug">
                      {dis.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                      {dis.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/enfermedades/${dis.slug}`}
                    className="w-full py-4 px-6 rounded-2xl bg-[#1A4174] hover:bg-[#102634] text-white font-black text-xs uppercase tracking-wider flex items-center justify-between transition leading-snug"
                  >
                    <span>Ver Guía Médica</span>
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECCIÓN ORIENTACIÓN POR SÍNTOMAS ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#4494C5] bg-[#4494C5]/10 px-4 py-1.5 rounded-full border border-[#4494C5]/20">
              Evaluación Médica
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#102634]">
              ¿Qué Síntomas o Molestias Presentas?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {symptoms.map((sym) => (
              <div
                key={sym.id}
                className="bg-white rounded-[2.5rem] border-2 border-slate-100 shadow-xl overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:border-[#4494C5]/40 transition duration-300"
              >
                <div>
                  <CardImageHeader
                    src={sym.image}
                    alt={sym.name}
                    category="sintoma"
                    aspectRatio="aspect-video"
                    badgeText="Orientación Clínica"
                  />

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-black text-[#102634] leading-snug">
                      {sym.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                      {sym.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/sintomas/${sym.slug}`}
                    className="w-full py-4 px-6 rounded-2xl bg-[#102634] hover:bg-[#4494C5] text-white font-black text-xs uppercase tracking-wider flex items-center justify-between transition leading-snug"
                  >
                    <span>Ver Orientación Médica</span>
                    <FaArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECCIÓN TESTIMONIOS Y SEGUROS DE GASTOS MÉDICOS ──────────────────── */}
      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#4494C5] bg-[#4494C5]/10 px-4 py-1.5 rounded-full border border-[#4494C5]/20">
                Experiencias de Pacientes
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#102634]">
                Confianza, Trato Humano y Resultados
              </h2>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Revisa los testimonios reales de pacientes atendidos en cirugía de cadera, reemplazo de rodilla y urgencias traumatológicas en Monterrey.
              </p>

              <div className="p-6 rounded-3xl bg-[#102634] text-white space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-[#4494C5] text-3xl" />
                  <div>
                    <h3 className="text-base font-black text-white">Aceptamos Seguros de Gastos Médicos</h3>
                    <span className="text-xs text-[#B1D2E7] font-semibold">Te apoyamos con la programación de tu cirugía</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  Trabajamos con las principales aseguradoras (MetLife, GNP, AXA, Monterrey NY Life, Mapfre, Inbursa, etc.).
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.id} className="bg-[#F8FAFC] p-6 rounded-3xl border border-slate-200 shadow-md space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex text-amber-400 text-xs">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic font-medium leading-relaxed">
                      "{t.quote}"
                    </p>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#4494C5] bg-[#4494C5]/10 px-3 py-1 rounded-full inline-block">
                      {t.procedure}
                    </span>
                  </div>
                  <div className="border-t border-slate-200 pt-3">
                    <h4 className="text-xs font-black text-[#102634]">{t.name}, {t.age} años</h4>
                    <span className="text-[11px] font-bold text-slate-400">{t.city}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ─── SECCIÓN FAQ & CTA FINAL DE AGENDAMIENTO ───────────────────────────── */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#4494C5] bg-[#4494C5]/10 px-4 py-1.5 rounded-full border border-[#4494C5]/20">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102634]">
              Resuelve tus Dudas Antes de la Consulta
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
                <h3 className="text-base font-black text-[#102634] flex items-center gap-2">
                  <FaCheckCircle className="text-[#4494C5]" /> {f.question}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed pl-6">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Final Call To Action Banner */}
          <div className="bg-gradient-to-r from-[#102634] via-[#1A4174] to-[#102634] text-white p-8 sm:p-12 rounded-[3rem] shadow-2xl text-center space-y-6">
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              No Vivas con Dolor Articular. Agenda tu Valoración Hoy.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Atención médica de alta especialidad en Balcones de Galerías, Monterrey, N.L. Consulta $1,000 MXN.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-[#4494C5] hover:bg-[#347aa4] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-xl"
              >
                <FaWhatsapp size={18} /> Agendar Cita por WhatsApp
              </a>
              <a
                href={emergencyUrl}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
              >
                <FaPhoneAlt size={14} /> Urgencias 24/7 ({emergencyPhone})
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
