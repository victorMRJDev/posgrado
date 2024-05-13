import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import Convocatorias from "../pages/Convocatorias/Convocatorias";
import Estudiantes from "../pages/Estudiantes/Estudiantes";
import { Home } from "../pages/Home/Home";
import LGAC from "../pages/LGAC/LGAC";
import NucleoAcademico from "../pages/NucleoAcademico/NucleoAcademico";
import Objetivos from "../pages/Objetivos/Objetivos";
import Perfiles from "../pages/Perfiles/Perfiles";
import PlanesEstudios from "../pages/PlanesEstudios/PlanesEstudios";
import Vinculacion from "../pages/Vinculacion/Vinculacion";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/objetivos" element={<Objetivos />} />
      <Route path="/perfiles" element={<Perfiles />} />
      <Route path="/estudiantes" element={<Estudiantes />} />
      <Route path="/nucleoacademico" element={<NucleoAcademico />} />
      <Route path="/planesestudios" element={<PlanesEstudios />} />
      <Route path="/convocatorias" element={<Convocatorias />} />
      <Route path="/vinculacion" element={<Vinculacion />} />
      <Route path="/lgac" element={<LGAC />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default AppRouter;
