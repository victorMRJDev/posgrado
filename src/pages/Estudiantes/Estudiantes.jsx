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
        semblanza: "Diseño de un modelo espacio-temporal de la precipitación pluvial en el municipio de Chilpancingo, Guerrero. \n\nEsta investigación propone un modelo espacio-temporal de pronóstico estadístico de la precipitación pluvial con 30 años de datos históricos como mínimo en el municipio de Chilpancingo de los Bravo, Guerrero; mediante series de tiempo con análisis de Fourier y polígonos de Thiessen con Sistemas de Información Geográfica. Esto con el fin de proporcionar información relevante para la toma de desiones en la gestión del recurso hídrico, en el municipio.",
      },
      {
        id: 16,
        name: "Mario Alberto Duque Peralta",
        image: fondo,
        semblanza: "SISTEMA DE MONITOREO AMBIENTAL EN TIEMPO REAL PARA CULTIVOS DE AGUACATE A CIELO ABIERTO. \n\nEsta investigación presenta el diseño, construcción y validación de un sistema de monitoreo en tiempo real de parámetros ambientales (temperatura, radiación ultravioleta (UV), humedad relativa y del suelo) en huertas de aguacate a cielo abierto. Con una metodología de cuatro fases: 1. Requerimientos del sistema: revisión de la literatura; 2. Establecer los parámetros requeridos: selección de la arquitectura tecnológica, construcción y experimentación del sistema de monitoreo piloto; 3. Diseño de la geometría y construcción: software SolidWorks, contenedor, accesorios y diseño de circuitos en Fritzing; y 4. Validación del prototipo: Implementación y monitoreo del sistema en la huerta de aguacate durante 14 días.",
      },
      {
        id: 17,
        name: "Lisandro Omar Santos Arrieta",
        image: fondo,
        semblanza: "ANÁLISIS DE CONTROL POR MODOS DESLIZANTES EN LA RECUPERACIÓN ESTRUCTURAL CON SISTEMA DE CONTROL PASIVO \n\nEl objetivo de este estudio es analizar los sistemas de Aislamiento Pasivo (SAP) y su respuesta para la recuperación estructural, utilizando el control deslizante (CD) para abordar las distorsiones que se presentan en el balance de energía y alcanzar el punto de equilibrio.",
      },
      {
        id: 18,
        name: "José Antonio Rendón Vargas",
        image: fondo,
        semblanza: "CLASIFICACIÓN DE LA MADUREZ DEL AGUACATE EN IMÁGENES UTILIZANDO APRENDIZAJE PROFUNDO \n\nEn este pryecto se propone la creacion y entrenamiento de una Red Neuronal Convolucional diseñada para analizar imágenes de alta resolución de aguacates y clasificarlos en diversas etapas de madurez. Este enfoque no solo promete obtener una mejor precisión en la identificación de la madurez del aguacate, sino que también apunta a una gestión más eficiente y sostenible de la cadena de suministro."
      },
      {
        id: 19,
        name: "Imanol Marianito Cuahuitic",
        image: fondo,
        semblanza: "SISTEMA DE VISIÓN ARTIFICIAL PARA CLASIFICACIÓN DE LA MARUDEZ DEL MANGO \n\nEsta investigación se enfocó en el desarrollo de un sistema de visión artificial para la clasificación del nivel de madurez del mango Ataulfo, evitando el uso de técnicas de Deep Learning en su fase inicial y empleando un perceptrón multicapa (MLP) como modelo base. El sistema abarcó la recolección de imágenes del fruto en cuatro fases de madurez (verde-maduro, parcialmente maduro, maduro firme y maduro suave), su preprocesamiento, segmentación por color y extracción de características para entrenar y evaluar modelos de Machine Learning y de modelos preentrenados MobileNetV2, MobileNetV3 y ResNet18 con el dataset creado."
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
        semblanza: "TÉCNICAS TEXTILES ARTESANALES PARA EL APROVECHAMIENTO DEL ALGODÓN Y SU IMPACTO AMBIENTAL. \n\nEl impacto ambiental derivado del sector textil a nivel industrial es una situación que merece atención para disminuir esta huella, por lo que esta investigación propone la documentación de la caracterización de técnicas textiles artesanales, el aprovechamiento del algodón y su impacto ambiental que estas técnicas pudieran causar, utilizando el algodón cultivado en la zona amuzga de Xochistlahuaca en la Costa Chica del Estado de Guerrero."
      },
      {
        id: 21,
        name: "Celeste Bello Pastor",
        image: fondo,
        semblanza: "LA CONSTRUCCIÓN VERNÁCULA RESIDENCIAL EN EL ESTADO DE GUERRERO \n\nEl presente proyecto de investigación propone caracterizar los materiales y técnicas de construcción residencial vernácula en el estado de Guerrero mediante una metodología cualitativa en la recopilación de información y en el cálculo del impacto ambiental, además se realizará la georeferenciación de los materiales y técnicas encontradas, finalmente se documentarán los hallazgos para proyectos futuros que estén relacionados con la construcción tradicional en el estado."
      },
      {
        id: 22,
        name: "Jonathan Jesús Carranza Vega",
        image: fondo,
        semblanza: "Modelo clasificador de Residuos Solidos Urbanos (RSU) del tipo Madera y Textil mediante Aprendizaje Profundo. \n\nLas capacidades de clasificacion de algunos contenedores inteligentes, mostraron que las  categorías principales de clasificación son: Metal, plástico, vidrio, residuos secos húumedos, reciclable/no reciclable, papel/cartón, biodegradable/no biodegradable, residuos electrónicos, orgánico, mixto madera y separación física (Zoumpoulis et al., 2024). Esta propuesta de investigación desarrolla un modelo clasificador de RSU del tipo madera y textil mediante aprendizaje profundo que permitira abonar a la eficiencia y precisión para una mejor separació adecuada de este tipo de residuos."
      },
      {
        id: 23,
        name: "Orlando Mares Hernández",
        image: fondo,
        semblanza: "Detección de la madurez del tomate en la planta mediante visión artificial. \n\nEste estudio propone el desarrollo de un sistema basado en visi ́on artificial para la detección de la madurez del tomate en la planta cultivada a campo abierto, utilizando algoritmos de aprendizaje profundo optimizados para operar en entornos agrícolas."
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
        semblanza: "MODELO DE PLANEACIÓN Y GESTIÓN PARA UNA EMPRESA AGROPECUARIA CASO: EMPRESA MIEL TIERRA GRANDE. \n\nEsta investigación tiene como objetivo, analizar los procesos de planeación y gestión de la empresa apícola Tierra grande ubicada en Hueyitlalpan, municipio de Mártir de Cuilapan, Guerrero para elaborar un modelo de planeación y gestión aplicable a otras empresas. Mediante una metodología de siete etapas: 1. Reconocimiento de la empresa; 2. Documentación de los procesos; 3. Revisión documental de certificaciones para las empresas apícolas; 4. Análisis de los canales de distribución; 5. Revisión documental y/o entrevistas a los directivos para identificar compradores al mayoreo y menudeo; 6. Análisis FODA; y 7. Documentación del modelo de la empresa."
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
        semblanza: "Semáforo Inteligente para la evaluación del riesgo sísmico en zonas urbanas. \n\nLa evaluación rápida de la exposición sísmica de edificios en zona urbanas es crucial para prevenir el riesgo de colapsos, pérdidas humanas y contaminación ambiental. Este proyecto desarrollará un semáforo inteligente de aplicación móvil que evalúe la vulnerabilidad sísmica en edificios en áreas urbanas con una metodología de seis fases: 1. Revisión documental de semáforos inteligentes con aplicación móvil; 2. Análisis cualitativo de metodologías que evalúen la vulnerabilidad; 3. Conformación del Dataset de edificios; 4. Comparación de algoritmos de Redes Neuronales Convulsiónales (CNN); 5. Desarrollo del modelo CNN; y 6. Elaboración y validación de la aplicación móvil para entornos urbanos reales."
      },
      {
        id: 28,
        name: "Joaquín Zueriel Nava Salazar",
        image: fondo,
        semblanza: "POLÍTICAS PÚBLICAS PARA LA EFICIENCIA ENERGÉTICA DE EDIFICIOS COMERCIALES EN MÉXICO. \n\nEn un mundo donde la EE se ha convertido en algo de suma importancia y donde las reformas han demostrado ser indispensables, este estudio busca ser un referente a futuras normas del sector construcción; por ello se propone analizar las políticas públicas de EE en edificios comerciales implementadas en México. Utilizando una metodología de 5 fases: 1. Revisión del marco normativo mexicano vigente de EE: método PRISMA; 2.  Investigación de políticas públicas de EE: Revisión documental; 3. Verificación de la regulación de políticas públicas gubernamentales: Análisis Estadístico cualitativo y cuantitativo; 4. Análisis de indicadores de EE: Revisión e identificación: 5. Determinación del impacto ambiental y socio-económico: Estimación de indicadores."
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
        semblanza: "FUNDAMENTOS PARA LA CONFORMACIÓN DE UNA EMPRESA AGROPECUARIA PRODUCTORA DE AGUACATE. \n\nActualmente la producción de aguacate en la zona serrana tiene dificultades para distribuir su producto, debido a falta de conocimientos de los agricultores en poder consolidar un canal de distribución eficiente. Esta investigación tiene como objetivo establecer los fundamentos de planeación y gestión de una empresa agropecuaria productora de aguacate en el municipio de Leonardo Bravo, Gro., México. Mediante una metodología desarrollada en cuatro etapas: 1. Reconocer la zona productora; 2. Analizar las prácticas de producción; 3. Diseñar el modelo de negocios; y 4. Documentar el modelo de negocios."
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
