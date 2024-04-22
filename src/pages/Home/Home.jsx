import React from 'react'
import NavbarM from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carrusel/Carrusel'

export const Home = () => {
  return (
    <>
        <NavbarM />
        <Carousel />
        <div className='flex flex-row m-9 gap-10'>
            <div className='w-2/3 h-auto py-6 border-violet-500 border-4'>
                <div className='flex flex-col py-6 px-10 justify-center'>
                    <h1 className='text-6xl text-black font-sans font-semibold'>Maestría en Ciencias de la Ingeniería</h1>
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
                    <p className='text-3xl text-justify font-sans font-bold mt-9 text-black'>
                        COORDINADORA: DRA. MIRNA CASTRO BELLO
                    </p>
                </div>
            </div>

            <div className='w-1/3 h-auto bg-yellow-100'>
               
            </div>

        </div>
    </>
  )
}
