import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Carrusel() {
  const slides = [
    {
      url: "https://res.cloudinary.com/dfkggey2y/image/upload/v1713739913/ow6tmvokmxrbortugdfy.jpg",
      width: 500,
    },
    {
      url: "https://res.cloudinary.com/dfkggey2y/image/upload/v1713739913/fa3o1a9pm0d8kyiebnoc.jpg",
    },
    {
      url: "https://res.cloudinary.com/dfkggey2y/image/upload/v1713739912/oyh3l1gpypxnibm4bha1.jpg",
    },
    {
      url: "https://res.cloudinary.com/dfkggey2y/image/upload/v1713740123/qky9b13au3cw1qyvpb9h.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isAutoplayEnabled) {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }
    }, 4000); // Adjust interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentIndex, isAutoplayEnabled, slides.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const index = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const index = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const goToSlide = (sliceIndex) => {
    setCurrentIndex(sliceIndex);
  };

  return (
    <>
      <div className="max-w-[1200px] h-[500px] w-full m-auto py-10 px-4 relative group overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`,
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500 overflow-hidden"
        >
          {/* Left arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          {/* Right arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled color="blue" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carrusel;
