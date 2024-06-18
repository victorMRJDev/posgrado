import React from "react";
import Separador from "../../assets/separador.svg";

const Titulo = ({ titulo, mostrarSeparador = true }) => {
  return (
    <div>
      <div className="flex flex-col py-6 px-10 justify-center items-center max-sm:justify-start">
        <h1 className="text-4xl text-black font-sans font-semibold max-sm:text-justify max-sm:text-3xl">
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
