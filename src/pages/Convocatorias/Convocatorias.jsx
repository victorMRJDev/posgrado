import React from "react";
import CONV_ADM_AGO_DIC from "../../assets/CONV_ADM_AGO-DIC-2025.pdf";
import tiempoCompleto from "../../assets/Dedicación de Tiempo completo Ago-Dic 2025.docx";
import preRegistro from "../../assets/Formato Pre-registro Ago-Dic 2025.docx";
import ButtonBlue from "../../components/Buttons/ButtonBlue";
import Footer from "../../components/Footer/Footer";
import Contenido from "../../components/Secciones/Contenido";
import SeccionLista from "../../components/Secciones/SeccionLista";
import SeccionParrafo from "../../components/Secciones/SeccionParrafo";
import SeccionTitulo from "../../components/Secciones/Titulo";
import TopBar from "../../components/TopBar/TopBar";
import NavBarGob from "../../components/TopBar/NavBarGob";

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
      <NavBarGob />
      <TopBar />
      <Contenido>
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

        <div className="flex flex-wrap justify-center gap-6 py-8 px-4">
          {" "}
          {/* Añadido py-8 para padding vertical */}
          <div className="w-full sm:w-auto min-w-[260px] max-w-[320px]">
            <a
              href={CONV_ADM_AGO_DIC}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <ButtonBlue
                disabled={false}
                text="Abrir convocatoria"
                className="w-full py-3"
              />
            </a>
          </div>
          <div className="w-full sm:w-auto min-w-[260px] max-w-[320px]">
            <a
              href={preRegistro}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <ButtonBlue
                text="Formato de Pre-registro"
                className="w-full py-3"
              />
            </a>
          </div>
          <div className="w-full sm:w-auto min-w-[260px] max-w-[320px]">
            <a
              href={tiempoCompleto}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <ButtonBlue
                text="Formato Tiempo completo"
                className="w-full py-3"
              />
            </a>
          </div>
        </div>
      </Contenido>
      <Footer />
    </>
  );
};

export default Estudiantes;
