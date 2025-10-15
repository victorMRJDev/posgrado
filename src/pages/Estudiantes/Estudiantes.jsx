import React, { useState } from "react";
import CardView from "../../components/Cards/CardView"; 
import Footer from "../../components/Footer/Footer";
import Contenido from "../../components/Secciones/Contenido";
import Titulo from "../../components/Secciones/Titulo";
import TopBar from "../../components/TopBar/TopBar";
import NavBarGob from "../../components/TopBar/NavBarGob";


import imagePG from "../../assets/Carrusel/1.jpg";
import fondo from "../../assets/secihti_fondoFot.jpg"; 

const generaciones = [
  {
    title: "Primera Generación",
    alumnos: [
      {
        id: 1,
        name: "Lizbeth Gómez Muñoz",
        image: imagePG,
        semblanza:
          "El Banco Mundial estima que la generación de residuos sólidos urbanos para el año 2025 será de 3400 millones de toneladas, donde el 50% corresponden a desechos orgánicos, su gestión integral es una preocupación por su impacto directo e indirecto en el medio ambiente, para la eliminación y aprovechamiento de estos se han utilizado diversos métodos como la Digestión Anaeróbica (DA), siendo una tecnología respetuosa con el medio ambiente para convertir los desechos alimentarios y verdes en energía renovable, y abonos orgánicos en un biodigestor. Esta investigación presenta el diseño y construcción de un biodigestor doméstico con un sistema de monitoreo en tiempo real de parámetros que intervienen en el proceso de la DA, alimentado con residuos orgánicos domiciliarios y experimentado con un tiempo de retención hidráulica de 30 días. Mediante una metodología de cuatro fases: 1. Identificar los tipos de biodigestores: Revisión documental; 2. Establecer los parámetros requeridos: Construcción y experimentación de un biodigestor piloto; 3. Diseño de la geometría con SolidWorks, y su elaboración con materiales adecuados e implementación de un sistema de monitoreo de parámetros en tiempo real conectados a un microcontrolador Arduino Mega 2560; y 4. Validación del prototipo a través de un análisis estadístico descriptivo, exploratorio e inferencial. Los resultados obtenidos fueron un reactor vertical móvil de 50 x 70 cm, con capacidad de mezcla 60 L. Además de un estudio basado en análisis de varianza de efectos fijos unifactorial para evaluar el efecto del tipo de inóculo, intervalos simultáneos de Tukey para la diferencia de medias, intervalos al 90% de confianza para μ en la temperatura y estiércol, así como el diseño de experimentos de efectos principales considerando los factores °C promedio y pH.",
      },
      {
        id: 2,
        name: "Eumir Esteban Salgado Lampart",
        image: imagePG,
        // semblanza: "Semblanza de Eumir...",
      },
      {
        id: 3,
        name: "José Filiberto Maldonado Catalán",
        image: imagePG,
        // semblanza: "Semblanza de José...",
      },
      {
        id: 4,
        name: "María Isabel Ramírez Arcos",
        image: imagePG,
        semblanza:
          "	El entrenamiento de modelos de Inteligencia Artificial (IA) ha permitido el desarrollo de prototipos ortopédicos orientados a tratamientos y terapias físicas. En este estudio, se planteó como objetivo el diseño y construcción de una órtesis con estimulación muscular, controlada mediante comandos de voz, orientada al tratamiento de artrosis de rodilla en adultos mayores La metodología aplicada se estructuró en cinco etapas: 1. Adquisición de los datos; 2. Construcción del modelo; 3. Construcción del circuito; 4. Confección de la órtesis; y 5. Ensamblado del sistema. Se implementó un modelo basado en Redes Neuronales Convolucionales (CNN), integrado en un microcontrolador Arduino Nano 33 BLE Sense. El algoritmo fue entrenado y desplegado a través de la plataforma Edge Impulse, lo que permitió el reconocimiento eficiente de comandos de voz. La órtesis responde a cuatro instrucciones predefinidas: Fuerte (3), Medio (2), Bajo (1) y Nada (0), activando la estimulación muscular conforme a la intensidad indicada.",
        // semblanza: "Semblanza de José...",
      },
      {
        id: 5,
        name: "Bryan Abisaí Nava Ramírez",
        image: imagePG,
        // semblanza: "Semblanza de José...",
      },
      {
        id: 6,
        name: "Nestor Uriel Solache Castro",
        image: imagePG,
        // semblanza: "Semblanza de José...",
      },
    ],
  },

  {
    title: "Segunda Generación",
    alumnos: [
      {
        id: 7,
        name: "Víctor Manuel Romero Juárez",
        image: fondo,
        semblanza:
          "La acumulación de Residuos Sólidos Urbanos (RSU) representa un desafío crítico para la sociedad y el gobierno, y su separación es esencial para garantizar una utilización sostenible. Sin embargo, persiste el desafío de la clasificación manual, una labor que, lamentablemente, se mantiene como una práctica inherentemente lenta y con considerables ineficiencias. Frente a esta realidad, los progresos exponenciales en el campo de la inteligencia artificial, y de manera destacada el aprendizaje automático, emergen como soluciones alternativas que no solo prometen mayor precisión, sino también una eficiencia superior para optimizar radicalmente este flujo de trabajo. En este marco, la contribución que aquí se presenta detalla la gestación de una red neuronal profunda, enriquecida con módulos residuales, diseñada y entrenada de extremo a extremo. Este modelo está específicamente orientado a la clasificación binaria de los RSU y, crucialmente, exhibe la habilidad de ejecutar inferencias a una velocidad significativamente incrementada. Mediante una metodología de cinco fases: 1. Creación del conjunto de datos (dataset) de RSU: recolección de imágenes, eliminación de duplicados, creación del conjunto de datos orgánicos e inorgánicos; 2. Analizar algoritmos de procesamiento de imágenes; 3. Preparación y generación de datos: Conversión de imágenes a formato RGB, división del conjunto de datos de entrenamiento en subconjuntos y aumento de imágenes en línea; 4. Entrenar e identificar las redes neuronales residuales para la clasificación de RSU orgánicos e inorgánicos con la mayor extracción de características: Desarrollo de arquitectura basada en ResNet18; 5. Experimentar y ajustar la reducción de parámetros del modelo residual propuesto: Modificar la estructura de la red residual y ajustar hiperparámetros claves; y 6. Evaluar el algoritmo de clasificación: Precisión, matriz de confusión, f1-score, recall y exactitud. Se obtuvo un 87% para la clasificación de residuos orgánicos y un 94% para los inorgánicos. R3sNet destaca frente al modelo pre-entrenado ResNet50 en la clasificación de ambas categorías (orgánicos e inorgánicos) con una ventaja de hasta un 6%, y una disminución en la carga computacional y complejidad del modelo. En concreto, se hizo una reducción del 98.60% en el número de hiperparámetros y un recorte del 65.17% en los GFLOPS en comparación directa con ResNet50.",
      },
      {
        id: 8,
        name: "Dominic Brian Román Padilla",
        image: fondo,
        semblanza:
          "La gestión de Residuos Sólidos Urbanos (RSU) es un gran desafío para las prácticas tradicionales en su separación, debido a un considerable incremento en cantidad, diversidad, complejidad de tipos y una alta demanda en la exactitud para clasificarlos. El reconocimiento y clasificación de imágenes de residuos empleando técnicas de visión por computadora, permite optimizar sus procesos de administración, de recolección con alta precisión, logrando una gestión inteligente en su separación y disposición final, mitigando el impacto ambiental y así contribuir a los objetivos del desarrollo sostenible. Esta investigación consistió en el desarrollo de un prototipo de contenedor clasificador de RSU con Redes Neuronales Convolucionales (CNN). Para ello se realizaron siete fases: 1. Conformación del Dataset de RSU: Trashnet, Garbage Classification y muestras capturadas; 2. Análisis y selección de algoritmos para la detección de objetos con CNN: En función de ventajas y desventajas; 3. Desarrollo y entrenamiento del algoritmo CNN: Aplicando el conjunto de datos, ajuste de hiperparámetros Momentum, BatchSize y Subdivisiones del algoritmo; 4. Diseño de la estructura del prototipo: Análisis de componentes, evaluación comparativa de requerimientos y modelado en SolidWorks; 5. Construcción del prototipo: Caja de estructura metálica de 80x80 cm, cubierta de plástico acrílico blanco, dos contenedores de 20 litros, base de madera, integración de la estructura, sistema mecánico (motor nema 23, driver TB6600) y Arduino mega 2560; 6. Implementación de la CNN en el contenedor: Exportación de los pesos entrenados de YOLOv9 en el sistema embebido Raspberry Pi 4 modelo B ejecutado en un entorno de Python y 7. Validación: Muestras de RSU de entornos reales.",
      },
      {
        id: 9,
        name: "Arturo Cisneros Mayoral",
        image: fondo,
        // semblanza: "Semblanza de Arturo...",
      },
      {
        id: 10,
        name: "Carlos Gilberto Jiménez Saldaña",
        image: fondo,
        // semblanza: "Semblanza de Carlos...",
      },
      {
        id: 11,
        name: "Marbens Santos Arrieta",
        image: fondo,
        // semblanza: "Semblanza de Marbens...",
      },
    ],
  },

  {
    title: "Tercera Generación",
    alumnos: [
      {
        id: 12,
        name: "Denisse Peralta Rojo",
        image: fondo,
        // semblanza: "Semblanza de Denisse...",
      },
      {
        id: 13,
        name: "Isaid Uriel Basilios Segovia",
        image: fondo,
        // semblanza: "Semblanza de Isaid...",
      },
      {
        id: 14,
        name: "Diana Dolores Vázquez Martínez",
        image: fondo,
        // semblanza: "Semblanza de Diana...",
      },
      {
        id: 15,
        name: "Brandon Aldahir Jacobo Salinas",
        image: fondo,
        // semblanza: "Semblanza de Brandon...",
      },
      {
        id: 16,
        name: "Mario Alberto Duque Peralta",
        image: fondo,
        // semblanza: "Semblanza de Mario...",
      },
      {
        id: 17,
        name: "Lisandro Omar Santos Arrieta",
        image: fondo,
        // semblanza: "Semblanza de Lisandro...",
      },
      {
        id: 18,
        name: "José Antonio Rendón Vargas",
        image: fondo,
      },
      {
        id: 19,
        name: "Imanol Marianito Cuahuitic",
        image: fondo,
      },
    ],
  },
  {
    title: "Cuarta Generación",
    alumnos: [
      {
        id: 20,
        name: "Yaozihuatl López García",
        image: fondo,
      },
      {
        id: 21,
        name: "Celeste Bello Pastor",
        image: fondo,
      },
      {
        id: 22,
        name: "Jonathan Jesús Carranza Vega",
        image: fondo,
      },
      {
        id: 23,
        name: "Orlando Mares Hernández",
        image: fondo,
      },
    ],
  },
  {
    title: "Quinta Generación",
    alumnos: [
      {
        id: 24,
        name: "Alejandra Texta Nogueda",
        image: fondo,
      },
      {
        id: 25,
        name: "Jorge Arturo Ocampo Pineda",
        image: fondo,
      },
      {
        id: 26,
        name: "Itzel Nizaritani Reyes",
        image: fondo,
      },
      {
        id: 27,
        name: "Alberto Barrera Azoños",
        image: fondo,
      },
      {
        id: 28,
        name: "Joaquín Zueriel Nava Salazar",
        image: fondo,
      },
    ],
  },
  {
    title: "Sexta Generación",
    alumnos: [
      {
        id: 29,
        name: "Noe Arellano Ávila",
        image: fondo,
      },
    ],
  },
];

