import React from "react";

const CardSocial = ({ image, texto, icon, link }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline">
      {/* <div className="flex flex-col w-60 h-64 lg:w-60 lg:h-64 md:w-48 md:h-52 sm:w-40 sm:h-44 max-sm:w-20 max-sm:h-28 justify-stretch shadow-2xl bg-white rounded-2xl transition-all duration-700 hover:scale-110 cursor-pointer"> */}
      <div className="flex flex-col w-60 h-64 lg:w-60 lg:h-64 md:w-48 md:h-52 sm:w-40 sm:h-44 max-sm:w-24 max-sm:h-24 shadow-2xl items-center rounded-2xl transition-all duration-700 hover:scale-110 cursor-pointer">
        <div className="w-full h-full bg-white rounded-2xl sm:block hidden">
          <img src={image} alt={texto} className="w-full h-full rounded-2xl" />
        </div>
        <div className="flex h-full justify-center items-center sm:block hidden">
          <p className="font-sans text-black text-3xl lg:text-3xl md:text-2xl text-base">
            {texto}
          </p>
        </div>
        <div className="flex h-full justify-center items-center text-3xl lg:text-3xl md:text-2xl sm:text-xl max-sm:text-5xl mb-4 max-sm:my-4">
          {icon}
        </div>
      </div>
      </a>
    </>
  );
};

export default CardSocial;
