import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="w-full rounded-3xl border border-swamp-green bg-white p-6 font-[Poppins] shadow-xl transition hover:-translate-y-1 hover:shadow-lg cursor-default">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Full Name
          </p>
          <p className="text-base font-[PoppinsBold] uppercase leading-snug text-forest-green">
            {student.fullName}
          </p>
        </div>
        <div className="rounded-full bg-bone px-3 py-2 text-sm font-[PoppinsBold] text-lime-dark">
          Active Enrollment
        </div>
      </div>

      <div className="grid gap-4 px-1 py-4 md:grid-cols-3">
        <div className="rounded-2xl bg-bone p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ashlight">
            LRN
          </p>
          <p className="pt-3 text-sm font-[PoppinsBold] leading-relaxed text-lime-dark">
            {student.lrn}
          </p>
        </div>

        <div className="rounded-2xl bg-bone p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ashlight">
            Grade Level
          </p>
          <p className="pt-3 text-sm font-[PoppinsBold] uppercase leading-relaxed text-lime-dark">
            {student.gradeLevel}
          </p>
        </div>

        <div className="rounded-2xl bg-bone p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ashlight">
            Tuition
          </p>
          <p className="pt-3 text-sm font-[PoppinsBold] uppercase leading-relaxed text-lime-dark">
            {student.tuition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;