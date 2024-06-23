import React from "react";
import Lista from "../../components/Secciones/Lista";
import Titulo from "../../components/Secciones/Titulo";

const SeccionLista = ({ titulo, mostrarSeparador = true, lista }) => {
  return (
    <div>
      <Titulo titulo={titulo} mostrarSeparador={mostrarSeparador} />
      <Lista lista={lista} />
    </div>
  );
};

export default SeccionLista;
