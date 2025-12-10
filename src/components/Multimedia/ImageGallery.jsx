// src/components/Multimedia/ImageGallery.jsx
import React, { useState } from "react";

const ImageGallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const handleThumbClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Imagen grande */}
      <div className="w-full max-w-xl mb-4">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="
            w-11/12
            h-70 md:h-86 lg:h-[20rem]
            object-cover
            rounded-xl
            shadow-md
          "
        />
      </div>

      {/* Miniaturas */}
      <div className="flex flex-wrap gap-3 justify-start">
        {images.map((imgSrc, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleThumbClick(index)}
            className={`
              border-2 rounded-lg overflow-hidden
              ${index === currentIndex ? "border-blue-700" : "border-transparent"}
            `}
          >
            <img
              src={imgSrc}
              alt={`Miniatura ${index + 1}`}
              className="
                w-10 h-10
                md:w-15 md:h-15
                object-cover
              "
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
