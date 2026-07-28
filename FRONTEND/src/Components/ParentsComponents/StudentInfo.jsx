import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const StudentInfoCard = ({
  selectedName = "Villa, Margarette",
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
    <div className="mx-auto max-w-7xl w-full font-[Poppins] px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Card */}
      <div className="w-full rounded-2xl bg-bone px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:px-8 md:py-6">
        {/* Top Section */}
        <div className="flex flex-col gap-4 border-b border-black/10 pb-4 sm:pb-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Student Name */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex w-fit rounded-xl bg-swamp-green gap-2 items-center px-4 py-2.5 text-sm font-[PoppinsBold] text-white shadow-sm transition hover:brightness-95 sm:py-2 sm:gap-3 sm:text-md"
          >
            {selectedName}
            <ChevronDown
              size={18}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {/* Right Side */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:gap-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-[11px] sm:text-sm">
                <span className="font-[PoppinsBold] text-swamp-green">
                  LRN :
                </span>{" "}
                <span className="text-gray-400">{lrn}</span>
              </span>

              <span className="text-[11px] sm:text-sm">
                <span className="font-[PoppinsBold] text-swamp-green">
                  School Year :
                </span>{" "}
                {schoolYear}
              </span>
            </div>

            <button
              type="button"
              onClick={onSeeGrades}
              className="rounded-xl bg-swamp-green w-fit px-5 py-2.5 text-sm font-[PoppinsBold] text-white shadow-sm transition hover:brightness-95 sm:py-2"
            >
              See Grades
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-3 sm:gap-5 sm:pt-5 lg:grid-cols-5">
          {details.map((detail) => (
            <div key={detail.label}>
              <p className="text-[11px] sm:text-sm font-[Poppins] text-swamp-green">
                {detail.label}
              </p>
              <p className="mt-1 text-[11px] sm:text-sm text-gray-700">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCard;