import React, { useState } from "react";

const CardView = ({ image, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-xl p-4 transition-transform duration-300${
        isHovered
          ? "transform hover:scale-105 shadow-xl filter drop-shadow-lg"
          : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} className="w-full h-auto rounded-lg mb-2" />
      <p className="text-lg font-semibold text-gray-800 text-center">{name}</p>
    </div>
  );
};

export default CardView;
