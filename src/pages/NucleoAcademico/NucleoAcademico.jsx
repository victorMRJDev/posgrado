import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import PanelLateral from "../../components/PanelLateral/PanelLateral";
import separador from "../../assets/separador.svg";
import CardsGrid from "../../components/Cards/CardsGrid";
//
import DraCastro from "../../assets/nucleoacademico/DraCastro.jpeg";
import DraHernandez from "../../assets/nucleoacademico/DraHernandez.jpeg";
import DraLeyva from "../../assets/nucleoacademico/DraLeyva.png";
import DrCaballero from "../../assets/nucleoacademico/DrCaballero.jpeg";
import DrCampos from "../../assets/nucleoacademico/DrCampos.jpeg";
import DrFuentes from "../../assets/nucleoacademico/DrFuentes.jpeg";
import DrGonzalez from "../../assets/nucleoacademico/DrGonzalez.jpeg";
import DrLuna from "../../assets/nucleoacademico/DrLuna.png";
import DrMarmolejo from "../../assets/nucleoacademico/DrMarmolejo.jpeg";
import DrMorales from "../../assets/nucleoacademico/DrMorales.jpeg";
import LicGonzalez from "../../assets/nucleoacademico/LicGonzalez.jpeg";
import MCValencia from "../../assets/nucleoacademico/MCValencia.jpeg";
//

