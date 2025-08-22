import CardsGrid from "../../components/Cards/CardsGrid";
import Footer from "../../components/Footer/Footer";
import Parrafo from "../../components/Secciones/Parrafo";
import Titulo from "../../components/Secciones/Titulo";
import TopBar from "../../components/TopBar/TopBar";

//
import DrCaballero from "../../assets/nucleoacademico/DrCaballero.jpg";
import DrCampos from "../../assets/nucleoacademico/DrCampos.jpg";
import DrFuentes from "../../assets/nucleoacademico/DrFuentes.jpg";
import DrMarmolejo from "../../assets/nucleoacademico/DrMarmolejo.jpg";
import DrMorales from "../../assets/nucleoacademico/DrMorales.jpg";
import DrRoman from "../../assets/nucleoacademico/DrRoman.jpg";
import DraCastro from "../../assets/nucleoacademico/DraCastro.jpg";
import DraHernandez from "../../assets/nucleoacademico/DraHernandez.jpg";
import DraLeyva from "../../assets/nucleoacademico/DraLeyva.jpg";
import DrDaniel from "../../assets/nucleoacademico/DrDaniel.jpeg";
import MCValencia from "../../assets/nucleoacademico/MCValencia.jpg";
import MtroDiego from "../../assets/nucleoacademico/MtroDiego.jpg";
import DrDiego from "../../assets/nucleoacademico/DrDiego.jpeg";
import DraYanet from "../../assets/nucleoacademico/Dra Yanet.jpg";;
import DrCarlosMarmolejoDuarte from '../../assets/nucleoacademico/DrCarloshijo.jpg';
import Contenido from "../../components/Secciones/Contenido";
import NavBarGob from "../../components/TopBar/NavBarGob";
import Areli from "../../assets/nucleoacademico/Areli.jpg";
import Sergio from "../../assets/nucleoacademico/Sergio.jpg";

//

