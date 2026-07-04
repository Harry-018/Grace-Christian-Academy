import React from 'react'
import { Star } from "lucide-react";

function RatingCard({ title, overall, ratings }) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#3B4A2E]">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                size={18}
                className={
                  index < overall
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }
              />
            ))}
          </div>

          <span className="text-sm font-medium">
            {overall.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Ratings */}
      <div className="space-y-4">
        {ratings.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <span className="text-gray-600">
              {item.name}
            </span>

            <div className="flex items-center gap-2">
              <Star
                size={15}
                className="fill-yellow-400 text-yellow-400"
              />

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