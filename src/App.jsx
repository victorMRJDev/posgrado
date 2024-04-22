import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarM from './components/Navbar/Navbar'
import Carousel from './components/Carrusel/Carrusel'
import { Home } from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    {/* <NavbarM />
    <Carousel /> */}
    <div className='h-80'></div>
    <div className='h-80'></div>
    <div className='h-80'></div>
    <div className='h-80'></div>
    <div className='h-80'></div>
    <div className='h-80'></div>
    <div className='h-80'></div>
    <div className='h-80'></div>
    <div className='h-80'></div>
    <div className='h-80'></div>
    <div className='h-80'></div>


    </>
  )
}

export default App
