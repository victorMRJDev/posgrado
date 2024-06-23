import React, { useState } from "react";

const PlanesAccordion = ({ title, text, list, image }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 px-10">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full py-2 border-2 rounded-lg border-blue-950 hover:bg-blue-50"
      >
        <span className="ml-4 font-medium text-2xl text-black max-sm:text-lg max-md:text-xl">
          {title}
        </span>
        <svg
          className="items-center my-auto ml-8 mr-4 fill-blue-950 shrink-0"
          width="16"
          height="16"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="grid text-sm border-t-0 border-b-2 border-x-2 border-blue-950 text-slate-600">
          <div className="flex items-center justify-center w-2/3 mt-2 ml-auto mr-auto ">
            <img src={image} alt="" className="flex rounded-xl" />
          </div>
          {list.map((item, index) => (
            <div
              key={index}
              className="mx-8 overflow-hidden max-sm:mx-3 max-md:mx-5"
            >
              <ul>
                {item.materias.map((materia, i) => (
                  <p
                    className="text-2xl mt-2 mb-1 text-black hover:bg-blue-50 max-sm:text-lg max-md:text-xl"
                    key={i}
                  >
                    {materia}
                  </p>
                ))}
              </ul>
            </div>
          ))}
          {list.map((item, index) => (
            <div key={index} className="bg-blue-950 mt-4 overflow-hidden">
              <p className="text-2xl ml-5 font-bold text-white my-1 max-sm:text-lg max-md:text-xl">
                {item.creditos ? `Creditos: ${item.creditos}` : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanesAccordion;