const data = [
  {
    image: DraCastro,
    name: "Dra. Mirna Castro Bello",
    semblanza:
      "Lic. En Matemáticas: Área: Estadística y Computación, Maestra en Estadística Aplicada, y Doctora en Ciencias Ambientales con mención honorífica (Conacyt/UAGuerrero).\nMiembro del Sistema Nacional de Investigadores, Candidato (2022 – 2026).\nPerfil Deseable PRODEP (2021-2024). Miembro del Sistema Estatal de Investigadores en el Estado de Guerrero, Investigador docente de la Secretaría de Educación Guerrero. Revisora de proyectos Ciencias de Frontera del Conacyt.\nProfesor de Tiempo Completo del Instituto Tecnológico de Chilpancingo; Subdirectora Académica en el Instituto Tecnológico de Cuautla (ene-2020 a jun-2021). Colaboradora del proyecto financiado en la convocatoria TecNM 2021, Codirectora y asesora de Tesis en el Doctorado en Ciencias Ambientales (SNP/Conacyt), publicación de varios artículos, un libro publicado, un capítulo de libro publicado, ha impartido varias conferencias, participación en congresos nacionales e internacionales. Línea de investigación: Nuevas Tecnologías para el Desarrollo Sustentable.\nFundadora de la Maestría en Ciencias de la Ingeniería del Instituto Tecnológico de Chilpancingo.",
  },
  {
    image: DrMorales,
    name: "Dr. Cornelio Morales Morales",
    semblanza:
      "Ingeniero en Electrónica (2005), Maestro en Ciencias en Ingeniería Electrónica (2008) y Doctor en Ciencias en Ingeniería Electrónica (2014) por el Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET). Posdoctorado en el CIICAP-UAEM (Octubre 2020-Septiembre 2021). Miembro del Sistema Nacional de Investigadores, Nivel 1 (2022 – 2026) y fue Nivel Candidato (2017-2019). Fue Perfil Deseable PRODEP (2016-2019) y Sistema Estatal de Investigadores Morelenses (2015, 2016, 2017 y 2018). Ha sido Profesor de Tiempo Completo, Titular B (2012-2019), Director Académico de Ingeniería Electrónica e Informática (2016-2019) en UPEMOR, Profesor de Posgrado en CIICAP-UAEM (Enero-Junio 2021) y Profesor Interino de Carrera de Tiempo Completo en el Instituto Tecnológico de Cuautla en el Departamento de Ingeniería Eléctrica y Electrónica (2019-2022). También ha sido director y revisor de varias Tesis de Licenciatura y Posgrado. Coordinó la apertura de la Maestría en Ciencias de la Ingeniería ante TecNM para el Instituto Tecnológico de Chilpancingo (Junio – Diciembre 2022). Ha sido Responsable Técnico de Proyectos financiados PEI-Conacyt (2012, 2016, 2017); Proyecto SAGARPA (2018); y Proyecto de Desarrollo Tecnológico en la convocatoria TecNM.",
  },
  {
    image: DrMarmolejo,
    name: "Dr. Carlos Virgilio Marmolejo Vega",
    semblanza:
      "Maestro en Ciencias área Matemática Educativa por el Centro de Investigación y Estudios Avanzados del I.P.N., profesor de educación media básica, media superior y normal de 1963 a 1970, Profesor de Cálculo y Análisis Instrumental en la Facultad de Ciencias Químicas de la Universidad Autónoma de Guerrero de 1970 a 1978, Secretario General de la Universidad Autónoma de Guerrero de 1975 a 1978, Miembro fundador de la Facultad de Matemáticas de la Universidad Autónoma de Guerrero 1978, Miembro fundador del Instituto Tecnológico de Chilpancingo.\nProfesor de Cálculo Diferencial, Cálculo Integral, Cálculo vectorial, Ecuaciones Diferenciales y Álgebra lineal.\nProfesor con reconocimiento a perfil deseable, Miembro del Padrón estatal de Investigadores del Consejo de Ciencia y Tecnología del Estado de Guerrero, Miembro del Sistema de Investigadores Docentes de la Secretaría de Educación Guerrero.\nÁreas de Investigación: Ciencias Pedagógicas y Ciencias Ambientales. Autor de artículos científicos en esas áreas. \nFundador de la Maestría en Ciencias de la Ingeniería del Instituto Tecnológico de Chilpancingo.",
  },
  {
    image: DrFuentes,
    name: "Dr. Jorge Fuentes Pacheco",
    semblanza:
      'Recibió el grado de Maestro y Doctor en Ciencias de la Computación con especialidad en Inteligencia Artificial por el Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET) en México, en los años de 2009 y de 2014 respectivamente. Durante el 2015 y el 2016 realizó una estancia posdoctoral en el Centro de Investigación en Ciencias (CInC) de la Universidad Autónoma del Estado de Morelos en Cuernavaca, México. Durante el periodo de septiembre de 2016 a septiembre 2022 se desempeñó como Profesor-Investigador del CInC a través del programa "Cátedras CONACYT". Cuenta con el reconocimiento de Investigador Nacional Nivel 1 (enero 2024-diciembre 2028). Sus áreas de interés son: Visión por Computadora, Agricultura de Precisión y Aprendizaje profundo.',
  },
  {
    image: DrLuna,
    name: "Dr. Jesús Antonio Luna Alvarez",
    semblanza:
      "Originario de Cd. Victoria en el estado de Tamaulipas, México. Obtuvo el grado de Ingeniero en Tecnologías de la Información por la Universidad Politécnica de Victoria, donde realizó estancia de investigación en el proyecto ”Graficación de un modelo matemático para la estimación de glucosa en sangre para pacientes con diabetes”. Es Maestro en Ciencias de la Computación por el Tecnológico Nacional de México / Centro Nacional de Investigación y Desarrollo Tecnológico y Doctor en Ciencias de la Computación por la misma institución. Ha sido autor y coautor en diversas publicaciones en congresos internacionales, así como en revistas indexadas en el JCR. Adicionalmente ha ejercido como profesor en Universidad Tecmilenio campus Cuernavaca en el área de Tecnologías de la Información, en el Departamento de Tecnologías de la Información y Diseño de la Universidad Tecnológica de Emiliano Zapata. Actualmente ejerce como Profesor Investigador en el Instituto Tecnológico de Chilpancingo, en la División de Estudios Posgrado e Investigación",
  },
  {
    image: MCValencia,
    name: "M.C. Eleazar Felipe Valencia Díaz",
    semblanza:
      "Estudió la educación secundaria en la Escuela Técnica Industrial Número 14 de la misma ciudad de Oaxaca, los estudios vocacionales los realizó en el Instituto Tecnológico Regional de Oaxaca Número 16 , en esa misma institución cursó los profesionales mismos que concluyó el año de 1980, obteniendo el título de Ingeniero Civil en Vías Terrestres, posteriormente en 1984 cursó estudió de maestría en la Universidad de Texas en Arlington, en los Estados Unidos de Norteamérica, posteriormente en 1989 realizó un diplomado en The University College  en Londres Inglaterra.\nActualmente cursa el octavo módulo de catorce que comprende le Doctorado en Ciencias de la Educación en el Colegio Mayor de San Carlos, Campus Pacífico.",
  },
  {
    image: DraHernandez,
    name: "Dra. Mercedes Hernández De La Cruz",
    semblanza:
      "Licenciatura en Informática por el Instituto Tecnológico de Chilpancingo.\nMaestría en Computación en la Facultad de Ingeniería de la Universidad Autónoma de Guerrero.\nDoctorado en Educación con Tecnologías del Aprendizaje y del Conocimiento por la Universidad Michoacana de San Nicolás de Hidalgo.\nSe ha desempeñado como profesora-investigadora en el Instituto Tecnológico de Chilpancingo en la carrera de Ingeniería Informática. Ha sido presidenta de la academia de Informática. Ha sido asesora de varios proyectos de residencia profesional, distinguiéndose por ser novedosos e innovadores. Cuenta con varias publicaciones en Congresos Nacionales e Internacionales en las cuales ha participado como autora principal, autora corresponsal y coautora. Es miembro activo del Colegio de Ingenieros en TICS del estado de Guerrero, A.C. desde 2019 a la fecha, participando activamente en conferencias vía Zoom. Sus áreas de investigación son: Aplicaciones Móviles, Tecnologías Emergentes, Animación de Avatares e Internet de las cosas.",
  },
  { image: DrCaballero, name: "Dr. Viterbo Caballero López" },
  { image: LicGonzalez, name: "Lic. Rosa Lizeth Gonzalez Rodriguez" },
  {
    image: DrCampos,
    name: "Dr. Wilfrido Campos Francisco",
    semblanza:
      "Ingeniero en Sistemas Computacionales, egresado del Instituto Tecnológico de Acapulco en el año 2001.\nEn el año 2010 obtiene el grado de Maestro en Computación por la Facultad de Ingeniería de la Universidad Autónoma de Guerrero.\nEn 2015 obtiene el grado de Doctor en Ciencias de la Computación por el Centro Nacional de Investigación y Desarrollo Tecnológico (cenidet) en la ciudad de Cuernavaca, Morelos.\nDurante sus estudios de Doctorado, realizó una estancia de investigación en el Centro de Investigación Científica y de Educación Superior de Ensenada, Baja California (cicese).\nFue Miembro de Sistema Nacional de Investigadores por el Consejo Nacional de Ciencia y Tecnología en el periodo 2017-2019.\nObtuvo el reconocimiento de perfil deseable por la Secretaría de Educación Superior durante el periodo 2017-2020.\nTiene publicaciones en revistas de impacto nacional indexadas por el CONACyT y de impacto internacional indexadas en el Jornal Citation Report (JCR).\nSus áreas de investigación son, entre otras:\nComputación aplicada al comportamiento humano.\nReconocimiento de patrones de socialización con algoritmos de Machine Learning.\nActualmente es docente del Tecnológico Nacional de México Campus Chilpancingo e imparte materias en el programa educativo de Ingeniería en Sistemas Computacionales y en la Maestría en Ciencias de la Ingeniería.",
  },
  { image: DrGonzalez, name: "Dr. Mario González Durán" },
  {
    image: DraLeyva,
    name: "Dra. Paula Adriana Leyva Alarcón",
    semblanza:
      "Licenciada en Contaduría por el Instituto Tecnológico de Chilpancingo, maestra en Ciencias de la Educación, Área Educación Superior por la Universidad Autónoma de Guerrero, maestra en Administración por el Instituto de Estudios Universitarios y doctora en Ciencias Administrativas por el Instituto de Estudios Universitarios.\nDocente de Tiempo Completo en el Tecnológico Nacional de México campus Chilpancingo. Miembro del Padrón Estatal de Investigadores del Consejo de Ciencia, Tecnología e Innovación del Estado de Guerrero y del Colegio de Contadores Públicos del Estado de Guerrero A.C.\nHe escrito artículos científicos y participado como ponente y conferencista en diferentes espacios académicos. Soy líder del Cuerpo Académico en consolidación ITCHIL-CA-1 “Promoción y Desarrollo de la Responsabilidad Social”.",
  },
];
//

const NucleoAcademico = () => {
  return (
    <>
      <TopBar />
      <div className="flex flex-row m-9 gap-10">
        <div className="w-2/3 h-auto py-6 shadow-xl mb-4">
          <div>
            <div className="flex flex-col py-6 px-10 justify-center items-center">
              <h1 className="text-4xl text-black font-sans font-semibold">
                Profesores de Tiempo Completo
              </h1>
            </div>
            <div className="w-3/3">
              <img className="w-full" src={separador} />
            </div>
            <div className="container mx-auto px-4 py-8">
              <CardsGrid data={data} />
            </div>
            <div className="flex flex-col py-2 px-10 justify-center">
              <p className="text-2xl text-justify font-serif font-light text-black">
                ¡Estamos aquí para apoyarte en tu camino hacia la excelencia
                académica y profesional en el campo de la ingeniería!
              </p>
              <p className="text-2xl text-justify font-serif font-light mt-4 text-black">
                ¡No dudes en acercarte a nosotros para cualquier consulta o
                asistencia que necesites durante tu experiencia en la Maestría
                en Ciencias de la Ingeniería!
              </p>
            </div>
          </div>
        </div>
        <PanelLateral />
      </div>
      <Footer />
    </>
  );
};

export default NucleoAcademico;
