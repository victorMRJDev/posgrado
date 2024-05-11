import React, { useState } from "react";
import { LINEA_1, LINEA_2 } from "../../Global";

const EstudiantesAccordion = ({ title, list, image }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full py-2 border-2 rounded-lg border-blue-950 "
      >
        <span className="ml-4 font-medium text-2xl text-black">{title}</span>
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
          <div className="flex items-center justify-center w-2/3 mb-4 mt-2 ml-auto mr-auto ">
            <img src={image} alt="" className="flex rounded-xl" />
          </div>
          {list &&
            list.map((item, index) => (
              <div key={index} className="ml-5 mr-3 overflow-hidden mb-4">
                <h3 className="text-3xl mt-2 mb-2 text-blue-900">{LINEA_1} </h3>
                <ul>
                  {item.lineaUno.map((estudiante, i) => (
                    <p
                      className="text-2xl mb-1 text-black ml-10 hover:bg-blue-50"
                      key={i}
                    >
                      {estudiante}
                    </p>
                  ))}
                </ul>
                <h3 className="text-3xl mt-5 mb-2 text-blue-900">{LINEA_2} </h3>
                <div className="text-2xl">
                  {item.lineaDos.map((estudiante, i) => (
                    <p
                      className="text-2xl mb-1 text-black ml-10 hover:bg-blue-50"
                      key={i}
                    >
                      {estudiante}
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EstudiantesAccordion;
