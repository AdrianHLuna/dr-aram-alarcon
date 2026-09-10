import Link from "next/link";
import Image from "next/image";
import { doctor, emergencyPhone } from "@/data/doctor";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${doctor.whatsapp.replace(/\D/g, "")}&text=${encodeURIComponent("Hola Dr. Aram Alarcón, me gustaría agendar una consulta de valoración.")}`;
  const emergencyUrl = `tel:${emergencyPhone}`;

  return (
    <footer className="bg-[#102634] text-white py-16 px-6 border-t border-[#4494C5]/30 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[#4494C5]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 text-center">
        
        {/* Prominently Centered Large Logo (Rule 6) */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative w-64 sm:w-80 h-24 max-w-[550px] flex items-center justify-center">
            <Image
              src="/logo.png"
              alt={`Logotipo Oficial ${doctor.name}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="text-xs font-black text-[#B1D2E7] uppercase tracking-widest bg-[#4494C5]/10 px-4 py-1.5 rounded-full border border-[#4494C5]/30">
            {doctor.specialty} • Alta Especialidad en Cadera y Pelvis
          </span>
        </div>

        {/* Short Professional Bio */}
        <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
          Atención traumatológica de alta precisión en Monterrey, N.L. Especialista en reemplazo articular de cadera y rodilla, artroscopia y cirugía de reconstrucción de fracturas complejas de pelvis (IMSS UMAE HTO 21).
        </p>

        {/* Quick Contact Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-200">
          <div className="flex items-center gap-2 bg-[#1A4174]/40 px-4 py-2 rounded-xl border border-[#4494C5]/20">
            <FaMapMarkerAlt className="text-[#4494C5]" />
            <span>Balcones de Galerías consultorio 929, Monterrey, N.L.</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1A4174]/40 px-4 py-2 rounded-xl border border-[#4494C5]/20">
            <FaClock className="text-[#4494C5]" />
            <span>{doctor.schedule}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#4494C5] hover:bg-[#347aa4] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-xl"
          >
            <FaWhatsapp size={18} /> Agendar Cita por WhatsApp
          </a>
          <a
            href={emergencyUrl}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-rose-600/90 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-xl"
          >
            <FaPhoneAlt size={14} /> Urgencias 24/7 ({emergencyPhone})
          </a>
        </div>

        {/* Navigation Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300 border-t border-[#4494C5]/20 pt-8">
          <Link href="/" className="hover:text-[#4494C5] transition-colors">Inicio</Link>
          <Link href="/servicios" className="hover:text-[#4494C5] transition-colors">Procedimientos</Link>
          <Link href="/enfermedades" className="hover:text-[#4494C5] transition-colors">Padecimientos</Link>
          <Link href="/sintomas" className="hover:text-[#4494C5] transition-colors">Síntomas</Link>
          <Link href="/contacto" className="hover:text-[#4494C5] transition-colors">Ubicación</Link>
          <Link href="/aviso-de-privacidad" className="hover:text-[#4494C5] transition-colors">Aviso de Privacidad</Link>
          <Link href="/llms.txt" className="hover:text-[#4494C5] transition-colors">LLMs.txt (AISO)</Link>
        </div>

        {/* Cédulas and Legal Transparency */}
        <div className="space-y-2 text-[11px] text-slate-400 font-medium">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span><strong>Céd. Prof. Médico Cirujano:</strong> {doctor.cedula} (UJED)</span>
            <span>•</span>
            <span><strong>Céd. Especialidad Ortopedia:</strong> {doctor.cedulaEspecialidad} (UDEM)</span>
            <span>•</span>
            <span><strong>COFEPRIS:</strong> {doctor.cofepris}</span>
          </p>
          <p>
            © {new Date().getFullYear()} {doctor.name} • Especialista en Traumatología y Ortopedia. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
