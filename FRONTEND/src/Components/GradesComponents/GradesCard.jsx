import React from "react";

function GradesCard({ categories, categoryIcon: Icon, onViewGrade = () => {} }) {
  return (
    <div className="rounded-lg grid grid-cols-2 gap-3 p-3 md:grid-cols-2 md:gap-5 md:p-8 font-[Poppins] bg-bone">
      {categories.map((category) => (
        <div
          key={category.label}
          className="relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-stone-300 bg-[#ebe9e4] p-4 md:gap-5 md:px-5 md:py-7"
        >
          <Icon
            className="pointer-events-none absolute -right-6 -bottom-5 rotate-[-20deg] text-swamp-green opacity-40 size-22.5 md:size-35"
            strokeWidth={1}
          />

          <h2 className="relative text-center text-xs md:text-sm font-[PoppinsBold] uppercase tracking-wide text-swamp-green">
            {category.label}
          </h2>
          
          <button
            type="button"
            onClick={() => onViewGrade(category)}
            className="relative rounded-lg bg-swamp-green px-4 py-2 text-xs md:px-6 md:py-3 md:text-sm font-[Poppins] text-bone transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-swamp-green/40 active:scale-95 active:shadow-md"
          >
            View Grade →
          </button>
        </div>
      ))}
    </div>
  );
}

export default GradesCard;