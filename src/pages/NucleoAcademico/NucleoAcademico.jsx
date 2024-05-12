import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import separador from "../../assets/separador.svg";
import CardsView from "../../components/Cards/CardsView";
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
  { image: DraCastro, name: "Dra. Mirna Castro Bello" },
  { image: DrMarmolejo, name: "Dr. Carlos Virgilio Marmolejo Vega" },
  { image: DrMorales, name: "Dr. Cornelio Morales Morales" },
  { image: DraHernandez, name: "Dra. Mercedes Hernández De La Cruz" },
  { image: MCValencia, name: "M.C. Eleazar Felipe Valencia Díaz" },
  { image: DrFuentes, name: "Dr. Jorge Fuentes Pacheco" },
  { image: DrLuna, name: "Dr. Jesús Antonio Luna Alvarez" },
  { image: DrCaballero, name: "Dr. Viterbo Caballero López" },
  { image: LicGonzalez, name: "Lic. Rosa Lizeth Gonzalez Rodriguez" },
  { image: DraLeyva, name: "Dra. Paula Adriana Leyva Alarcón" },
  { image: DrGonzalez, name: "Dr. Mario González Durán" },
  { image: DrCampos, name: "Dr. Wilfrido Campos Francisco" },
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
              <CardsView data={data} />
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
