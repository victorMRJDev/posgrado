import React from "react";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import PlanesAccordion from "../../components/PlanEstudios/PlanesAccordion";
import SeccionParrafo from "../../components/Secciones/SeccionParrafo";
import Titulo from "../../components/Secciones/Titulo";
import TopBar from "../../components/TopBar/TopBar";

const semestreUno = [
  {
    id: 1,
    materias: [
      "Seminario de Investigación I",
      "Básica I",
      "Básica II",
      "Básica III",
      "Básica IV",
    ],
    creditos: 28,
  },
];
const semestreDos = [
  {
    id: 2,
    materias: [
      "Seminario de Investigación II",
      "Optativa I",
      "Optativa II",
      "Optativa III",
    ],
    creditos: 22,
  },
];
const semestreTres = [
  {
    id: 3,
    materias: ["Seminario de Investigación III", "Optativa IV"],
    creditos: 10,
  },
];
const semestreCuatro = [
  {
    id: 4,
    materias: ["Tésis"],
    creditos: 40,
  },
];

const optativasL1 = [
  {
    id: 1,
    title: "LGAC 1: Nuevas Tecnologías para el Desarrollo Sustentable",
    materias: [
      "Estrategias para la competitividad",
      "Análisis y Diseño de Producto",
      "Manejo y disposición de residuos sólidos",
      "Tecnologías para la gestión del conocimiento",
      "Certificación para la sustentabilidad",
      "Tecnologías adecuadas social y ecológicamente",
      "Evaluación del impacto ambiental",
      "Temas Selectos I",
      "Temas Selectos II",
      "Temas Selectos III",
    ],
  },
];
const optativasL2 = [
  {
    id: 2,
    title:
      "LGAC 2: Investigación, Desarrollo y Aplicaciones de Tecnologías Inteligentes",
    materias: [
      "Minería de datos",
      "Control inteligente",
      "Inteligencia artificial",
      "Sistemas de automatización",
      "Sistemas inteligentes distribuidos",
      "Visión artificial",
      "Reconocimiento de patrones",
      "Robótica y Automatización",
      "Temas Selectos I",
      "Temas Selectos II",
      "Temas Selectos III",
    ],
  },
];

const asignaturasBasicas = [
  {
    id: 1,
    materias: [
      "Matemáticas aplicadas a la ingeniería",
      "Estadística aplicada en diseño de experimentos",
      "Innovación y sustentabilidad en la ingeniería",
      "Programación",
    ],
  },
];

const PlanesEstudios = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <SeccionParrafo
            titulo="Plan De Estudios"
            texto="El plan de estudios es semestral diseñado para concluirse en dos
            años, en el que el estudiante deberá cursar cuatro asignaturas
            básicas, cuatro asignaturas optativas, tres seminarios de
            investigación y tesis. La tesis empezará a desarrollarse desde el
            primer semestre y se acreditará hasta que el estudiante presente
            el examen de grado."
          ></SeccionParrafo>
          <PlanesAccordion title="Semestre 1" list={semestreUno} />
          <PlanesAccordion title="Semestre 2" list={semestreDos} />
          <PlanesAccordion title="Semestre 3" list={semestreTres} />
          <PlanesAccordion title="Semestre 4" list={semestreCuatro} />
          <Titulo
            titulo={"Asignaturas Básicas"}
            mostrarSeparador={false}
          ></Titulo>
          <PlanesAccordion title="Asignaturas" list={asignaturasBasicas} />
          <SeccionParrafo
            titulo="Asignaturas Optativas"
            mostrarSeparador={false}
            texto=" A lo largo de tu estancia como estudiante del Posgrado en Ciencias
            de la Ingeniería, tus aprendizajes se verán guiados por docentes
            expertos en su rama, con materias específicas para cada línea de
            investigación, con el objetivo de que la innovación y el
            conocimiento sean partes fundamentales de tus clases."
            conMargenSuperior={false}
          ></SeccionParrafo>
          <PlanesAccordion
            title={"LGAC 1: Nuevas Tecnologías para el Desarrollo Sustentable"}
            list={optativasL1}
          />
          <PlanesAccordion
            title={
              "LGAC 2: Investigación, Desarrollo y Aplicaciones de Tecnologías Inteligentes"
            }
            list={optativasL2}
          />
        </div>
        <PanelLateral />
      </div>
      <Footer />
    </>
  );
};

export default PlanesEstudios;
