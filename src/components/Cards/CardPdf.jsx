import React, { useState } from "react";

const Card = ({ title, content = [], image, pdf, linkText = "Ver más" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg p-4 transition-transform duration-300 ${
        isHovered ? "transform scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-2/3 rounded-lg mb-2" />
      <h3 className="my-2 ml-2 font-medium text-2xl text-blue-900 max-sm:text-base max-md:text-xl">
        {title}
      </h3>
      <ul>
        {Array.isArray(content) && content.length > 0 ? (
          content.map((item, i) => (
            <li
              className="text-xl mb-1 text-black ml-7 font-serif font-light max-sm:text-base max-md:text-xl max-sm:ml-3 max-md:ml-5"
              key={i}
            >
              {item}
            </li>
          ))
        ) : (
          <li className="text-xl mb-1 text-black ml-7 font-serif font-light max-sm:text-base max-md:text-xl max-sm:ml-3 max-md:ml-5" />
        )}
      </ul>

      {pdf && (
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default Card;
