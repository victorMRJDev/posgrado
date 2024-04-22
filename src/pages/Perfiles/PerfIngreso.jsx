import React from 'react'
import NavbarM from '../../components/Navbar/Navbar'
import separador from '../../assets/separador.svg'
import ButtonBlue from '../../components/Buttons/ButtonBlue'
import { Link } from 'react-router-dom'

const PerfIngreso = () => {
  return (
    <>
    <NavbarM />
    <div className='flex flex-row m-9 gap-10'>
        
            <div className='w-2/3 h-auto py-6 shadow-xl mb-4'>
            <div className='flex justify-end'>
            <Link to='/perfilEgreso'>
                <ButtonBlue
                text={"Perfil de egreso"}
                className={"flex md:w-60 max-w-sm justify-ends mb-6 text-3xl"} 
                />
            </Link>
         
            </div>
                <div className='flex flex-col py-6 px-10 justify-center items-center'>
                <h1 className='text-6xl text-black font-sans font-semibold'>Conocimientos Básicos en:</h1>
                </div>
                <div className='w-3/3'>
                    <img
                    className='w-full'
                    src={separador} 
                    />
                </div>
                <div className='flex flex-col py-6 px-10 justify-center'>
                    <p className='text-2xl text-justify font-sans font-normal mt-9 text-black'>
                        El programa está dirigido a ingenieros recién egresados y/o ingenieros del sector productivo, en las distintas 
                        áreas de la ingeniería, que cuenten con competencias, habilidades, valores y conocimientos que permitan evidenciar 
                        aptitudes para la investigación, innovación y desarrollo de proyectos tecnológicos.
                    </p>
                </div>
                <div className='flex flex-col py-6 px-10 justify-center items-center'>
                <h1 className='text-6xl text-black font-sans font-semibold'>Habilidades</h1>
                </div>
                <div className='w-3/3'>
                    <img
                    className='w-full'
                    src={separador} 
                    />
                </div>
                
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

export default PerfIngreso