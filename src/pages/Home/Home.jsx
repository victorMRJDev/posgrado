import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import instagramPhoto from "../../assets/instagramPhoto.jpg";
import CardSocial from "../../components/Cards/CardSocial";
import Footer from "../../components/Footer/Footer";
import EnlaceExterno from "../../components/Multimedia/EnlaceExterno";
import StreamableVideo from "../../components/Multimedia/StreamableVideo";
import Contenido from "../../components/Secciones/Contenido";
import Parrafo from "../../components/Secciones/Parrafo";
import SeccionParrafo from "../../components/Secciones/SeccionParrafo";
import TopBar from "../../components/TopBar/TopBar";
//import Carrusel from "../../components/Carrusel/Carrusel";

export const Home = () => {
  return (
    <>
      <TopBar />
      <StreamableVideo src="https://streamable.com/e/tro9w0?autoplay=1&muted=0" />
      <Contenido>
        <SeccionParrafo
          titulo="Maestría en Ciencias de la Ingeniería"
          texto="La Maestría en Ciencias de la Ingeniería es un programa de nueva
            creación, con orientación profesional incorporado al Sistema
            Nacional de Posgrados (SNP) del CONAHCYT. Nuestro programa
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
            servicios, gubernamentales y sociales."
        ></SeccionParrafo>
        <Parrafo
          texto=" La Maestría en Ciencias de la Ingeniería se enfoca en capacitar
          a sus estudiantes para que sean capaces de enfrentar los retos y
          demandas cambiantes del mundo moderno. A través de un riguroso
          plan de estudios, los participantes adquieren habilidades y
          conocimientos fundamentales para aplicar en la práctica
          ingenieril, así como para realizar investigaciones que impulsen
          la innovación y el desarrollo en sus respectivas áreas de
          especialización."
          conMargenSuperior={false}
        ></Parrafo>
        <Parrafo
          texto="Además, para fomentar el compromiso y el rendimiento académico,
            ofrecemos la posibilidad de acceder a becas CONAHCYT, sujetas a la
            aprobación del comité correspondiente. Aquellos estudiantes que
            resulten beneficiarios de estas becas se comprometen a dedicarse
            de manera exclusiva a su formación académica, a cumplir con todas
            las asignaturas y créditos del programa en el tiempo estipulado, y
            a graduarse al concluir el período de la beca, de acuerdo con las
            normativas establecidas por CONAHCYT"
          conMargenSuperior={false}
          componente={
            <EnlaceExterno
              texto="www.conahcyt.mx"
              url="https://conahcyt.mx/"
            ></EnlaceExterno>
          }
        ></Parrafo>
        <Parrafo
          texto="Coordinadora: Dra. Mirna Castro Bello"
          conMargenSuperior={false}
        ></Parrafo>
      </Contenido>
      <div className="flex flex-wrap justify-evenly items-center gap-5 mx-7 lg:gap-9 rounded-2xl">
        <CardSocial
          key={1}
          image={instagramPhoto}
          texto={"Instagram"}
          icon={<FaInstagram color="black" />}
        />
        <CardSocial
          key={2}
          image={instagramPhoto}
          texto={"Facebook"}
          icon={<FaFacebook color="blue" />}
        />
        <CardSocial
          key={3}
          image={instagramPhoto}
          texto={"Youtube"}
          icon={<IoLogoYoutube color="red" />}
        />
      </div>
      <Footer />
    </>
  );
};
