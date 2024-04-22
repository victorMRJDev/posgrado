import React from 'react'

const ButtonBlue = ({text, type, onClick, className}) => {
  const handleClick = () => {
    if(onClick) {
      onClick()
    }
  }

    return (
    <>
    <div className={className}>
        <button
            type={type}
            className="w-full self-center font-button text-button bg-blue-950 py-3 rounded-lg text-gray-50"
            onClick={handleClick}
        >
            {text}
        </button>
    </div>    
    </>
  )
}
export default ButtonBlue