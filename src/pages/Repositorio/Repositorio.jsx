import React from "react";
import AccordionArticle from "../../components/AccordionArticle/AccordionArticle";
import CardPdf from "../../components/Cards/CardPdf";
import LGM from "../../assets/articleIndizados/LGM.pdf";
import JFP from "../../assets/articleIndizados/JFP.pdf";
import MCB from "../../assets/articleIndizados/MCB.pdf";
import DBRP from "../../assets/articleIndizados/DBRP.pdf";
import VMRJ from "../../assets/articleIndizados/VMRJ.pdf";

import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";

import LGM_portada from "../../assets/articleIndizados/LGM_portada.png";
import JFP_portada from "../../assets/articleIndizados/JFP_portada.png";
import MCB_portada_article from "../../assets/articleIndizados/MCB.png";
import DBRP_portada_article from "../../assets/articleIndizados/DBRP.png";
import VMRJ_portada_article from "../../assets/articleIndizados/VMRJ.png";

import LGM_portCongreso from "../../assets/articleCongreso/LGM_portada.jpg";
import VMRJ_portCongreso from "../../assets/articleCongreso/VMRJ_portada.jpg";
import MSA_portCongreso from "../../assets/articleCongreso/MSA_portada.jpg";
import ACM_portCongreso from "../../assets/articleCongreso/ACM_portada.jpg";
import ESL_portCongreso from "../../assets/articleCongreso/ESL_portada.png";
import JFP_portoptica from "../../assets/articleCongreso/Optica_2024.jpg";

import DBRP_portada from "../../assets/posters/DBRP_portada.jpg";
import IUBS_portada from "../../assets/posters/IUBS_portada.jpg";
import BAJS_portada from "../../assets/posters/BAJS_portada.jpg";
import CGJS_portada from "../../assets/posters/CGJS_portada.jpg";
import DAML_portada from "../../assets/posters/DAML_portada.jpg";
import DDVM_portada from "../../assets/posters/DDVM_portada.jpg";
import IMC_portada from "../../assets/posters/IMC_portada.jpg";
import JARV_portada from "../../assets/posters/JARV_portada.jpg";

//ARTICULOS DE CONGRESO
import ACM_congreso from "../../assets/articleCongreso/ACM.pdf";
import ESL_congreso from "../../assets/articleCongreso/ESL.pdf";
import LGM_congreso from "../../assets/articleCongreso/LGM.pdf";
import MSA_congreso from "../../assets/articleCongreso/MSA.pdf";
import VMRJ_congreso from "../../assets/articleCongreso/VMRJ.pdf";
import JFP_optica from "../../assets/articleCongreso/Optica_2024.pdf";
// import ACM_congreso from "../../assets/articleCongreso/ACM.pdf";

//POSTERS PRESENTADOS EN CONGRESO
import BAJS_poster from "../../assets/posters/BAJS.pdf";
import CGJS_poster from "../../assets/posters/CGJS.pdf";
import DBRP_poster from "../../assets/posters/DBRP.pdf";
import DDVM_poster from "../../assets/posters/DDVM.pdf";
import DMM_poster from "../../assets/posters/DMM.pdf";
import IMC_poster from "../../assets/posters/IMC.pdf";
import ISB_poster from "../../assets/posters/ISB.pdf";
import JARV_poster from "../../assets/posters/JARV.pdf";
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";

//TESIS
import tesisliz from "../../assets/Tesis/TesisLiz.png";
import tesisvictor from "../../assets/Tesis/TesisVictor.png";
import tesisdominic from "../../assets/Tesis/TesisDominic.png";
import tesisisabel from "../../assets/Tesis/TesisIsabel.png";

