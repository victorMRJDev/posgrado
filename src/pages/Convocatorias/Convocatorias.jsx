import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import separador from "../../assets/separador.svg";
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import convocatoriaPDF from "../../assets/Convocatoria2024MCI.pdf";

<div>
  <div className="flex flex-col py-6 px-10 justify-center items-center">
    <h1 className="text-4xl text-black font-sans font-semibold">
      Convocatoria
    </h1>
  </div>
  <div className="w-3/3">
    <img className="w-full" src={separador} />
  </div>
  <div className="flex flex-col py-2 px-10 justify-center items-center">
    <p className="text-xl text-justify font-sans font-normal mt-9 text-black"></p>
    <a
      href={convocatoriaPDF}
      target="_blank"
      rel="noopener noreferrer"
      className="md:w-60 mb-6 mx-auto"
    >
      <ButtonBlue text="Visualizar convocatoria" />
    </a>
  </div>
</div>;

const Estudiantes = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Proceso de Admisión
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <p className="text-2xl text-justify font-serif font-light mt-9 text-black">
                A todos los egresados y profesionistas de alguna Ingeniería en{" "}
                <strong>
                  Sistemas Computacionales, Informática, Electrónica, Eléctrica,
                  Electromecánica, Civil, Gestión Empresarial
                </strong>{" "}
                y otras del área de Tecnologías de Información y Comunicaciones,
                a participar en el <strong>PROCESO DE ADMISIÓN</strong> para el
                Programa de{" "}
                <strong>MAESTRÍA EN CIENCIAS DE LA INGENIERÍA</strong> en la{" "}
                <strong>MODALIDAD ESCOLARIZADA</strong>, para iniciar los
                estudios en el periodo de{" "}
                <strong>Agosto-Diciembre 2024.</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Requisitos de Ingreso
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <ul className="text-2xl text-justify font-serif font-light mt-9 text-black list-disc pl-6 space-y-3">
                <li>
                  Acreditar el proceso de admisión (curso propedéutico, examen
                  de conocimientos y entrevista).
                </li>
                <li>
                  Presentar curriculum vitae en extenso con documentos
                  probatorios.
                </li>
                <li>Presentar dos cartas de recomendación académicas.</li>
                <li>
                  Contar con Título de licenciatura y/o acta de examen de
                  protocolo de titulación y/o carta compromiso de titulación,
                  máximo de 6 meses después de haber ingresado a la maestría.
                </li>
                <li>
                  Tener un promedio mínimo de 80 en la escala del 0 al 100.
                </li>
              </ul>
            </div>
          </div>{" "}
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Convocatoria{" "}
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <p className="text-xl text-justify font-sans font-normal mt-9 text-black"></p>
              <a
                href={convocatoriaPDF}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-60 mb-6 mx-auto"
              >
                <ButtonBlue
                  text="Abrir convocatoria"
                  className={"md:w-60 mb-6 mx-auto"}
                />
              </a>
            </div>
          </div>
        </div>
        <PanelLateral />
      </div>
      <Footer />
    </>
  );
};

export default Estudiantes;
