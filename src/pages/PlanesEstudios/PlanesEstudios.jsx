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
      "1. Estrategias para la competitividad (No. 22)",
      "2. Análisis y Diseño de Producto (No.47)",
      "3. Manejo y disposición de residuos sólidos (No. 93)",
      "4. Tecnologías para la gestión del conocimiento (No. 110)",
      "5. Certificación para la sustentabilidad (No. 114)",
      "6. Tecnologías adecuadas social y ecológicamente (No. 120)",
      "7. Evaluación del impacto ambiental (No. 121)",
      "8. Temas Selectos I (No. 143)",
      "9. Temas Selectos II (No. 144)",
      "10. Temas Selectos III (No. 145)",
    ],
  },
];
const asignaturasLineaDOs = [
  {
    id: 1,
    title: "LGAC 1: Nuevas Tecnologías para el Desarrollo Sustentable",
    materias: [
      "1. Minería de datos (No. 11)",
      "2. Control inteligente (No. 41)",
      "3. Inteligencia artificial (No. 43)",
      "4. Sistemas de automatización (No. 53)",
      "5. Sistemas inteligentes distribuidos (No. 76)",
      "6. Visión artificial (No. 127)",
      "7. Reconocimiento de patrones (No. 129)",
      "8. Robótica y Automatización (No. 130)",
      "9. Temas Selectos I (No. 143)",
      "10. Temas Selectos II (No. 144)",
      "11. Temas Selectos III (No. 145)",
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
