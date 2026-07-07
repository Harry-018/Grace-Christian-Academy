import React from "react";
import { Star } from "lucide-react";

function StudentAverage({ average, label, totalDays, totalAbsences, remarks }) {
  return (
    <div className="w-full max-w-full space-y-3 font-[Poppins]">
      <div className="rounded-xl h-60 w-150 bg-white p-5 shadow-md">
        <div className= "flex items-center p-3 gap-15">
          <span className="text-7xl font-bold text-green-700">
            {average.toFixed(2)}
          </span>

          <div className="flex flex-col items-center gap-3">
            <span className="text-2xl font-bold uppercase text-gray-800">
              {label}
            </span>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  size={25}
                  className={
                    index < average
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-300 p-5 min-h-20">
          <p className="mb-1 text-xs font-bold text-gray-800">Remarks</p>
          <p className="text-sm text-gray-600 wrap-break-words py-5 whitespace-pre-wrap">
            {remarks}
          </p>
        </div>
      </div>

      <div className="rounded-xl w-150 bg-white p-4 shadow-md">
        <div className="grid grid-cols-2 divide-x divide-gray-200 text-center">
          <div>
            <p className="text-lg py-2 text-green-700">Total Number of Days</p>
            <p className="py-1 text-3xl font-[PoppinsBold] text-gray-800">
              {totalDays}
            </p>
          </div>
          <div>
            <p className="text-lg py-2 text-green-700">Total Number of Absences</p>
            <p className="py-1 text-3xl font-[PoppinsBold] text-gray-800">
              {totalAbsences}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAverage;