import React from "react";
import AccordionArticle from "../../components/AccordionArticle/AccordionArticle";
import CardPdf from "../../components/Cards/CardPdf";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";

/*
  EJEMPLO:
  Si más adelante quieres agregar trabajos al 1er CITCA:

  const citca1 = [
    <CardPdf
      key="citca1-ejemplo"
      pdf={"/ruta/al/archivo.pdf"}      // o un enlace externo "https://..."
      image={"/ruta/a/la/portada.jpg"} // opcional
    />,
  ];

*/

// Ejemplo mínimo para 1er CITCA
const citca1 = [
  <CardPdf
    key="citca1-ejemplo"
    pdf="#"
    image=""
  />,
];

// Listas vacías para llenar
const citca2 = [];
const citca3 = [];
const citca4 = [];

const CongresosNacionales = () => {
  return (
    <>
      <NavBarGob />
      <TopBar />
      <div className="mt-14">
        <Contenido mostrarPanelLateral={false}>
          <AccordionArticle
            title="1er CITCA"
            list={citca1}
            text="Trabajos presentados en el 1er Congreso Internacional de Tecnologías y Ciencias Aplicadas (CITCA)."
          />
          <AccordionArticle
            title="2do CITCA"
            list={citca2}
            text="Trabajos presentados en el 2do Congreso Internacional de Tecnologías y Ciencias Aplicadas (CITCA)."
          />
          <AccordionArticle
            title="3er CITCA"
            list={citca3}
            text="Trabajos presentados en el 3er Congreso Internacional de Tecnologías y Ciencias Aplicadas (CITCA)."
          />
          <AccordionArticle
            title="4to CITCA"
            list={citca4}
            text="Trabajos presentados en el 4to Congreso Internacional de Tecnologías y Ciencias Aplicadas (CITCA)."
          />
        </Contenido>
      </div>
      <Footer />
    </>
  );
};

export default CongresosNacionales;
