import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-2xl border-black border-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-[#FF8000]  text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#000000] mb-2">{title}</h3>
      <p className="text-[#333333] text-semibold">{description}</p>
    </div>
  );
};

export default Card;
