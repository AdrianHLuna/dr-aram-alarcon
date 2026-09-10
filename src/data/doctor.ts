import type { DoctorProfile } from "@/types/schema";

// Datos reales del Dr. Aram Alarcón Valdéz, capturados del intake del 2026-09-09.
// Campos marcados PENDIENTE abajo no venían en el intake y deben confirmarse
// con el doctor antes de publicar — no se inventó ningún dato factual.
export const doctor: DoctorProfile = {
  name: "Aram Alarcón Valdéz",
  title: "Dr.",
  specialty: "Traumatología y Ortopedia",
  specialistTitle: "Traumatólogo y Ortopedista",
  subspecialty: "Alta Especialidad en Cadera y Pelvis",
  cedula: "9256816",
  cedulaInstitucion: "UJED",
  cedulaEspecialidad: "12371796",
  cedulaEspecialidadInstitucion: "UDEM",
  // PENDIENTE: folio COFEPRIS no vino en el intake.
  cofepris: undefined,
  phone: "+528134472220",
  whatsapp: "+528139088458",
  emergencyPhone: "+526181677169",
  // PENDIENTE: el intake no incluyó correo — placeholder usando el dominio real
  // (dr-aram-alarcon.com, visto en el layout.tsx anterior) hasta que el doctor confirme uno.
  email: "contacto@dr-aram-alarcon.com",
  address: "Ecuador 2331, Consultorio 929, Piso 9, Balcones de Galerías, 64620",
  city: "Monterrey",
  state: "Nuevo León",
  country: "México",
  // PENDIENTE: reemplazar por el enlace real de Google Business Profile
  // ("Cirugia de Cadera en Monterrey - Dr. Aram Alarcon Valdez" según el intake);
  // por ahora es un enlace de búsqueda funcional construido desde la dirección real.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ecuador+2331+Consultorio+929+Balcones+de+Galerias+Monterrey+Nuevo+Leon",
  consultationPrice: 1000,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de débito", "Tarjeta de crédito"],
  // El intake dice "Seguros: Sí" sin aseguradoras específicas ("Preguntar tipo de cobro") — no se inventaron nombres de aseguradoras.
  insurances: ["Acepta seguro de gastos médicos mayores (aseguradoras y tipo de cobro por confirmar)"],
  schedule: "Lunes a domingo de 9:00 a 18:00",
  openingHours: ["Mo-Su 09:00-18:00"],
  acceptingNewPatients: true,
  // PENDIENTE: no se encontró carpeta "Fotos 2024" en el repo — placeholder hasta recibir fotos reales.
  photo: "/doctor-placeholder.jpg",
  bio: "El Dr. Aram Alarcón Valdéz es traumatólogo y ortopedista con subespecialidad en Alta Especialidad en Cadera y Pelvis, formada en el Instituto Mexicano del Seguro Social (Unidad Médica de Alta Especialidad HTO No. 21). Con más de 5 años de experiencia, ha atendido a más de 3,500 pacientes y realizado más de 1,500 procedimientos y cirugías en su consultorio de Monterrey, Nuevo León, con un enfoque en el diagnóstico preciso y la recuperación funcional del sistema musculoesquelético.",
  philosophy: "Cada padecimiento del sistema musculoesquelético tiene un origen específico y una solución medible. La atención debe enfocarse en un diagnóstico preciso y en devolver al paciente su movilidad y calidad de vida, con explicaciones claras en cada etapa del tratamiento.",
  experience: [],
  stats: [
    { label: "Pacientes Atendidos", value: "+3,500" },
    { label: "Procedimientos y Cirugías", value: "+1,500" },
    { label: "Años de Experiencia", value: "+5" },
  ],
  certifications: [
    {
      name: "Miembro Activo",
      institution: "Consejo Mexicano de Traumatología y Ortopedia",
    },
  ],
  education: [
    { degree: "Médico Cirujano", institution: "Universidad Juárez del Estado de Durango" },
    { degree: "Especialidad en Traumatología y Ortopedia", institution: "Universidad de Monterrey" },
    { degree: "Alta Especialidad en Cadera y Pelvis", institution: "IMSS — Unidad Médica de Alta Especialidad HTO No. 21" },
  ],
  testimonials: [],
  // PENDIENTE: Facebook solo vino como nombre de página, sin URL/slug confirmado — no se incluyó para no arriesgar un enlace incorrecto.
  sameAs: ["https://www.instagram.com/dr_aram_alarcon_traumatologo/"],
  ga4Id: undefined,
};
