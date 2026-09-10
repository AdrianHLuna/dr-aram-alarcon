import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Dr. Aram Alarcón Valdéz",
  title: "Dr.",
  specialty: "Traumatología y Ortopedia",
  specialistTitle: "Especialista en Cirugía de Cadera y Pelvis",
  subspecialty: "Alta Especialidad en Cadera y Pelvis",
  cedula: "9256816",
  cedulaEspecialidad: "12371796",
  cofepris: "En trámite oficial de verificación",
  phone: "8134472220",
  whatsapp: "8139088458",
  email: "contacto@dr-aram-alarcon.com",
  address: "Ecuador 2331-Consultorio 929, piso 9, Balcones de Galerías, 64620 Monterrey, N.L.",
  city: "Monterrey",
  state: "Nuevo León",
  country: "México",
  googleMapsUrl: "https://maps.app.goo.gl/PJPbrn9nXtjqvDrAA",
  consultationPrice: 1000,
  paymentMethods: [
    "Efectivo",
    "Transferencia Bancaria",
    "Tarjeta de Débito",
    "Tarjeta de Crédito"
  ],
  insurances: [
    "Seguros de Gastos Médicos Mayores",
    "MetLife",
    "GNP Seguros",
    "AXA Seguros",
    "Monterrey New York Life",
    "Mapfre",
    "Inbursa Medical"
  ],
  schedule: "Lunes a Domingo: 09:00 - 18:00 hrs | Atención de Urgencias 24/7",
  photo: "/photo.jpg",
  logo: "/logo.png",
  bio: "El Dr. Aram Alarcón Valdéz es especialista en Traumatología y Ortopedia con Alta Especialidad en Cirugía de Cadera y Pelvis egresado de la UMAE HTO No. 21 del IMSS. Cuenta con más de 5 años de trayectoria dedicada a la reconstrucción articular, tratamiento de fracturas complejas de pelvis y cadera, así como procedimientos mínimos invasivos para devolver la movilidad activa y sin dolor a más de 3,500 pacientes en Monterrey, Nuevo León.",
  philosophy: "Preservar y recuperar la movilidad natural de cada articulación mediante diagnósticos certeros, técnicas de mínima invasión y un acompañamiento empático enfocado en la pronta reintegración del paciente a su vida diaria.",
  experience: [
    {
      year: "2021 - Presente",
      title: "Especialista en Traumatología y Ortopedia",
      description: "Práctica privada enfocada en cirugía de reconstrucción de cadera, rodilla y manejo integral de fracturas complejas en Monterrey, N.L."
    },
    {
      year: "2020 - 2021",
      title: "Alta Especialidad en Cadera y Pelvis",
      description: "Unidad Médica de Alta Especialidad Hospital de Traumatología y Ortopedia No. 21 (IMSS UMAE HTO 21), centro de referencia nacional en reconstrucción pélvica."
    },
    {
      year: "2016 - 2020",
      title: "Residencia en Traumatología y Ortopedia",
      description: "Universidad de Monterrey (UDEM), certificado con excelencia clínica y quirúrgica."
    }
  ],
  certifications: [
    {
      name: "Miembro Activo del Consejo Mexicano de Traumatología y Ortopedia (CMOT)",
      institution: "Consejo Mexicano de Traumatología y Ortopedia A.C."
    },
    {
      name: "Alta Especialidad en Cirugía de Cadera y Pelvis",
      institution: "IMSS UMAE HTO No. 21 Monterrey"
    },
    {
      name: "Miembro de la Sociedad Mexicana de Ortopedia",
      institution: "SMO México"
    }
  ],
  education: [
    {
      degree: "Médico Cirujano (Céd. Prof. 9256816)",
      institution: "Universidad Juárez del Estado de Durango",
      year: "2015"
    },
    {
      degree: "Especialidad en Traumatología y Ortopedia (Céd. Esp. 12371796)",
      institution: "Universidad de Monterrey (UDEM)",
      year: "2020"
    },
    {
      degree: "Alta Especialidad en Cadera y Pelvis",
      institution: "IMSS UMAE Hospital de Traumatología y Ortopedia No. 21",
      year: "2021"
    }
  ],
  testimonials: [
    {
      id: "1",
      patientName: "Roberto M. Garza",
      rating: 5,
      text: "Excelente cirujano. Me realizó una prótesis total de cadera tras años de dolor severo. Al segundo día ya estaba caminando y recuperé mi calidad de vida por completo en Monterrey.",
      sourceUrl: "https://maps.app.goo.gl/PJPbrn9nXtjqvDrAA",
      date: "Hace 2 meses"
    },
    {
      id: "2",
      patientName: "Sofía Villarreal S.",
      rating: 5,
      text: "Atendió a mi papá por una fractura de pelvis en urgencias. Su trato humano, explicación clara de la cirugía y seguimiento postoperatorio fueron inmejorables. Un profesional de 10.",
      sourceUrl: "https://maps.app.goo.gl/PJPbrn9nXtjqvDrAA",
      date: "Hace 4 meses"
    }
  ],
  sameAs: [
    "https://www.facebook.com/Dr.AramAlarconValdez",
    "https://www.instagram.com/dr_aram_alarcon_traumatologo/"
  ]
};

export const emergencyPhone = "6181677169";
