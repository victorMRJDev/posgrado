import React from "react";

const Parrafo = ({ texto }) => {
  return (
    <div className="flex flex-col py-2 px-10 justify-center">
      <p className="text-xl text-justify font-serif font-light mt-9 text-black">
        {texto}
      </p>
    </div>
  );
};

export default Parrafo;
