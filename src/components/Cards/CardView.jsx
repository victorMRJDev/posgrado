import React from "react";

const CardView = ({ image, name }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img src={image} alt={name} className="w-full h-auto rounded-lg mb-2" />
      <p className="text-lg font-semibold text-gray-800 text-center">{name}</p>
    </div>
  );
};

export default CardView;
