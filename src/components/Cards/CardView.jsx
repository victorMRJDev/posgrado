import React, { useState } from "react";
import Modal from "./CardModal";

const CardView = ({ image, name, semblanza }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (semblanza) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`bg-white rounded-lg shadow-xl p-4 transition-transform duration-300${
          isHovered
            ? " transform hover:scale-105 shadow-xl filter drop-shadow-lg"
            : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <img src={image} alt={name} className="w-full h-auto rounded-lg mb-2" />
        <p className="text-lg font-semibold text-gray-800 text-center select-none">
          {name}
        </p>
      </div>
      {isModalOpen && (
        <Modal
          image={image}
          name={name}
          semblanza={semblanza}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default CardView;
