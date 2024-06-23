import React from "react";
import PanelLateral from "../PanelLateral/PanelLateral";

const Contenido = ({ children, mostrarPanelLateral = true }) => {
  return (
    <div className="flex flex-row m-5 gap-10 lg:m-9">
      <div className="w-full h-auto py-6 shadow-xl mb-4">{children}</div>
      {mostrarPanelLateral && <PanelLateral />}
    </div>
  );
};

export default Contenido;
