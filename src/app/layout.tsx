import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: `${doctor.name} | ${doctor.specialty} en Monterrey`,
  description: `${doctor.name}, traumatólogo y ortopedista con Alta Especialidad en Cadera y Pelvis en Monterrey. Prótesis de cadera y rodilla, artroscopia y urgencias 24/7.`,
  keywords: [
    "Dr Aram Alarcon Valdez",
    "Traumatologo Monterrey",
    "Cirujano de Cadera Monterrey",
    "Alta Especialidad Cadera Pelvis Monterrey",
    "Protesis de Cadera Monterrey",
    "Protesis de Rodilla Monterrey",
    "Urgencias Traumatologia Monterrey"
  ],
  openGraph: {
    title: `${doctor.name} | Traumatología y Ortopedia Monterrey`,
    description: doctor.bio.substring(0, 150) + "...",
    url: "https://dr-aram-alarcon.com",
    siteName: doctor.name,
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A]">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
