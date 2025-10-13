import React, { useState } from "react";
import { LINEA_1, LINEA_2 } from "../../Global";
import { Link } from "react-router-dom";

const EstudiantesAccordion = ({ title, list, image }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 px-10 max-sm:px-5 max-md:px-7">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full py-2 border-2 rounded-lg border-blue-950 hover:bg-blue-50"
      >
        <span className="ml-2 font-medium text-2xl text-black max-sm:text-lg max-md:text-xl">
          {title}
        </span>
        <svg
          className={`items-center my-auto ml-8 mr-4 fill-blue-950 shrink-0 transition-transform duration-200 ease-out ${
            accordionOpen ? "rotate-180" : ""
          }`}
          width="16"
          height="16"
        >
          <rect y="7" width="16" height="2" rx="1" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="grid text-sm border-t-0 border-b-2 border-x-2 border-blue-950 text-slate-600 py-5">
          <div className="flex items-center justify-center w-2/3 mt-2 ml-auto mr-auto ">
            <img src={image} alt="" className="flex rounded-xl" />
          </div>
          {list?.map((item, index) => (
            <div key={index} className="mx-2 overflow-hidden">
              <Section title={LINEA_1} content={item.lineaUno} />
              <Section title={LINEA_2} content={item.lineaDos} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <>
    <h3 className="my-2 ml-2 font-medium text-2xl text-blue-900 max-sm:text-base max-md:text-xl">
      {title}
    </h3>
    <ul>
      {content.map((estudiante, i) => (
        <li
          className="text-xl mb-1 text-black ml-7 font-serif font-light hover:bg-blue-50 max-sm:text-base max-md:text-xl max-sm:ml-3 max-md:ml-5"
          key={i}
        >
          {estudiante}
        </li>
      ))}
    </ul>
  </>
);

export default EstudiantesAccordion;
