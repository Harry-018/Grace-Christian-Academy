import React from "react";

function GradesCard({grades, selectedQuarter, onQuarterChange}) {
  const quarters = [1, 2, 3];

  return (
    <div className="rounded-3xl border border-swamp-green/10 bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gray-50 px-4 py-3 md:px-6 md:py-4">
        <h2 className="font-[PoppinsBold] text-xs uppercase tracking-wider text-swamp-green md:text-sm">
          Grades
        </h2>

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
      <div className="grid grid-cols-2 gap-2 bg-swamp-green p-3 md:gap-3 md:p-3 lg:grid-cols-4">
        {grades.map((item) => (
          <div
            key={item.grade}
            className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 md:gap-3"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-swamp-green/20 font-[PoppinsBold] text-xs md:text-sm">
              {item.grade}
            </div>

            <span className="truncate text-xs font-[Poppins] text-gray-700 md:text-sm">
              {item.meaning}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GradesCard;