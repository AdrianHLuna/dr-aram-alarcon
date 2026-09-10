import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "dolor-articular-persistente",
    slug: "dolor-articular-persistente",
    name: "Dolor Articular Persistente",
    description: "Molestia continua o punzante en la cadera, rodilla u hombro que empeora al caminar, subir escaleras o mantenerse de pie por periodos prolongados.",
    causes: [
      "Desgaste articular (Osteoartrosis de Cadera o Rodilla)",
      "Bursitis trocantérica o tendinitis",
      "Compresión de raíces nerviosas o lesión de cartílago"
    ],
    whyConsult: "El dolor articular persistente que no cede con descanso es la primera señal de daño en el cartílago. Una evaluación traumatológica oportuna permite instaurar tratamientos conservadores e infiltraciones antes de que exista deformidad articular severa.",
    relatedConditions: ["desgaste-de-cadera", "desgaste-de-rodilla"],
    image: "/images/symptoms/dolor-articular.jpg",
    seo: {
      title: "Dolor Articular Persistente en Monterrey | Dr. Aram Alarcón",
      description: "Diagnóstico y tratamiento del dolor articular severo en cadera y rodilla en Monterrey, N.L.",
      keywords: ["Dolor Articular Monterrey", "Dolor de Cadera", "Dolor de Rodilla Monterrey"]
    }
  },
  {
    id: "inestabilidad-al-caminar",
    slug: "inestabilidad-al-caminar",
    name: "Inestabilidad o Dificultad al Caminar",
    description: "Sensación de que la rodilla o cadera 'se vence', 'falsea' o cede inesperadamente al dar un paso, generando temor a caídas.",
    causes: [
      "Ruptura de ligamento cruzado anterior o colaterales",
      "Aflojamiento o desalineación articular por desgaste",
      "Atrofia severa del cuádriceps y glúteos"
    ],
    whyConsult: "La inestabilidad provoca caídas secundarias que pueden desencadenar fracturas graves de pelvis o cadera en adultos mayores o lesiones meniscales mayores en deportistas.",
    relatedConditions: ["lesiones-deportivas", "desgaste-de-rodilla"],
    image: "/images/symptoms/inestabilidad.jpg",
    seo: {
      title: "Inestabilidad al Caminar y Falseo de Rodilla | Dr. Aram Alarcón",
      description: "Evaluación traumatológica por falseo de rodilla e inestabilidad al caminar en Monterrey.",
      keywords: ["Inestabilidad Rodilla Monterrey", "Falseo de Rodilla", "Dificultad para Caminar Ortopedia"]
    }
  },
  {
    id: "rigidez-matutina",
    slug: "rigidez-matutina",
    name: "Rigidez Articular por las Mañanas",
    description: "Sensación de 'entumecimiento' o pesadez en las articulaciones al levantarse de la cama que requiere varios minutos para poder moverse con fluidez.",
    causes: [
      "Etapas iniciales a moderadas de desgaste articular",
      "Inflamación sinovial y acumulación de líquido articular",
      "Falta de lubricación por fricción de hueso con hueso"
    ],
    whyConsult: "Identificar la causa exacta de la rigidez permite prescribir viscosuplementación con ácido hialurónico o plasma enriquecido para devolver la lubricación normal.",
    relatedConditions: ["desgaste-de-cadera", "desgaste-de-rodilla"],
    image: "/images/symptoms/rigidez-matutina.jpg",
    seo: {
      title: "Rigidez Articular Matutina en Monterrey | Dr. Aram Alarcón",
      description: "Tratamiento de la rigidez de cadera y rodilla en Monterrey por el Dr. Aram Alarcón Valdéz.",
      keywords: ["Rigidez Articular Monterrey", "Rigidez de Rodilla al Levantarse", "Entumecimiento Articular"]
    }
  },
  {
    id: "dolor-de-espalda-y-ciatica",
    slug: "dolor-de-espalda-y-ciatica",
    name: "Dolor de Espalda Crónico y Ciática",
    description: "Dolor localizado en la región lumbar que se extiende en forma de 'descarga eléctrica' hacia los glúteos, muslo y pie.",
    causes: [
      "Hernia de disco lumbar",
      "Estenosis de canal espinal",
      "Sobrecarga lumbar por marcha compensatoria de cadera"
    ],
    whyConsult: "Es crucial diferenciar si el dolor proviene de la articulación de la cadera o de la columna lumbar para prescribir el tratamiento correcto sin cirugías innecesarias.",
    relatedConditions: ["problemas-de-columna"],
    image: "/images/symptoms/dolor-espalda.jpg",
    seo: {
      title: "Dolor de Espalda y Ciática en Monterrey | Dr. Aram Alarcón",
      description: "Diagnóstico diferencial de dolor de espalda y nervio ciático en Monterrey. Dr. Aram Alarcón.",
      keywords: ["Dolor de Espalda Monterrey", "Nervio Ciático Tratamiento", "Dolor Lumbar Monterrey"]
    }
  },
  {
    id: "hinchazon-en-articulaciones",
    slug: "hinchazon-en-articulaciones",
    name: "Hinchazón o Derrame en Articulaciones",
    description: "Aumento visible de volumen en la rodilla u tobillo acompañado de aumento de temperatura local y limitación para doblar la articulación.",
    causes: [
      "Derrame sinovial por ruptura meniscal o de ligamentos",
      "Bursitis o sinovitis aguda",
      "Sobreesfuerzo mecánico sobre artrosis previa"
    ],
    whyConsult: "La hinchazón persistente desgasta rápidamente las células del cartílago articular. La artrocentesis o drenaje diagnóstico y tratamiento específico alivian el dolor de inmediato.",
    relatedConditions: ["desgaste-de-rodilla", "lesiones-deportivas"],
    image: "/images/symptoms/hinchazon-articular.jpg",
    seo: {
      title: "Hinchazón de Rodilla y Derrames Articulares en Monterrey | Dr. Aram Alarcón",
      description: "Atención de rodilla inflamada y derrames articulares en Monterrey. Consulta traumatológica.",
      keywords: ["Rodilla Hinchada Monterrey", "Derrame Articular Rodilla", "Inflamación Articular"]
    }
  }
];
