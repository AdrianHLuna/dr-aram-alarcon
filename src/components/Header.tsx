"use client";

import Link from "next/link";
import { useState } from "react";
import { doctor, emergencyPhone } from "@/data/doctor";
import { FaWhatsapp, FaPhoneAlt, FaBars, FaTimes, FaAmbulance, FaShieldAlt } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${doctor.whatsapp.replace(/\D/g, "")}&text=${encodeURIComponent("Hola Dr. Aram Alarcón, me gustaría agendar una consulta de valoración.")}`;
  const emergencyUrl = `tel:${emergencyPhone}`;

  return (
    <header className="sticky top-0 z-50 bg-[#102634]/95 backdrop-blur-md border-b border-[#4494C5]/20 text-white">
      
      {/* Urgencias Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#1A4174] via-[#4494C5] to-[#102634] text-white text-[11px] font-extrabold uppercase tracking-widest py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <FaAmbulance className="animate-pulse text-[#B1D2E7]" />
        <span>Urgencias Traumatológicas 24/7 en Monterrey: <a href={emergencyUrl} className="underline hover:text-[#B1D2E7]">{emergencyPhone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")}</a></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo (HTML/SVG Vectorial de Alta Definición) */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#4494C5] to-[#1A4174] text-white font-black text-lg flex items-center justify-center shadow-md shadow-[#4494C5]/30 group-hover:scale-105 transition-transform border border-[#B1D2E7]/30">
            AA
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none group-hover:text-[#4494C5] transition-colors whitespace-nowrap">
              Dr. Aram Alarcón Valdéz
            </span>
            <span className="text-[10px] font-bold text-[#B1D2E7] tracking-wider uppercase mt-1 whitespace-nowrap">
              Traumatología • Cirugía de Cadera y Pelvis
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Single Line, No Wrap, No Collisions) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-xs font-black uppercase tracking-wider text-slate-200">
          <Link href="/" className="whitespace-nowrap hover:text-[#4494C5] transition-colors py-1">
            Inicio
          </Link>
          <Link href="/servicios" className="whitespace-nowrap hover:text-[#4494C5] transition-colors py-1">
            Procedimientos
          </Link>
          <Link href="/enfermedades" className="whitespace-nowrap hover:text-[#4494C5] transition-colors py-1">
            Padecimientos
          </Link>
          <Link href="/sintomas" className="whitespace-nowrap hover:text-[#4494C5] transition-colors py-1">
            Síntomas
          </Link>
          <Link href="/contacto" className="whitespace-nowrap hover:text-[#4494C5] transition-colors py-1">
            Ubicación
          </Link>
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
          <a
            href={emergencyUrl}
            className="px-3.5 py-2.5 rounded-xl bg-rose-600/90 hover:bg-rose-700 text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition shadow-sm whitespace-nowrap"
          >
            <FaPhoneAlt size={12} />
            <span>Urgencias 24/7</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#4494C5] hover:bg-[#347aa4] text-white font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition shadow-md shadow-[#4494C5]/20 whitespace-nowrap"
          >
            <FaWhatsapp size={15} />
            <span>Agendar Cita</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-white hover:bg-[#1A4174] transition"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#102634] border-b border-[#4494C5]/30 px-6 py-6 space-y-4 font-black text-xs uppercase tracking-wider text-slate-200 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#4494C5]"
          >
            Inicio
          </Link>
          <Link
            href="/servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#4494C5]"
          >
            Procedimientos & Cirugías
          </Link>
          <Link
            href="/enfermedades"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#4494C5]"
          >
            Padecimientos de Cadera y Rodilla
          </Link>
          <Link
            href="/sintomas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#4494C5]"
          >
            Orientación Médica por Síntomas
          </Link>
          <Link
            href="/contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#4494C5]"
          >
            Ubicación y Contacto
          </Link>

          <div className="pt-4 space-y-2">
            <a
              href={emergencyUrl}
              className="w-full py-3.5 rounded-xl bg-rose-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg"
            >
              <FaPhoneAlt size={14} /> Llamada de Urgencias 24/7
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#4494C5] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg"
            >
              <FaWhatsapp size={16} /> Agendar Cita por WhatsApp
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
