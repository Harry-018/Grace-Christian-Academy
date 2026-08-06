import React from "react";
import { Star } from "lucide-react";

function RatingCard({ title, overall, ratings }) {
  return (
    <div className="w-full max-w-full rounded-2xl bg-white p-4 sm:p-6 lg:p-8 shadow-md mx-auto sm:mx-0">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-[PoppinsBold] text-[#3B4A2E] p-3">
          {title}
        </h2>

        <div className="flex items-center gap-2 sm:px-4 lg:px-10">
          <div className="flex gap-1 sm:gap-3">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={16}
                className={
                  index < overall
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-sm font-medium">{overall.toFixed(1)}</span>
        </div>
      </div>

      <div className="space-y-5 py-5 sm:p-3 p-5">
        {ratings.map((item) => (
          <div key={item.name} className="flex items-center justify-between gap-2">
            <span className="text-sm sm:text-base text-gray-600">{item.name}</span>

            <div className="flex items-center gap-2 shrink-0">
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">
                {item.score.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingCard;