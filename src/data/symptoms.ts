import type { Symptom } from "@/types/schema";

// Los 10 síntomas del intake real del Dr. Aram Alarcón Valdéz (2026-09-09).
export const symptoms: Symptom[] = [
  {
    id: "dolor-articular-persistente",
    slug: "dolor-articular-persistente",
    name: "Dolor Articular Persistente",
    description:
      "El dolor articular persistente es aquel que se mantiene por semanas o empeora con el tiempo en una o varias articulaciones, a diferencia de una molestia pasajera tras un esfuerzo puntual. Puede aparecer al moverse, al cargar peso o incluso en reposo, y suele ser señal de un proceso que requiere valoración, como desgaste articular o una lesión que no ha sanado por completo.",
    causes: ["Desgaste articular (artrosis)", "Lesión previa no rehabilitada", "Inflamación articular sostenida", "Sobrecarga repetitiva de la articulación"],
    alarmSigns: [
      "Si el dolor se acompaña de fiebre, enrojecimiento intenso e hinchazón súbita de la articulación, acude a urgencias de inmediato: puede tratarse de una infección articular.",
    ],
    whyConsult:
      "Ignorar un dolor articular persistente permite que la causa de fondo (por ejemplo, un desgaste articular) avance sin control, lo que puede reducir las opciones de tratamiento conservador con el paso del tiempo.",
    faqs: [
      {
        question: "¿Cuándo un dolor articular deja de ser normal?",
        answer:
          "Cuando se mantiene más de unas semanas, empeora progresivamente o limita actividades cotidianas como caminar o subir escaleras — en ese punto conviene una valoración con un traumatólogo.",
      },
      {
        question: "¿El reposo total ayuda a un dolor articular persistente?",
        answer:
          "No siempre. El reposo excesivo puede debilitar la musculatura que protege la articulación; el manejo adecuado depende de la causa específica, por lo que un diagnóstico es el primer paso.",
      },
    ],
    relatedConditions: ["desgaste-de-rodilla", "lesiones-deportivas"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/dolor-articular-persistente.jpg",
    seo: {
      title: "Tratamiento a Dolor Articular Persistente en Monterrey, N.L.",
      description: "¿Dolor articular persistente en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, identifica la causa y ofrece tratamiento.",
      keywords: [
        "especialista en dolor articular en Monterrey",
        "tratamiento para dolor articular en Monterrey",
        "quien atiende dolor articular en Monterrey",
        "traumatólogo en Monterrey",
      ],
    },
  },
  {
    id: "hinchazon-en-articulaciones-o-huesos",
    slug: "hinchazon-en-articulaciones-o-huesos",
    name: "Hinchazón en Articulaciones o Huesos",
    description:
      "La hinchazón en una articulación o zona ósea es la acumulación de líquido o inflamación de los tejidos alrededor de la lesión, que hace que la zona se vea más grande de lo normal y a veces se sienta caliente al tacto. Puede aparecer tras un golpe, un esfuerzo excesivo, o como parte de un proceso de desgaste articular de larga evolución.",
    causes: ["Lesión reciente (esguince, golpe)", "Desgaste articular con derrame de líquido", "Sobreuso de la articulación", "Inflamación articular sostenida"],
    alarmSigns: [
      "Si la hinchazón aparece de forma súbita junto con fiebre, dolor intenso y la piel muy enrojecida y caliente, acude a urgencias de inmediato: puede ser una infección articular u ósea.",
    ],
    whyConsult:
      "Una hinchazón que no baja en unos días, o que se repite con frecuencia, suele indicar un problema estructural (como daño de menisco o ligamento) que necesita diagnóstico específico para tratarse a tiempo.",
    faqs: [
      {
        question: "¿La hinchazón siempre significa que hay una fractura?",
        answer:
          "No necesariamente. La hinchazón puede deberse a un esguince, inflamación articular o derrame de líquido por desgaste, no solo a una fractura — la exploración y, si es necesario, una radiografía lo confirman.",
      },
      {
        question: "¿Debo poner hielo si tengo hinchazón en una articulación?",
        answer:
          "El hielo suele ayudar a reducir la inflamación en las primeras 48 horas tras una lesión aguda, pero si la hinchazón persiste o se repite, se necesita valoración para identificar la causa.",
      },
    ],
    relatedConditions: ["desgaste-de-rodilla"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/hinchazon-en-articulaciones-o-huesos.jpg",
    seo: {
      title: "Tratamiento a Hinchazón en Articulaciones en Monterrey, N.L.",
      description: "¿Hinchazón en articulaciones o huesos en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, evalúa la causa y ofrece tratamiento.",
      keywords: [
        "especialista en hinchazón articular en Monterrey",
        "tratamiento para hinchazón de articulaciones en Monterrey",
        "médico para hinchazón de rodilla en Monterrey",
        "traumatólogo en Monterrey",
      ],
    },
  },
  {
    id: "deformidad-osea-visible",
    slug: "deformidad-osea-visible",
    name: "Deformidad Ósea Visible",
    description:
      "Una deformidad ósea visible es un cambio notorio en la forma o alineación normal de un hueso o articulación, que puede desarrollarse de forma gradual (por desgaste o desalineación progresiva) o aparecer de golpe tras una fractura o lesión severa. Es un signo que siempre amerita valoración traumatológica.",
    causes: ["Desgaste articular avanzado", "Fractura mal consolidada", "Desalineación progresiva de la articulación", "Lesión traumática severa"],
    alarmSigns: [
      "Si la deformidad aparece de golpe tras un golpe o caída, junto con dolor intenso e incapacidad para mover la zona, acude a urgencias de inmediato: puede tratarse de una fractura o luxación.",
    ],
    whyConsult:
      "Una deformidad ósea que se desarrolla poco a poco (por ejemplo, por desgaste articular avanzado) puede seguir progresando y limitar cada vez más la función si no se atiende a tiempo.",
    faqs: [
      {
        question: "¿Toda deformidad ósea requiere cirugía?",
        answer:
          "No siempre. Depende de la causa y la gravedad: algunas deformidades se controlan con tratamiento conservador, mientras que otras sí requieren corrección quirúrgica. El traumatólogo lo determina tras la valoración.",
      },
      {
        question: "¿Una deformidad leve puede empeorar con el tiempo?",
        answer:
          "Sí, especialmente si su causa es un desgaste articular progresivo. Por eso conviene valorarla pronto, aunque no cause dolor intenso todavía.",
      },
    ],
    relatedConditions: ["desgaste-de-rodilla"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/deformidad-osea-visible.jpg",
    seo: {
      title: "Tratamiento a Deformidad Ósea en Monterrey, N.L.",
      description: "¿Notas una deformidad ósea o articular en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, la evalúa y ofrece tratamiento.",
      keywords: [
        "especialista en deformidad ósea en Monterrey",
        "tratamiento para deformidad articular en Monterrey",
        "quien atiende deformidad ósea en Monterrey",
        "traumatólogo en Monterrey",
      ],
    },
  },
  {
    id: "limitacion-o-perdida-de-rango-de-movimiento",
    slug: "limitacion-o-perdida-de-rango-de-movimiento",
    name: "Limitación o Pérdida de Rango de Movimiento",
    description:
      "La limitación o pérdida de rango de movimiento ocurre cuando una articulación ya no puede moverse con la misma amplitud de antes — por ejemplo, dificultad para estirar por completo la rodilla o para girar la espalda. Suele desarrollarse de forma gradual y es frecuente en procesos de desgaste articular o de columna.",
    causes: ["Desgaste articular (artrosis)", "Rigidez tras una lesión no rehabilitada", "Problemas de columna vertebral", "Inflamación articular sostenida"],
    alarmSigns: [
      "Si la pérdida de movimiento es súbita, tras una caída o golpe, y se acompaña de dolor intenso o deformidad visible, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "Entre menos se atienda la limitación de movimiento, más se debilita la musculatura de soporte alrededor de la articulación, lo que puede acelerar la pérdida de función a largo plazo.",
    faqs: [
      {
        question: "¿Se puede recuperar el rango de movimiento perdido?",
        answer:
          "En muchos casos sí, especialmente si se atiende a tiempo con fisioterapia dirigida. La posibilidad de recuperación depende de la causa de fondo, por lo que el diagnóstico es el primer paso.",
      },
      {
        question: "¿La limitación de movimiento siempre duele?",
        answer:
          "No siempre. Algunos pacientes notan primero la dificultad para moverse con normalidad y el dolor aparece después, conforme la causa de fondo avanza.",
      },
    ],
    relatedConditions: ["desgaste-de-rodilla", "problemas-de-columna", "hernias-de-disco-lumbar"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/limitacion-o-perdida-de-rango-de-movimiento.jpg",
    seo: {
      title: "Tratamiento a Limitación de Movimiento en Monterrey, N.L.",
      description: "¿Limitación o pérdida de movimiento articular en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, evalúa la causa y trata el problema.",
      keywords: [
        "especialista en limitación de movimiento en Monterrey",
        "tratamiento para rigidez articular en Monterrey",
        "quien atiende pérdida de movilidad en Monterrey",
        "traumatólogo en Monterrey",
      ],
    },
  },
  {
    id: "rigidez-por-las-mananas",
    slug: "rigidez-por-las-mananas",
    name: "Rigidez, Especialmente por las Mañanas",
    colloquialNames: ["coyunturas tiesas en la mañana"],
    description:
      "La rigidez matutina es la sensación de articulaciones \"tiesas\" o difíciles de mover al despertar, que suele mejorar conforme la persona se mueve durante los primeros minutos del día. Cuando se repite todos los días y dura más de unos minutos, suele estar relacionada con desgaste articular o problemas de columna.",
    causes: ["Desgaste articular (artrosis)", "Inactividad prolongada durante el sueño", "Problemas de columna vertebral", "Inflamación articular sostenida"],
    alarmSigns: [
      "Si la rigidez matutina se acompaña de hinchazón importante, fiebre o pérdida de fuerza en las piernas, acude a valoración médica urgente.",
    ],
    whyConsult:
      "Cuando la rigidez matutina se vuelve diaria y dura cada vez más tiempo, suele indicar que el desgaste articular o el problema de columna de fondo está avanzando y conviene ajustar el tratamiento.",
    faqs: [
      {
        question: "¿Es normal sentir rigidez al despertar?",
        answer:
          "Una rigidez breve de pocos minutos puede ser normal. Si dura más tiempo, se repite todos los días o va en aumento, conviene una valoración con un traumatólogo.",
      },
      {
        question: "¿Qué ayuda a reducir la rigidez matutina?",
        answer:
          "Moverse de forma suave al despertar y mantener una rutina de ejercicio regular suele ayudar, pero si la rigidez es constante es importante identificar y tratar la causa de fondo.",
      },
    ],
    relatedConditions: ["desgaste-de-rodilla", "problemas-de-columna"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/rigidez-por-las-mananas.jpg",
    seo: {
      title: "Tratamiento a Rigidez Matutina en Monterrey, N.L.",
      description: "¿Rigidez articular por las mañanas en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, identifica la causa y ofrece tratamiento.",
      keywords: [
        "especialista en rigidez articular en Monterrey",
        "tratamiento para rigidez matutina en Monterrey",
        "quien atiende rigidez de articulaciones en Monterrey",
        "traumatólogo en Monterrey",
      ],
    },
  },
  {
    id: "inestabilidad-al-caminar",
    slug: "inestabilidad-al-caminar",
    name: "Inestabilidad o Dificultad al Caminar o Moverte",
    description:
      "La inestabilidad al caminar o moverse es la sensación de que una articulación (con frecuencia la rodilla) puede \"fallar\" o ceder al apoyar el peso, incluso sin llegar a caerse. Es distinta al dolor simple: implica una falta de confianza en la estabilidad de la articulación durante el movimiento.",
    causes: ["Desgaste articular avanzado", "Lesión de ligamentos no rehabilitada", "Debilidad muscular alrededor de la articulación", "Hernia de disco lumbar con afectación de una pierna"],
    alarmSigns: [
      "Si la inestabilidad se acompaña de debilidad súbita en ambas piernas o pérdida de control para orinar o defecar, acude a urgencias de inmediato: puede ser un problema neurológico que requiere atención inmediata.",
    ],
    whyConsult:
      "La inestabilidad articular aumenta el riesgo de caídas y de una nueva lesión, además de que suele ser señal de que la articulación ya no tiene el soporte muscular o estructural adecuado.",
    faqs: [
      {
        question: "¿La inestabilidad de rodilla siempre es por los ligamentos?",
        answer:
          "No siempre. También puede deberse a desgaste articular avanzado o a debilidad muscular; el traumatólogo determina la causa exacta con la exploración física.",
      },
      {
        question: "¿Se puede tratar la inestabilidad articular sin cirugía?",
        answer:
          "En muchos casos sí, con fisioterapia dirigida a fortalecer la musculatura de soporte. La cirugía se considera cuando hay daño estructural específico que lo justifique.",
      },
    ],
    relatedConditions: ["desgaste-de-rodilla", "hernias-de-disco-lumbar"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/inestabilidad-al-caminar.jpg",
    seo: {
      title: "Tratamiento a Inestabilidad al Caminar en Monterrey, N.L.",
      description: "¿Sientes que la rodilla o la pierna fallan al caminar en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, evalúa la causa.",
      keywords: [
        "especialista en inestabilidad de rodilla en Monterrey",
        "tratamiento para inestabilidad al caminar en Monterrey",
        "quien atiende inestabilidad articular en Monterrey",
        "traumatólogo en Monterrey",
      ],
    },
  },
  {
    id: "dolor-de-espalda-cronico",
    slug: "dolor-de-espalda-cronico",
    name: "Dolor de Espalda Crónico o Agudo",
    description:
      "El dolor de espalda puede presentarse de forma súbita tras un esfuerzo o mal movimiento (agudo), o mantenerse por semanas o meses (crónico). Ambos tipos pueden originarse en músculos, articulaciones o discos de la columna, y su manejo depende de identificar la causa exacta.",
    causes: ["Problemas degenerativos de la columna", "Hernia de disco lumbar", "Contractura o esfuerzo muscular", "Malas posturas sostenidas"],
    alarmSigns: [
      "Si el dolor de espalda se acompaña de debilidad en las piernas, hormigueo que no cede, o pérdida de control para orinar o defecar, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "Un dolor de espalda que se vuelve crónico sin diagnóstico puede llevar a compensaciones posturales que generan dolor en otras zonas del cuerpo, además de retrasar el tratamiento de la causa real.",
    faqs: [
      {
        question: "¿Cuál es la diferencia entre dolor de espalda agudo y crónico?",
        answer:
          "El agudo aparece de forma súbita, casi siempre tras un esfuerzo o mal movimiento, y suele mejorar en días o semanas. El crónico se mantiene por más de tres meses y requiere identificar una causa de fondo.",
      },
      {
        question: "¿El dolor de espalda siempre se relaciona con una hernia de disco?",
        answer:
          "No. También puede deberse a contracturas musculares, malas posturas o desgaste de las articulaciones de la columna. La hernia de disco es una de varias causas posibles.",
      },
    ],
    relatedConditions: ["problemas-de-columna", "hernias-de-disco-lumbar"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/dolor-de-espalda-cronico.jpg",
    seo: {
      title: "Tratamiento a Dolor de Espalda en Monterrey, N.L.",
      description: "¿Dolor de espalda crónico o agudo en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, identifica la causa y ofrece tratamiento.",
      keywords: [
        "especialista en dolor de espalda en Monterrey",
        "tratamiento para dolor de espalda en Monterrey",
        "quien atiende dolor de espalda en Monterrey",
        "traumatólogo de columna en Monterrey",
      ],
    },
  },
  {
    id: "fracturas-o-lesiones-oseas-frecuentes",
    slug: "fracturas-o-lesiones-oseas-frecuentes",
    name: "Fracturas o Lesiones Óseas Frecuentes",
    description:
      "Presentar fracturas o lesiones óseas con más frecuencia de la esperada para el tipo de actividad realizada puede ser señal de huesos debilitados o de una técnica deportiva/postural que expone repetidamente al hueso a esfuerzos excesivos.",
    causes: ["Práctica deportiva de alto impacto sin preparación adecuada", "Debilidad ósea", "Técnica deportiva inadecuada", "Golpes o caídas repetidas"],
    alarmSigns: [
      "Ante cualquier fractura con deformidad visible, imposibilidad de mover la zona o dolor severo, acude a urgencias de inmediato — no es un caso para valoración programada.",
    ],
    whyConsult:
      "Cuando las fracturas o lesiones óseas se repiten con frecuencia, conviene identificar si hay un factor de fondo (técnica, preparación física, densidad ósea) para prevenir nuevas lesiones.",
    faqs: [
      {
        question: "¿Por qué se repiten tanto las fracturas o lesiones óseas en algunas personas?",
        answer:
          "Puede deberse a retomar la actividad física antes de una recuperación completa, a técnica inadecuada, o a que el hueso no ha recibido la preparación necesaria para el nivel de esfuerzo exigido.",
      },
      {
        question: "¿Toda fractura requiere cirugía?",
        answer:
          "No. Muchas fracturas se tratan con inmovilización y seguimiento; la cirugía se indica cuando el tipo o la posición de la fractura lo requiere para una consolidación adecuada.",
      },
    ],
    relatedConditions: ["lesiones-deportivas"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/fracturas-o-lesiones-oseas-frecuentes.jpg",
    seo: {
      title: "Tratamiento a Fracturas Frecuentes en Monterrey, N.L.",
      description: "¿Fracturas o lesiones óseas frecuentes en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, evalúa la causa de fondo.",
      keywords: [
        "especialista en fracturas en Monterrey",
        "tratamiento para lesiones óseas en Monterrey",
        "quien atiende fracturas frecuentes en Monterrey",
        "traumatólogo en Monterrey",
      ],
    },
  },
  {
    id: "lesiones-deportivas-frecuentes",
    slug: "lesiones-deportivas-frecuentes",
    name: "Lesiones Deportivas Frecuentes",
    description:
      "Lesionarse de forma repetida al practicar deporte o ejercicio, incluso con esfuerzos que antes no causaban problema, suele indicar que una lesión previa no se rehabilitó por completo o que existe un factor de técnica o preparación física que conviene corregir.",
    causes: ["Rehabilitación incompleta de una lesión previa", "Retomar el ejercicio con demasiada intensidad", "Falta de calentamiento o preparación física", "Técnica deportiva inadecuada"],
    alarmSigns: [
      "Si una lesión deportiva se acompaña de deformidad visible, imposibilidad de apoyar la extremidad o dolor severo, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "Repetir lesiones deportivas sin atenderlas a fondo puede llevar a un daño articular acumulativo con el tiempo, además de prolongar la interrupción de la actividad física.",
    faqs: [
      {
        question: "¿Cómo saber si una lesión deportiva ya sanó por completo?",
        answer:
          "La ausencia de dolor no siempre significa recuperación completa; una valoración médica confirma si la zona está lista para retomar la actividad física con seguridad.",
      },
      {
        question: "¿Se pueden prevenir las lesiones deportivas frecuentes?",
        answer:
          "En muchos casos sí, corrigiendo la técnica, respetando los tiempos de rehabilitación y fortaleciendo la musculatura de soporte antes de volver a la actividad física intensa.",
      },
    ],
    relatedConditions: ["lesiones-deportivas"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/lesiones-deportivas-frecuentes.jpg",
    seo: {
      title: "Tratamiento a Lesiones Deportivas Frecuentes en Monterrey",
      description: "¿Se te repiten las lesiones al hacer deporte en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, identifica la causa de fondo.",
      keywords: [
        "especialista en lesiones deportivas recurrentes en Monterrey",
        "tratamiento para lesiones deportivas en Monterrey",
        "quien atiende lesiones deportivas en Monterrey",
        "traumatólogo del deporte en Monterrey",
      ],
    },
  },
  {
    id: "traumas-musculares-o-de-ligamentos",
    slug: "traumas-musculares-o-de-ligamentos",
    name: "Traumas Musculares o de Ligamentos",
    description:
      "Un trauma muscular o de ligamentos ocurre cuando estos tejidos se estiran más allá de su capacidad o sufren un golpe directo, provocando dolor, inflamación y, en ocasiones, dificultad para mover o dar soporte a la articulación afectada.",
    causes: ["Golpe directo durante actividad física", "Movimiento brusco o mal ejecutado", "Sobreestiramiento del músculo o ligamento", "Falta de calentamiento previo al ejercicio"],
    alarmSigns: [
      "Si tras el trauma no puedes apoyar la extremidad, hay deformidad visible o el dolor es severo e inmediato, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "Un trauma muscular o ligamentario que no se diagnostica y rehabilita correctamente puede dejar la zona inestable o débil, aumentando el riesgo de una nueva lesión.",
    faqs: [
      {
        question: "¿Cómo distinguir un desgarro muscular de un esguince de ligamento?",
        answer:
          "Ambos causan dolor e inflamación, pero el origen del tejido afectado es distinto; la exploración física del traumatólogo, y en ocasiones un estudio de imagen, permite diferenciarlos con precisión.",
      },
      {
        question: "¿Cuánto tiempo tarda en sanar un trauma muscular o de ligamento?",
        answer:
          "Depende de la gravedad de la lesión: puede ir de unos días en casos leves a varias semanas en lesiones más importantes, siempre con seguimiento médico.",
      },
    ],
    relatedConditions: ["lesiones-deportivas"],
    lastReviewed: "2026-09-09",
    image: "/images/symptoms/traumas-musculares-o-de-ligamentos.jpg",
    seo: {
      title: "Tratamiento a Traumas Musculares en Monterrey",
      description: "¿Trauma muscular o de ligamentos en Monterrey? El Dr. Aram Alarcón, traumatólogo y ortopedista, diagnostica y trata la lesión.",
      keywords: [
        "especialista en traumas musculares en Monterrey",
        "tratamiento para lesión de ligamentos en Monterrey",
        "quien atiende traumas musculares en Monterrey",
        "traumatólogo en Monterrey",
      ],
    },
  },
];
