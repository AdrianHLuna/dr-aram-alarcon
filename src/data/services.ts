import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "protesis-de-cadera",
    slug: "protesis-de-cadera",
    name: "Prótesis Total de Cadera (Mínima Invasión)",
    description: "Reemplazo articular quirúrgico de la articulación dañada por implantes de titanio y cerámica de alta durabilidad para eliminar el dolor e incambiar la marcha.",
    longDescription: "La cirugía de prótesis total de cadera consiste en reemplazar la cabeza femoral y el acetábulo pélvico gastado por prótesis biomédicas de última generación. El Dr. Aram Alarcón Valdéz, con Alta Especialidad en Cadera y Pelvis (IMSS UMAE 21), realiza este procedimiento utilizando abordajes preservadores de músculo de mínima invasión, reduciendo el sangrado y acelerando la recuperación postoperatoria.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional epidural / Bloqueo",
    duration: "60 a 90 minutos",
    recoveryTime: "Deambulando a las 24 horas, recuperación completa en 4-6 semanas",
    isPainful: false,
    benefits: [
      "Eliminación radical del dolor severo en ingle y cadera",
      "Recuperación inmediata de la independencia para caminar y subir escaleras",
      "Corrección del acortamiento de la pierna afectada",
      "Duración de la prótesis de titanio/cerámica superior a 20-25 años"
    ],
    postOpRecommendations: [
      "Iniciar deambulación asistida con andadera las primeras 24 horas",
      "Seguir el programa de fisioterapia y ejercicios de fortalecimiento muscular prescriptos",
      "Mantener limpia y seca la herida quirúrgica con apósitos protectores",
      "Asistir a las revisiones radiológicas de control a las 2 y 6 semanas"
    ],
    priceRange: "Sujeto a valoración médica y cobertura de Seguro de Gastos Médicos Mayores",
    image: "/images/services/protesis-cadera.jpg",
    seo: {
      title: "Cirugía de Prótesis de Cadera en Monterrey | Dr. Aram Alarcón",
      description: "Reemplazo total de cadera de mínima invasión en Monterrey, N.L. Especialista con Alta Especialidad en Cadera y Pelvis.",
      keywords: ["Prótesis de Cadera Monterrey", "Reemplazo Total de Cadera", "Cirujano de Cadera Monterrey", "Prótesis Mínima Invasión Cadera"]
    }
  },
  {
    id: "protesis-de-rodilla",
    slug: "protesis-de-rodilla",
    name: "Prótesis Total y Parcial de Rodilla",
    description: "Procedimiento de reemplazo articular para reparar la superficie femoral y tibial desgastada por la gonartrosis severa.",
    longDescription: "Cuando el cartílago de la rodilla se desgasta por completo dejando hueso con hueso, la prótesis de rodilla restablece la alineación natural de las piernas y elimina la fricción dolorosa. Se emplean sistemas guiados de alta precisión para colocar componentes de cobalto-cromo y polietileno de alta densidad.",
    type: "hospitalario",
    anesthesiaType: "Anestesia epidural o general ligera",
    duration: "75 a 90 minutos",
    recoveryTime: "Apoyo el mismo día de la cirugía, caminata independiente en 4 semanas",
    isPainful: false,
    benefits: [
      "Desaparición del dolor constante en reposo y movimiento",
      "Rectificación de la alineación en arco de la rodilla",
      "Aumento significativo del rango de flexión y extensión",
      "Retorno a caminatas, viajes y vida social activa"
    ],
    postOpRecommendations: [
      "Realizar ejercicios de flexo-extensión de rodilla desde el día 1",
      "Uso temporal de andadera o bastón por 2 a 3 semanas",
      "Aplicación de hielo local para control del edema postquirúrgico"
    ],
    priceRange: "Acepta Seguros de Gastos Médicos Mayores y paquetes hospitalarios accesibles",
    image: "/images/services/protesis-rodilla.jpg",
    seo: {
      title: "Prótesis de Rodilla en Monterrey | Dr. Aram Alarcón Valdéz",
      description: "Cirugía de reemplazo de rodilla en Monterrey. Ortopedista especialista en cirugía articular.",
      keywords: ["Prótesis de Rodilla Monterrey", "Reemplazo de Rodilla Monterrey", "Gonartrosis Cirugía"]
    }
  },
  {
    id: "artroscopia-de-rodilla",
    slug: "artroscopia-de-rodilla",
    name: "Artroscopia Mínima Invasiva de Rodilla",
    description: "Cirugía ambulatoria a través de microincisiones de 5 mm para reparar meniscos rotos y reconstruir el ligamento cruzado anterior.",
    longDescription: "Mediante una cámara de alta definición llamada artroscopio e instrumental especializado de microcirugía, el Dr. Aram Alarcón visualiza y repara las estructuras internas de la rodilla sin necesidad de abrir la articulación. Ideal para reconstrucción de ligamentos cruzados y suturas meniscales en deportistas y jóvenes.",
    type: "ambulatorio",
    anesthesiaType: "Anestesia regional",
    duration: "45 a 60 minutos",
    recoveryTime: "Retorno a actividades de oficina en 7 a 10 días",
    isPainful: false,
    benefits: [
      "Mínima cicatriz postquirúrgica y muy poco dolor postoperatorio",
      "Procedimiento ambulatorio con alta el mismo día",
      "Preservación del tejido meniscal nativo mediante sutura artroscópica",
      "Rehabilitación física acelerada"
    ],
    postOpRecommendations: [
      "Reposo relativo y uso de rodillera mecánica según indicación médica",
      "Cuidado de las dos pequeñas heridas punzantes",
      "Iniciar terapia física especializada la primera semana"
    ],
    image: "/images/services/artroscopia-rodilla.jpg",
    seo: {
      title: "Artroscopia de Rodilla en Monterrey | Dr. Aram Alarcón",
      description: "Cirugía artroscópica de mínima invasión para ligamentos y meniscos en Monterrey, N.L. Dr. Aram Alarcón Valdéz.",
      keywords: ["Artroscopia Rodilla Monterrey", "Cirugía Meniscos Monterrey", "Ligamento Cruzado Anterior Monterrey"]
    }
  },
  {
    id: "infiltraciones-articulares",
    slug: "infiltraciones-articulares",
    name: "Infiltraciones en Rodilla, Cadera y Hombro",
    description: "Aplicación intraarticular dirigida de viscosuplementación con ácido hialurónico o plasma rico en plaquetas (PRP) para aliviar la inflamación.",
    longDescription: "La infiltración articular es un procedimiento ambulatorio rápido en consultorio que aplica medicamentos condroprotectores o bioestimulantes directamente en la articulación lesionada, lubricando el espacio articular y reduciendo el dolor sin efectos secundarios sistémicos.",
    type: "consultorio",
    duration: "15 a 20 minutos",
    recoveryTime: "Inmediata, retoma de actividades normales al día siguiente",
    isPainful: false,
    benefits: [
      "Alivio sostenido del dolor de 6 a 12 meses",
      "Lubricación directa y nutrición del cartílago remanente",
      "Procedimiento rápido en consultorio sin incapacidad prolongada",
      "Retrasa sustancialmente la necesidad de cirugía en etapas iniciales"
    ],
    postOpRecommendations: [
      "Evitar ejercicio físico extenuante durante las primeras 48 horas",
      "Aplicar hielo local brevemente si hay molestia leve en el sitio de inyección"
    ],
    image: "/images/services/infiltraciones.jpg",
    seo: {
      title: "Infiltraciones de Rodilla y Cadera en Monterrey | Dr. Aram Alarcón",
      description: "Tratamiento con ácido hialurónico y plasma en rodilla y cadera en Monterrey, N.L. Doctor ortopedista.",
      keywords: ["Infiltración Rodilla Monterrey", "Ácido Hialurónico Rodilla", "Plasma Rico en Plaquetas Ortopedia"]
    }
  },
  {
    id: "reconstruccion-de-pelvis",
    slug: "reconstruccion-de-pelvis",
    name: "Cirugía de Reconstrucción de Pelvis y Acetábulo",
    description: "Fijación quirúrgica especializada de fracturas complejas de la cintura pélvica provocadas por traumatismos severos.",
    longDescription: "Procedimiento de alta especialidad traumatológica reservado para cirujanos capacitados en centros de trauma nivel 1. Restablece la congruencia anatómica del anillo pélvico mediante placas contorneadas de titanio para permitir que el paciente vuelva a ponerse de pie.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general asistida",
    duration: "2 a 4 horas",
    recoveryTime: "Seguimiento estrecho hospitalario y fisioterapia intensiva a 3-6 meses",
    isPainful: false,
    benefits: [
      "Estabilización estructural rígida que salva la movilidad de la extremidad",
      "Prevención de secuelas incapacitantes y discrepancias de longitud",
      "Atención por especialista certificado con subespecialidad en el IMSS UMAE 21"
    ],
    postOpRecommendations: [
      "Cumplir estrictamente el protocolo de apoyo diferido de peso",
      "Controles radiológicos tomográficos de seguimiento"
    ],
    image: "/images/services/reconstruccion-pelvis.jpg",
    seo: {
      title: "Cirugía de Pelvis y Acetábulo en Monterrey | Dr. Aram Alarcón",
      description: "Alta especialidad en reconstrucción y cirugía de fracturas de pelvis en Monterrey, N.L. Dr. Aram Alarcón Valdéz.",
      keywords: ["Cirugía de Pelvis Monterrey", "Reconstrucción Acetabular", "Traumatólogo Especialista Pelvis"]
    }
  }
];
