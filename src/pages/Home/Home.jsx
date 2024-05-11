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
                Nacional de Posgrados (SNP) del CONACYT. Nuestro programa
                educativo tiene como objetivo principal abordar la creciente
                necesidad de formación de recursos humanos en el ámbito de las
                Ciencias de la Ingeniería. En numerosas regiones del país, así
                como en nuestra entidad, existe una demanda considerable de
                profesionales que puedan aplicar técnicas ingenieriles
                apropiadas para analizar, procesar y sintetizar datos. Estos
                expertos deben generar resultados que no solo posean validez
                científica, sino también un valor práctico significativo. Al
                contribuir de esta manera, buscamos facilitar la resolución de
                diversos desafíos presentes en los sectores productivos, de
                servicios, gubernamentales y sociales.
              </p>
              <p className="text-xl text-justify font-sans font-normal mt-9 text-black">
                La Maestría en Ciencias de la Ingeniería se enfoca en capacitar
                a sus estudiantes para que sean capaces de enfrentar los retos y
                demandas cambiantes del mundo moderno. A través de un riguroso
                plan de estudios, los participantes adquieren habilidades y
                conocimientos fundamentales para aplicar en la práctica
                ingenieril, así como para realizar investigaciones que impulsen
                la innovación y el desarrollo en sus respectivas áreas de
                especialización.
              </p>
              <p className="text-xl text-justify font-sans font-normal mt-9 text-black">
                Además, para fomentar el compromiso y el rendimiento académico,
                ofrecemos la posibilidad de acceder a becas CONACYT, sujetas a
                la aprobación del comité correspondiente. Aquellos estudiantes
                que resulten beneficiarios de estas becas se comprometen a
                dedicarse de manera exclusiva a su formación académica, a
                cumplir con todas las asignaturas y créditos del programa en el
                tiempo estipulado, y a graduarse al concluir el período de la
                beca, de acuerdo con las normativas establecidas por CONACYT. (
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
