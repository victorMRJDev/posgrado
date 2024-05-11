import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import separador from "../../assets/separador.svg";
import Accordion from "../../components/PlanEstudios/PlanesView";

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
    id: 1,
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
    id: 1,
    materias: ["Seminario de Investigación III", "Optativa IV"],
    creditos: 10,
  },
];
const semestreCuatro = [
  {
    id: 1,
    materias: ["Tésis"],
    creditos: 40,
  },
];

const asignaturasOptativas = [
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
const asignaturasLineaDOs = [
  {
    id: 1,
    title: "LGAC 1: Nuevas Tecnologías para el Desarrollo Sustentable",
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

const Estudiantes = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <div className="flex flex-col py-6 px-10 justify-center items-center">
            <h1 className="text-4xl text-black font-sans font-semibold">
              Plan De Estudios
            </h1>
          </div>
          <div className="w-3/3">
            <img className="w-full" src={separador} />
          </div>
          <div className="flex flex-col py-2 px-10 justify-center">
            <p className="text-xl text-justify font-sans font-normal mt-9 text-black">
              El plan de estudios es semestral diseñado para concluirse en dos
              años, en el que el estudiante deberá cursar cuatro asignaturas
              básicas, cuatro asignaturas optativas, tres seminarios de
              investigación y tesis. La tesis empezará a desarrollarse desde el
              primer semestre y se acreditará hasta que el estudiante presente
              el examen de grado.
            </p>
          </div>
          <Accordion title="Semestre 1" list={semestreUno} />
          <Accordion title="Semestre 2" list={semestreDos} />
          <Accordion title="Semestre 3" list={semestreTres} />
          <Accordion title="Semestre 4" list={semestreCuatro} />
          <div className="flex flex-col py-6 px-10 justify-center items-center">
            <h1 className="text-4xl text-black font-sans font-semibold">
              Asignaturas Básicas
            </h1>
          </div>
          <Accordion title="Asignaturas" list={asignaturasBasicas} />
          <div className="flex flex-col py-6 px-10 justify-center items-center">
            <h1 className="text-4xl text-black font-sans font-semibold">
              Asignaturas Optativas
            </h1>
          </div>
          <div className="flex flex-col py-2 px-10 justify-center">
            <p className="text-xl text-justify font-sans font-normal text-black">
              A lo largo de tu estancia como estudiante del Posgrado en Ciencias
              de la Ingeniería, tus aprendizajes se verán guiados por docentes
              expertos en su rama, con materias específicas para cada línea de
              investigación, con el objetivo de que la innovación y el
              conocimiento sean partes fundamentales de tus clases.
            </p>
          </div>
          <Accordion
            title={"LGAC 1: Nuevas Tecnologías para el Desarrollo Sustentable"}
            list={asignaturasOptativas}
          />
          <Accordion
            title={
              "LGAC 2: Investigación, Desarrollo y Aplicaciones de Tecnologías Inteligentes"
            }
            list={asignaturasLineaDOs}
          />
        </div>
        <PanelLateral />
      </div>
      <Footer />
    </>
  );
};

export default Estudiantes;
