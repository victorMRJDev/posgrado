import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import separador from "../../assets/separador.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import instagramPhoto from "../../assets/instagramPhoto.jpg";
import CardSocial from "../../components/Cards/CardSocial";
//import Carrusel from "../../components/Carrusel/Carrusel";

export const Home = () => {
  return (
    <>
      <TopBar></TopBar>
      {/*<Carrusel />*/}
      {/* Reproductor de video */}
      <div className="flex justify-center mt-7">
        <div style={{ position: "relative", width: "50%", paddingTop: "25%" }}>
          <iframe
            allow="fullscreen;autoplay"
            height="100%"
            src="https://streamable.com/e/tro9w0?autoplay=1&muted=0"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              position: "absolute",
              left: 0,
              top: 0,
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </div>
      {/*Contenido*/}
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Maestría en Ciencias de la Ingeniería
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <p className="text-xl text-justify font-sans font-normal mt-9 text-black">
                La Maestría en Ciencias de la Ingeniería es un programa de nueva
                creación, con orientación profesional incorporado al Sistema
                Nacional de Posgrados (SNP) del CONACYT.
              </p>
              <p className="text-xl text-justify font-sans font-normal mt-9 text-black">
                Nuestro programa educativo pretende cubrir la necesidad de la
                formación de recursos humanos en el área de Estadística. En la
                entidad y en muchas zonas del país hay una fuerte necesidad de
                profesionales que sean capaces de aplicar técnicas estadísticas
                apropiadas que procesen, analicen y resuman información, que
                aporten resultados con validez científica y valor práctico
                apropiados. Contribuyendo con ello a la búsqueda de soluciones a
                los problemas en los distintos ámbitos de los sectores
                productivos, de servicios, gobierno y de la sociedad. Los
                estudiantes podrían ser beneficiados por beca CONACYT a
                propuesta del comité de evaluación y aprobación del CONACYT, los
                estudiantes que se les otorgue beca se dedicarán de tiempo
                completo, además los becarios se comprometen formalmente a
                dedicarse exclusivamente a la Maestría, a aprobar todas las
                materias y cubrir los créditos del plan de estudios en el tiempo
                establecido para ello, y a graduarse al término de la vigencia
                de la beca de acuerdo al reglamento de becas del CONACYT (
                <a
                  href="https://conahcyt.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 text-base"
                >
                  www.conahcyt.mx
                </a>
                )
              </p>
              <p className="text-xl text-justify font-sans font-normal mt-9 text-black">
                Coordinadora: Dra. Mirna Castro Bello
              </p>
            </div>
          </div>
        </div>
        <PanelLateral />
      </div>
      <div className="flex flex-row max-sm:flex-col max-sm:gap-9 sm:flex-col sm:gap-9 md:flex-col lg:flex-row justify-center items-center rounded-2xl mt-14">
        <CardSocial
          key={1}
          image={instagramPhoto}
          texto={"Instagram"}
          icon={<FaInstagram size={30} color="black" />}
        />
        <CardSocial
          key={2}
          image={instagramPhoto}
          texto={"Facebook"}
          icon={<FaFacebook size={30} color="blue" />}
        />
        <CardSocial
          key={3}
          image={instagramPhoto}
          texto={"Youtube"}
          icon={<IoLogoYoutube size={30} color="red" />}
        />
      </div>
      <Footer />
    </>
  );
};
