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
import Armida from "../../assets/nucleoacademico/Armida.png";
import victor from "../../assets/nucleoacademico/victor.png";
import jaimenavarrete from "../../assets/nucleoacademico/jaimenavarrete.png";
import angelcustodio from "../../assets/nucleoacademico/angelcustodio.png";
import jazael from "../../assets/nucleoacademico/jazael.png";
import sinfoto from "../../assets/nucleoacademico/sinfoto.png";
import luzmaria from "../../assets/nucleoacademico/luzmaria.jpg";
import josefa from  "../../assets/nucleoacademico/josefa.png";
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
    tiempo: "invitado",
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
    tiempo: "parcial",
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
    tiempo: "parcial",
    semblanza:
      "Doctora en Educación con Tecnologías del Aprendizaje y del Conocimiento por la Universidad Virtual del Estado de Michoacán (UNIVIM), maestra en Computación en la Facultad de Ingeniería de la Universidad Autónoma de Guerrero y Lic. en Informática por el Instituto Tecnológico de Chilpancingo.\n\nSe ha desempeñado como profesora-investigadora en el Instituto Tecnológico de Chilpancingo en la carrera de Ingeniería Informática. Ha sido presidenta de la academia de Informática. Ha sido asesora de varios proyectos de residencia profesional, distinguiéndose por ser novedosos e innovadores. Cuenta con varias publicaciones en Congresos Nacionales e Internacionales en las cuales ha participado como autora principal, autora corresponsal y coautora. Es miembro activo del Colegio de Ingenieros en TICS del estado de Guerrero, A.C. desde 2019 a la fecha, participando activamente en conferencias vía Zoom. Sus áreas de investigación son: Aplicaciones Móviles, Tecnologías Emergentes, Animación de Avatares e Internet de las cosas.",
  },
  {
    image: DraLeyva,
    name: "Dra. Paula Adriana Leyva Alarcón",
    tiempo: "parcial",
    semblanza:"Licenciada en Contaduría por el Instituto Tecnológico de Chilpancingo, maestra en Ciencias de la Educación, Área Educación Superior por la Universidad Autónoma de Guerrero, maestra en Administración por el Instituto de Estudios Universitarios y doctora en Ciencias Administrativas por el Instituto de Estudios Universitarios.\n\nDocente de Tiempo Completo en el Tecnológico Nacional de México campus Chilpancingo. Miembro del Padrón Estatal de Investigadores del Consejo de Ciencia, Tecnología e Innovación del Estado de Guerrero y del Colegio de Contadores Públicos del Estado de Guerrero A.C.\n\nHa escrito artículos científicos y participado como ponente y conferencista en diferentes espacios académicos. Es líder del Cuerpo Académico en formación ITCHIL-CA-1 “Promoción y Desarrollo de la Responsabilidad Social”."
  },
   //{
    //image: MCValencia,
    //name: "M.C. Eleazar Felipe Valencia Díaz",
   // tiempo: "completo",
    //semblanza:"Maestro en la Universidad de Texas en Arlington, en los Estados Unidos de Norteamérica. Ingeniero Civil en Vías Terrestres por el Instituto Tecnológico Regional de Oaxaca Número 16 y diplomado en The University College  en Londres Inglaterra.\n\nActualmente cursa el octavo módulo de catorce que comprende el Doctorado en Ciencias de la Educación en el Colegio Mayor de San Carlos, Campus Pacífico."
  //},
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
    tiempo: "parcial",
    semblanza: "",
  },
   {
    image: Sergio,
    name: "M.E. Sergio Ricardo Zagal Barrera",
    tiempo: "parcial",
    semblanza: "Sergio Ricardo Zagal Barrera, Maestro en Educación por la Universidad Fray Luca Paccioli - Cuernavaca, actualmente Subdirector Académico del Tecnológico Nacional de México Instituto Tecnológico de Chilpancingo, miembro de la Red Nacional de Ciencias Sociales, Economía Social y Solidaria, autorizada por el Tecnológico Nacional de México del año 2024 al año 2026. \nMiembro del Comité Arbitral de la Revista Avacient por el Instituto Tecnológico de Chetumal, en el área de Ingeniería Aplicada. Docente de la Maestría en Ciencias de la Ingeniería y de las diferentes licenciaturas del Instituto Tecnológico de Chilpancingo.",
  },
  {
    image: Armida,
    name: "Dra. Armida González Lorence",
    tiempo: "completo",
    semblanza: "Ingeniera en Sistemas Computacionales por el Instituto Tecnológico y de Estudios Superiores de Monterrey, campus Querétaro (1991).  Maestra en Ciencias Computacionales por el Instituto Tecnológico de Toluca (2001). Doctora en Ciencias, en Ciencias Computacionales por el Instituto tecnológico de Toluca (2005).  Posdoctorado Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET) (2009).\n\nMiembro del Sistema Nacional de Investigadoras e Investigadores (Nivel I 2025-2029), actualmente es reconocida como Perfil Deseable, pertenece al Cuerpo Académico en consolidación “Innovación Aplicada a la Industria 4.0”. Cuenta con diversas publicaciones nacionales e internacionales, ha sido Líder de proyectos de desarrollo tecnológico financiados por TecNM, revisora de artículos de revistas indizadas, evaluadora de proyectos de investigación CIATEQ, evaluadora programas y planes de estudio COEPES. Sus líneas de investigación son: Innovación aplicada a la Industria 4.0, Internet de las Cosas (IoT), Inteligencia Artificial y Visión computacional. El desarrollo de sus investigaciones incide en el bienestar social, la sustentabilidad y el desarrollo productivo de México.  ",
  },
  {
    image: josefa,
    name: "Dra. Josefa Morales Morales",
    tiempo: "completo",
    semblanza: "Doctora en Ciencias Aplicadas por el Instituto Potosino de Investigación Científica y Tecnológica, A.C. en el año 2015. Miembro del Sistema NAcional de Investigadoras e Investigadores (SNII I 2021-2025). Sus líneas de investigación se enfocan en vehículos eléctricos, modelado, sistemas híbridos y energía renovable.",
  },
   {
    image: jazael,
    name: "Dr. Jesús Jazael García Gallegos",
    tiempo: "completo",
    semblanza: "Ingeniero Electrónico por la Facultad de Ciencias de la Universidad Autónoma de San Luis Potosí, realizó una maestría en Ciencias Aplicadas en el Instituto de Investigación y Comunicación Óptica de la Universidad Autónoma de San Luis Potosí y es Doctor en Ingeniería y Ciencias de Materiales. Miembro del Sistema NAcionbal de Investigadoras e Investigadores (SNII I 2022-2025) ",
  },
  {
    image: jaimenavarrete,
    name: "Dr. Jaime Navarrete Damián",
    tiempo: "completo",
    semblanza: "Ingeniero en Electrónica por el Instituto Tecnológico de Celaya (1993).  Maestro en Ciencias, en Ingeniería Administrativa por el Instituto Tecnológico de Celaya (2006). Maestro en Ciencia y Tecnología, en Ingeniería Industrial y de Manufactura por Centro de Investigaciones Avanzadas en Tecnologías Competitivas, AC (2012). Doctor en Ciencia y Tecnología, en Ingeniería Industrial y de Manufactura por Centro de Investigaciones Avanzadas en Tecnologías Competitivas, AC (2018). Tiene la distinción del Sistema Nacional de Investigadores Nivel 1 (2023-2027). \n\nCuenta con publicaciones indexadas SCOPUS, capítulos de libro, diversas publicaciones en congresos internacionales, solicitudes de patente en trámite, líder de 15 proyectos de investigación y desarrollo tecnológico vinculados con la industria financiados por fondos de Conacyt y otros organismos estatales, director de tesis de alumnos de licenciatura y posgrado. Sus líneas de investigación son: Ciencia y Tecnología de Polímeros, Mejora y Optimización de Procesos de Manufactura mediante Ciencia de Datos y Diseño de Experimentos, Diseño y Manufactura de Moldes y equipos para Transformación de Plásticos. El desarrollo de sus investigaciones incide en el bienestar social, la sustentabilidad y el desarrollo productivo de México.   ",
  },
  {
    image: victor,
    name: "Dr. Víctor Alberto Gómez Pérez",
    tiempo: "completo",
    semblanza: "Licenciado en Computación por la Universidad Juárez Autónoma de Tabasco (UJAT, 2007). Maestro en Ciencias en Computación por el Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV-IPN, 2009). Doctor en Sistemas Computacionales por la Universidad del Sur (UNISUR, 2016).  Es miembro del Sistema Nacional de Investigadores (2023-2028). Sus líneas de investigación incluyen sistemas distribuidos, computación ubicua, reconocimiento de emociones y el desarrollo de tecnologías para la Industria 4.0.",
  },
  {
    image: angelcustodio,
    name: "Dr. Ángel Custodio Navarrete Fernández",
    tiempo: "completo",
    semblanza: "Ingeniero Industrial, por el Instituto Tecnológico de San Juan del Río (1994).  Maestro en Administración en el área de Mercadotecnia, por la Universidad Autónoma de Querétaro (2005). Maestro en Calidad, por el Centro de Estudios Superiores del Bajío (2021). Doctor en Administración, por la Universidad de    Celaya (2018). Es miembro del Sistema Nacional de Investigadores Nivel I (2023-2027). Sus líneas de investigación son: Calidad y productividad, micro y pequeñas empresas. El desarrollo de sus investigaciones incide en el bienestar social, la sustentabilidad y el desarrollo productivo de México.",
  },
  {
    image: luzmaria,
    name: "Dra. Luz María García García",
    tiempo: "completo",
    semblanza: "Luz María García García es Licenciada en Ciencias Políticas y Administración Pública por la Universidad Autónoma de Querétaro, Maestra en Desarrollo Regional por El Colegio de la Frontera Norte y Doctora en Gobierno Electrónico por la Universidad de la Sierra Sur. Ha realizado estancias en la Universidad de Costa Rica y en la Universidad de California en San Diego. Cuenta con más de 14 años de experiencia como profesora de educación superior, impartiendo asignaturas a nivel licenciatura y posgrado. Su labor docente ha estado acompañada de actividades de investigación y formación de capital humano, especialmente en la dirección de tesis de licenciatura y posgrado. Ha participado como dictaminadora en congresos y revistas internacionales, así como en diversos proyectos de investigación, de los cuales se han derivado publicaciones académicas. Ha tenido la distinción perfil deseable Prodep (2015-2024). Actualmente cuenta con la distinción de Candidata al Sistema Nacional de Investigadoras e Investigadores (SNII) para el periodo 2020-2026.",
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
