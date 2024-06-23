import React from "react";

const ParrafoConMargen = ({ texto }) => {
  return (
    <div className="flex flex-col py-2 px-10 justify-center mt-9 max-sm:px-5 max-md:px-7">
      <p className="text-xl text-justify font-serif font-light text-black max-sm:text-base max-md:text-lg">
        {texto}
      </p>
    </div>
  );
};

const ParrafoSinMargen = ({ texto }) => {
  return (
    <div className="flex flex-col py-2 px-10 justify-center max-sm:px-5 max-md:px-7">
      <p className="text-xl text-justify font-serif font-light text-black max-sm:text-base max-md:text-lg">
        {texto}
      </p>
    </div>
  );
};

const ParrafoComponente = ({ texto, componente }) => {
  return (
    <div className="flex flex-col py-2 px-10 justify-center max-sm:px-5 max-md:px-7">
      <p className="text-xl text-justify font-serif font-light text-black max-sm:text-base max-md:text-lg">
        {texto} {componente && <span>({componente})</span>}
      </p>
    </div>
  );
};

const Parrafo = ({ texto, conMargenSuperior = true, componente = false }) => {
  if (componente) {
    return <ParrafoComponente texto={texto} componente={componente} />;
  } else if (conMargenSuperior) {
    return <ParrafoConMargen texto={texto} componente={componente} />;
  } else {
    return <ParrafoSinMargen texto={texto} componente={componente} />;
  }
};

export default Parrafo;
