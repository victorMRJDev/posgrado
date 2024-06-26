import React from "react";
import Separador from "../../assets/separador.svg";

const Titulo = ({ titulo, mostrarSeparador = true }) => {
  return (
    <div>
      <div className="flex flex-col py-6 px-10 justify-center items-center max-sm:py-4 max-md:py-5">
        <h1 className="text-4xl text-black font-sans font-semibold text-center max-sm:text-2xl max-md:text-3xl">
          {titulo}
        </h1>
      </div>
      {mostrarSeparador && (
        <div className="w-full">
          <img className="w-full" src={Separador} alt="Separador" />
        </div>
      )}
    </div>
  );
};

export default Titulo;