const Repositorio = () => {
  const cardsJCR = [
    <CardPdf key={1} pdf={LGM} image={LGM_portada} />,
    <CardPdf key={2} pdf={JFP} image={JFP_portada} />,
    <CardPdf key={3} pdf={MCB} image={MCB_portada_article} />,
    <CardPdf key={4} pdf={DBRP} image={DBRP_portada_article} />,
    <CardPdf key={5} pdf={VMRJ} image={VMRJ_portada_article} />,
  ];

  const cardsCongreso = [
    <CardPdf
      // title="Peasant Environmental Education Program for the Agroecological"
      // content={["Lizbeth Gómez Muños"]}
      pdf={LGM_congreso}
      image={LGM_portCongreso}
    />,
    <CardPdf
      // title="Proposal for a Logistics Regression Model for the Classification of Urban Solid Wastes with Image Processing"
      // content={["Víctor Manuel Romero Juárez"]}
      pdf={VMRJ_congreso}
      image={VMRJ_portCongreso}
    />,
    <CardPdf
      // title="Current Situation of Artificial Vision Algorithms Applied to the Diagnosis of Diabetic Foot Symptoms"
      // content={["Marbens Santos Arrieta"]}
      pdf={MSA_congreso}
      image={MSA_portCongreso}
    />,
    <CardPdf
      // title="Proposal for an Infrastructure Inventory for the Estimation of Seismic Risk in an Urban Area"
      // content={["Arturo Cisneros Mayoral"]}
      pdf={ACM_congreso}
      image={ACM_portCongreso}
    />,
    <CardPdf
      // title="Environmental monitoring system between two sensor nodes with 9km link"
      // content={["Eumir Esteban Salgado Lampart"]}
      pdf={ESL_congreso}
      image={ESL_portCongreso}
    />,
    <CardPdf
      // title="Environmental monitoring system between two sensor nodes with 9km link"
      // content={["Eumir Esteban Salgado Lampart"]}
      pdf={JFP_optica}
      image={JFP_portoptica}
    />,
  ];

  const posterCongresos = [
    <CardPdf
      // title="Prototipo de un Contenedor Clasificador de Residuos Sólidos Urbanos Con Redes Neuronales Convolucionales"
      // content={["Dominic Brian Roman Padilla"]}
      pdf={DBRP_poster}
      image={DBRP_portada}
    />,
    <CardPdf
      // title="Anuario estadístico de la Secretaría de Agricultura, Ganadería, Pesca y Desarrollo Rural del estado de Guerrero"
      // content={["Isaid Uriel Basilio Segovia"]}
      pdf={ISB_poster}
      image={IUBS_portada}
    />,
    <CardPdf
      // title="Propuesta de un Modelo Espacio-Temporal de la Precipitación Pluvial"
      // content={["Brandon Aldahir Jacobo Salinas"]}
      pdf={BAJS_poster}
      image={BAJS_portada}
    />,
    <CardPdf
      // title="Modelo óptimo multiobjetivo con enfoque de movilidad sostenible para el transporte público urbano"
      // content={["Carlos Gilberto Jimenez Saldaña"]}
      pdf={CGJS_poster}
      image={CGJS_portada}
    />,
    <CardPdf
      // title="Programa Sembrando Vida: mecanismos de focalización en el estado de Guerrero"
      // content={["Diana Dolores Vázquez Martínez"]}
      pdf={DDVM_poster}
      image={DDVM_portada}
    />,
    <CardPdf
      // title="Fundamentos para la planeación de empresas agropecuarias con enfoque sustentable"
      // content={["Daniela Morales López"]}
      pdf={DMM_poster}
      image={DAML_portada}
    />,
    <CardPdf
      // title="Aplicación de Redes Neuronales Convolucionales para la Clasificación y Evaluación de la Madurez en Frutos"
      // content={["José Antonio Rendon Vargas"]}
      pdf={JARV_poster}
      image={JARV_portada}
    />,
    <CardPdf
      // title="Análisis y Selección de Técnicas de Visión Artificial Para la Clasificación del Mango Ataulfo"
      // content={["Imanol Marianito Cuahuitic"]}
      pdf={IMC_poster}
      image={IMC_portada}
    />,
  ];

  const tesis = [
    <CardPdf
      // title="Environmental monitoring system between two sensor nodes with 9km link"
      // content={["Eumir Esteban Salgado Lampart"]}
      pdf={"https://rinacional.tecnm.mx/jspui/handle/TecNM/10909"}
      image={tesisliz}
    />,
    <CardPdf
      // title="Environmental monitoring system between two sensor nodes with 9km link"
      // content={["Eumir Esteban Salgado Lampart"]}
      pdf={"https://rinacional.tecnm.mx/jspui/handle/TecNM/10911"}
      image={tesisvictor}
    />,
    <CardPdf
      // title="Environmental monitoring system between two sensor nodes with 9km link"
      // content={["Eumir Esteban Salgado Lampart"]}
      pdf={"https://rinacional.tecnm.mx/jspui/handle/TecNM/10910"}
      image={tesisdominic}
    />,
    <CardPdf
      // title="Environmental monitoring system between two sensor nodes with 9km link"
      // content={["Eumir Esteban Salgado Lampart"]}
      pdf={"https://rinacional.tecnm.mx/jspui/handle/TecNM/10923"}
      image={tesisisabel}
    />,
  ];

  return (
    <>
      <NavBarGob />
      <TopBar />
      <div className="mt-14">
        <Contenido mostrarPanelLateral={false}>
          <AccordionArticle
            title="Articulos Indizados"
            list={cardsJCR}
            text="Producción científica de los estudiantes de la Maestría en Ciencias de la Ingeniería."
          />
          <AccordionArticle
            title="Articulos de Congreso"
            list={cardsCongreso}
            text="Producción científica de los estudiantes de la Maestría en Ciencias de la Ingeniería."
          />
          <AccordionArticle
            title="Poster de Congresos"
            list={posterCongresos}
            text="Producción científica de los estudiantes de la Maestría en Ciencias de la Ingeniería."
          />
          <AccordionArticle
            title="Tesis"
            list={tesis}
            text="Proyectos de investigación de los estudiantes de la Maestría en Ciencias de la Ingeniería."
          />
        </Contenido>
      </div>
      <Footer />
    </>
  );
};

export default Repositorio;
