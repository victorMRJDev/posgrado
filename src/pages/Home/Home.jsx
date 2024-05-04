import React from 'react'
import NavbarM from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carrusel/Carrusel'
import CardSocial from '../../components/Cards/CardSocial'
import instagramPhoto from '../../assets/Carrusel/instagramPhoto.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import ButtonBlue from '../../components/Buttons/ButtonBlue'
import separador from '../../assets/separador.svg'


export const Home = () => {
  return (
    <>
        <NavbarM />
        <Carousel />
        <div className='flex flex-row m-9 gap-10'>
            <div className='w-2/3 h-auto py-6 shadow-xl mb-4'>
                <div className='flex flex-col py-6 px-10 justify-center'>
                <h1 className='text-6xl text-black font-sans font-semibold'>Maestría en Ciencias de la Ingeniería</h1>
                </div>
                <div className='w-3/3'>
                    <img
                    className='w-full'
                    src={separador} 
                    />

                </div>
                <div className='flex flex-col py-6 px-10 justify-center'>
                    <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                    La Maestría en Métodos Estadísticos Aplicados es un programa de nueva creación, 
                    con orientación profesional incorporado al Sistema Nacional de Posgrados (SNP) 
                    del CONACYT.
                    </p>

                    <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                        Nuestro programa educativo pretende cubrir la necesidad de la formación de recursos 
                        humanos en el área de Estadística. En la entidad y en muchas zonas del país hay una 
                        fuerte necesidad de profesionales que sean capaces de aplicar técnicas estadísticas 
                        apropiadas que procesen, analicen y resuman información, que aporten resultados con 
                        validez científica y valor práctico apropiados. Contribuyendo con ello a la búsqueda 
                        de soluciones a los problemas en los distintos ámbitos de los sectores productivos, 
                        de servicios, gobierno y de la sociedad. Los estudiantes podrían ser beneficiados por
                         beca CONACYT a propuesta del comité de evaluación y aprobación del CONACYT, los 
                         estudiantes que se les otorgue beca se dedicarán de tiempo completo, además los 
                         becarios se comprometen formalmente a dedicarse exclusivamente a la Maestría, a 
                         aprobar todas las materias y cubrir los créditos del plan de estudios en el tiempo 
                         establecido para ello, y a graduarse al término de la vigencia de la beca de acuerdo
                          al reglamento de becas del CONACYT (www.conacyt.mx).
                    </p>
                    <p className='text-3xl text-justify font-sans font-bold mt-44 text-black'>
                        COORDINADORA: DRA. MIRNA CASTRO BELLO
                    </p>
                </div>
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
        <div className='flex flex-row max-sm:flex-col max-sm:gap-9 sm:flex-col sm:gap-9 md:flex-col lg:flex-row justify-center items-center rounded-2xl mt-14'>
            
            <CardSocial 
            key={1}
            image={instagramPhoto}
            texto={'Instagram'}
            icon={<FaInstagram size={30} color='black'/>}
            />
          
            <CardSocial
            key={2}
            image={instagramPhoto}
            texto={'Facebook'}
            icon={<FaFacebook size={30} color='blue'/>}
            />
            <CardSocial
            key={3}
            image={instagramPhoto}
            texto={'Youtube'}
            icon={<IoLogoYoutube size={30} color='red'/>}
            />
        </div>
    </>
  )
}
