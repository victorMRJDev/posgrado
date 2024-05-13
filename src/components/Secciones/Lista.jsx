import React from "react";

const SeccionLista = ({ lista }) => {
  return (
    <div className="flex flex-col py-2 px-10 justify-center">
      <ul className="text-xl text-justify font-serif font-light mt-9 text-black list-disc pl-6 space-y-3">
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeccionLista;
