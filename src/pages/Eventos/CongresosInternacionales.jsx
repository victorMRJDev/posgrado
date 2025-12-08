import CardsGrid from "../../components/Cards/CardsGrid";
import Footer from "../../components/Footer/Footer";
import Parrafo from "../../components/Secciones/Parrafo";
import TopBar from "../../components/TopBar/TopBar";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";
import CardCarousel from "../../components/Carrusel/CardCarousel"; 
import AFICAT01 from "../../assets/FOTOS MAESTRIA/CongresosInternacionales/AFICAT01.jpg";
import AFICAT02 from "../../assets/FOTOS MAESTRIA/CongresosInternacionales/AFICAT01.jpg";

// Imagen genérica de placeholder (Se cambiara por logos de los congresos)
import sinfoto from "../../assets/nucleoacademico/sinfoto.png";

const datosCongresos = [
  {
    image: [logoAFICAT2025,AFICAT01,AFICAT02],
    name: "AFICAT 2025",
    semblanza:
      "Participación de la Maestría en Ciencias de la Ingeniería (MCI) del TECNM Chilpancingo en el IV Congreso Nacional AFICAT (13 y 14 de noviembre de 2025). Maestrantes participantes: Diana D. Vazquez Martínez, Imanol M. Cuahuitic e Isaid Basilio Segovia.",
  },
  {
    image: sinfoto,
    name: "CVT ROME 2025",
    semblanza:
      "Congreso internacional CVT ROME 2025.",
  },
  {
    image: sinfoto,
    name: "RedCoLCA 2024",
    semblanza:
      "Encuentro internacional RedCoLCA 2024.",
  },
];

const CongresosInternacionales = () => {
  return (
    <>
      <NavBarGob />
      <TopBar />
      <Contenido>
        <div className="container mx-auto px-4 py-4">
          {/* Una sola sección con todas las tarjetas */}
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
