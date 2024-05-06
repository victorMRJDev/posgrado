import React from 'react'
import NavbarM from '../../components/Navbar/Navbar'
import separador from '../../assets/separador.svg'
import ButtonBlue from '../../components/Buttons/ButtonBlue'
import  Accordion  from '../../components/Estudiantes/Estudiantes'
import { Link } from 'react-router-dom'

import imagePG from '../../assets/Carrusel/image.JPG'


const Estudiantes = () => {
    const listPrimeraGeneracion = [
        "Victor","Liz","Dominic"
    ]

    const listSegundaGeneracion = [
        "Persona 1",
        "Persona 2",
        "Persona 3"
    ]

    const lisTerceraGeneracion = [
        "Persona",
        "Persona",
        "Persona"
    ]
    return (
    <>
       <NavbarM />
    <div className='flex flex-row gap-10 m-9'>
        
            <div className='w-2/3 h-auto py-6 mb-4 border-red-700 shadow-xl '>
            <div className="p-4 bg-white rounded-lg">
                <Accordion
                  image={imagePG}
                  title="Primera Generación"
                  answer="I like to use iOS products"
                  list={listPrimeraGeneracion}
                />
                <Accordion
                  image={imagePG}
                  title="Segunda Generación"
                  answer="I like to use Tailwind"
                  list={listSegundaGeneracion}
                />
                <Accordion 
                image={imagePG}
                title="Tercera Generación" 
                answer="I am using Supabase!"
                list={lisTerceraGeneracion}
                />
            </div>
            </div>

            <div className='flex flex-col w-1/3 bg-white '>
                <div className='flex flex-col items-center justify-center h-auto m-4 bg-white border-4 rounded-lg w-3/3 border-blue-950'>
                    <h1 className='mt-6 mb-6 font-sans text-4xl font-semibold text-black'>Repositorio</h1>
                    <ButtonBlue 
                    text='Repositorio institucional' 
                    className={"flex md:w-60 max-w-sm mb-6"} />
               
                </div>
                <div className='flex flex-col items-center justify-center m-4 overflow-y-auto bg-white border-4 rounded-lg w-3/3 h-2/3 border-blue-950'>
                  <div className='sticky top-0 z-20 flex items-center justify-center w-full mt-6 mb-6 bg-white '>
                    <h1 className='mt-6 mb-6 font-sans text-4xl font-semibold text-black '>Eventos</h1>
                  </div>                
                    <div className='flex flex-col items-center justify-center w-2/3 m-4 bg-white border-4 rounded-lg cursor-pointer h-28 border-blue-950'>
                       <h1 className='mt-6 mb-6 font-sans text-4xl font-semibold text-black h-28'>Evento 1</h1>               
                    </div>
                    <div className='flex flex-col items-center justify-center w-2/3 m-4 bg-white border-4 rounded-lg cursor-pointer h-28 border-blue-950'>
                       <h1 className='mt-6 mb-6 font-sans text-4xl font-semibold text-black h-28'>Evento 1</h1>               
                    </div>
                    <div className='flex flex-col items-center justify-center w-2/3 m-4 bg-white border-4 rounded-lg cursor-pointer h-28 border-blue-950'>
                       <h1 className='mt-6 mb-6 font-sans text-4xl font-semibold text-black h-28'>Evento 1</h1>               
                    </div>
                    <div className='flex flex-col items-center justify-center w-2/3 m-4 bg-white border-4 rounded-lg cursor-pointer h-28 border-blue-950'>
                       <h1 className='mt-6 mb-6 font-sans text-4xl font-semibold text-black h-28'>Evento 1</h1>               
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Estudiantes