import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonBlue = ({
  text,
  type = "button",
  onClick,
  to,
  className,
  disabled,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // if (onClick) {
    //   onClick();
    // }
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
  };

  return (
    <div className={className}>
      <button
        disabled={disabled}
        type={type}
        className="w-full self-center font-button text-xl bg-blue-900 py-3 px-5 rounded-lg text-white focus:outline-none focus:ring-3 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-800 transition-colors duration-300 ease-in-out"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonBlue;
