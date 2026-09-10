export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "¿Dónde se encuentra ubicado el consultorio del Dr. Aram Alarcón Valdéz?",
    answer: "El consultorio está en Ecuador 2331, Consultorio 929, Piso 9, en Balcones de Galerías, C.P. 64620, Monterrey, N.L. Cuenta con estacionamiento accesible y facilidades para pacientes en silla de ruedas o con movilidad reducida."
  },
  {
    id: 2,
    question: "¿El Dr. Aram Alarcón atiende urgencias de traumatología y fracturas?",
    answer: "Sí. Para atención inmediata de urgencias, fracturas, luxaciones o caídas de alta energía, puedes comunicarte directamente al teléfono de urgencias 24/7: 618 167 7169."
  },
  {
    id: 3,
    question: "¿Acepta seguros de gastos médicos mayores para cirugías?",
    answer: "Sí. Aceptamos la mayoría de las aseguradoras de gastos médicos mayores (MetLife, GNP, AXA, Monterrey New York Life, Mapfre, Inbursa, etc.). Nuestro equipo te asesora con todo el trámite de programación quirúrgica o reembolso."
  },
  {
    id: 4,
    question: "¿Cuál es el costo de la consulta de primera vez?",
    answer: "El costo de la consulta de valoración especializada presencial es de $1,000 MXN. Incluye revisión clínica exhaustiva, evaluación de estudios radiológicos y plan de tratamiento personalizado."
  },
  {
    id: 5,
    question: "¿En qué consiste la Alta Especialidad en Cadera y Pelvis?",
    answer: "Es un adiestramiento quirúrgico avanzado enfocado en la reconstrucción tridimensional de fracturas pélvicas complejas, reemplazos articulares primarios y de revisión de cadera con técnicas de mínima invasión y preservación biológica."
  }
];
