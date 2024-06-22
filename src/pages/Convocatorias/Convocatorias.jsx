import React from "react";
import convocatoriaPDF from "../../assets/Convocatoria2024MCI.pdf";
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import SeccionLista from "../../components/Secciones/SeccionLista";
import SeccionParrafo from "../../components/Secciones/SeccionParrafo";
import SeccionTitulo from "../../components/Secciones/Titulo";
import TopBar from "../../components/TopBar/TopBar";

const requisitosIngreso = [
  "Acreditar el proceso de admisión (curso propedéutico, examen de conocimientos y entrevista).",
  "Presentar curriculum vitae en extenso con documentos probatorios.",
  "Presentar dos cartas de recomendación académicas.",
  "Contar con Título de licenciatura y/o acta de examen de protocolo de titulación y/o carta compromiso de titulación, máximo de 6 meses después de haber ingresado a la maestría.",
  "Tener un promedio mínimo de 80 en la escala del 0 al 100.",
];

const Estudiantes = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <SeccionParrafo
            titulo="Proceso de Admisión"
            texto="A todos los egresados y profesionistas de alguna Ingeniería en
            Sistemas Computacionales, Informática, Electrónica, Eléctrica,
            Electromecánica, Civil, Gestión Empresarial y otras del área de
            Tecnologías de Información y Comunicaciones, a participar en el
            PROCESO DE ADMISIÓN para el Programa de MAESTRÍA EN CIENCIAS DE
            LA INGENIERÍA en la MODALIDAD ESCOLARIZADA, para iniciar los
            estudios en el periodo de Agosto-Diciembre 2024."
          ></SeccionParrafo>
          <SeccionLista
            titulo="Requisitos de Ingreso"
            lista={requisitosIngreso}
          ></SeccionLista>
          <SeccionTitulo titulo="Convocatoria"></SeccionTitulo>
          <div className="flex flex-col py-2 px-10 justify-center">
            <p className="text-xl text-justify font-sans font-normal mt-9 text-black"></p>
            <a
              href={convocatoriaPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-60 mb-2 mx-auto"
            >
              <ButtonBlue
                text="Abrir convocatoria"
                className={"md:w-60 mb-6 mx-auto"}
              />
            </a>
          </div>
        </div>
        <PanelLateral />
      </div>
      <Footer />
    </>
  );
};

export default Estudiantes;
