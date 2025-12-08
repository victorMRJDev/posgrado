import React, { useState } from "react";

const CardCarousel = ({ images = [], altBase = "", className = "" }) => {
  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <div className={`relative w-full overflow-hidden rounded-xl ${className}`}>
      <img
        src={images[index]}
        alt={`${altBase} ${index + 1}`}
        className="w-full h-48 object-cover"
      />

      {/* Botón anterior (semi-transparente) */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute inset-y-0 left-0 flex items-center px-2 text-white text-lg font-bold bg-black/20 hover:bg-black/40"
          >
            ‹
          </button>

          {/* Botón siguiente */}
          <button
            type="button"
            onClick={next}
            className="absolute inset-y-0 right-0 flex items-center px-2 text-white text-lg font-bold bg-black/20 hover:bg-black/40"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default CardCarousel;
