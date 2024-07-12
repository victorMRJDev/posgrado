import React, { useState } from 'react';

const AccordionArticle = ({ title, list, image, text }) => {
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
        <div className="text-sm border-t-0 border-b-2 border-x-2 border-blue-950 text-slate-600 py-5">
          <div className="flex items-center justify-center w-2/3 mt-2 ml-auto mr-auto ">
            <img src={image} alt="" className="flex rounded-xl" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-2 mt-4">
            {list?.map((CardComponent, index) => (
              <div key={index} className="overflow-hidden">
                {CardComponent}
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 py-2">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionArticle;
