import React from "react";
import Lista from "../../components/Secciones/Lista";
import Parrafo from "./Parrafo";
import Titulo from "./Titulo";

const SeccionParrafoLista = ({
  titulo,
  mostrarSeparador = true,
  texto,
  lista,
  conMargenSuperior = false,
}) => {
  return (
    <div>
      <Titulo titulo={titulo} mostrarSeparador={mostrarSeparador} />
      <Parrafo texto={texto} conMargenSuperior={conMargenSuperior} />
      <Lista lista={lista} conMargenSuperior={false} />
    </div>
  );
};

export default SeccionParrafoLista;
