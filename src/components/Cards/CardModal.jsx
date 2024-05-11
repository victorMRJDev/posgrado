import React, { useEffect, useRef } from "react";
import ButtonBlue from "../Buttons/ButtonBlue";

const CardModal = ({ image, name, semblanza, closeModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div className="fixed top-0 z-30 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
      <div ref={modalRef} className="bg-white rounded-xl p-7 w-2/3 h-2/3 flex">
        <div className="flex flex-col items-center justify-center">
          <img
            src={image}
            alt={name}
            className="rounded-lg mb-2"
            style={{
              maxHeight: "calc(100vh / 4)",
              maxWidth: "calc(100vh / 4)",
            }}
          />
          <ButtonBlue
            text="Volver"
            className="w-40 mt-6"
            onClick={closeModal}
          />
        </div>

        <div className="ml-7 mr-2 w-full">
          <p className="text-xl font-sans font-semibold text-black text-center m-3">
            {name}
          </p>
          <p className="text-m text-gray-600 h-4/5 overflow-auto whitespace-pre-wrap text-justify pr-4">
            {semblanza}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
