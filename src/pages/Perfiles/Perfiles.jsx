import React from "react";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import SeccionParrafo from "../../components/Secciones/SeccionParrafo";
import SeccionParrafoLista from "../../components/Secciones/SeccionParrafoLista";
import TopBar from "../../components/TopBar/TopBar";
import Contenido from "../../components/Secciones/Contenido";

const competenciasEgreso = [
  "Capacidad para conducir investigación original en el área de ingeniería de su especialidad.",
  "Formar seres humanos de alto nivel con capacidad de innovación en el desarrollo de proyectos de impacto social, científico y tecnológico.",
  "Detectar y analizar problemas de relevancia en procesos productivos, planteando nuevas alternativas de solución.",
  "Dar asesoría y consultoría técnica al sector público y privado en el área de su especialidad.",
];

const Perfiles = () => {
  return (
    <>
      <TopBar />
      <Contenido>
        <SeccionParrafo
          titulo="Perfil de Ingreso"
          texto="El programa está dirigido a ingenieros recién egresados y/o
            ingenieros del sector productivo, en las distintas áreas de la
            ingeniería, que cuenten con competencias, habilidades, valores y
            conocimientos que permitan evidenciar aptitudes para la
            investigación, innovación y desarrollo de proyectos
            tecnológicos."
        ></SeccionParrafo>
        <SeccionParrafoLista
          titulo="Perfil de Egreso"
          texto="El egresado de la Maestría en Ciencias de la Ingeniería será
            capaz de generar conocimientos científicos y tecnológicos a
            través del planteamiento y desarrollo de trabajo de
            investigación en las áreas de nuevas tecnologías para el
            desarrollo sustentable, con apego a la ética, el humanismo, el
            amor por el planeta, la vida silvestre, los ecosistemas y los
            semejantes, además de contar con las competencias siguientes:"
          lista={competenciasEgreso}
        ></SeccionParrafoLista>
      </Contenido>
      <Footer />
    </>
  );
};

export default Perfiles;
