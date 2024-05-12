import React from "react";

function Eventos() {
  return (
    <div className="flex w-3/3 m-4 h-3/3 overflow-y-auto bg-white rounded-lg flex-col justify-center items-center border-4 border-blue-950">
      <div className="flex cursor-pointer w-2/3 m-4 h-8 bg-white flex-col justify-center items-center">
        <h1 className="text-4xl text-black font-sans font-semibold mt-3">Eventos</h1>
      </div>
      <div className="flex cursor-pointer w-2/3 m-4 h-28 bg-blue-900 rounded-lg flex-col justify-center items-center border-4 border-blue-950">
        <h1 className="text-4xl h-28 text-white font-sans font-semibold mb-6 mt-6">
          Evento 1
        </h1>
      </div>
      <div className="flex cursor-pointer w-2/3 m-4 h-28 bg-blue-900 rounded-lg flex-col justify-center items-center border-4 border-blue-950">
        <h1 className="text-4xl h-28 text-white font-sans font-semibold mb-6 mt-6">
          Evento 2
        </h1>
      </div>
      <div className="flex cursor-pointer w-2/3 m-4 h-28 bg-blue-900 rounded-lg flex-col justify-center items-center border-4 border-blue-950">
        <h1 className="text-4xl h-28 text-white font-sans font-semibold mb-6 mt-6">
          Evento 3
        </h1>
      </div>
      <div className="flex cursor-pointer w-2/3 m-4 h-28 bg-blue-900 rounded-lg flex-col justify-center items-center border-4 border-blue-950">
        <h1 className="text-4xl h-28 text-white font-sans font-semibold mb-6 mt-6">
          Evento 4
        </h1>
      </div>
    </div>
  );
}

export default Eventos;
