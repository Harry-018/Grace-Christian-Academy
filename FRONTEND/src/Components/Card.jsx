import React from "react";

const Card = ({ card, Cimg }) => {
  return (
    <div
      className="relative h-80 w-60 shrink-0 snap-center overflow-hidden rounded-2xl p-5 text-bone inset-shadow-med transition-transform duration-300 hover:scale-105 lg:h-90 lg:w-75"
      style={{
        backgroundImage: `url(${Cimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-egg-dark" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end gap-y-2">
        <div className="flex items-center justify-between">
          <span className="font-[PoppinsBold] text-base lg:text-xl">
            {card.program}
          </span>

          <span className="text-xs lg:text-base">{card.ages} Years Old</span>
        </div>

        <p className="min-h-20 text-xs lg:text-sm">{card.description}</p>
      </div>
    </div>
  );
};

export default Card;
