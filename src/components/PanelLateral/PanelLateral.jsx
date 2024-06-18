import React from "react";
import Repositorio from "../PanelLateral/Repositorio";
import Eventos from "../PanelLateral/Eventos";

function PanelLateral() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-1/3 bg-white">
      <Repositorio />
      <Eventos />
    </div>
  );
}

export default PanelLateral;
