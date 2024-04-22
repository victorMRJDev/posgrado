import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarM from './components/Navbar/Navbar'
import Carousel from './components/Carrusel/Carrusel'
import { Home } from './pages/Home/Home'
import Objetivos from './pages/Objetivos/Objetivos'
import PerfIngreso from './pages/Perfiles/PerfIngreso'
import PerfilEgreso from './pages/Perfiles/PerfilEgreso'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <AppRouter />
   </BrowserRouter>
  )
}

export default App
