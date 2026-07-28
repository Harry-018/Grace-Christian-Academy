import React from "react";
import {
  CalendarDays,
  School,
  DoorOpen,
  Clock3,
  UserRound,
  ChevronDown,
} from "lucide-react";

const INFO_FIELDS = [
  {
    key: "classSchedule",
    label: "Class Schedule",
    icon: CalendarDays,
  },
  {
    key: "gradeLevel",
    label: "Grade Level",
    icon: School,
  },
  {
    key: "room",
    label: "Room",
    icon: DoorOpen,
  },
  {
    key: "classTime",
    label: "Class Time",
    icon: Clock3,
  },
  {
    key: "adviser",
    label: "Adviser",
    icon: UserRound,
  },
];

const StudentCard = ({ student }) => {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-swamp-green/10 bg-bone p-6">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Enrolled Student
              </p>

              <h3 className="text-2xl font-[PoppinsBold] text-swamp-green">
                {student.fullName}
              </h3>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl border border-swamp-green/10 bg-white px-4 py-3 text-sm font-semibold text-gray-500 transition hover:border-swamp-green hover:text-swamp-green"
        >
          View Student
          <ChevronDown size={18} />
        </button>

      </div>

      {/* Summary */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-2xl bg-white p-5 shadow-sm">
          <span className="text-xs uppercase tracking-wider text-gray-500">
            School Year
          </span>

          <p className="text-lg font-[PoppinsBold] text-swamp-green">
            {student.sy}
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl bg-white p-5 shadow-sm">
          <span className="text-xs uppercase tracking-wider text-gray-500">
            Learner Reference Number
          </span>

          <p className="text-lg font-[PoppinsBold] text-swamp-green">
            {student.lrn || "Not Available"}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {INFO_FIELDS.map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 text-black">
              <Icon size={22} />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-gray-500">
                {label}
              </span>

              <p className="text-sm font-[PoppinsBold] leading-6 text-swamp-green">
                {student[key]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;