const datosPlantilla = [
  {
    image: DraCastro,
    name: "Dra. Mirna Castro Bello",
    tiempo: "completo",
    semblanza:
      "Doctora en Ciencias Ambientales con mención honorífica (Conahcyt/UAGuerrero), Maestra en Estadística Aplicada, Lic. En Matemáticas: Área: Estadística y Computación.\n\nMiembro del Sistema Nacional de Investigadores, Candidato (2022 – 2026). Perfil Deseable PRODEP (2021-2024). Miembro del Sistema Estatal de Investigadores en el Estado de Guerrero.\n\nInvestigador docente de la Secretaría de Educación Guerrero. Revisora de proyectos de Ciencias de Frontera del Conahcyt.Profesor de Tiempo Completo del Instituto Tecnológico de Chilpancingo; Subdirectora Académica en el Instituto Tecnológico de Cuautla (ene-2020 a jun-2021). Colaboradora del proyecto financiado en la convocatoria TecNM 2021, Codirectora y asesora de Tesis en el Doctorado en Ciencias Ambientales (SNP/Conahcyt), publicación de varios artículos, un libro publicado, un capítulo de libro publicado, ha impartido varias conferencias, participación en congresos nacionales e internacionales. Línea de investigación: Nuevas Tecnologías para el Desarrollo Sustentable.\n\nFundadora de la Maestría en Ciencias de la Ingeniería del Instituto Tecnológico de Chilpancingo.",
  },
  {
    image: DrMorales,
    name: "Dr. Cornelio Morales Morales",
    tiempo: "completo",
    semblanza:
      "Posdoctorado en el CIICAP-UAEM (Octubre 2020-Septiembre 2021). Doctor en Ciencias en Ingeniería Electrónica (2014) por el Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET). Maestro en Ciencias en Ingeniería Electrónica (2008) e Ingeniero en Electrónica (2005).\n\nMiembro del Sistema Nacional de Investigadores, Nivel 1 (2022 – 2026) y fue Nivel Candidato (2017-2019). Fue Perfil Deseable PRODEP (2016-2019) y Sistema Estatal de Investigadores Morelenses (2015, 2016, 2017 y 2018).\n\nHa sido Profesor de Tiempo Completo, Titular B (2012-2019), Director Académico de Ingeniería Electrónica e Informática (2016-2019) en UPEMOR, Profesor de Posgrado en CIICAP-UAEM (Enero-Junio 2021) y Profesor Interino de Carrera de Tiempo Completo en el Instituto Tecnológico de Cuautla en el Departamento de Ingeniería Eléctrica y Electrónica (2019-2022). También ha sido director y revisor de varias Tesis de Licenciatura y Posgrado. Coordinó la apertura de la Maestría en Ciencias de la Ingeniería ante TecNM para el Instituto Tecnológico de Chilpancingo (Junio – Diciembre 2022). Ha sido Responsable Técnico de Proyectos financiados PEI-Conacyt (2012, 2016, 2017); Proyecto SAGARPA (2018); y Proyecto de Desarrollo Tecnológico en la convocatoria TecNM.\n\nFundador de la Maestría en Ciencias de la Ingeniería del Instituto Tecnológico de Chilpancingo.",
  },
  {
    image: DrMarmolejo,
    name: "Dr. Carlos Virgilio Marmolejo Vega",
    tiempo: "completo",
    semblanza:
      "Maestro en Ciencias área Matemática Educativa por el Centro de Investigación y Estudios Avanzados del I.P.N.\n\nProfesor de educación media básica, media superior y normal de 1963 a 1970, Profesor de Cálculo y Análisis Instrumental en la Facultad de Ciencias Químicas de la Universidad Autónoma de Guerrero de 1970 a 1978, Secretario General de la Universidad Autónoma de Guerrero de 1975 a 1978, Miembro fundador de la Facultad de Matemáticas de la Universidad Autónoma de Guerrero 1978. Profesor de Cálculo Diferencial, Cálculo Integral, Cálculo vectorial, Ecuaciones Diferenciales y Álgebra lineal. Profesor con reconocimiento a perfil deseable, Miembro del Padrón estatal de Investigadores del Consejo de Ciencia y Tecnología del Estado de Guerrero, Miembro del Sistema de Investigadores Docentes de la Secretaría de Educación Guerrero. Áreas de Investigación: Ciencias Pedagógicas y Ciencias Ambientales. Autor de artículos científicos en esas áreas.\n\nFundador de la Maestría en Ciencias de la Ingeniería del Instituto Tecnológico de Chilpancingo. Miembro fundador del Instituto Tecnológico de Chilpancingo.",
  },
  {
    image: DrFuentes,
    name: "Dr. Jorge Fuentes Pacheco",
    tiempo: "parcial",
    semblanza:
      "Posdoctorado en el Centro de Investigación en Ciencias (CInC) de la Universidad Autónoma del Estado de Morelos en Cuernavaca, México. Doctor y Maestro en Ciencias de la Computación con especialidad en Inteligencia Artificial por el Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET).\n\nMiembro del Sistema Nacional de Investigadores, Nivel 1 (2024 – 2028).\n\nDurante el periodo de septiembre de 2016 a septiembre 2022 se desempeñó como Profesor-Investigador del CInC a través del programa ”Cátedras CONACYT”. Sus áreas de interés son: Visión por Computadora, Agricultura de Precisión y Aprendizaje profundo.",
  },
  {
    image: DrCarlosMarmolejoDuarte,
    name:"Dr. Carlos Marmolejo Duarte",
    tiempo: "invitado",
    semblanza: "Catedrático de Universidad de la ETS de Arquitectura de Barcelona e investigador del Centro de Política de Suelo y Valoraciones. Coordinador del Máster en Valoraciones Inmobiliarias Internacionales de la Universidad Politécnica de Cataluña. Miembro del Comité Académico de la Asociación Española de Valoración Inmobiliaria (AEVIU) y del Recognition Committe del European Group of Valuers' Associations (TEGoVA).\n\n Responsable de Edición de la Revista ACE: Arquitectura, Ciudad y Entorno. Especialziación en valoraciones inmobiliarias, de bienes sin mercado, el análisis urbano y territorial. Autor de numerosas publicaciones científicas y de difusión.\n\n Investigador principal de los proyectos nacionales: EnerValor sobre el impacto de la eficiencia energética en el mercado inmobiliario; LugarES sobre la identificación de centralidades usando los patrones espaciotemporales de la población; y Subcentros sobre el impacto del policentrismo en las diñámicas territoriales."
  },
  {
    image: DrCaballero,
    name: "Dr. Viterbo Caballero López",
    tiempo: "invitado",
    semblanza:
    "Doctorado en Ciencias de la Computación con la especialidad en Ingeniería de Software que imparte el Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET).\n\nMiembro del Sistema Nacional de Investigadores (nivel C).\n\nProfesor por asignatura durante siete años consecutivos en la maestría en Tecnologías de la Información que imparte la Universidad Politécnica del Estado de Morelos (UPEMOR). Experiencia profesional en empresas como son: la Comisión Federal de Electricidad a través del Instituto Nacional de Electricidad y Energías Limpias (INEEL), la Secretaría de Finanzas, CDMX, el Instituto de Biotecnología, Morelos, la Secretaría de Bienestar, CDMX, la empresa Control de Riesgos Dumor S.A. de C.V. (CCR), Morelos y actualmente en el CENIDET. Experiencia en realizar y dirigir investigación Científica y Tecnológica en la IBERO y en CENIDET. Experiencia en publicaciones de artículos científicos en revistas indizadas en el JCR. Experiencia en dirección, codirección y revisión de tesis a nivel posgrado. Asistencia a congresos internacionales y estancia académica a nivel internacional en la Universidad de Medellín, Colombia. Miembro de comisiones y asociaciones educativas a nivel Nacional e Internacional como son: la IEEE y la Red Internacional de Investigación e Innovación para el Desarrollo Sostenible (RIIIDS), que coordina el Instituto Tecnológico de Linares. Colaboración en mejoras a planes de estudios en la maestría en Tecnologías de la Información que imparte la UPEMOR.",
  },
  {
    image: DrDaniel,
    name: "Dr. Daniel Angeles Herrera",
    tiempo: "completo",
    semblanza:
    "Doctorado en Ciencias en Materiales otorgado por el Instituto Politécnico Nacional, IPN – ESIQIE. Ha realizado dos estancias posdoctorales: \n\n1.- Instituto Mexicano del Petróleo (IMP), desarrollando el proyecto de investigación denominado: Evaluación de parámetros críticos (cargas, tamaños de grieta y número de ciclos) para la iniciación y propagación de grietas en conexiones soldadas en “T” en plataformas Jacket (2014 – 2015). \n2.- Centro de Tecnologías para Aguas Profundas (CTAP), desarrollando el proyecto de investigación: Diseño de pilotes de succión para sistemas submarinos de producción sujetos a carga combinada en condiciones geotécnicas de aguas profundas financiado por el Consejo Nacional de Humanidades, Ciencias y Tecnologías y la Secretaria de Energía (2016 – 2017). \nEs miembro del Sistema Nacional de Investigadores e Investigadoras Nivel 1 (2022 – 2026), y Nivel Candidato (2017 -2021). \n\nProfesor de Tiempo Completo con Perfil Deseable del PRODEP (2021 – 2024), Responsable del Cuerpo Académico: Biotecnología, Ingeniería de Materiales y Simulación de Procesos (2021 – 2024). \nFue Subdirector de Posgrado e Investigación del ITS de Tantoyuca (Enero – Agosto 2024) y Jefe de Posgrado e investigación de ITS de Tantoyuca (2018 – 2023), ha participado en diversos proyectos de investigación financiados por CONAHCyT y TecNM, ha publicado artículos científicos de divulgación y difusión en revistas especializadas e indizadas, cuenta con la publicación de cuatro capítulos de libro, así mismo, tiene certificados de derechos por INDAUTOR y un modelo de utilidad registrado ante el IMPI. \n\nAmplia experiencia en la formación de recursos humanos mediante la dirección de tesis nivel maestría y doctorado, así como, la impartición de asignaturas a nivel licenciatura y maestría desde el 2018. \n\nEn el 2020, la Sociedad Americana para Pruebas y Materiales (por sus siglas en inglés, ASTM), otorgó el reconocimiento como “Best Paper Award”, debido a la relevancia del tema y a la claridad de los resultados presentados. \n\nEn el 2022, participó como ponente en el evento académico a nivel nacional: Pasillo de la Ciencia en el Marco de la Reunión Primera Nacional de Directores del TecNM.",
  },
  {
    image: DrDiego,
    name: "Dr. Diego Esteban Gutierrez Valencia",
    tiempo: "parcial",
    semblanza:
    "Licenciado en matemáticas y física con énfasis en didáctica de la matemática y enseñanza de la fisica por la Universidad del Valle - Colombia. \nMaestro en matemática aplicada por la Universidad Autónoma de Guerrero. Candidato a Doctor en Matemáticas por la Universidad Autónoma de Guerrero. \nMiembro del Padrón Estatal de Investigadores del estado de Guerrero en el período Enero-Diciembre 2025. Publicaciones en revistas indizadas y divulgaciones relacionadas con la aplicación del análisis complejo en problemas de física.",
  },
  {
    image: DraYanet,
    name: "Dra. Yanet Evangelista Alcocer",
    tiempo: "completo",
    semblanza: "Profesora del programa de Ingeniería en Sistemas Computacionales y de la Maestría en Ciencias en Ciencias de la Ingeniería en el Instituto Tecnológico de Chilpancingo, en Guerrero, México, con una maestría en Ciencias de la Computación y un doctorado en Sistemas Computacionales. \nHa trabajado como consultora, desarrolladora y asesora en proyectos vinculados a los sectores público y privado. Entre los proyectos más recientes en los que ha participado se encuentran un sistema de votación remota con urna electrónica, una aplicación móvil para aprender lengua de signos mexicana y un videojuego para enseñar educación ambiental a los niños. Sus áreas de interés son los sistemas distribuidos, los agentes inteligentes y el aprendizaje automático aplicado a la educación superior.",
  },
  {
    image: DrCampos,
    name: "Dr. Wilfrido Campos Francisco",
    tiempo: "completo",
    semblanza:
    "Doctor en Ciencias de la Computación por el Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET). Maestro en Computación por la Facultad de Ingeniería de la Universidad Autónoma de Guerrero. Ingeniero en Sistemas Computacionales, egresado del Instituto Tecnológico de Acapulco.\n\nFue Miembro del Sistema Nacional de Investigadores por el Consejo Nacional de Ciencia y Tecnología en el período 2017-2019. Obtuvo el reconocimiento de perfil deseable por la Secretaría de Educación Superior durante el periodo 2017-2020.\n\nRealizó una estancia de investigación en el Centro de Investigación Científica y de Educación Superior de Ensenada, Baja California (CICESE). Tiene publicaciones en revistas de impacto nacional indexadas por el CONACyT y de impacto internacional indexadas en el Journal Citation Report (JCR). Sus áreas de investigación son, entre otras. Computación aplicada al comportamiento humano. Reconocimiento de patrones de socialización con algoritmos de Machine Learning. Actualmente es docente del Tecnológico Nacional de México Campus Chilpancingo e imparte materias en el programa educativo de Ingeniería en Sistemas Computacionales y en la Maestría en Ciencias de la Ingeniería.",
  },
  {
    image: DraHernandez,
    name: "Dra. Mercedes Hernández De La Cruz",
    tiempo: "completo",
    semblanza:
      "Doctora en Educación con Tecnologías del Aprendizaje y del Conocimiento por la Universidad Michoacana de San Nicolás de Hidalgo, maestra en Computación en la Facultad de Ingeniería de la Universidad Autónoma de Guerrero y Lic. en Informática por el Instituto Tecnológico de Chilpancingo.\n\nSe ha desempeñado como profesora-investigadora en el Instituto Tecnológico de Chilpancingo en la carrera de Ingeniería Informática. Ha sido presidenta de la academia de Informática. Ha sido asesora de varios proyectos de residencia profesional, distinguiéndose por ser novedosos e innovadores. Cuenta con varias publicaciones en Congresos Nacionales e Internacionales en las cuales ha participado como autora principal, autora corresponsal y coautora. Es miembro activo del Colegio de Ingenieros en TICS del estado de Guerrero, A.C. desde 2019 a la fecha, participando activamente en conferencias vía Zoom. Sus áreas de investigación son: Aplicaciones Móviles, Tecnologías Emergentes, Animación de Avatares e Internet de las cosas.",
  },
  {
    image: DraLeyva,
    name: "Dra. Paula Adriana Leyva Alarcón",
    tiempo: "completo",
    semblanza:"Licenciada en Contaduría por el Instituto Tecnológico de Chilpancingo, maestra en Ciencias de la Educación, Área Educación Superior por la Universidad Autónoma de Guerrero, maestra en Administración por el Instituto de Estudios Universitarios y doctora en Ciencias Administrativas por el Instituto de Estudios Universitarios.\n\nDocente de Tiempo Completo en el Tecnológico Nacional de México campus Chilpancingo. Miembro del Padrón Estatal de Investigadores del Consejo de Ciencia, Tecnología e Innovación del Estado de Guerrero y del Colegio de Contadores Públicos del Estado de Guerrero A.C.\n\nHa escrito artículos científicos y participado como ponente y conferencista en diferentes espacios académicos. Es líder del Cuerpo Académico en formación ITCHIL-CA-1 “Promoción y Desarrollo de la Responsabilidad Social”."
  },
   {
    image: MCValencia,
    name: "M.C. Eleazar Felipe Valencia Díaz",
    tiempo: "completo",
    semblanza:"Maestro en la Universidad de Texas en Arlington, en los Estados Unidos de Norteamérica. Ingeniero Civil en Vías Terrestres por el Instituto Tecnológico Regional de Oaxaca Número 16 y diplomado en The University College  en Londres Inglaterra.\n\nActualmente cursa el octavo módulo de catorce que comprende el Doctorado en Ciencias de la Educación en el Colegio Mayor de San Carlos, Campus Pacífico."
  },
  {
    image: DrRoman,
    name: "Dr. Edgar Roman Rangel",
    tiempo: "invitado",
    semblanza:
      "Doctor en Ingeniería Eléctrica, École Polytechnique Féderale de Lausanne, Suiza. Maestro en Ciencias Computacionales, Tecnológico de Monterrey. Ingeniero en Computación, Universidad Morelos de Cuernavaca\n\nMiembro del Sistema Nacional de Investigadores (SNII) nivel 1.\n\nProfesor de tiempo completo, desde 2019, en el departamento académico de computación, del Instituto Tecnológico Autónomo de México (ITAM). Profesor investigador invitado, desde 2024, en el Tecnológico Nacional de México / Instituto Tecnológico de Chilpancingo. Realiza investigación en aprendizaje de máquina, aprendizaje de representaciones, y procesamiento de señales multimodales. Su investigación tiene como objetivo, por un lado, avanzar el estado del arte en los fundamentos del aprendizaje de máquina y en la representación del conocimiento; y por otro lado, desarrollar aplicaciones de interés social en arqueología, agricultura, y medicina. Cuenta con 14 publicaciones JCR, y 26 capítulos de libro y memorias de congreso revisadas por pares. Mantiene colaboraciones de investigación, tanto nacionales como internacionales, incluyendo grupos académicos y del sector privado. Actualmente dirige el laboratorio de investigación en aprendizaje y procesamiento de señales del ITAM. Realiza investigación en aprendizaje de máquina, aprendizaje de representaciones, y procesamiento de señales multimodales. Su investigación tiene como objetivo, por un lado, avanzar el estado del arte en los fundamentos del aprendizaje de máquina y en la representación del conocimiento; y por otro lado, desarrollar aplicaciones de interés social en arqueología, agricultura, y medicina.",
  },
  {
    image: Areli,
    name: "M.D.I.S. Areli Bárcena Nava",
    tiempo: "completo",
    semblanza: "",
  },
   {
    image: Sergio,
    name: "M.E. Sergio Ricardo Zagal Barrera",
    tiempo: "parcial",
    semblanza: "Sergio Ricardo Zagal Barrera, Maestro en Educación por la Universidad Fray Luca Paccioli - Cuernavaca, actualmente Subdirector Académico del Tecnológico Nacional de México Instituto Tecnológico de Chilpancingo, miembro de la Red Nacional de Ciencias Sociales, Economía Social y Solidaria, autorizada por el Tecnológico Nacional de México del año 2024 al año 2026. \nMiembro del Comité Arbitral de la Revista Avacient por el Instituto Tecnológico de Chetumal, en el área de Ingeniería Aplicada. Docente de la Maestría en Ciencias de la Ingeniería y de las diferentes licenciaturas del Instituto Tecnológico de Chilpancingo.",
  },
];
//

