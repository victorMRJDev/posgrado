import React from 'react'
// import NavbarM from '../../components/Navbar/Navbar'
import NavbarM from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carrusel/Carrusel'
import CardSocial from '../../components/Cards/CardSocial'
import instagramPhoto from '../../assets/Carrusel/instagramPhoto.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import ButtonBlue from '../../components/Buttons/ButtonBlue'
import separador from '../../assets/separador.svg'


const Objetivos = () => {
  return (
    <>
        <NavbarM />
        <div className='flex flex-row m-9 gap-10'>
            <div className='w-2/3 h-auto py-6 shadow-xl mb-4'>
                <div className='flex flex-col py-6 px-10 justify-center items-center'>
                <h1 className='text-6xl text-black font-sans font-semibold'>Objetivo General</h1>
                </div>
                <div className='w-3/3'>
                    <img
                    className='w-full'
                    src={separador} 
                    />
                </div>
                <div className='flex flex-col py-6 px-10 justify-center'>
                    <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                        Formar profesionistas de alta calidad académica con profundos conocimientos en el estado del arte de su disciplina, 
                        con destrezas intelectuales y metodológicas que les permitan resolver problemas de su entorno profesional, aprender 
                        en forma autónoma y generar nuevos conocimientos en su campo de acción, con la capacidad de ser innovadores que 
                        contribuyan al crecimiento tecnológico, económico, ambiental y sostenible de la región, impactando en el sector 
                        social, industrial y científico, además de ser líderes que respondan a las necesidades de las empresas locales, 
                        regionales, nacionales e internacionales a través de una visión objetiva, crítica y de trabajo en equipo.

                    </p>
                </div>
                <div className='flex flex-col py-6 px-10 justify-center items-center'>
                <h1 className='text-6xl text-black font-sans font-semibold'>Objetivos Específicos</h1>
                </div>
                <div className='w-3/3'>
                    <img
                    className='w-full'
                    src={separador} 
                    />
                </div>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                    Formar recursos humanos con capacidad de investigar, asimilar, aplicar, generar y difundir conocimiento científico y 
                    tecnológico en el área de ingeniería.
                </p>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                    Investigar y desarrollar metodologías de diseño, programación, visión artificial que optimicen la automatización de los 
                    procesos productivos para contar con productos de software confiable y sostenible.
                </p>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                    Atender las necesidades del sector empresarial y de gobierno de forma regional, nacional y mundial en el área de la 
                    ingeniería con enfoque al desarrollo de nuevas tecnologías sustentables e inteligentes.
                </p>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                Desarrollar herramientas científicas - técnicas para transformar los recursos intelectuales y materiales en innovación 
                tecnológica aplicada.
                </p>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                    Desarrollar y aplicar tecnologías inteligentes orientadas a la sustentabilidad.
                </p>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                    Actualizar recursos humanos en ingeniería, para su aplicación en el ejercicio profesional de los diferentes
                    sectores de la sociedad.
                </p>
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

export default Objetivos