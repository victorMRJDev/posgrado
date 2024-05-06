import React from 'react'

const CardNab = ({image, text, name, puesto}) => {
  return (
    <>
        <div className='flex gap-8 item-center shadow-xl rounded-lg mb-7 ml-7 mr-7 mt-7 flex-col border-2 border-blue-950 border-r-8'>
          <h1 className='flex text-4xl font-mono font-bold text-blue-950 justify-evenly mt-3'>{name}</h1>
          <h2 className='flex text-4xl font-mono font-bold text-blue-950 text-center justify-evenly mt-3'>{puesto}</h2>

           <div className='flex flex-row gap-4'>
              <div className='flex w-1/3 h-96 my-auto'>
                 <img
                    src={image}
                    className='w-80 h-96 m-6 my-auto rounded-2xl'
                  />
              </div>
              <div className='flex w-2/3'>
                <p className='font-sans text-2xl font-normal text-justify m-6 text-black'>{text}</p>
              </div>
           </div>
        </div>
      
    </>
  )
}

export default CardNab
