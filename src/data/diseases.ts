import type { MedicalCondition } from "@/types/schema";

// Las 4 enfermedades del intake real del Dr. Aram Alarcón Valdéz (2026-09-09).
// El doctor confirmó que esta es la lista final por ahora (no el rango de
// 10-15 sugerido por el formato) — se puede ampliar sin rehacer el sitio.
export const diseases: MedicalCondition[] = [
  {
    id: "desgaste-de-rodilla",
    slug: "desgaste-de-rodilla",
    name: "Desgaste de Rodilla",
    technicalName: "Gonartrosis (osteoartritis de rodilla)",
    colloquialNames: ["desgaste de rodilla", "artrosis de rodilla"],
    description:
      "El desgaste de rodilla, o gonartrosis, es la pérdida progresiva del cartílago que recubre la articulación de la rodilla, lo que provoca que los huesos rocen entre sí al moverse. Es más frecuente después de los 50 años y suele empeorar con el tiempo si no se atiende. Un traumatólogo puede confirmarlo con una exploración física y una radiografía simple. Al inicio se presenta como dolor leve al caminar o subir escaleras; con el tiempo, el dolor se vuelve constante y limita actividades cotidianas como levantarse de una silla o arrodillarse.",
    symptoms: [
      "Dolor articular persistente al caminar o subir escaleras",
      "Hinchazón alrededor de la rodilla",
      "Rigidez matutina que mejora al moverse",
      "Sensación de inestabilidad al caminar",
    ],
    causes: [
      "Desgaste natural del cartílago asociado a la edad",
      "Sobrepeso u obesidad, que aumenta la carga sobre la articulación",
      "Lesiones previas de rodilla no rehabilitadas por completo",
      "Actividades de alto impacto repetitivo",
    ],
    riskFactors: [
      "Edad mayor a 50 años",
      "Sobrepeso u obesidad",
      "Antecedentes de lesiones deportivas en la rodilla",
      "Actividades laborales con carga repetitiva sobre las rodillas",
    ],
    mexicoStats:
      "La osteoartritis de rodilla afecta a una proporción importante de adultos mayores de 60 años en México, y es una de las principales causas de consulta traumatológica y de solicitud de cirugía de reemplazo articular en el país.",
    complications: [
      "Pérdida progresiva de la movilidad de la rodilla",
      "Deformidad de la articulación con el tiempo",
      "Dependencia de apoyo (bastón o andadera) para caminar",
      "Dolor crónico que afecta el sueño y la actividad diaria",
    ],
    treatments: [
      "Fisioterapia y ejercicio dirigido para fortalecer el músculo alrededor de la rodilla",
      "Infiltraciones articulares para reducir la inflamación",
      "Artroscopia para casos seleccionados",
      "Reemplazo articular (prótesis de rodilla) cuando el desgaste es avanzado",
    ],
    faqs: [
      {
        question: "¿Desgaste de rodilla es lo mismo que artrosis de rodilla?",
        answer:
          "Sí. \"Desgaste de rodilla\" es el término coloquial para la artrosis (o gonartrosis), la pérdida del cartílago articular. Ambos términos se usan indistintamente en consulta.",
      },
      {
        question: "¿El desgaste de rodilla siempre requiere cirugía?",
        answer:
          "No. En etapas iniciales suele controlarse con fisioterapia, control de peso e infiltraciones. La cirugía (artroscopia o prótesis) se reserva para casos donde el desgaste ya limita de forma importante la movilidad o el dolor no responde a tratamiento conservador.",
      },
      {
        question: "¿Cuánto tiempo tarda en avanzar el desgaste de rodilla?",
        answer:
          "Varía por persona: depende de la causa, el peso corporal y el nivel de actividad. Por eso es importante una valoración periódica con un traumatólogo para ajustar el tratamiento a tiempo.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la osteoartritis de rodilla"],
    relatedServices: ["protesis-de-rodilla", "infiltraciones-rodilla-cadera-hombro", "artroscopia-minima-invasiva-rodilla"],
    relatedSymptoms: [
      "dolor-articular-persistente",
      "hinchazon-en-articulaciones-o-huesos",
      "deformidad-osea-visible",
      "limitacion-o-perdida-de-rango-de-movimiento",
      "rigidez-por-las-mananas",
      "inestabilidad-al-caminar",
    ],
    lastReviewed: "2026-09-09",
    image: "/images/diseases/desgaste-de-rodilla.jpg",
    seo: {
      title: "Especialista en Desgaste de Rodilla en Monterrey, N.L.",
      description: "¿Dolor y desgaste de rodilla en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, trata la gonartrosis desde fisioterapia hasta prótesis.",
      keywords: [
        "desgaste de rodilla en Monterrey",
        "especialista en artrosis de rodilla en Monterrey",
        "tratamiento para desgaste de rodilla en Monterrey",
        "traumatólogo para dolor de rodilla en Monterrey",
      ],
    },
  },
  {
    id: "problemas-de-columna",
    slug: "problemas-de-columna",
    name: "Problemas de Columna",
    technicalName: "Enfermedad degenerativa de la columna vertebral",
    colloquialNames: ["problemas de columna", "dolor de espalda crónico"],
    description:
      "\"Problemas de columna\" agrupa las condiciones que afectan las vértebras, discos y articulaciones de la espalda, y que provocan dolor, rigidez o dificultad para moverse con normalidad. Puede originarse por desgaste relacionado con la edad, malas posturas sostenidas o esfuerzo físico repetido. Un traumatólogo evalúa el origen exacto con exploración física y, si es necesario, estudios de imagen. El síntoma más frecuente es dolor de espalda que puede ser constante o presentarse solo con ciertos movimientos o posturas.",
    symptoms: [
      "Dolor de espalda constante o intermitente",
      "Rigidez al levantarse por las mañanas",
      "Dificultad para inclinarse o girar el torso",
      "Dolor que se irradia hacia glúteos o piernas en algunos casos",
    ],
    causes: [
      "Desgaste natural de los discos y articulaciones de la columna con la edad",
      "Malas posturas mantenidas por periodos prolongados",
      "Cargar peso de forma inadecuada",
      "Sedentarismo y debilidad de la musculatura que sostiene la columna",
    ],
    riskFactors: [
      "Trabajos que exigen estar sentado o de pie por muchas horas",
      "Sobrepeso",
      "Sedentarismo",
      "Antecedentes de lesiones previas de espalda",
    ],
    mexicoStats:
      "El dolor de espalda es una de las causas más frecuentes de incapacidad laboral temporal en México, y afecta en algún momento de su vida a la mayoría de los adultos.",
    complications: [
      "Limitación progresiva del movimiento de la espalda",
      "Dolor crónico que interfiere con el trabajo y el descanso",
      "Compensaciones posturales que generan dolor en otras articulaciones",
    ],
    treatments: [
      "Fisioterapia y fortalecimiento de la musculatura de espalda y abdomen",
      "Ajustes posturales y ergonómicos",
      "Infiltraciones dirigidas en casos seleccionados",
      "Valoración quirúrgica solo cuando hay compromiso neurológico o falla del tratamiento conservador",
    ],
    faqs: [
      {
        question: "¿Todo dolor de espalda es un problema de columna que requiere cirugía?",
        answer:
          "No. La mayoría de los problemas de columna se controlan con fisioterapia, ajustes posturales y ejercicio dirigido. La cirugía se reserva para casos con compromiso neurológico o dolor incapacitante que no responde a tratamiento conservador.",
      },
      {
        question: "¿Cuándo debo preocuparme por un dolor de espalda?",
        answer:
          "Debe evaluarse pronto si el dolor es intenso, no mejora con reposo, o se acompaña de hormigueo, debilidad en las piernas o pérdida de control de esfínteres — estos últimos son señales de alarma que requieren atención inmediata.",
      },
      {
        question: "¿El sedentarismo empeora los problemas de columna?",
        answer:
          "Sí. La falta de actividad debilita los músculos que sostienen la columna, lo que aumenta la carga sobre las vértebras y discos y puede acelerar el desgaste.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la lumbalgia"],
    relatedServices: [],
    relatedSymptoms: ["limitacion-o-perdida-de-rango-de-movimiento", "rigidez-por-las-mananas", "dolor-de-espalda-cronico"],
    lastReviewed: "2026-09-09",
    image: "/images/diseases/problemas-de-columna.jpg",
    seo: {
      title: "Especialista en Problemas de Columna en Monterrey, N.L.",
      description: "¿Dolor de espalda o problemas de columna en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, ofrece diagnóstico y tratamiento especializado.",
      keywords: [
        "problemas de columna en Monterrey",
        "especialista en dolor de espalda en Monterrey",
        "tratamiento para columna en Monterrey",
        "traumatólogo de columna en Monterrey",
      ],
    },
  },
  {
    id: "lesiones-deportivas",
    slug: "lesiones-deportivas",
    name: "Lesiones Deportivas",
    technicalName: "Lesiones musculoesqueléticas de origen deportivo",
    colloquialNames: ["lesión deportiva", "lesión al hacer ejercicio"],
    description:
      "Las lesiones deportivas son daños a músculos, ligamentos, tendones o huesos que ocurren durante la práctica de actividad física o deporte, ya sea por un golpe directo, un mal movimiento o sobreuso. Son comunes en corredores, futbolistas y personas que inician rutinas de ejercicio sin preparación previa. El traumatólogo evalúa el tipo de lesión con exploración física y, si se sospecha daño estructural, estudios de imagen. El manejo oportuno reduce el riesgo de que la lesión se vuelva crónica o recurrente.",
    symptoms: [
      "Dolor localizado tras un golpe o esfuerzo físico",
      "Inflamación o hinchazón inmediata",
      "Dificultad para apoyar o mover la zona lesionada",
      "Inestabilidad articular tras un esguince o torcedura",
    ],
    causes: [
      "Golpes directos durante la práctica deportiva",
      "Movimientos bruscos o mal ejecutados",
      "Sobreuso sin periodos adecuados de descanso",
      "Falta de calentamiento antes de la actividad física",
    ],
    riskFactors: [
      "Retomar el ejercicio de forma intensa sin preparación previa",
      "Antecedentes de lesiones previas en la misma zona",
      "Practicar deportes de contacto o alto impacto",
      "No usar equipo de protección adecuado",
    ],
    mexicoStats:
      "Las lesiones deportivas son un motivo frecuente de consulta traumatológica en México, en particular en personas jóvenes y adultas que practican fútbol, running y actividades recreativas de fin de semana.",
    complications: [
      "Lesión crónica o recurrente si no se rehabilita por completo",
      "Inestabilidad articular a largo plazo",
      "Desarrollo temprano de desgaste articular en la zona afectada",
    ],
    treatments: [
      "Reposo relativo y protección de la zona lesionada",
      "Fisioterapia y rehabilitación dirigida",
      "Infiltraciones en casos seleccionados",
      "Artroscopia para lesiones estructurales que no mejoran con tratamiento conservador",
    ],
    faqs: [
      {
        question: "¿Toda lesión deportiva necesita una cirugía?",
        answer:
          "No. La mayoría de las lesiones deportivas se recuperan con reposo relativo y fisioterapia. La cirugía (por ejemplo, artroscopia) se reserva para lesiones estructurales que no mejoran con tratamiento conservador.",
      },
      {
        question: "¿Cuándo puedo volver a hacer ejercicio después de una lesión deportiva?",
        answer:
          "Depende del tipo y gravedad de la lesión. Retomar la actividad antes de tiempo aumenta el riesgo de una nueva lesión, por lo que conviene que el traumatólogo confirme la recuperación antes de reiniciar.",
      },
      {
        question: "¿Por qué se repiten tanto las lesiones deportivas?",
        answer:
          "Casi siempre porque la lesión anterior no se rehabilitó por completo antes de volver a la actividad física, dejando la zona más débil y propensa a lesionarse de nuevo.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Manejo de lesiones musculoesqueléticas relacionadas con el deporte"],
    relatedServices: ["artroscopia-minima-invasiva-rodilla", "infiltraciones-rodilla-cadera-hombro"],
    relatedSymptoms: [
      "dolor-articular-persistente",
      "fracturas-o-lesiones-oseas-frecuentes",
      "lesiones-deportivas-frecuentes",
      "traumas-musculares-o-de-ligamentos",
    ],
    lastReviewed: "2026-09-09",
    image: "/images/diseases/lesiones-deportivas.jpg",
    seo: {
      title: "Especialista en Lesiones Deportivas en Monterrey, N.L.",
      description: "¿Lesión al hacer deporte o ejercicio en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, diagnostica y trata lesiones deportivas de forma integral.",
      keywords: [
        "lesiones deportivas en Monterrey",
        "especialista en lesiones deportivas en Monterrey",
        "tratamiento para lesión deportiva en Monterrey",
        "traumatólogo del deporte en Monterrey",
      ],
    },
  },
  {
    id: "hernias-de-disco-lumbar",
    slug: "hernias-de-disco-lumbar",
    name: "Hernias de Disco Lumbar",
    technicalName: "Hernia discal lumbar",
    colloquialNames: ["hernia de disco", "disco herniado"],
    description:
      "Una hernia de disco lumbar ocurre cuando el material interno de un disco intervertebral de la parte baja de la espalda se desplaza y presiona una raíz nerviosa cercana. Esto puede provocar dolor de espalda que se irradia hacia una pierna, junto con hormigueo o debilidad. Es más frecuente entre los 30 y 50 años. El traumatólogo confirma el diagnóstico con exploración neurológica y, de ser necesario, resonancia magnética. La mayoría de los casos mejora con tratamiento conservador.",
    symptoms: [
      "Dolor lumbar que se irradia hacia glúteo o pierna",
      "Hormigueo o entumecimiento en la pierna afectada",
      "Debilidad al levantar el pie o la pierna",
      "Dolor que empeora al estar sentado por periodos largos",
    ],
    causes: [
      "Desgaste natural del disco intervertebral con la edad",
      "Levantar objetos pesados con mala técnica",
      "Movimientos repetitivos de flexión y rotación de la espalda",
      "Sobrepeso, que aumenta la carga sobre los discos lumbares",
    ],
    riskFactors: [
      "Edad entre 30 y 50 años",
      "Trabajos que implican levantar peso con frecuencia",
      "Sedentarismo con debilidad de la musculatura lumbar",
      "Sobrepeso u obesidad",
    ],
    mexicoStats:
      "La hernia de disco lumbar es una causa frecuente de dolor de espalda con irradiación a la pierna (ciática) en la población adulta mexicana en edad laboral.",
    complications: [
      "Dolor crónico si no se atiende a tiempo",
      "Debilidad progresiva de la pierna afectada",
      "En casos severos, pérdida de control de esfínteres — señal de urgencia médica",
    ],
    treatments: [
      "Reposo relativo y fisioterapia dirigida",
      "Manejo antiinflamatorio conservador bajo valoración médica",
      "Infiltraciones espinales en casos seleccionados",
      "Cirugía solo si hay debilidad progresiva o falla del tratamiento conservador prolongado",
    ],
    faqs: [
      {
        question: "¿Una hernia de disco lumbar siempre requiere cirugía?",
        answer:
          "No. La mayoría de las hernias de disco lumbar mejoran con reposo relativo, fisioterapia y manejo conservador en varias semanas. La cirugía se reserva para debilidad progresiva o dolor incapacitante que no responde a tratamiento.",
      },
      {
        question: "¿Hernia de disco y disco herniado son lo mismo?",
        answer:
          "Sí, son el mismo término: el disco herniado es el nombre coloquial de la hernia de disco intervertebral.",
      },
      {
        question: "¿Qué señales indican que una hernia de disco lumbar es urgente?",
        answer:
          "La pérdida de control para orinar o defecar, o la debilidad severa y súbita en ambas piernas, son señales de alarma que requieren atención de urgencias inmediata, no una cita programada.",
      },
    ],
    sources: ["Guía de Práctica Clínica CENETEC: Diagnóstico y tratamiento de la hernia discal lumbar"],
    relatedServices: [],
    relatedSymptoms: [
      "limitacion-o-perdida-de-rango-de-movimiento",
      "inestabilidad-al-caminar",
      "dolor-de-espalda-cronico",
    ],
    lastReviewed: "2026-09-09",
    image: "/images/diseases/hernias-de-disco-lumbar.jpg",
    seo: {
      title: "Especialista en Hernia de Disco Lumbar en Monterrey, N.L.",
      description: "¿Dolor lumbar que baja a la pierna en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, diagnostica y trata la hernia de disco lumbar.",
      keywords: [
        "hernia de disco lumbar en Monterrey",
        "especialista en hernia de disco en Monterrey",
        "tratamiento para disco herniado en Monterrey",
        "traumatólogo de columna en Monterrey",
      ],
    },
  },
];
