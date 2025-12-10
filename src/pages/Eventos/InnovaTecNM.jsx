import React from "react";
import CardsGrid from "../../components/Cards/CardsGrid";
import Footer from "../../components/Footer/Footer";
import Parrafo from "../../components/Secciones/Parrafo";
import TopBar from "../../components/TopBar/TopBar";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";
import LogoInnova25 from "../../assets/FOTOS MAESTRIA/congresosNacionales/InnovaTecNM/logoInnovaTecNM.jpg";
import AgroSensIA from "../../assets/FOTOS MAESTRIA/congresosNacionales/InnovaTecNM/Cumbre2025/agrosensia.jpeg";
import DiabeticScan from "../../assets/FOTOS MAESTRIA/congresosNacionales/InnovaTecNM/Cumbre2025/diabeticscan.jpeg";
import SmartBinCollector from "../../assets/FOTOS MAESTRIA/congresosNacionales/InnovaTecNM/Cumbre2025/smartbin.jpeg";

// Imagen genérica de placeholder
import sinfoto from "../../assets/nucleoacademico/sinfoto.png";

const datosInnovaTec = [
  {
    image: LogoInnova25,
    name: "InnovaTecNM 2025",
    semblanza:
      "Participación de los equipos de Posgrado del TECNM campus Chilpancingo en la Cumbre Nacional de Desarrollo Tecnológico, Emprendimiento e Innovación del Tecnológico Nacional de México, con sede en el Instituto Tecnológico de Pachuca. Los equipos participantes fueron: AgroSensIA, DiabeticScan y SmartBinCollector.",
    images: [AgroSensIA, DiabeticScan, SmartBinCollector],
  },
  {
    image: LogoInnova25,
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
