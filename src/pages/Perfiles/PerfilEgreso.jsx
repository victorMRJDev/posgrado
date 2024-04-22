import React from 'react'
import NavbarM from '../../components/Navbar/Navbar'
import separador from '../../assets/separador.svg'
import ButtonBlue from '../../components/Buttons/ButtonBlue'
import { Link } from 'react-router-dom'


const PerfilEgreso = () => {
  return (
    <>
       <NavbarM />
    <div className='flex flex-row m-9 gap-10'>
        
            <div className='w-2/3 h-auto py-6 shadow-xl mb-4'>
            <div className='flex justify-end'>
            <Link to='/perfiles'>
                <ButtonBlue
                text={"Perfil de ingreso"}
                className={"flex md:w-60 max-w-sm justify-ends mb-6 text-3xl"} 
                />
            </Link>
            </div>
                <div className='flex flex-col py-6 px-10 justify-center items-center'>
                <h1 className='text-6xl text-black font-sans font-semibold'>Conocimientos en:</h1>
                </div>
                <div className='w-3/3'>
                    <img
                    className='w-full'
                    src={separador} 
                    />
                </div>
                <div className='flex flex-col py-6 px-10 justify-center'>
                    <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                        El egresado de la Maestría en Ciencias de la Ingeniería será capaz de generar conocimientos científicos y 
                        tecnológicos a través del planteamiento y desarrollo de trabajo de investigación en las áreas de nuevas 
                        tecnologías para el desarrollo sustentable, con apego a la ética, el humanismo, el amor por el planeta, 
                        la vida silvestre, los ecosistemas y los semejantes
                    </p>
                </div>
                <div className='flex flex-col py-6 px-10 justify-center items-center'>
                <h1 className='text-6xl text-black font-sans font-semibold'>Habilidades Para:</h1>
                </div>
                <div className='w-3/3'>
                    <img
                    className='w-full'
                    src={separador} 
                    />
                </div>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black px-8'>
                    Capacidad para conducir investigación original en el área de ingeniería de su especialidad.
                </p>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black px-8'>
                    Formar seres humanos de alto nivel con capacidad de innovación en el desarrollo de proyectos de impacto social, 
                    científico y tecnológico.
                </p>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black px-8'>
                    Detectar y analizar problemas de relevancia en procesos productivos, planteando nuevas alternativas de solución.
                </p>
                <p className='text-2xl text-justify font-sans font-normal mt-9 text-black px-8'>
                    Dar asesoría y consultoría técnica al sector público y privado en el área de su especialidad.
                </p>
                
                <div className='flex flex-col py-6 px-10 justify-center items-center'>
                <h1 className='text-6xl text-black font-sans font-semibold'>Actitudes y Valores</h1>
                </div>
                <div className='w-3/3'>
                    <img
                    className='w-full'
                    src={separador} 
                    />
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
    </>
  )
}

export default PerfilEgreso