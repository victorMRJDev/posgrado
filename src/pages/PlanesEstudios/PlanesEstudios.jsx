import React from 'react'
import NavbarM from '../../components/Navbar/Navbar'
import separador from '../../assets/separador.svg'
import ButtonBlue from '../../components/Buttons/ButtonBlue'
import { Link } from 'react-router-dom'
import Estudios from '../../components/PlanEstudios/Accordion'


const Estudiantes = () => {
    const semestreUno = [
        {
            id:1,
            materias:["Seminario de Investigación I", "Básica I", "Básica II", "Básica III", "Básica IV"],
            creditos: 28
        }
    ]
    const semestreDos = [
        {
            id:1,
            materias:["Seminario de Investigación II", "Optativa I", "Optativa II", "Optativa III"],
            creditos: 22
        }
    ]
    const semestreTres = [
        {
            id:1,
            materias:["Seminario de Investigación III","Optativa IV"],
            creditos: 10
        }
    ]
    const semestreCuatro = [
        {
            id:1,
            materias:["Tésis"],
            creditos: 40
        }
    ]

    const asignaturasOptativas =[
        {
            id:1,
            title: 'LGAC 1: Nuevas Tecnologías para el Desarrollo Sustentable',
            materias:[
                "1. Estrategias para la competitividad (No. 22)",
                "2. Análisis y Diseño de Producto (No.47)",
                "3. Manejo y disposición de residuos sólidos (No. 93)",
                "4. Tecnologías para la gestión del conocimiento (No. 110)",
                "5. Certificación para la sustentabilidad (No. 114)",
                "6. Tecnologías adecuadas social y ecológicamente (No. 120)",
                "7. Evaluación del impacto ambiental (No. 121)",
                "8. Temas Selectos I (No. 143)",
                "9. Temas Selectos II (No. 144)",
                "10. Temas Selectos III (No. 145)"
            ]
        }
    ]
    const asignaturasLineaDOs =[
        {
            id:1,
            title: 'LGAC 1: Nuevas Tecnologías para el Desarrollo Sustentable',
            materias:[
                "1. Minería de datos (No. 11)",
                "2. Control inteligente (No. 41)",
                "3. Inteligencia artificial (No. 43)",
                "4. Sistemas de automatización (No. 53)",
                "5. Sistemas inteligentes distribuidos (No. 76)",
                "6. Visión artificial (No. 127)",
                "7. Reconocimiento de patrones (No. 129)",
                "8. Robótica y Automatización (No. 130)",
                "9. Temas Selectos I (No. 143)",
                "10. Temas Selectos II (No. 144)",
                "11. Temas Selectos III (No. 145)"
            ]
        }
    ]

    const asignaturasBasicas =[
      {  id:1,
        materias:["Matemáticas aplicadas a la ingeniería", 
        "Estadística aplicada en diseño de experimentos",
        "Innovación y sustentabilidad en la ingeniería",
        "Programación"
        ]}
    ]
  return (
    <>
       <NavbarM />
    <div className='flex flex-row m-9 gap-10'>        
            <div className='w-2/3 h-auto py-6 shadow-xl mb-4'>
                <div className='flex flex-col items-center mb-6'>
                    <h1 className='text-black font-mono text-7xl'>Plan De Estudios</h1>
                    <p className='text-black font-mono text-2xl mt-6 mx-12 text-justify'>
                    El plan de estudios es semestral diseñado para concluirse en dos años, en el que el 
                    estudiante deberá cursar cuatro asignaturas básicas, cuatro asignaturas optativas, 
                    tres seminarios de investigación y tesis. La tesis empezará a desarrollarse desde el 
                    primer semestre y se acreditará hasta que el estudiante presente el examen de grado.
                    </p>
                </div>
                <Estudios
                    title='Semestre 1'
                    list={semestreUno}
                />
                <Estudios
                    title='Semestre 2'
                    list={semestreDos}
                />
                <Estudios
                    title='Semestre 3'
                    list={semestreTres}
                />
                <Estudios
                    title='Semestre 4'
                    list={semestreCuatro}
                />
                <div className='flex flex-col items-center'>
                    <h1 className='text-black font-mono text-5xl mt-4 mb-4'>Asignaturas Básicas</h1>
                 </div>
                 <Estudios
                    title='Asignaruras'
                    list={asignaturasBasicas}
                />
                 <div className='flex flex-col items-center'>
                    <h1 className='text-black font-mono text-5xl mt-4 mb-4'>Asignaturas por Optativas</h1>
                 </div>
                 <Estudios
                    title={'LGAC 1: Nuevas Tecnologías para el Desarrollo Sustentable'}
                    list={asignaturasOptativas}
                />
                <Estudios
                    title={'LGAC 2: Investigación, Desarrollo y Aplicaciones de Tecnologías Inteligentes'}
                    list={asignaturasLineaDOs}
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