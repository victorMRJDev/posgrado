import React from 'react'
import NavbarM from '../../components/Navbar/Navbar'
import separador from '../../assets/separador.svg'
import ButtonBlue from '../../components/Buttons/ButtonBlue'
import { Link } from 'react-router-dom'
import AccordionNab from '../../components/Nab/Acordion'
import MCB from '../../assets/Nab/MCB.jpeg'
import CVMV from '../../assets/Nab/CVMV.jpeg'
import CMM from '../../assets/Nab/CMM.jpeg'
import JALA from '../../assets/Nab/JALA.png'
import EFVD from '../../assets/Nab/EFVD.jpeg'
import MHC from '../../assets/Nab/MHC.jpeg'
import PALA from '../../assets/Nab/PALA.png'
import WCF from '../../assets/Nab/WCF.jpeg'
import JFP from '../../assets/Nab/JFP.jpeg'
import VCL from '../../assets/Nab/VCL.jpeg'
import RLGR from '../../assets/Nab/RLGR.jpeg'

const Estudiantes = () => {
    const tiempoCompleto =[
        {
            id:1,
            name: "Dra. Mirna Castro Bello",
            puesto: 'Jefa de la división de estudios de posgrado e investigación',
            image: MCB,
            semblanza:" Lic. En Matemáticas: Área: Estadística y Computación, Maestra en Estadística Aplicada, y Doctora en Ciencias Ambientales con mención honorífica (Conacyt/UAGuerrero). Miembro del Sistema Nacional de Investigadores, Candidato (2022 - 2026) Perfil Deseable PRODEP (2021-2024). Miembro del Sistema Estatal de Investigadores en el Estado de Guerrero, Investigador docente de la Secretaría de Educación Guerrero. Revisora de proyectos Ciencias de Frontera del Conacyt. Profesor de Tiempo Completo del Instituto Tecnológico de Chilpancingo; Subdirectora Académica en el Instituto Tecnológico de Cuautla (ene-2020 a jun-2021). Colaboradora del proyecto financiado en la convocatoria TecNM 2021, Codirectora y asesora de Tesis en el Doctorado en Ciencias Ambientales (SNP/Conacyt), publicación de varios artículos, un libro publicado, un capítulo de libro publicado, ha impartido varias conferencias, participación en congresos nacionales e internacionales. Línea de investigación: Nuevas Tecnologías para el Desarrollo Sustentable. Fundadora de la Maestría en Ciencias de la Ingeniería del Instituto Tecnológico de Chilpancingo"
        },
        {
            id:2,
            name:"Dr. Carlos Virgilio Marmolejo Vega",
            image:CVMV,
            semblanza: "Maestro en Ciencias área Matemática Educativa por el Centro de Investigación y Estudios Avanzados del I.P.N., profesor de educación media básica, media superior y normal de 1963 a 1970, Profesor de Cálculo y Análisis Instrumental en la Facultad de Ciencias Químicas de la Universidad Autónoma de Guerrero de 1970 a 1978, Secretario General de la Universidad Autónoma de Guerrero de 1975 a 1978, Miembro fundador de la Facultad de Matemáticas de la Universidad Autónoma de Guerrero 1978, Miembro fundador del Instituto Tecnológico de Chilpancingo. Profesor de Cálculo Diferencial, Cálculo Integral, Cálculo vectorial, Ecuaciones Diferenciales y Álgebra lineal. Profesor con reconocimiento a perfil deseable, Miembro del Padrón estatal de Investigadores del Consejo de Ciencia y Tecnología del Estado de Guerrero, Miembro del Sistema de Investigadores Docentes de la Secretaría de Educación Guerrero. Áreas de"
        },
        {
            id:3,
            name:"Dr. Cornelio Morales Morales",
            image:CMM,
            semblanza:"Ingeniero en Electrónica (2005), Maestro en Ciencias en Ingeniería Electrónica (2008) y Doctor en Ciencias en Ingeniería Electrónica (2014) por el Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET). Posdoctorado en el CIICAP-UAEM (Octubre 2020-Septiembre 2021). Miembro del Sistema Nacional de Investigadores, Nivel 1 (2022 – 2026) y fue Nivel Candidato (2017-2019). Fue Perfil Deseable PRODEP (2016-2019) y Sistema Estatal de Investigadores Morelenses (2015, 2016, 2017 y 2018). Ha sido Profesor de Tiempo Completo, Titular B (2012-2019), Director Académico de Ingeniería Electrónica e Informática (2016-2019) en UPEMOR, Profesor de Posgrado en CIICAP-UAEM (Enero-Junio 2021) y Profesor Interino de Carrera de Tiempo Completo en el Instituto Tecnológico de Cuautla en el Departamento de Ingeniería Eléctrica y Electrónica (2019-2022). También ha sido director y revisor de varias Tesis de Licenciatura y Posgrado. Coordinó la apertura de la Maestría en Ciencias de la Ingeniería ante TecNM para el Instituto Tecnológico de Chilpancingo (Junio – Diciembre 2022). Ha sido Responsable Técnico de Proyectos financiados PEI-Conacyt (2012, 2016, 2017); Proyecto SAGARPA (2018); y Proyecto de Desarrollo Tecnológico en la convocatoria TecNM"
        },
        {
            id:4,
            name: "Dr. jose Antonio Luna Alvarez",
            image: JALA,
            semblanza:"Originario de Cd. Victoria en el estado de Tamaulipas, México. Obtuvo el grado de Ingeniero en Tecnologías de la Información por la Universidad Politécnica de Victoria, donde realizó estancia de investigación en el proyecto ”Graficación de un modelo matemático para la estimación de glucosa en sangre para pacientes con diabetes”. Es Maestro en Ciencias de la Computación por el Tecnológico Nacional de México / Centro Nacional de Investigación y Desarrollo Tecnológico y Doctor en Ciencias de la Computación por la misma institución. Ha sido autor y coautor en diversas publicaciones en congresos internacionales, así como en revistas indexadas en el JCR. Adicionalmente ha ejercido como profesor en Universidad Tecmilenio campus Cuernavaca en el área de Tecnologías de la Información, en el Departamento de Tecnologías de la Información y Diseño de la Universidad Tecnológica de Emiliano Zapata. Actualmente ejerce como Profesor Investigador en el Instituto Tecnológico de Chilpancingo, en la División de Estudios Posgrado e Investigación"
        },
        {
            id:5,
            name: 'MC. Eleazar Felipe Valencia Díaz',
            image: EFVD,
            semblanza:"Estudió la educación secundaria en la Escuela Técnica Industrial Número 14 de la misma ciudad de Oaxaca, los estudios vocacionales los realizó en el Instituto Tecnológico Regional de Oaxaca Número 16 , en esa misma institución cursó los profesionales mismos que concluyó el año de 1980, obteniendo el título de Ingeniero Civil en Vías Terrestres, posteriormente en 1984 cursó estudió de maestría en la Universidad de Texas en Arlington, en los Estados Unidos de Norteamérica, posteriormente en 1989 realizó un diplomado en The University College  en Londres Inglaterra. Actualmente cursa el octavo módulo de catorce que comprende le Doctorado en Ciencias de la Educación en el Colegio Mayor de San Carlos, Campus Pacífico."
        },
        {
            id:6,
            name: 'Dra. Mercedes Hernández De La Cruz',
            image: MHC,
            semblanza: 'Cuenta con la siguiente preparación académica: \nLicenciatura en Informática por el Instituto Tecnológico de Chilpancingo Maestría en Computación en la Facultad de Ingeniería de la Universidad Autónoma de Guerrero Doctorado en Educación con Tecnologías del Aprendizaje y del Conocimiento por la Universidad Michoacana de San Nicolás de Hidalgo. Se ha desempeñado como profesora-investigadora en el Instituto Tecnológico de Chilpancingo en la carrera de Ingeniería Informática. Ha sido presidenta de la academia de Informática. Ha sido asesora de varios proyectos de residencia profesional, distinguiéndose por ser novedosos e innovadores. Cuenta con varias publicaciones en Congresos Nacionales e Internacionales en las cuales ha participado como autora principal, autora corresponsal y coautora. Es miembro activo del Colegio de Ingenieros en TICS del estado de Guerrero, A.C. desde 2019 a la fecha, participando activamente en conferencias vía Zoom. Sus áreas de investigación son: Aplicaciones Móviles, Tecnologías Emergentes, Animación de Avatares e Internet de las cosas.'
        },
        {
            id:7,
            name: 'Dra. Paula Adriana Leyva Alarcón', 
            image: PALA,
            semblanza:'Licenciada en Contaduría por el Instituto Tecnológico de Chilpancingo, maestra en Ciencias de la Educación, Área Educación Superior por la Universidad Autónoma de Guerrero, maestra en Administración por el Instituto de Estudios Universitarios y doctora en Ciencias Administrativas por el Instituto de Estudios Universitarios. Docente de Tiempo Completo en el Tecnológico Nacional de México campus Chilpancingo. Miembro del Padrón Estatal de Investigadores del Consejo de Ciencia, Tecnología e Innovación del Estado de Guerrero y del Colegio de Contadores Públicos del Estado de Guerrero A.C.\nHe escrito artículos científicos y participado como ponente y conferencista en diferentes espacios académicos. Soy líder del Cuerpo Académico en consolidación ITCHIL-CA-1 “Promoción y Desarrollo de la Responsabilidad Social”'
        },
        {
            id:8,
            name: "Dr. Wilfrido Campos Francisco",
            image: WCF,
            semblanza: "Ingeniero en Sistemas Computacionales, egresado del Instituto Tecnológico de Acapulco en el año 2001. En el año 2010 obtiene el grado de Maestro en Computación por la Facultad de Ingeniería de la Universidad Autónoma de Guerrero. En 2015 obtiene el grado de Doctor en Ciencias de la Computación por el Centro Nacional de Investigación y Desarrollo Tecnológico (cenidet) en la ciudad de Cuernavaca, Morelos. Durante sus estudios de Doctorado, realizó una estanc`ia de investigación en el Centro de Investigación Científica y de Educación Superior de Ensenada, Baja California (cicese). Fue Miembro de Sistema Nacional de Investigadores por el Consejo Nacional de Ciencia y Tecnología en el periodo 2017-2019. Obtuvo el reconocimiento de perfil deseable por la Secretaría de Educación Superior durante el periodo 2017-2020. Tiene publicaciones en revistas de impacto nacional indexadas por el CONACyT y de impacto internacional indexadas en el Jornal Citation Report (JCR). Sus áreas de investigación son, entre otras. Computación aplicada al comportamiento humano. Reconocimiento de patrones de socialización con algoritmos de Machine Learning. Actualmente es docente del Tecnológico Nacional de México Campus Chilpancingo e imparte materias en el programa educativo de Ingeniería en Sistemas Computacionales y en la Maestría en Ciencias de la Ingeniería."
        }

    ]

    const tiempoParcial =[
        {
            id:1,
            name:"Dr. Jorge Alberto Fuentes Pacheco",
            image:JFP,
            semblanza:'Recibió el grado de Maestro y Doctor en Ciencias de la Computación con especialidad en Inteligencia Artificial por el Centro Nacional de Investigación y Desarrollo Tecnológico (CENIDET) en México, en los años de 2009 y de 2014 respectivamente. Durante el 2015 y el 2016 realizó una estancia posdoctoral en el Centro de Investigación en Ciencias (CInC) de la Universidad Autónoma del Estado de Morelos en Cuernavaca, México. Durante el periodo de septiembre de 2016 a septiembre 2022 se desempeñó como Profesor-Investigador del CInC a través del programa "Cátedras CONACYT". Cuenta con el reconocimiento de Investigador Nacional Nivel 1 (enero 2024-diciembre 2028). Sus áreas de interés son: Visión por Computadora, Agricultura de Precisión y Aprendizaje profundo.'
        },{
            id:2,
            name: "Dr. Vitervo Lopez Caballero",
            image:VCL,
            semblanza: '' 
        }
    ]
    const administrativo =[
       { id:1,
        name: 'Lic. Rosa Lizeth Gonzalez Rodriguez',
        image:RLGR
       }
    ]
  return (
    <>
       <NavbarM />
    <div className='flex flex-row m-9 gap-10'>
        
            <div className='w-2/3 h-auto py-6 shadow-xl mb-4'>
                <AccordionNab 
                title='Profesores de Tiempo Completo'
                list={tiempoCompleto}
                />
                <AccordionNab 
                    title={'Profesores de Tiempo Parcial'}
                    list={tiempoParcial}
                />
                 <AccordionNab 
                    title={'Auxiliar Administrativo'}
                    list={administrativo}
                />
            </div>

            <div className='flex flex-col w-1/3 bg-white '>
                <div className='flex w-3/3 m-4 h-auto bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950'>
                    <h1 className='text-4xl text-black font-sans font-semibold mb-6 mt-6'>Repositorio</h1>
                    <ButtonBlue 
                    text='Repositorio institucional' 
                    className={"flex md:w-60 max-w-sm mb-6"} />
               
                </div>
                <div className='flex w-3/3 m-4 h-2/3 overflow-y-auto bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950'>
                  <div className='flex sticky top-0 z-20 mb-6 mt-6 bg-white w-full justify-center items-center '>
                    <h1 className=' text-4xl text-black font-sans font-semibold mb-6 mt-6'>Eventos</h1>
                  </div>                
                    <div className='flex cursor-pointer w-2/3 m-4 h-28 bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950'>
                       <h1 className='text-4xl h-28 text-black font-sans font-semibold mb-6 mt-6'>Evento 1</h1>               
                    </div>
                    <div className='flex cursor-pointer w-2/3 m-4 h-28 bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950'>
                       <h1 className='text-4xl h-28 text-black font-sans font-semibold mb-6 mt-6'>Evento 1</h1>               
                    </div>
                    <div className='flex cursor-pointer w-2/3 m-4 h-28 bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950'>
                       <h1 className='text-4xl h-28 text-black font-sans font-semibold mb-6 mt-6'>Evento 1</h1>               
                    </div>
                    <div className='flex cursor-pointer w-2/3 m-4 h-28 bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950'>
                       <h1 className='text-4xl h-28 text-black font-sans font-semibold mb-6 mt-6'>Evento 1</h1>               
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Estudiantes