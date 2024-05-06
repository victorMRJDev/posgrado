import React, { useState } from "react";
import CardNab from "../Cards/CardNab";

const AccordionNab = ({ title, list }) => {
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
         {list.map((item, index) => (
           <CardNab 
             key={index}
             image={item.image}
             text={item.semblanza}
           />
         ))
           
         }
          {/* <div className="flex items-center justify-center w-2/3 mt-2 ml-auto mr-auto ">
              <img src={image} alt="" className="flex rounded-xl"/>
          </div>
          {list.map((item, index) => (
            <div key={index} className="ml-8 mr-8 overflow-hidden">
              {item}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default AccordionNab