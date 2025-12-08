import CardsGrid from "../../components/Cards/CardsGrid";
import Footer from "../../components/Footer/Footer";
import Parrafo from "../../components/Secciones/Parrafo";
import TopBar from "../../components/TopBar/TopBar";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";

// Imagen genérica de placeholder (Se cambiara por logos del CITCA)
import sinfoto from "../../assets/nucleoacademico/sinfoto.png";

const datosCongresosNacionales = [
  {
    image: sinfoto,
    name: "1er CITCA",
    semblanza:
      "Primer Congreso Internacional de Tecnologías y Ciencias Aplicadas (CITCA).",
  },
  {
    image: sinfoto,
    name: "2do CITCA",
    semblanza:
      "Segundo Congreso Internacional de Tecnologías y Ciencias Aplicadas (CITCA).",
  },
  {
    image: sinfoto,
    name: "3er CITCA",
    semblanza:
      "Tercer Congreso Internacional de Tecnologías y Ciencias Aplicadas (CITCA).",
  },
  {
    image: sinfoto,
    name: "4to CITCA",
    semblanza:
      "Cuarto Congreso Internacional de Tecnologías y Ciencias Aplicadas (CITCA).",
  },
];

const CongresosNacionales = () => {
  return (
    <>
      <NavBarGob />
      <TopBar />
      <Contenido>
        <div className="container mx-auto px-4 py-4">
          {/* Una sola sección con todas las tarjetas de los CITCA */}
          <CardsGrid data={datosCongresosNacionales} />
        </div>

        <Parrafo
          texto="La Maestría en Ciencias de la Ingeniería participa activamente en congresos nacionales, fortaleciendo la vinculación académica y la difusión de sus proyectos de investigación."
          conMargenSuperior={false}
        />
      </Contenido>
      <Footer />
    </>
  );
};

export default CongresosNacionales;
