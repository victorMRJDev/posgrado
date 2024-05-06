import React from 'react'

const CardNab = ({image, text}) => {
  return (
    <>
        <div className='flex item-center'>
            <img
                src={image}
                className='w-16 h-16'
            />
            <p className='font-sans text-2xl font-normal text-black'>{text}</p>

        </div>
      
    </>
  )
}

export default CardNab
