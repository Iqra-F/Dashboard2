import React from "react";

const Cards = ({ cards }) => {
  return (
    <>
      {cards.map((card) => {
        const { id, icon, text, number } = card;  
        return (
          // <div key={id}>
            <div className="flex flex-col items-start mr-3 justify-center p-2 gap-y-3 w-[97%] sm:w-[46%] md:w-[48.7%] lg:w-[23%] xl:w-[23.7%] bg-[#F8F8F8] border rounded-lg py-4">
              <div className="p-1 pr-15  m-2">
                <div className="mb-4 p-2 w-8 h-8 text-orange-500 text-center bg-white">
                {icon}
                </div>
               
                <h6>{text}</h6>
                <div className="text-3xl font-semibold">{number}</div>
              </div>
            </div>
            // </div>
        );
      })}
    </>
  );
};

export default Cards;