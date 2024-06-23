import React, { useEffect, useRef } from "react";
import { HiOutlineX } from "react-icons/hi";
import ButtonBlue from "../Buttons/ButtonBlue";

const CardModal = ({ image, name, semblanza, closeModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-75"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative flex flex-col lg:flex-row rounded-xl px-5 py-7 w-5/6 lg:w-3/4 h-5/6 bg-white overflow-y-auto"
      >
        <button className="absolute top-3 right-3" onClick={closeModal}>
          <HiOutlineX size={32} color="#001A5F" />
        </button>

        <div className="flex flex-col lg:w-1/3 lg:items-center lg:justify-center">
          <p
            id="modal-title"
            className="text-3xl font-sans font-semibold text-blue-950 text-center mb-4 hidden max-lg:block"
          >
            {name}
          </p>
          <div className="flex justify-center mb-4 lg:mb-0">
            <img
              src={image}
              alt={name}
              className="rounded-lg object-cover w-72 h-72 max-md:w-48 max-md:h-48 max-lg:w-64 max-lg:h-64"
            />
          </div>
        </div>

        <div className="flex flex-col lg:w-2/3 lg:justify-center">
          <p
            id="modal-title"
            className="text-3xl font-sans font-semibold text-blue-950 text-center mb-4 block max-lg:hidden"
          >
            {name}
          </p>
          <p className="text-lg font-serif font-light text-gray-600 overflow-auto whitespace-pre-wrap text-justify px-4">
            {semblanza}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
