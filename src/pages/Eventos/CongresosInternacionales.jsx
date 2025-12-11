import React from "react";
import CardsGrid from "../../components/Cards/CardsGrid";
import Footer from "../../components/Footer/Footer";
import Parrafo from "../../components/Secciones/Parrafo";
import TopBar from "../../components/TopBar/TopBar";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";

// Imágenes de congresos internacionales
import AFICAT202501 from "../../assets/FOTOS MAESTRIA/congresosInternacionales/AFICAT/AFICAT202501.jpg";
import AFICAT202502 from "../../assets/FOTOS MAESTRIA/congresosInternacionales/AFICAT/AFICAT202502.jpg";
import logoAFICAT2025 from "../../assets/FOTOS MAESTRIA/congresosInternacionales/AFICAT/logoAFICAT2025.png";
import AFICATDiana from "../../assets/FOTOS MAESTRIA/congresosInternacionales/AFICAT/AFICATDiana.jpg";
import AFICATImanol from "../../assets/FOTOS MAESTRIA/congresosInternacionales/AFICAT/AFICATImanol.jpg";
import AFICATIsaid from "../../assets/FOTOS MAESTRIA/congresosInternacionales/AFICAT/AFICATIsaid.jpg";
import portadaCTVRoma from "../../assets/FOTOS MAESTRIA/congresosInternacionales/CTV/portadaCTV15Roma.jpg";
import CTVRoma from "../../assets/FOTOS MAESTRIA/congresosInternacionales/CTV/CTVRoma.jpg";
import CTVMir from "../../assets/FOTOS MAESTRIA/congresosInternacionales/CTV/CTVMir.jpg";
import CTVDen from "../../assets/FOTOS MAESTRIA/congresosInternacionales/CTV/CTVDen.jpg";
import CTVMar from "../../assets/FOTOS MAESTRIA/congresosInternacionales/CTV/CTVMario.jpg";
import CTVLiss from "../../assets/FOTOS MAESTRIA/congresosInternacionales/CTV/CTVLiss.jpg";
import COLCAMir from "../../assets/FOTOS MAESTRIA/congresosInternacionales/COLCA/colca2401.jpg";
import COLCADon from "../../assets/FOTOS MAESTRIA/congresosInternacionales/COLCA/colca2402.jpg";
import COLCALis from "../../assets/FOTOS MAESTRIA/congresosInternacionales/COLCA/colca2403.jpg";
import COLCAVic from "../../assets/FOTOS MAESTRIA/congresosInternacionales/COLCA/colca2404.jpg";
import COLCALogo from "../../assets/FOTOS MAESTRIA/congresosInternacionales/COLCA/logoColca.jpg";
// Placeholder genérico
import sinfoto from "../../assets/nucleoacademico/sinfoto.png";

const datosCongresos = [
  {
    image: logoAFICAT2025,
    name: "IV AFICAT 2025",
    semblanza:
      "Participación de la Maestría en Ciencias de la Ingeniería (MCI) del TecNM Campus Chilpancingo en el IV Congreso Nacional AFICAT (13 y 14 de noviembre de 2025).\n\n" +
      "Maestrantes participantes: Diana D. Vázquez Martínez, Imanol M. Cuahuitic e Isaid Basilio Segovia.",
    images: [AFICAT202502, AFICATDiana, AFICATImanol, AFICATIsaid],
  },
  {
    image: portadaCTVRoma,
    name: "15° CTV Roma 2025",
    semblanza: "Participación de la Maestría en Ciencias de la Ingeniería (MCI) del TECNM campus Chilpancingo en el 15° CTV Roma 2025 (Tecnm Sapienza Università di Roma). Los maestrantes ponentes fueron Denisse Peralta Rojo, Lisandro Santos Arrieta y Mario Alberto Duque. La Dra. Mirna Castro Bello, Jefa de la División de Estudios de Posgrado e Investigación, también presentó la ponencia: 'Irregularidades y tendencias de series temporales de precipitaciones: caso municipio de Chilpancingo, Gro, México'.",
    images: [CTVRoma, CTVMir, CTVDen, CTVMar, CTVLiss],
  },
  {
    image: COLCALogo,
    name: "V COLCA 2024",
    semblanza: "Participación de la Maestría en Ciencias de la Ingeniería (MCI) del TECNM campus Chilpancingo en el Congreso Latinoamericano de Conflictos Ambientales, celebrado en Manaus, Brasil, del 21 al 25 de octubre. La delegación estuvo encabezada por la Dra. Mirna Castro Bello, junto a los maestrantes Lizbeth Gómez Muñoz, Víctor Romero Juárez y Dominic Román Padillan.",
    // aquí podrías agregar más imágenes si las tienes:
    images: [COLCAMir, COLCADon, COLCALis, COLCAVic],
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
