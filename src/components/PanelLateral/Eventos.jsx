import React from "react";
import CardEvento from "../Cards/CardEvento";
import ButtonBlue from "../Buttons/ButtonBlue";

function Eventos() {
  return (
    <div className="flex w-3/3 m-4 h-3/3 overflow-y-auto bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950">
      <div className="flex cursor-pointer w-2/3 m-4 h-8 bg-white flex-col justify-center items-center">
        <h1 className="text-4xl text-black font-sans font-semibold mt-3">
          Eventos
        </h1>
      </div>
      <div className="buttons">
        <ButtonBlue text="Congresos Internacionales" className={"mb-6 px-6"} to={"/congresosInternacionales"} />
        <ButtonBlue text="Congresos Nacionales" className={"mb-6 px-6"} to={"/congresosNacionales"} />
        <ButtonBlue text="InnovaTecNM" className={"mb-6 px-6"} to={"/innovatecnm"} />
      </div>
      {/* <CardEvento title={"Congresos Nacionales"} />
      <CardEvento title={"Congresos Internacionales"} />
      <CardEvento title={"InnovaTecNM"} />
      <CardEvento title={"Evento 4"} /> */}
    </div>
  );
}

export default Eventos;
