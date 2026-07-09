import { useState } from "react";
import { ArrowUpDown, Star } from "lucide-react";

const defaultWeeks = [
  {
    id: "week-1",
    label: "week 1",
    overallScore: 4.0,
    categories: [
      { label: "Reading & Writing", score: 4.0 },
      { label: "Speaking", score: 4.0 },
      { label: "Socializing", score: 4.0 },
      { label: "Understanding & Attention Span", score: 4.0 },
    ],
  },
  {
    id: "week-2",
    label: "week 2",
    overallScore: 5.0,
    categories: [
      { label: "Reading & Writing", score: 5.0 },
      { label: "Speaking", score: 5.0 },
      { label: "Socializing", score: 5.0 },
      { label: "Understanding & Attention Span", score: 5.0 },
    ],
  },
];

export default function WeeklyAssessment({ weeks = defaultWeeks }) {
  const [openWeekId, setOpenWeekId] = useState(weeks[0]?.id ?? null);

  return (
    <div className="w-full rounded-xl p-2 font-[Poppins]">
      <div className="flex flex-col gap-3">
        {weeks.map((week) => {
          const isOpen = openWeekId === week.id;

          return (
            <div key={week.id} className="rounded-xl border border-gray-100 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setOpenWeekId(isOpen ? null : week.id)}
                className="flex w-full flex-wrap items-center justify-between gap-2 px-3 sm:px-4 py-3"
              >
                <div className="flex items-center gap-2 px-5">
                  <span className="text-lg sm:text-xl lg:text-2xl font-[PoppinsBold] text-swamp-green">
                    {week.label}
                  </span>
                  <ArrowUpDown
                    size={15}
                    className={`text-swamp-green transition-transform duration-200 ${isOpen ? "rotate-360" : ""}`}
                  />
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className={
                        index < Math.round(week.overallScore)
                          ? "fill-amber-400 text-amber-400"
                          : "fill-white text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-gray-700">
                    {week.overallScore.toFixed(1)}
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="divide-y divide-gray-100 border-t border-gray-100 px-3 sm:px-4">
                  {week.categories.map((category) => (
                    <div key={category.label} className="flex items-center justify-between gap-2 p-10 py-5">
                      <span className="text-sm text-gray-600">{category.label}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium text-gray-700">  
                          {category.score.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}