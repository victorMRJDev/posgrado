import React from 'react'

import gobMex from '../../assets/logoheader.svg'
import { FaSearch } from "react-icons/fa";

const NavBarGob = () => {
  return (
    <>
    <div>
    <nav className="bg-gob-green w-full top-0 shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={gobMex} alt="" className='h-1/2 w-1/2' />
          </div>
          <div className="hidden md:flex md:items-center items-center md:ml-6">
            <div className="ml-10 flex items-center space-x-4">
              <a href="https://www.gob.mx/gobierno" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Gobierno</a>
              <a href="https://www.gob.mx/participa" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Participa</a>
              <a href="https://datos.gob.mx/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Datos</a>
              <a href="https://www.gob.mx/busqueda" className="text-gray-300 hover:text-white px-3 text-center rounded-md text-xl font-medium"><FaSearch /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
    </>
  )
}


export default NavBarGob;
