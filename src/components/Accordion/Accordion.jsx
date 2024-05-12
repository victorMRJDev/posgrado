import React, { useState } from "react";

const Accordion = ({ title, list, image }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full py-2 border-2 rounded-lg border-blue-950 "
      >
        <span className="ml-4 font-sans text-2xl text-black">{title}</span>
        <svg
          className="items-center my-auto ml-8 mr-4 fill-blue-950 shrink-0"
          width="16"
          height="16"
          // xmlns="http://www.w3.org/2000/svg"
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
        <div className="grid text-sm border-t-0 border-b-2  border-x-2 border-blue-950 text-slate-600">
          <div className="flex items-center justify-center w-2/3 mb-4 mt-2 ml-auto mr-auto ">
            <img src={image} alt="" className="flex rounded-xl" />
          </div>
          {list &&
            list.map((item, index) => (
              <div key={index} className="ml-8 mr-8 overflow-hidden">
                {/* <h2>{item.title}</h2> */}
                <h3 className="text-3xl font-mono mb-4">
                  LGAC1: Nuevas Tecnologías para el Desarrollo Sustentable
                </h3>
                <ul>
                  {item.lineaUno.map((estudiante, i) => (
                    <p className="text-2xl font-mono ml-8" key={i}>
                      {estudiante}
                    </p>
                  ))}
                </ul>
                <h3 className="text-3xl font-mono mb-2 mt-4">
                  LGAC2: Investigación, Desarrollo y Aplicaciones de Tecnologías
                  Inteligentes
                </h3>
                <p className="text-2xl font-mono">
                  {item.lineaDos.map((estudiante, i) => (
                    <p className="ml-8" key={i}>
                      {estudiante}
                    </p>
                  ))}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
