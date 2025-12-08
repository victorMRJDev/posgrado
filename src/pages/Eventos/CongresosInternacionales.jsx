import React from "react";
import AccordionArticle from "../../components/AccordionArticle/AccordionArticle";
import CardPdf from "../../components/Cards/CardPdf";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";

/*
  EJEMPLO:
  Si más adelante quieres agregar un trabajo:

  const aficat2025 = [
    <CardPdf
      key="aficat-ejemplo"
      pdf={"/ruta/al/archivo.pdf"}      // o un enlace externo "https://..."
      image={"/ruta/a/la/portada.jpg"} // opcional
    />,
  ];
*/

const aficat2025 = [
  <CardPdf
    key="aficat-ejemplo"
    pdf="#"
    image=""
  />,
];

// Listas vacías  para llenar
const cvtRome2025 = [];
const redcolca2024 = [];

const CongresosInternacionales = () => {
  return (
    <>
      <NavBarGob />
      <TopBar />
      <div className="mt-14">
        <Contenido mostrarPanelLateral={false}>
          <AccordionArticle
            title="AFICAT 2025"
            list={aficat2025}
            text="Trabajos presentados en el Congreso Internacional AFICAT 2025."
          />
          <AccordionArticle
            title="CVT ROME 2025"
            list={cvtRome2025}
            text="Trabajos presentados en el Congreso Internacional CVT ROME 2025."
          />
          <AccordionArticle
            title="RedCoLCA 2024"
            list={redcolca2024}
            text="Trabajos presentados en el Congreso Internacional RedCoLCA 2024."
          />
        </Contenido>
      </div>
      <Footer />
    </>
  );
};

export default CongresosInternacionales;
