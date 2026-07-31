import React from "react";
import { MessageSquareText } from "lucide-react";

function Remarks ({remarks , totalDays , absences}) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm font-[Poppins] md:p-6">
      <h2 className="flex items-center gap-2 text-lg font-[PoppinsBold] text-swamp-green md:text-2xl">
        <MessageSquareText className="size-5 md:size-6" />
        Teacher Remarks
      </h2>

      <div className="grid gap-4 lg:grid-cols-[2.5fr_1fr]">
        {/* Remarks */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 md:p-5">
          <p className="text-sm leading-7 text-gray-600">
            {remarks}
          </p>
        </div>

        {/* Statistics */}
        <div className="flex flex-row gap-4 lg:flex-col">
          <div className="flex flex-1 flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4 md:p-5">
            <span className="text-xs font-medium text-swamp-green md:text-sm">
              Total Number of Days
            </span>

            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-swamp-green md:text-4xl">
                {totalDays}
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50 p-4 md:p-5">
            <span className="text-xs text-swamp-green md:text-sm">
              Absences
            </span>

            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-swamp-green md:text-4xl">
                {absences}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Remarks;