const GeneracionView = ({ alumnos }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    {alumnos.map((alumno) => (
      <CardView
        key={alumno.id}
        name={alumno.name}
        image={alumno.image}
        semblanza={alumno.semblanza}
      />
    ))}
  </div>
);
const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        onClick={onClick}
        className="w-full text-left py-4 px-6 flex justify-between items-center text-xl font-semibold text-blue-900 hover:bg-blue-50 focus:outline-none"
      >
        {title}
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
const Estudiantes = () => {
  const [openAccordion, setOpenAccordion] = useState(
    generaciones[0]?.title || null
  ); // Abre la primera por defecto

  const handleAccordionClick = (title) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <>
      <NavBarGob />
      <TopBar />
      <Contenido>
        <Titulo titulo={"Lista de Alumnos"}></Titulo>
        <div className="mt-9 max-sm:mt-5 max-md:mt-7 border rounded-lg shadow-md">
          {generaciones.map((gen) => (
            <AccordionItem
              key={gen.title}
              title={gen.title}
              isOpen={openAccordion === gen.title}
              onClick={() => handleAccordionClick(gen.title)}
            >
              <GeneracionView alumnos={gen.alumnos} />
            </AccordionItem>
          ))}
        </div>
      </Contenido>
      <Footer />
    </>
  );
};

export default Estudiantes;
