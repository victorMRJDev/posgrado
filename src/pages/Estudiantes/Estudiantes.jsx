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
          "BIODIGESTOR ANAEROBIO DOMÉSTICO PARA LA PRODUCCIÓN DE ABONO ORGÁNICO SUMINISTRADO CON RESIDUOS DE ALIMENTOS \n\nEsta investigación presenta el diseño y construcción de un biodigestor doméstico con un sistema de monitoreo en tiempo real de parámetros que intervienen en el proceso de la DA, alimentado con residuos orgánicos domiciliarios y experimentado con un tiempo de retención hidráulica de 30 días.",
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
          "PROTOTIPO DE ÓRTESIS CON ESTIMULACIÓN MUSCULAR CONTROLADO POR COMANDOS DE VOZ \n\nEn este estudio, se planteó como objetivo el diseño y construcción de una órtesis con estimulación muscular, controlada mediante comandos de voz, orientada al tratamiento de artrosis de rodilla en adultos mayores.",
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
          "ARQUITECTURA OPTIMIZADA DE REDES NEURONALES RESIDUALES PARA LA CLASIFICACIÓN DE RESIDUOS SÓLIDOS URBANOS CON PROCESAMIENTO DE IMÁGENES \n\nLa contribución que aquí se presenta detalla la gestación de una red neuronal profunda, enriquecida con módulos residuales, diseñada y entrenada de extremo a extremo. Este modelo está específicamente orientado a la clasificación binaria de los RSU y, crucialmente, exhibe la habilidad de ejecutar inferencias a una velocidad significativamente incrementada.",
      },
      {
        id: 8,
        name: "Dominic Brian Román Padilla",
        image: fondo,
        semblanza:
          "PROTOTIPO DE UN CONTENEDOR CLASIFICADOR DE RESIDUOS SÓLIDOS URBANOS CON REDES NEURONALES CONVOLUCIONALES \n\nEl reconocimiento y clasificación de imágenes de residuos empleando técnicas de visión por computadora, permite optimizar sus procesos de administración, de recolección con alta precisión, logrando una gestión inteligente en su separación y disposición final, mitigando el impacto ambiental y así contribuir a los objetivos del desarrollo sostenible. Esta investigación consistió en el desarrollo de un prototipo de contenedor clasificador de RSU con Redes Neuronales Convolucionales (CNN).",
      },
      {
        id: 9,
        name: "Arturo Cisneros Mayoral",
        image: fondo,
        semblanza: "INVENTARIO DE INFRAESTRUCTURA PARA LA ESTIMACIÓN DEL RIESGO SÍSMICO EN UNA ZONA URBANA \n\nEsta investigación propone un inventario de infraestructura para estimar y evaluar el riesgo sísmico en la zona urbana de Chilpancingo, Guerrero, México, a través de la metodología FEMA-154, que consiste de un formulario para describir la edificación: localización, número de pisos, año y área de construcción, tipo de edificio, uso, entre otros, que permita proyectar su distribución esperada e identificar las zonas de alto riesgo. Esto con la finalidad de contribuir en la conformación de una base de datos de acceso para las diferentes instituciones que les permita tomar decisiones para la prevención de desastres.",
      },
      {
        id: 10,
        name: "Carlos Gilberto Jiménez Saldaña",
        image: fondo,
        semblanza: "Modelo Óptimo Multiobjetivo con Enfoque Sustentable al Transporte Público \n\nLa movilidad sostenible es un desafío de las grandes metrópolis que aspiran a transformarse en una de las ciudades inteligentes que optimicen las rutas de movilidad a través de los diferentes medios de transporte con el uso de las tecnologías inteligentes, centrándose en el transporte público que día con día mueven a miles de personas. El problema de movilidad en el transporte público representa un desafío en la planeación y optimización de las rutas utilizando modelos de optimización, algoritmos de optimización y modelado de software puede obtenerse información que optimice los resultados en la toma de decisiones. Este protocolo propone llevar a cabo el desarrollo de un modelo óptimo multiobjetivo.",
      },
      {
        id: 11,
        name: "Marbens Santos Arrieta",
        image: fondo,
        semblanza: "ALGORITMO DE VISIÓN ARTIFICIAL PARA LA DETECCIÓN TEMPRANA DE LA ÚLCERA DEL PIE DIABÉTICO \n\nLa siguiente investigación plantea un algoritmo de visión artificial con técnicas de procesamiento de imágenes y Aprendizaje Automático (por sus siglas en inglés ML), a través de segmentación y clasificación de imágenes de termografía, recolectadas de repositorios de otras investigaciones para el entrenamiento de un modelo de clasificación, considerando las zonas de los angiosomas y el conocimiento de los expertos, y agrupar datos de técnicas selectas de algoritmos desarrollados, hasta la obtención de un producto que pueda contribuir a la detección temprana de las complicaciones del PD, contribuyendo a reducir gastos y disminuir la morbi-mortalidad de las personas afectadas.",
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
        semblanza: "EVALUACIÓN DE UN SISTEMA DE GESTIÓN DE RESIDUOS SÓLIDOS URBANOS \n\nEsta investigación tiene como objetivo evaluar la gestión de los RSU en la ciudad de Chilpancingo de los Bravo, Guerrero, mediante una investigación documental del plan municipal de desarrollo, análisis estadístico descriptivo del sistema de gestión, identificación y aplicación de indicadores de sostenibilidad: generación, reciclaje, recolección, tratamiento y disposición final, además de un análisis estadístico multivariante.",
      },
      {
        id: 13,
        name: "Isaid Uriel Basilios Segovia",
        image: fondo,
        semblanza: "SISTEMA GENERADOR DE ANUARIOS ESTADÍSTICOS DE AGRICULTURA, GANADERÍA, PESCA Y DESARROLLO RURAL DEL ESTADO DE GUERRERO \n\nLa presente investigación propone el desarrollo de un sistema web para la elaboración de un anuario estadístico con ReactJS, Django, y un gestor de base de datos MySQL, además de una metodología Big Data que trabajará en conjunto con la red neuronal Long Short Term-Memory (LSTM) para el análisis de series temporales que con ayuda de los datos y análisis de los mismos realice predicciones.",
      },
      {
        id: 14,
        name: "Diana Dolores Vázquez Martínez",
        image: fondo,
        semblanza: "Programa Sembrando Vida: mecanismos de focalización en el estado de Guerrero \n\nEn el año 2019 el gobierno de México implementó el Programa Sembrando Vida (PSV) buscando atender problemáticas de la degradación ambiental y rezago social en las zonas rurales del país. Este estudio tuvo como finalidad analizar los mecanismos de focalización del Programa Sembrando Vida para evaluar el cumplimiento de sus objetivos en la región centro del estado de Guerrero, México. El proyecto se realizó con una metodología mixta de seis fases.",
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
  );

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
