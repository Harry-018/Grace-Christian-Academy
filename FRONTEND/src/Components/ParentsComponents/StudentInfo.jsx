import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const StudentInfoCard = ({
  studentName = "Santiago, Margarett",
  selectedName = "Margarette",
  lrn = "not applicable",
  schoolYear = "2025-2026",
  classSchedule = "Monday - Thursday",
  gradeLevel = "NURSERY",
  classTime = "7:00 am - 11:00 am",
  roomNo = "Magohany - 3",
  adviser = "Ms. Rosary Mendez",
  onSeeGrades = () => {},
}) => {
  const [open, setOpen] = useState(false);

  const details = [
    { label: "Class Schedule", value: classSchedule },
    { label: "Grade Level", value: gradeLevel },
    { label: "Class Time", value: classTime },
    { label: "Room No.", value: roomNo },
    { label: "Adviser", value: adviser },
  ];

  return (
    <div className="w-full font-[Poppins]">
      {/* Student selector dropdown */}
      <div className="w-full py-2">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-xl px-4 py-1.5 text-xs font-[PoppinsBold] bg-swamp-green text-white shadow-sm transition hover:brightness-95 sm:px-5 sm:py-2 sm:text-sm"
        >
          {selectedName}
          <ChevronDown
            size={16}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Info card */}
      <div className="w-full rounded-2xl bg-bone px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:px-8 md:py-6">
        {/* Top row */}
        <div className="flex flex-col gap-2 border-b border-black/5 pb-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pb-4">
          <h2 className="text-sm font-bold text-swamp-green font-[PoppinsBold] sm:text-lg md:text-xl lg:text-2xl">
            {studentName}
          </h2>

          <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-4 sm:text-sm">
            <span className="text-gray-700">
              <span className="font-semibold text-swamp-green">LRN : </span>
              <span className="text-gray-400">{lrn}</span>
            </span>
            <span className="text-gray-700">
              <span className="font-semibold text-swamp-green">School Year : </span>
              {schoolYear}
            </span>
            <button
              type="button"
              onClick={onSeeGrades}
              className="rounded-xl px-3 py-1 text-xs font-[PoppinsBold] text-white bg-swamp-green shadow-sm transition hover:brightness-95 sm:px-4 sm:py-1.5 sm:text-sm"
            >
              See Grades
            </button>
          </div>
        </div>

        {/* Detail columns */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 pt-4 sm:grid-cols-3 sm:gap-y-5 md:grid-cols-5">
          {details.map((d) => (
            <div key={d.label} className="flex flex-col gap-0.5 sm:gap-1">
              <span className="text-[11px] font-[PoppinsBold] text-swamp-green sm:text-xs md:text-sm">
                {d.label}
              </span>
              <span className="text-[11px] text-gray-700 sm:text-xs md:text-sm">
                {d.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;
