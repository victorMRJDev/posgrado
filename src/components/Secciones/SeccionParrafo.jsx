import React from "react";
import Parrafo from "../../components/Secciones/Parrafo";
import Titulo from "../../components/Secciones/Titulo";

const SeccionParrafo = ({
  titulo,
  mostrarSeparador = true,
  texto,
  conMargenSuperior,
}) => {
  return (
    <div>
      <Titulo titulo={titulo} mostrarSeparador={mostrarSeparador} />
      <Parrafo texto={texto} conMargenSuperior={conMargenSuperior} />
    </div>
  );
};

export default SeccionParrafo;
