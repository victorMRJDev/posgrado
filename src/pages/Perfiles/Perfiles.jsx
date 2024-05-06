import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import separador from "../../assets/separador.svg";

const Perfiles = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Perfil de Ingreso
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <p className="text-xl text-justify font-sans font-normal mt-9 text-black">
                El programa está dirigido a ingenieros recién egresados y/o
                ingenieros del sector productivo, en las distintas áreas de la
                ingeniería, que cuenten con competencias, habilidades, valores y
                conocimientos que permitan evidenciar aptitudes para la
                investigación, innovación y desarrollo de proyectos
                tecnológicos.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Perfil de Egreso
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <p className="text-xl text-justify font-sans font-normal mt-9 text-black">
                El egresado de la Maestría en Ciencias de la Ingeniería será
                capaz de generar conocimientos científicos y tecnológicos a
                través del planteamiento y desarrollo de trabajo de
                investigación en las áreas de nuevas tecnologías para el
                desarrollo sustentable, con apego a la ética, el humanismo, el
                amor por el planeta, la vida silvestre, los ecosistemas y los
                semejantes, además de contar con las competencias siguientes:
              </p>
              <ul className="text-xl text-justify font-sans font-normal mt-9 text-black list-disc pl-6 space-y-3">
                <li>
                  Capacidad para conducir investigación original en el área de
                  ingeniería de su especialidad.
                </li>
                <li>
                  Formar seres humanos de alto nivel con capacidad de innovación
                  en el desarrollo de proyectos de impacto social, científico y
                  tecnológico.
                </li>
                <li>
                  Detectar y analizar problemas de relevancia en procesos
                  productivos, planteando nuevas alternativas de solución.
                </li>
                <li>
                  Dar asesoría y consultoría técnica al sector público y privado
                  en el área de su especialidad.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <PanelLateral />
      </div>
      <Footer />
    </>
  );
};

export default Perfiles;
