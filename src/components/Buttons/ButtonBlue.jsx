import React from "react";

const ButtonBlue = ({ text, type = "button", onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={className}>
      <button
        type={type}
        className="w-full self-center font-button text-xl bg-blue-900 py-3 rounded-lg text-white focus:outline-none focus:ring-3 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-800 transition-colors duration-300 ease-in-out"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonBlue;
