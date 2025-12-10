import React from "react";
import CardsGrid from "../../components/Cards/CardsGrid";
import Footer from "../../components/Footer/Footer";
import Parrafo from "../../components/Secciones/Parrafo";
import TopBar from "../../components/TopBar/TopBar";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";

// Imágenes de congresos internacionales
import AFICAT202501 from "../../assets/FOTOS MAESTRIA/congresosInternacionales/AFICAT202501.jpg";
import AFICAT202502 from "../../assets/FOTOS MAESTRIA/congresosInternacionales/AFICAT202502.jpg";
import logoAFICAT2025 from "../../assets/FOTOS MAESTRIA/congresosInternacionales/logoAFICAT2025.png";
import portadaCTVRoma from "../../assets/FOTOS MAESTRIA/congresosInternacionales/portadaCTVRoma.jpg";

// Placeholder genérico
import sinfoto from "../../assets/nucleoacademico/sinfoto.png";

const datosCongresos = [
  {
    image: AFICAT202501,
    name: "AFICAT 2025",
    semblanza:
      "Participación de la Maestría en Ciencias de la Ingeniería (MCI) del TecNM Campus Chilpancingo en el IV Congreso Nacional AFICAT (13 y 14 de noviembre de 2025).\n\n" +
      "Maestrantes participantes: Diana D. Vázquez Martínez, Imanol M. Cuahuitic e Isaid Basilio Segovia.",
    images: [AFICAT202501, AFICAT202502, logoAFICAT2025],
  },
  {
    image: portadaCTVRoma,
    name: "CTV ROME 2025",
    semblanza: "Congreso internacional CTV ROME 2025.",
    images: [portadaCTVRoma],
  },
  {
    image: sinfoto,
    name: "RedCoLCA 2024",
    semblanza: "Encuentro internacional RedCoLCA 2024.",
    // aquí podrías agregar más imágenes si las tienes:
    // images: [img1, img2, ...]
  },
];

const CongresosInternacionales = () => {
  return (
    <>
      <NavBarGob />
      <TopBar />
      <Contenido>
        <div className="container mx-auto px-4 py-4">
          <CardsGrid data={datosCongresos} />
        </div>

        <Parrafo
          texto="La Maestría en Ciencias de la Ingeniería participa activamente en congresos internacionales, fortaleciendo la colaboración académica y la visibilidad de sus proyectos de investigación."
          conMargenSuperior={false}
        />
      </Contenido>
      <Footer />
    </>
  );
};

export default CongresosInternacionales;
