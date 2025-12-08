import React from "react";
import AccordionArticle from "../../components/AccordionArticle/AccordionArticle";
import CardPdf from "../../components/Cards/CardPdf";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";

// Ejemplo mínimo para InnovaTecNM 2025.
//  - pdf: por la ruta o URL real
//  - image: por la ruta a una portada 
const innova2025 = [
  <CardPdf
    key="innova2025-ejemplo"
    pdf="#"
    image=""
  />
];

// Lista vacía para InnovaTecNM 2024 
const innova2024 = [];

const InnovaTecNM = () => {
  return (
    <>
      <NavBarGob />
      <TopBar />
      <div className="mt-14">
        <Contenido mostrarPanelLateral={false}>
          <AccordionArticle
            title="InnovaTecNM 2025"
            list={innova2025}
            text="Proyectos y materiales presentados en InnovaTecNM 2025."
          />
          <AccordionArticle
            title="InnovaTecNM 2024"
            list={innova2024}
            text="Proyectos y materiales presentados en InnovaTecNM 2024."
          />
        </Contenido>
      </div>
      <Footer />
    </>
  );
};

export default InnovaTecNM;
