import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

// IBM Plex Sans/Mono — elegido por su carácter técnico/editorial, distinto
// de la fuente de sistema (dr-raul-vega, aram-alarcon v2) y de Metropolis
// (dr-raul-mu-oz-gomez). El monospace es parte deliberada de la identidad
// "Estructura Clínica" (etiquetas de datos, ver .clinical-label en globals.css).
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plex-sans",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-plex-mono",
});
