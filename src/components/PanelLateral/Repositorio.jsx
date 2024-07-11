import React from "react";
import ButtonBlue from "../Buttons/ButtonBlue";

function Repositorio() {
  return (
    <div className="flex w-3/3 m-4 h-auto bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950">
      <h1 className="text-4xl text-black font-sans font-semibold mb-6 mt-6">
        Repositorio
      </h1>

      <ButtonBlue text="Repositorio institucional" className={"mb-6 px-6"} to={"/repositorio"} />

    </div>
  );
}

export default Repositorio;
