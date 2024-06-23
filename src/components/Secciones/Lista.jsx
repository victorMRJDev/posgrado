import React from "react";

const Lista = ({ lista }) => {
  return (
    <div className="flex flex-col px-10 justify-center max-sm:px-5 max-md:px-7">
      <ul className="text-xl text-justify font-serif font-light mt-9 text-black list-disc pl-6 space-y-3 max-sm:text-base max-md:text-lg">
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
