import React from "react";
import CardEvento from "../Cards/CardEvento";

function Eventos() {
  return (
    <div className="flex w-3/3 m-4 h-3/3 overflow-y-auto bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950">
      <div className="flex cursor-pointer w-2/3 m-4 h-8 bg-white flex-col justify-center items-center">
        <h1 className="text-4xl text-black font-sans font-semibold mt-3">
          Eventos
        </h1>
      </div>
      <CardEvento title={"Evento 1"} />
      <CardEvento title={"Evento 2"} />
      <CardEvento title={"Evento 3"} />
      <CardEvento title={"Evento 4"} />
    </div>
  );
}

export default Eventos;
