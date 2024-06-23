import React from "react";

const ListaConMargen = ({ lista }) => {
  return (
    <div className="flex flex-col py-2 px-10 justify-center mt-7 max-sm:px-5 max-md:px-7 max-sm:mt-3 max-md:mt-5">
      <ul className="text-xl text-justify font-serif font-light text-black list-disc pl-6 space-y-3 max-sm:text-base max-md:text-lg">
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ListaSinMargen = ({ lista }) => {
  return (
    <div className="flex flex-col py-2 px-10 justify-center max-sm:px-5 max-md:px-7">
      <ul className="text-xl text-justify font-serif font-light text-black list-disc pl-6 space-y-3 max-sm:text-base max-md:text-lg">
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Lista = ({ lista, conMargenSuperior = true }) => {
  if (conMargenSuperior) {
    return <ListaConMargen lista={lista} />;
  } else {
    return <ListaSinMargen lista={lista} />;
  }
};

export default Lista;
