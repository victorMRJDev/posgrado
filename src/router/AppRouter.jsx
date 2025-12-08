import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Convocatorias from "../pages/Convocatorias/Convocatorias";
import Estudiantes from "../pages/Estudiantes/Estudiantes";
import NucleoAcademico from "../pages/NucleoAcademico/NucleoAcademico";
import Objetivos from "../pages/Objetivos/Objetivos";
import Perfiles from "../pages/Perfiles/Perfiles";
import PlanEstudios from "../pages/PlanEstudios/PlanEstudios";
import Repositorio from "../pages/Repositorio/Repositorio";
import CongresosInternacionales from "../pages/Eventos/CongresosInternacionales";
import CongresosNacionales from "../pages/Eventos/CongresosNacionales";
import InnovaTecNM from "../pages/Eventos/InnovaTecNM";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/objetivos" element={<Objetivos />} />
      <Route path="/perfiles" element={<Perfiles />} />
      <Route path="/estudiantes" element={<Estudiantes />} />
      <Route path="/nucleoacademico" element={<NucleoAcademico />} />
      <Route path="/planestudios" element={<PlanEstudios />} />
      <Route path="/convocatorias" element={<Convocatorias />} />
      <Route path="/repositorio" element={<Repositorio />} />
      <Route path="/congresosInternacionales" element={<CongresosInternacionales/>} />
      <Route path="/congresosNacionales" element={<CongresosNacionales/>} />
      <Route path="/innovatecnm" element={<InnovaTecNM/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
export default AppRouter;
