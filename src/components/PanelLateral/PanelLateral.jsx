import React from "react";
import Repositorio from "../PanelLateral/Repositorio";
import Eventos from "../PanelLateral/Eventos";

function PanelLateral() {
  return (
    <div className="flex flex-col w-1/3 bg-white">
      <Repositorio />
      <Eventos />
    </div>
  );
}

export default PanelLateral;
