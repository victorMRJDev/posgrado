import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import separador from "../../assets/separador.svg";

const Objetivos = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Objetivo General
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <p className="text-xl text-justify font-sans font-normal mt-9 text-black">
                Formar profesionistas de alta calidad académica con profundos
                conocimientos en el estado del arte de su disciplina, con
                destrezas intelectuales y metodológicas que les permitan
                resolver problemas de su entorno profesional, aprender en forma
                autónoma y generar nuevos conocimientos en su campo de acción,
                con la capacidad de ser innovadores que contribuyan al
                crecimiento tecnológico, económico, ambiental y sostenible de la
                región, impactando en el sector social, industrial y científico,
                además de ser líderes que respondan a las necesidades de las
                empresas locales, regionales, nacionales e internacionales a
                través de una visión objetiva, crítica y de trabajo en equipo.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Objetivos Específicos
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <ul className="text-xl text-justify font-sans font-normal mt-9 text-black list-disc pl-6 space-y-3">
                <li>
                  Formar recursos humanos con capacidad de investigar, asimilar,
                  aplicar, generar y difundir conocimiento científico y
                  tecnológico en el área de ingeniería.
                </li>
                <li>
                  Investigar y desarrollar metodologías de diseño, programación,
                  visión artificial que optimicen la automatización de los
                  procesos productivos para contar con productos de software
                  confiable y sostenible.
                </li>
                <li>
                  Atender las necesidades del sector empresarial y de gobierno
                  de forma regional, nacional y mundial en el área de la
                  ingeniería con enfoque al desarrollo de nuevas tecnologías
                  sustentables e inteligentes.
                </li>
                <li>
                  Desarrollar herramientas científicas - técnicas para
                  transformar los recursos intelectuales y materiales en
                  innovación tecnológica aplicada.
                </li>
                <li>
                  Desarrollar y aplicar tecnologías inteligentes orientadas a la
                  sustentabilidad.
                </li>
                <li>
                  Actualizar recursos humanos en ingeniería, para su aplicación
                  en el ejercicio profesional de los diferentes sectores de la
                  sociedad.
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

export default Objetivos;
