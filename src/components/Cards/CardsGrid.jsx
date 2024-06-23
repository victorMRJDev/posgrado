import React from "react";
import CardView from "./CardView";

const CardsGrid = ({ data }) => {
  return (
    <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 cursor-pointer">
      {data.map((item, index) => (
        <CardView
          key={index}
          image={item.image}
          name={item.name}
          semblanza={item.semblanza}
        />
      ))}
    </div>
  );
};

export default CardsGrid;
