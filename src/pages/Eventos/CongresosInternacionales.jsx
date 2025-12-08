import CardsGrid from "../../components/Cards/CardsGrid";
import Footer from "../../components/Footer/Footer";
import Parrafo from "../../components/Secciones/Parrafo";
import TopBar from "../../components/TopBar/TopBar";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";
import logoAFICAT2025 from "../../assets/FOTOS MAESTRIA/congresosInternacionales/logoAFICAT2025.png";
import portadaCTVRoma from "../../assets/FOTOS MAESTRIA/congresosInternacionales/portadaCTVRoma.jpg";

// Imagen genérica de placeholder 
import sinfoto from "../../assets/nucleoacademico/sinfoto.png";

const datosCongresos = [
  {
    image: logoAFICAT2025,
    name: "AFICAT 2025",
    semblanza:
      "Participación de la Maestría en Ciencias de la Ingeniería (MCI) del TECNM Chilpancingo en el IV Congreso Nacional AFICAT (13 y 14 de noviembre de 2025). Maestrantes participantes: Diana D. Vazquez Martínez, Imanol M. Cuahuitic e Isaid Basilio Segovia.",
  },
  {
    image: portadaCTVRoma,
    name: "CTV ROME 2025",
    semblanza:
      "Congreso internacional CTV ROME 2025.",
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
