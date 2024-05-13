import React from "react";
import Parrafo from "../../components/Secciones/Parrafo";
import SeccionTitulo from "../../components/Secciones/Titulo";

const SeccionParrafo = ({ titulo, mostrarSeparador = true, texto }) => {
  return (
    <div>
      <SeccionTitulo titulo={titulo} mostrarSeparador={mostrarSeparador} />
      <Parrafo texto={texto} />
    </div>
  );
};

export default SeccionParrafo;
