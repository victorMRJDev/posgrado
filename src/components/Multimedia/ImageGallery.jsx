import React, { useState } from "react";

function ImageGallery(props) {
  const images = props.images || [];

  // Si no hay imágenes, no mostramos nada
  if (!images || images.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = function (index) {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {/* Imagen grande */}
      <div className="w-full aspect-video rounded-2xl overflow-hidden border border-gray-300">
        <img
          src={images[currentIndex]}
          alt={"imagen-" + (currentIndex + 1)}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex flex-wrap gap-2 mt-3">
        {images.map(function (img, index) {
          var isActive = index === currentIndex;

          return (
            <button
              key={index}
              type="button"
              onClick={function () {
                handleThumbnailClick(index);
              }}
              className={
                "w-16 h-16 border rounded-md overflow-hidden flex-shrink-0 " +
                (isActive
                  ? "ring-2 ring-indigo-500 border-indigo-500"
                  : "border-gray-300")
              }
            >
              <img
                src={img}
                alt={"miniatura-" + (index + 1)}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ImageGallery;
