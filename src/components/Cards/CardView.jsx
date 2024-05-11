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
        className={`bg-white rounded-lg shadow-xl p-4 transition-transform duration-300
          ${isHovered ? "transform scale-105 shadow-2xl" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={semblanza ? handleCardClick : undefined}
      >
        <img src={image} alt={name} className="w-full h-auto rounded-lg mb-2" />
        <p
          className={`text-lg font-semibold text-center select-none 
          ${semblanza ? "text-blue-900" : "text-black"}`}
        >
          {name}
        </p>
      </div>
      {isModalOpen && semblanza && (
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
