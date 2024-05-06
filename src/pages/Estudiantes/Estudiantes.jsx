import React from 'react'
import NavbarM from '../../components/Navbar/Navbar'
import separador from '../../assets/separador.svg'
import ButtonBlue from '../../components/Buttons/ButtonBlue'
import  Accordion  from '../../components/Estudiantes/Estudiantes'
import { Link } from 'react-router-dom'

import imagePG from '../../assets/Carrusel/image.JPG'


const Estudiantes = () => {
    const listPrimeraGeneracion = [
       {
        id:1,
        title: 'LGAC 1: Nuevas Tecnologías para el Desarrollo Sustentable',
        lineaUno: ["1. Lizbeth Gómez Muñoz","2. Eumir Esteban Salgado Lampart","3. José Filiberto Maldonado Catalán"],
        lineaDos: ["4. María Isabel Ramírez Arcos", "5. Bryan Abisaí Nava Ramírez","6. Nestor Uriel Solache Castro"]
       }
     
    ]

    const listSegundaGeneracion = [
       {
        id:1,
        lineaUno:["1. Dominic Brian Román Padilla", "2. Víctor Manuel Romero Juárez", "3. Arturo Cisneros Mayoral"],
        lineaDos:["4. Carlos Gilberto Jiménez Saldaña","5. Marbens Santos Arrieta"]
       }
    ]

    const lisTerceraGeneracion = [
     {
      id:1,
      lineaUno:["1. Denisse Peralta Rojo",
      "2. Diana Dolores Vázquez Martínez",
      "3. Isaid Uriel Basilios Segovia",
      "4. Daniela Aurora Morales López",
      "5. Brandon Aldahir Jacobo Salinas",
      "6. José Antonio Hernández Salinas",
      "7. José Antonio Carranza Martínez",
      "8. Mario Alberto Duque Peralta",
      "9. Lisandro Omar Santos Arrieta"
    ],
      lineaDos:[
        "1. José Antonio Rendón Vargas",
        "2. Imanol Marianito Cuahuitic",
        "3. Sergio Fernando Franco Salmerón",
        "4. Williams Reyna Pérez",
      ]
     }
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