const NucleoAcademico = () => {
  const tiempoCompleto = datosPlantilla.filter(
    (profesor) => profesor.tiempo === "completo"
  );
  const tiempoInvitado = datosPlantilla.filter(
    (profesor) => profesor.tiempo === "invitado"
  );
  const tiempoAdministrativo = datosPlantilla.filter(
    (profesor) => profesor.tiempo === "administrativo"
  );
  const tiempoParcial = datosPlantilla.filter(
    (profesor) => profesor.tiempo === "parcial"
  );

  return (
    <>
      <NavBarGob />
      <TopBar />
      <Contenido>
        {/* <Titulo titulo={"Profesores de Tiempo Completo"}></Titulo> */}
        <div className="container mx-auto px-4 py-4">
          {/* <CardsGrid data={datosPlantilla} /> */}
          <Titulo titulo={"Profesores de Tiempo Completo"} />
          <div className="container mx-auto px-4 py-4">
            <CardsGrid data={tiempoCompleto} />
          </div>
          <Titulo titulo={"Profesores de Tiempo Parcial"} />
          <div className="container mx-auto px-4 py-4">
            <CardsGrid data={tiempoParcial} />
          </div>
          <Titulo titulo={"Profesores Invitados"} />
          <div className="container mx-auto px-4 py-4">
            <CardsGrid data={tiempoInvitado} />
          </div>
          {/* <Titulo titulo={"Administrativos"} />
          <div className="container mx-auto px-4 py-4">
            <CardsGrid data={tiempoAdministrativo} />
          </div> */}
        </div>
        <Parrafo
          texto="¡Estamos aquí para apoyarte en tu camino hacia la excelencia
                académica y profesional en el campo de la ingeniería!"
          conMargenSuperior={false}
        ></Parrafo>
        <Parrafo
          texto="¡No dudes en acercarte a nosotros para cualquier consulta o
              asistencia que necesites durante tu experiencia en la Maestría
              en Ciencias de la Ingeniería!"
          conMargenSuperior={false}
        ></Parrafo>
      </Contenido>
      <Footer />
    </>
  );
};

export default NucleoAcademico;
