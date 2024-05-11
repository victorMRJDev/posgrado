import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import separador from "../../assets/separador.svg";
import CardsGrid from "../../components/Cards/CardsGrid";
//
import DraCastro from "../../assets/nucleoacademico/DraCastro.jpeg";
import DraHernandez from "../../assets/nucleoacademico/DraHernandez.jpeg";
import DraLeyva from "../../assets/nucleoacademico/DraLeyva.png";
import DrCaballero from "../../assets/nucleoacademico/DrCaballero.jpeg";
import DrCampos from "../../assets/nucleoacademico/DrCampos.jpeg";
import DrFuentes from "../../assets/nucleoacademico/DrFuentes.jpeg";
import DrGonzalez from "../../assets/nucleoacademico/DrGonzalez.jpeg";
import DrLuna from "../../assets/nucleoacademico/DrLuna.png";
import DrMarmolejo from "../../assets/nucleoacademico/DrMarmolejo.jpeg";
import DrMorales from "../../assets/nucleoacademico/DrMorales.jpeg";
import LicGonzalez from "../../assets/nucleoacademico/LicGonzalez.jpeg";
import MCValencia from "../../assets/nucleoacademico/MCValencia.jpeg";
//

const data = [
  { image: DrCampos, name: "Dr. Wilfrido Campos Francisco" },
  { image: DraCastro, name: "Dra. Mirna Castro Bello" },
  { image: DrGonzalez, name: "Dr. Mario González Durán" },
  { image: DraHernandez, name: "Dra. Mercedes Hernández De La Cruz" },
  {
    image: DrMarmolejo,
    name: "Dr. Carlos Virgilio Marmolejo Vega",
    semblanza:
      "Maestro en Ciencias área Matemática Educativa por el Centro de Investigación y Estudios Avanzados del I.P.N., profesor de educación media básica, media superior y normal de 1963 a 1970, Profesor de Cálculo y Análisis Instrumental en la Facultad de Ciencias Químicas de la Universidad Autónoma de Guerrero de 1970 a 1978, Secretario General de la Universidad Autónoma de Guerrero de 1975 a 1978, Miembro fundador de la Facultad de Matemáticas de la Universidad Autónoma de Guerrero 1978, Miembro fundador del Instituto Tecnológico de Chilpancingo.\nProfesor de Cálculo Diferencial, Cálculo Integral, Cálculo vectorial, Ecuaciones Diferenciales y Álgebra lineal.\nProfesor con reconocimiento a perfil deseable, Miembro del Padrón estatal de Investigadores del Consejo de Ciencia y Tecnología del Estado de Guerrero, Miembro del Sistema de Investigadores Docentes de la Secretaría de Educación Guerrero.\nÁreas de Investigación: Ciencias Pedagógicas y Ciencias Ambientales. Autor de artículos científicos en esas áreas. \nFundador de la Maestría en Ciencias de la Ingeniería del Instituto Tecnológico de Chilpancingo.",
  },
  { image: DrMorales, name: "Dr. Cornelio Morales Morales" },
  { image: DrFuentes, name: "Dr. Jorge Fuentes Pacheco" },
  { image: DrLuna, name: "Dr. Jesús Antonio Luna Alvarez" },
  { image: DrCaballero, name: "Dr. Viterbo Caballero López" },
  { image: LicGonzalez, name: "Lic. Rosa Lizeth Gonzalez Rodriguez" },
  { image: DraLeyva, name: "Dra. Paula Adriana Leyva Alarcón" },
  { image: MCValencia, name: "M.C. Eleazar Felipe Valencia Díaz" },
];
//

const NucleoAcademico = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Profesores de Tiempo Completo
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="container mx-auto px-4 py-8">
              <CardsGrid data={data} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <p className="text-xl text-justify font-sans font-normal text-black">
                ¡Estamos aquí para apoyarte en tu camino hacia la excelencia
                académica y profesional en el campo de la ingeniería!
              </p>
              <p className="text-xl text-justify font-sans font-normal mt-4 text-black">
                ¡No dudes en acercarte a nosotros para cualquier consulta o
                asistencia que necesites durante tu experiencia en la Maestría
                en Ciencias de la Ingeniería!
              </p>
            </div>
          </div>
        </div>
        <PanelLateral />
      </div>
      <Footer />
    </>
  );
};

export default NucleoAcademico;
