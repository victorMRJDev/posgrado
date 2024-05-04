import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Objetivos from "../pages/Objetivos/Objetivos";
import PerfIngreso from "../pages/Perfiles/PerfIngreso";
import PerfilEgreso from "../pages/Perfiles/PerfilEgreso";
import Estudiantes from "../pages/Estudiantes/Estudiantes";
import NAB from "../pages/NAB/NAB";
import PlanesEstudios from "../pages/PlanesEstudios/PlanesEstudios";
import Convocatorias from "../pages/Convocatorias/Convocatorias";
import Vinculacion from "../pages/Vinculacion/Vinculacion";
import LGAC from "../pages/LGAC/LGAC";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/objetivos" element={<Objetivos/>} />
        <Route path="/perfiles" element={<PerfIngreso/>} />
        <Route path="/perfilEgreso" element={<PerfilEgreso/>} />
        <Route path="/estudiantes" element={<Estudiantes/>} />
        <Route path="/nab" element={<NAB/>} />
        <Route path="/planesestudios" element={<PlanesEstudios/>} />
        <Route path="/convocatorias" element={<Convocatorias/>} />
        <Route path="/vinculacion" element={<Vinculacion/>} />
        <Route path="/lgac" element={<LGAC/>} />


    </Routes>
  )
}
export default AppRouter