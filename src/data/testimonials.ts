export interface TestimonialItem {
  id: number;
  name: string;
  age: number;
  city: string;
  procedure: string;
  quote: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Roberto Garza M.",
    age: 58,
    city: "Monterrey, N.L.",
    procedure: "Prótesis Total de Cadera",
    quote: "Llegué al consultorio del Dr. Aram sin poder caminar bien y con dolor constante en la ingle. La cirugía de prótesis de cadera fue un éxito total. Al día siguiente ya estaba dando mis primeros pasos sin dolor.",
    rating: 5
  },
  {
    id: 2,
    name: "Sofía Villarreal S.",
    age: 64,
    city: "San Pedro Garza García, N.L.",
    procedure: "Reconstrucción de Pelvis tras Urgencia",
    quote: "Mi papá tuvo una fractura de pelvis muy seria. El Dr. Aram nos atendió por urgencias en la madrugada con un profesionalismo y trato humano increíble. La precisión de su cirugía salvó la movilidad de mi padre.",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Eduardo Cantú",
    age: 34,
    city: "Monterrey, N.L.",
    procedure: "Artroscopia de Ligamento Cruzado",
    quote: "Me rompí el ligamento cruzado jugando fútbol. El doctor me operó por artroscopia y me acompañó en todo el proceso de rehabilitación. Hoy estoy jugando de nuevo sin ningún problema ni inestabilidad.",
    rating: 5
  },
  {
    id: 4,
    name: "Martha Elena Treviño",
    age: 62,
    city: "Guadalupe, N.L.",
    procedure: "Infiltración y Prótesis de Rodilla",
    quote: "Tenía terror a la cirugía de rodilla, pero el Dr. Aram me explicó con mucha paciencia cada paso. La recuperación fue rapidísima y el trato de su equipo fue excelente de principio a fin.",
    rating: 5
  }
];
