import React from "react";

import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Objetivos from "../pages/Objetivos/Objetivos";
import PerfIngreso from "../pages/Perfiles/PerfIngreso";
import PerfilEgreso from "../pages/Perfiles/PerfilEgreso";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/objetivos" element={<Objetivos/>} />
        <Route path="/perfiles" element={<PerfIngreso/>} />
        <Route path="/perfilEgreso" element={<PerfilEgreso/>} />


    </Routes>
  )
}
export default AppRouter