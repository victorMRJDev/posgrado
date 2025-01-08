import React from "react";
import convocatoriaPDF from "../../assets/Convocatoria2024MCI.pdf";
import CONV_ADM_EJ25_DEPI from "../../assets/CONV_ADM_EJ25_DEPI.pdf";
import CONV_ADM_EJ25_DEPI_ACT from "../../assets/CONV_ADM_EJ25_DEPI_ACT.pdf";


import tiempoCompleto from "../../assets/DedicacionTiempoCompleto.pdf";
import preRegistro from "../../assets/Formato_Pre_Registro.pdf";

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

        <div className="flex lg:flex-row gap-32 justify-center  sm:flex-col max-sm:flex-col  max-sm:gap-0">
          <div className="flex flex-row py-2 justify-center">
            <p className="text-xl text-justify font-sans font-normal mt-9 text-black"></p>
            <a
              href={CONV_ADM_EJ25_DEPI_ACT}
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-60 mb-2 mx-auto"
            >
              <ButtonBlue
                text="Abrir convocatoria"
                className={"md:w-80 mb-6 mx-auto"}
              />
            </a>
          </div>

          <div className="flex flex-row py-2 justify-center">
            <p className="text-xl text-justify font-sans font-normal mt-9 text-black"></p>
            <a
              href={preRegistro}
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-60 mb-2 mx-auto"
            >
              <ButtonBlue
                text="Formato de Pre-registro"
                className={"md:w-80 mb-6 mx-auto"}
              />
            </a>
          </div>
          <div className="flex flex-row py-2 justify-center">
            <p className="text-xl text-justify font-sans font-normal mt-9 text-black"></p>
            <a
              href={tiempoCompleto}
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-60 mb-2 mx-auto"
            >
              <ButtonBlue
                text="Formato Tiempo completo"
                className={"md:w-80 mb-6 mx-auto"}
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
