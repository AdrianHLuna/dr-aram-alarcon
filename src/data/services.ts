import type { MedicalService } from "@/types/schema";

// Las 4 cirugías/procedimientos del intake real del Dr. Aram Alarcón Valdéz (2026-09-09).
export const services: MedicalService[] = [
  {
    id: "protesis-de-cadera",
    slug: "protesis-de-cadera",
    name: "Prótesis de Cadera",
    description:
      "Reemplazo quirúrgico de la articulación de la cadera dañada por una prótesis artificial, indicado cuando el dolor y la limitación de movimiento ya no responden a tratamiento conservador.",
    longDescription:
      "La prótesis de cadera, o artroplastia total de cadera, consiste en sustituir las superficies dañadas de la articulación (la cabeza del fémur y el acetábulo de la pelvis) por componentes artificiales biocompatibles. Está indicada cuando el desgaste avanzado de la cadera provoca dolor constante, rigidez o dificultad para caminar que ya no mejora con fisioterapia, medicación o cambios en la actividad. El objetivo es restaurar la movilidad de la cadera y eliminar el dolor de origen articular, permitiendo que el paciente retome sus actividades cotidianas.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según valoración anestésica previa",
    duration: "1.5 a 2.5 horas aproximadamente",
    recoveryTime: "Rehabilitación progresiva durante varias semanas, con apoyo de fisioterapia",
    isPainful: true,
    benefits: [
      "Elimina el dolor de origen articular en la cadera",
      "Restaura la movilidad y la capacidad de caminar sin dolor",
      "Mejora la calidad de vida en pacientes con desgaste avanzado",
    ],
    postOpRecommendations: [
      "Seguir el programa de fisioterapia indicado por el equipo médico",
      "Evitar movimientos de rotación forzada de la cadera en las primeras semanas",
      "Usar apoyo para caminar (andadera o bastón) el tiempo que indique el médico",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    priceRange: "Rango variable según el caso; se cotiza tras la valoración presencial",
    faqs: [
      {
        question: "¿Qué tan dolorosa es la recuperación de una prótesis de cadera?",
        answer:
          "Existe dolor postoperatorio esperado, controlado con manejo analgésico hospitalario y ambulatorio. La mayoría de los pacientes comienza a caminar con apoyo en las primeras 24 a 48 horas tras la cirugía.",
      },
      {
        question: "¿Cuánto tiempo de incapacidad se requiere tras una prótesis de cadera?",
        answer:
          "Varía según la actividad laboral de cada paciente; el traumatólogo define el tiempo de incapacidad de forma individual durante las revisiones postoperatorias.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-09-09",
    image: "/images/services/protesis-de-cadera.jpg",
    seo: {
      title: "Prótesis de Cadera en Monterrey, N.L.",
      description: "¿Buscas una cirugía de prótesis de cadera en Monterrey? El Dr. Aram Alarcón, especialista en cadera y pelvis, realiza este procedimiento.",
      keywords: [
        "prótesis de cadera en Monterrey",
        "dónde puedo realizarme prótesis de cadera en Monterrey",
        "especialista en prótesis de cadera en Monterrey",
        "cirujano de cadera en Monterrey",
      ],
    },
  },
  {
    id: "protesis-de-rodilla",
    slug: "protesis-de-rodilla",
    name: "Prótesis de Rodilla",
    description:
      "Reemplazo quirúrgico de la articulación de la rodilla dañada por desgaste avanzado, cuando el dolor y la limitación funcional ya no responden a tratamiento conservador.",
    longDescription:
      "La prótesis de rodilla, o artroplastia total de rodilla, sustituye las superficies articulares dañadas por el desgaste (gonartrosis) con componentes artificiales que restauran el movimiento de bisagra de la rodilla. Se indica cuando el dolor limita actividades básicas como caminar, subir escaleras o levantarse de una silla, y las opciones conservadoras (fisioterapia, infiltraciones) ya no son suficientes. El procedimiento busca devolver al paciente una rodilla funcional y sin dolor articular.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según valoración anestésica previa",
    duration: "1.5 a 2 horas aproximadamente",
    recoveryTime: "Rehabilitación progresiva durante varias semanas, con apoyo de fisioterapia",
    isPainful: true,
    benefits: [
      "Elimina el dolor articular de origen en la rodilla",
      "Restaura el rango de movimiento de la rodilla",
      "Permite retomar actividades cotidianas como caminar sin dolor",
    ],
    postOpRecommendations: [
      "Iniciar fisioterapia de rodilla en cuanto lo indique el equipo médico",
      "Usar apoyo para caminar el tiempo que indique el traumatólogo",
      "Evitar arrodillarse o hacer esfuerzo excesivo en las primeras semanas",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    priceRange: "Rango variable según el caso; se cotiza tras la valoración presencial",
    faqs: [
      {
        question: "¿Cuánto dura la recuperación de una prótesis de rodilla?",
        answer:
          "La recuperación funcional avanza de forma progresiva durante varias semanas con fisioterapia dirigida; el traumatólogo da seguimiento personalizado en cada revisión.",
      },
      {
        question: "¿Es dolorosa la cirugía de prótesis de rodilla?",
        answer:
          "Como toda cirugía articular mayor, implica dolor postoperatorio esperado que se controla con manejo analgésico programado durante la hospitalización y la recuperación inicial.",
      },
    ],
    relatedConditions: ["desgaste-de-rodilla"],
    lastReviewed: "2026-09-09",
    image: "/images/services/protesis-de-rodilla.jpg",
    seo: {
      title: "Prótesis de Rodilla en Monterrey, N.L.",
      description: "¿Buscas una cirugía de prótesis de rodilla en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, realiza este procedimiento.",
      keywords: [
        "prótesis de rodilla en Monterrey",
        "dónde puedo realizarme prótesis de rodilla en Monterrey",
        "especialista en prótesis de rodilla en Monterrey",
        "cirujano de rodilla en Monterrey",
      ],
    },
  },
  {
    id: "infiltraciones-rodilla-cadera-hombro",
    slug: "infiltraciones-rodilla-cadera-hombro",
    name: "Infiltraciones en Rodilla, Cadera y Hombro",
    description:
      "Aplicación guiada de medicamento antiinflamatorio directamente en la articulación afectada, para reducir el dolor y la inflamación sin necesidad de cirugía.",
    longDescription:
      "Las infiltraciones articulares consisten en aplicar de forma guiada un antiinflamatorio directamente dentro de la articulación de rodilla, cadera u hombro, buscando reducir la inflamación y el dolor en el sitio exacto donde se originan. Es una opción intermedia entre el manejo conservador (fisioterapia) y la cirugía, útil en desgaste articular moderado, inflamación persistente o como complemento antes o después de otros tratamientos. El procedimiento se realiza en consultorio y no requiere hospitalización.",
    type: "consultorio",
    anesthesiaType: "Anestesia local en el sitio de punción",
    duration: "15 a 30 minutos aproximadamente",
    recoveryTime: "El paciente puede retomar actividades cotidianas el mismo día, con las indicaciones del médico",
    isPainful: false,
    benefits: [
      "Reduce el dolor y la inflamación articular de forma dirigida",
      "No requiere hospitalización ni incapacidad prolongada",
      "Puede posponer o complementar la necesidad de cirugía en casos seleccionados",
    ],
    postOpRecommendations: [
      "Evitar esfuerzo intenso en la articulación tratada durante las primeras 24 a 48 horas",
      "Seguir las indicaciones específicas del médico según la articulación tratada",
      "Reportar cualquier dolor intenso o signos de infección en el sitio de punción",
    ],
    priceRange: "Rango variable según la articulación tratada; se cotiza tras la valoración presencial",
    faqs: [
      {
        question: "¿Duelen las infiltraciones articulares?",
        answer:
          "Se aplica anestesia local en el sitio de punción, por lo que la molestia suele ser breve y tolerable durante el procedimiento.",
      },
      {
        question: "¿Cuántas infiltraciones se necesitan?",
        answer:
          "Depende del caso: algunos pacientes mejoran con una sola aplicación, mientras que otros requieren un esquema de varias sesiones espaciadas, según indique el traumatólogo.",
      },
    ],
    relatedConditions: ["desgaste-de-rodilla", "lesiones-deportivas"],
    lastReviewed: "2026-09-09",
    image: "/images/services/infiltraciones-rodilla-cadera-hombro.jpg",
    seo: {
      title: "Infiltraciones en Rodilla, Cadera y Hombro en Monterrey",
      description: "¿Necesitas infiltraciones articulares en Monterrey? El Dr. Aram Alarcón las aplica en rodilla, cadera y hombro para reducir dolor e inflamación.",
      keywords: [
        "infiltraciones de rodilla en Monterrey",
        "infiltraciones de cadera y hombro en Monterrey",
        "precio de infiltración articular en Monterrey",
        "especialista en infiltraciones articulares en Monterrey",
      ],
    },
  },
  {
    id: "artroscopia-minima-invasiva-rodilla",
    slug: "artroscopia-minima-invasiva-rodilla",
    name: "Artroscopia Mínima Invasiva de Rodilla",
    description:
      "Cirugía de mínima invasión que permite diagnosticar y tratar lesiones dentro de la articulación de la rodilla a través de pequeñas incisiones.",
    longDescription:
      "La artroscopia de rodilla es un procedimiento quirúrgico de mínima invasión en el que se introduce una cámara diminuta y instrumental especializado a través de pequeñas incisiones, permitiendo ver y tratar lesiones internas de la rodilla (como daño de menisco o ligamentos) sin necesidad de abrir la articulación por completo. Al ser mínimamente invasiva, suele implicar menor dolor postoperatorio y una recuperación más rápida que la cirugía abierta tradicional, siempre según el tipo y extensión de la lesión.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia regional o general, según valoración anestésica previa",
    duration: "30 minutos a 1.5 horas, según la complejidad de la lesión",
    recoveryTime: "Recuperación progresiva de varias semanas, con apoyo de fisioterapia",
    isPainful: true,
    benefits: [
      "Incisiones pequeñas con menor daño a los tejidos circundantes",
      "Recuperación generalmente más rápida que la cirugía abierta",
      "Permite diagnosticar y tratar la lesión en el mismo procedimiento",
    ],
    postOpRecommendations: [
      "Mantener reposo relativo y elevación de la pierna en los primeros días",
      "Iniciar fisioterapia en cuanto lo indique el traumatólogo",
      "Evitar carga de peso completa hasta la autorización médica",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    priceRange: "Rango variable según la lesión a tratar; se cotiza tras la valoración presencial",
    faqs: [
      {
        question: "¿Cuánto tiempo de incapacidad requiere una artroscopia de rodilla?",
        answer:
          "Depende del tipo de lesión tratada y de la actividad del paciente; el traumatólogo define el tiempo de incapacidad de forma individual.",
      },
      {
        question: "¿Es dolorosa la artroscopia de rodilla?",
        answer:
          "Implica dolor postoperatorio esperado, generalmente menor que el de una cirugía abierta, y se controla con manejo analgésico indicado por el médico.",
      },
    ],
    relatedConditions: ["desgaste-de-rodilla", "lesiones-deportivas"],
    lastReviewed: "2026-09-09",
    image: "/images/services/artroscopia-minima-invasiva-rodilla.jpg",
    seo: {
      title: "Artroscopia de Rodilla en Monterrey, N.L.",
      description: "¿Necesitas una artroscopia de rodilla en Monterrey? El Dr. Aram Alarcón realiza este procedimiento de mínima invasión para lesiones de rodilla.",
      keywords: [
        "artroscopia de rodilla en Monterrey",
        "dónde puedo realizarme artroscopia de rodilla en Monterrey",
        "precio de artroscopia de rodilla en Monterrey",
        "cirujano de rodilla en Monterrey",
      ],
    },
  },
];
