import React from "react";

const CardSocial = ({ image, texto, icon }) => {
  return (
    <>
      <div className="flex w-60 justify-center shadow-2xl bg-white flex-col rounded-2xl h-80 transition-all duration-700 hover:scale-110 cursor-pointer">
        <div className="w-60 bg-white rounded-2xl">
          <img src={image} alt="service" className="h-3/3 w-60 rounded-2xl" />
        </div>
        <div className="flex h-1/3 justify-center items-center">
          <p className="font-sans text-black text-3xl font-subtitle">{texto}</p>
        </div>
        <div className="flex justify-center mb-5">{icon}</div>
      </div>
    </>
  );
};

export default CardSocial;
