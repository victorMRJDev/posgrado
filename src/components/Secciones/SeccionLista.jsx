import React from "react";
import Lista from "../../components/Secciones/Lista";
import SeccionTitulo from "../../components/Secciones/Titulo";

const SeccionLista = ({ titulo, mostrarSeparador = true, lista }) => {
  return (
    <div>
      <SeccionTitulo titulo={titulo} mostrarSeparador={mostrarSeparador} />
      <Lista lista={lista} />
    </div>
  );
};

export default SeccionLista;
