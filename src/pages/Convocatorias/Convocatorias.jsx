import React from 'react'
import NavbarM from '../../components/Navbar/Navbar'
import separador from '../../assets/separador.svg'
import ButtonBlue from '../../components/Buttons/ButtonBlue'
import { Link } from 'react-router-dom'
import { Document, Page } from '@react-pdf/renderer';
import convocatoria from '../../assets/convocatoria/convocatoria AGO-DIC 2024 mci.pdf'

const Estudiantes = () => {

    const pdfURL = convocatoria;
  return (
    <>
       <NavbarM />
    <div className='flex flex-row m-9 gap-10'>
        
            <div className='w-2/3 h-auto py-6 shadow-xl mb-4'>
            <div>
                <iframe src='../../assets/convocatoria/convocatoria AGO-DIC 2024 mci.pdf' width="100%" height="500px" />
                {/* <Document file={pdfURL}>
                    <Page pageNumber={1} />
                </Document> */}
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

export default Estudiantes