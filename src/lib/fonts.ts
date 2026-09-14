import localFont from "next/font/local";
import { Oxanium, IBM_Plex_Mono } from "next/font/google";

// Tipografía oficial de marca (guía real del doctor, carpeta "PALETA DE
// COLORES"): Caviar Dreams para texto de cuerpo (gratuita, licencia de uso
// comercial confirmada — Font Squirrel/DaFont) y TT Supermolot para
// encabezados. TT Supermolot es de paga (TypeType) y no hay archivos reales
// en el repo, así que para encabezados se usa Oxanium (Google Fonts): fuente
// geométrica/tecnológica documentada como alternativa cercana a TT Supermolot
// Neue (fontspring.com/similar/typetype/tt-supermolot-neue). Sustituir por
// TT Supermolot real vía next/font/local si el doctor compra la licencia.
export const caviarDreams = localFont({
  src: [
    { path: "../assets/fonts/CaviarDreams-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/CaviarDreams-Italic.ttf", weight: "400", style: "italic" },
    { path: "../assets/fonts/CaviarDreams-Bold.ttf", weight: "700", style: "normal" },
    { path: "../assets/fonts/CaviarDreams-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  display: "swap",
  variable: "--font-caviar",
});

export const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-oxanium",
});

// Se conserva IBM Plex Mono solo para .clinical-label (etiquetas de datos de
// la identidad "Estructura Clínica") — no forma parte de la tipografía de
// marca, es la firma tipográfica propia de este sistema de diseño.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-plex-mono",
});
