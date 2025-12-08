import React from "react";
import CardsGrid from "../../components/Cards/CardsGrid";
import Footer from "../../components/Footer/Footer";
import Parrafo from "../../components/Secciones/Parrafo";
import TopBar from "../../components/TopBar/TopBar";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";

// Imagen genérica de placeholder
import sinfoto from "../../assets/nucleoacademico/sinfoto.png";

const datosInnovaTec = [
  {
    image: sinfoto,
    name: "InnovaTecNM 2025",
    semblanza:
      "Proyectos y materiales presentados en InnovaTecNM 2025.",
  },
  {
    image: sinfoto,
    name: "InnovaTecNM 2024",
    semblanza:
      "Proyectos y materiales presentados en InnovaTecNM 2024.",
  },
];

const InnovaTecNM = () => {
  return (
    <>
      <NavBarGob />
      <TopBar />
      <Contenido>
        <div className="container mx-auto px-4 py-4">
          {/* Una sola sección con todas las tarjetas de InnovaTecNM */}
          <CardsGrid data={datosInnovaTec} />
        </div>

        <Parrafo
          texto="La Maestría en Ciencias de la Ingeniería impulsa proyectos de innovación tecnológica a través de su participación en InnovaTecNM, promoviendo el desarrollo de soluciones orientadas a la industria y a la sociedad."
          conMargenSuperior={false}
        />
      </Contenido>
      <Footer />
    </>
  );
};

export default InnovaTecNM;
