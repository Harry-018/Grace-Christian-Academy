import React from "react";

function GradesPanel({
  grades,
  selectedQuarter,
  onQuarterChange,
  categories,
  categoryIcon: Icon,
  onViewGrade = () => {},
}) {

  
  const quarters = [1, 2, 3];

  return (
    <div className="overflow-hidden rounded-lg border border-swamp-green/10 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gray-50 px-4 py-3 md:px-6 md:py-4">
        <div>
          <h2 className="font-[PoppinsBold] text-xs uppercase tracking-wider text-swamp-green md:text-xl">
            Grades
          </h2>
          <p className="py-0.5 text-2xs text-gray-500 md:text-xs">
            School Year 2026-2027
          </p>
        </div>

        <div className="flex gap-1.5 md:gap-2">
          {quarters.map((quarter) => (
            <button
              key={quarter}
              onClick={() => onQuarterChange?.(quarter)}
              className={`rounded-lg px-3 py-1.5 text-[11px] font-[Poppins] transition md:rounded-md md:px-4 md:py-2 md:text-xs ${
                selectedQuarter === quarter
                  ? "bg-swamp-green text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Quarter {quarter}
            </button>
          ))}
        </div>
      </div>

      {/* Grade Legend */}
      <div className="grid grid-cols-2 gap-2 p-3 md:gap-3 md:p-3 lg:grid-cols-4">
        {grades.map((item) => (
          <div
            key={item.grade}
            className="flex items-center gap-2 rounded-xl bg-[#ebe9e4] px-3 py-2 md:gap-3"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-swamp-green/50 font-[PoppinsBold] text-xs md:text-sm">
              {item.grade}
            </div>

            <span className="truncate text-xs font-[Poppins] text-gray-700 md:text-sm">
              {item.meaning}
            </span>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-3 p-3 md:gap-5 md:p-8">
        {categories.map((category) => (
          <div
            key={category.label}
            className="relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-stone-300 bg-[#ebe9e4] p-4 md:gap-5 md:px-5 md:py-7"
          >
            <Icon
              className="pointer-events-none absolute -right-6 -bottom-5 rotate-[-20deg] text-swamp-green opacity-40 size-22.5 md:size-35"
              strokeWidth={1}
            />

            <h2 className="relative text-center text-xs uppercase tracking-wide text-swamp-green font-[PoppinsBold] md:text-sm">
              {category.label}
            </h2>

            <button
              type="button"
              onClick={() => onViewGrade(category)}
              className="relative rounded-lg bg-swamp-green px-4 py-2 text-xs font-[Poppins] text-bone transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-swamp-green/40 active:scale-95 active:shadow-md md:px-6 md:py-3 md:text-sm"
            >
              View Grade →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GradesPanel;
