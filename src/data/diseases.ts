import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "desgaste-de-cadera",
    slug: "desgaste-de-cadera",
    name: "Desgaste de Cadera (Artrosis de Cadera)",
    technicalName: "Coxartrosis Avanzada de Cadera",
    description: "Enfermedad degenerativa caracterizada por el deterioro progresivo del cartílago articular en la articulación coxofemoral. Produce dolor profundo en la ingle, rigidez articular e incapacidad para caminar trayectos largos. El Dr. Aram Alarcón es especialista en reconstrucción y prótesis total de cadera con técnicas de mínima invasión.",
    symptoms: [
      "Dolor constante en la ingle que se irradia al muslo o rodilla",
      "Rigidez articular al levantarse o amarrarse las agujetas",
      "Cojera o dificultad progresiva para caminar",
      "Sensación de chasquido o fricción en la cadera"
    ],
    causes: [
      "Desgaste natural por envejecimiento y uso articular",
      "Deformidades anatómicas como pinzamiento femoroacetabular",
      "Antecedentes de traumatismos o fracturas previas",
      "Necrosis avascular de la cabeza femoral"
    ],
    riskFactors: [
      "Edad mayor a 50 años",
      "Sobrepeso y obesidad",
      "Actividades deportivas o laborales de alto impacto",
      "Displasia congénita de cadera no tratada"
    ],
    mexicoStats: "La coxartrosis afecta a más del 15% de los adultos mayores de 60 años en México, siendo la primera causa de reemplazo articular de cadera.",
    complications: [
      "Perdida total de la movilidad independiente",
      "Deformidad y acortamiento de la extremidad afectada",
      "Atrofia muscular en glúteos y muslos por desuso",
      "Dolor lumbar crónico secundario a marcha compensatoria"
    ],
    treatments: [
      "Evaluación clínica y radiológica especializada con mediciones digitales",
      "Terapia física prescriptiva y fortalecimiento muscular de core y pelvis",
      "Infiltraciones intraarticulares guiadas con plasma o ácido hialurónico",
      "Cirugía de Reemplazo Total de Cadera (Prótesis de Cadera de Mínima Invasión)"
    ],
    faqs: [
      {
        question: "¿Cuándo es necesario considerar una cirugía de prótesis de cadera?",
        answer: "Se recomienda cuando el dolor nocturno o al caminar interfiere gravemente con tu calidad de vida y los tratamientos conservadores o infiltraciones ya no brindan alivio duradero."
      },
      {
        question: "¿Cuánto tiempo dura la recuperación tras una prótesis de cadera?",
        answer: "Con los protocolos modernos de rápida recuperación del Dr. Aram Alarcón, el paciente empieza a dar sus primeros pasos el mismo día o al día siguiente de la cirugía, logrando autonomía en 4 a 6 semanas."
      }
    ],
    image: "/images/diseases/desgaste-cadera.jpg",
    seo: {
      title: "Desgaste de Cadera en Monterrey | Especialista Dr. Aram Alarcón",
      description: "Tratamiento avanzado y cirugía de prótesis de cadera en Monterrey. Dr. Aram Alarcón Valdéz, especialista en reconstrucción de cadera y pelvis.",
      keywords: ["Desgaste de Cadera Monterrey", "Prótesis de Cadera Monterrey", "Artrosis de Cadera", "Cirujano de Cadera Monterrey"]
    }
  },
  {
    id: "desgaste-de-rodilla",
    slug: "desgaste-de-rodilla",
    name: "Desgaste de Rodilla (Gonartrosis)",
    technicalName: "Gonartrosis Primaria o Secundaria",
    description: "Degeneración crónica del cartílago protector de las articulaciones de la rodilla. Provoca dolor al subir y bajar escaleras, deformidad en arco de las piernas e hinchazón frecuente.",
    symptoms: [
      "Dolor intenso al bajar escaleras o levantarse de una silla",
      "Hinchazón y derrames articulares de repetición",
      "Chasquidos audibles o sensación de 'crepitación' al doblar la rodilla",
      "Rigidez matutina en la rodilla"
    ],
    causes: [
      "Sobrecarga mecánica sostenida y sobrepeso",
      "Lesiones previas de meniscos o ligamentos cruzados",
      "Alineación en varo o valgo de las extremidades",
      "Enfermedades inflamatorias como artritis reumatoide"
    ],
    riskFactors: [
      "Edad mayor a 45 años",
      "Obesidad o índice de masa corporal elevado",
      "Deportes de impacto severo sin protección",
      "Antecedentes familiares de osteoartritis"
    ],
    mexicoStats: "La gonartrosis es la principal causa de consulta de ortopedia en pacientes adultos en México.",
    complications: [
      "Deformidad articular progresiva (piernas en O o en X)",
      "Pérdida de la capacidad para caminar distancias medias",
      "Inestabilidad articular y caídas frecuentes"
    ],
    treatments: [
      "Ajuste biomecánico y plantillas personalizadas",
      "Viscosuplementación e infiltraciones de gel/plasma rico en plaquetas",
      "Artroscopia mínima invasiva para limpieza y reparación",
      "Prótesis Total o Parcial de Rodilla con alineación computarizada"
    ],
    faqs: [
      {
        question: "¿Las infiltraciones pueden evitar la cirugía de rodilla?",
        answer: "En etapas leves a moderadas, las infiltraciones reducen la inflamación y retrasan significativamente la necesidad de reemplazo articular por varios meses o años."
      }
    ],
    image: "/images/diseases/desgaste-rodilla.jpg",
    seo: {
      title: "Desgaste de Rodilla en Monterrey | Dr. Aram Alarcón Valdéz",
      description: "Tratamiento integral de la gonartrosis y cirugía de prótesis de rodilla en Monterrey, N.L. Doctor especialista en Ortopedia.",
      keywords: ["Desgaste de Rodilla Monterrey", "Prótesis de Rodilla Monterrey", "Gonartrosis Tratamiento", "Infiltración Rodilla"]
    }
  },
  {
    id: "fracturas-de-pelvis-y-acetabulo",
    slug: "fracturas-de-pelvis-y-acetabulo",
    name: "Fracturas de Pelvis y Acetábulo",
    technicalName: "Fractura de Anillo Pélvico y Cavidad Acetabular",
    description: "Lesiones traumáticas complejas de alta energía que comprometen la estructura ósea que soporta el tronco y la cavidad donde articula la fémur. El Dr. Aram Alarcón cuenta con Alta Especialidad en el IMSS UMAE 21 para la reconstrucción anatómica de este tipo de fracturas.",
    symptoms: [
      "Dolor extremo en la pelvis, ingle o zona lumbar tras un impacto",
      "Incapacidad absoluta para ponerse de pie o soportar peso",
      "Hematomas extensos en la pelvis o muslos",
      "Adormecimiento o debilidad en las piernas"
    ],
    causes: [
      "Accidentes automovilísticos o de motocicleta a alta velocidad",
      "Caídas de gran altura",
      "Caídas simples en pacientes de la tercera edad con osteoporosis severa"
    ],
    riskFactors: [
      "Osteoporosis no diagnosticada",
      "Conducción de vehículos de alto riesgo",
      "Trabajos en alturas o construcción"
    ],
    mexicoStats: "Las fracturas pélvicas representan una de las principales urgencias quirúrgicas en centros traumatológicos de concentración como la UMAE 21.",
    complications: [
      "Sangrado interno o choque hipovolémico",
      "Lesión nerviosa del ciático o complejo sacro",
      "Desgaste prematuro de cadera secundario si no se reduce con precisión milimétrica"
    ],
    treatments: [
      "Fijación externa de urgencia para estabilización hemodinámica",
      "Reducción abierta y osteosíntesis con placas y tornillos de titanio de alta precisión",
      "Rehabilitación asistida y descarga progresiva de peso"
    ],
    faqs: [
      {
        question: "¿Por qué se requiere un especialista en cadera y pelvis para estas fracturas?",
        answer: "El complejo pélvico tiene una anatomía tridimensional sumamente intrincada rodeada de grandes vasos y nervios. Se requiere un adiestramiento quirúrgico de alta especialidad para fijarla correctamente."
      }
    ],
    image: "/images/diseases/fractura-pelvis.jpg",
    seo: {
      title: "Cirugía de Fractura de Pelvis en Monterrey | Dr. Aram Alarcón",
      description: "Alta Especialidad en Reconstrucción de Fracturas de Pelvis y Acetábulo en Monterrey, N.L. Dr. Aram Alarcón Valdéz.",
      keywords: ["Fractura de Pelvis Monterrey", "Cirugía de Acetábulo", "Traumatólogo Cadera Pelvis Monterrey"]
    }
  },
  {
    id: "problemas-de-columna",
    slug: "problemas-de-columna",
    name: "Problemas de Columna y Hernia Discal Lumbar",
    technicalName: "Radiculopatía Lumbar / Hernia de Disco",
    description: "Condiciones que afectan las vértebras y discos intervertebrales en la espalda baja, comprimiendo los nervios espinales y produciendo dolor intenso que corre hacia las piernas (ciática).",
    symptoms: [
      "Dolor punzante o quemante en la espalda baja que se irradia al glúteo o pierna",
      "Sensación de hormigueo o adormecimiento en los pies",
      "Debilidad al levantar la punta del pie al caminar",
      "Aumento del dolor al permanecer sentado o agacharse"
    ],
    causes: [
      "Degeneración discal por mala postura o sobreesfuerzo levantando cosas pesadas",
      "Desplazamiento del núcleo pulposo del disco",
      "Estrechamiento del canal lumbar (estenosis)"
    ],
    riskFactors: [
      "Trabajos con levantamiento de peso o postura sedentaria",
      "Fumar y falta de tono muscular abdominal",
      "Obesidad"
    ],
    mexicoStats: "El dolor lumbar es la segunda causa de incapacidad laboral en la población económicamente activa en México.",
    complications: [
      "Pérdida permanente de fuerza muscular en la pierna",
      "Síndrome de cauda equina (urgencia quirúrgica por pérdida de control de esfínteres)",
      "Dolor neuropático crónico"
    ],
    treatments: [
      "Manejo farmacológico especializado antiinflamatorio y neuromodulador",
      "Bloqueo epidural o infiltración radicular selectiva",
      "Fisioterapia orientada a reeducación postural y fortalecimiento lumbar",
      "Microdiscectomía o cirugía de mínima invasión de columna"
    ],
    faqs: [
      {
        question: "¿Toda hernia de disco requiere cirugía de columna?",
        answer: "No. Más del 85% de los pacientes responden satisfactoriamente con tratamiento conservador especializado, infiltración y terapia física bien guiada."
      }
    ],
    image: "/images/diseases/problemas-columna.jpg",
    seo: {
      title: "Tratamiento de Columna y Hernia Lumbar en Monterrey | Dr. Aram Alarcón",
      description: "Diagnóstico y tratamiento avanzado del dolor de espalda, ciática y hernias de disco en Monterrey. Consulta traumatológica especializada.",
      keywords: ["Hernia de Disco Monterrey", "Dolor de Espalda Monterrey", "Tratamiento de Ciática Monterrey"]
    }
  },
  {
    id: "lesiones-deportivas",
    slug: "lesiones-deportivas",
    name: "Lesiones Deportivas (Ligamentos y Meniscos)",
    technicalName: "Ruptura de Ligamento Cruzado y Lesión Meniscal",
    description: "Traumatismos articulares causados por giros bruscos, desaceleraciones o impactos directos durante la práctica deportiva o física intensa en rodilla, tobillo u hombro.",
    symptoms: [
      "Sensación de 'tronido' seco en la articulación durante el movimiento",
      "Hinchazón rápida e intensa a las pocas horas de la lesión",
      "Sensación de inestabilidad o que la rodilla 'se va hacia los lados'",
      "Bloqueo articular que impide estirar por completo la pierna"
    ],
    causes: [
      "Pivotes bruscos en fútbol, básquetbol o pádel",
      "Impactos directos en la rodilla o caídas con la pierna torcida",
      "Fatiga muscular y acondicionamiento físico deficiente"
    ],
    riskFactors: [
      "Práctica de deportes de contacto o cambio de dirección rápido",
      "Superficies de entrenamiento irregulares",
      "Falta de calentamiento previo"
    ],
    mexicoStats: "La ruptura del ligamento cruzado anterior es la lesión ligamentaria de rodilla más frecuente en deportistas jóvenes en Monterrey.",
    complications: [
      "Inestabilidad crónica que destruye el cartílago articular",
      "Nuevas rupturas meniscales por falta de sujeción",
      "Desgaste prematuro temprano a edades jóvenes"
    ],
    treatments: [
      "Protocolo RICE de urgencia e inmovilización",
      "Reconstrucción artroscópica de Ligamento Cruzado Anterior (LCA)",
      "Sutura meniscal o meniscectomía parcial por artroscopia",
      "Rehabilitación deportiva acelerada"
    ],
    faqs: [
      {
        question: "¿Cuándo puedo volver a hacer deporte tras una reconstrucción de ligamento?",
        answer: "La pronta rehabilitación progresiva permite volver a trotar a los 3-4 meses y retornar a deportes de contacto entre los 6 a 9 meses bajo supervisión médica."
      }
    ],
    image: "/images/diseases/lesiones-deportivas.jpg",
    seo: {
      title: "Lesiones Deportivas y Ligamento Cruzado en Monterrey | Dr. Aram Alarcón",
      description: "Cirugía artroscópica de rodilla y tratamiento de lesiones deportivas en Monterrey. Dr. Aram Alarcón Valdéz.",
      keywords: ["Lesiones Deportivas Monterrey", "Ligamento Cruzado Anterior Monterrey", "Cirugía Artroscópica Rodilla"]
    }
  }
];
