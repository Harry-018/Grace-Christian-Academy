import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const StudentInfo = ({ student, spin, setSpin, infoFields, summaryFields }) => {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-swamp-green/10 bg-bone p-3 font-[Poppins] md:gap-6 md:p-6">

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 md:gap-4">
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="text-2xs uppercase tracking-[0.2em] text-gray-500 md:text-xs">
            Enrolled Student
          </p>

          <h3 className="text-base font-[PoppinsBold] text-swamp-green md:text-2xl">
            {student.fullName}
          </h3>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setSpin(!spin)}
              className="flex items-center gap-1 rounded-lg border border-swamp-green/10 bg-white px-2 py-1 text-2xs font-semibold text-gray-500 transition hover:border-swamp-green hover:text-swamp-green"
            >
              View Student
              <ChevronDown
                size={12}
                className={`transition-transform duration-700 ${
                spin ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <Link
              to="/parents/grades"
              className="inline-flex w-fit items-center gap-1 rounded border border-swamp-green/10 bg-swamp-green px-1.5 py-0.5 text-2xs font-semibold text-white"
            >
              Grades →
            </Link>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => setSpin(!spin)}
            className="flex items-center gap-2 rounded-xl border border-swamp-green/10 bg-white px-4 py-3 text-sm font-semibold text-gray-500 transition hover:border-swamp-green hover:text-swamp-green"
          >
            View Student
            <ChevronDown
              size={18}
              className={`transition-transform duration-700 ${
              spin ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <Link
            to="/parents/grades"
            className="flex items-center gap-2 rounded-xl border border-swamp-green/10 bg-swamp-green px-4 py-3 text-sm font-semibold text-white"
          >
            Grades →
          </Link>
        </div>

      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4">
        {summaryFields.map(({ key, label, fallback }) => (
          <div key={key} className="flex flex-col justify-between rounded-2xl bg-white p-2 shadow-sm md:p-5">
            <span className="truncate text-2xs uppercase tracking-wider text-gray-500 md:text-xs">
              {label}
            </span>

            <p className="truncate text-xs font-[PoppinsBold] text-swamp-green md:text-lg">
              {student[key] || fallback}
            </p>
          </div>
        ))}
      </div>

      {/* Details */}
      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5 md:gap-4">
        {infoFields.map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className="flex flex-row items-center gap-2 rounded-2xl bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:flex-col md:gap-4 md:p-5"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-black/5 text-black md:h-11 md:w-11">
              <Icon size={12} className="md:size-5.5" />
            </div>

            <div className="flex flex-col gap-0.5 truncate">
              <span className="truncate text-2xs uppercase tracking-wider text-gray-500 md:text-xs">
                {label}
              </span>

              <p className="truncate text-[11px] font-[PoppinsBold] leading-4 text-swamp-green md:text-sm md:leading-6">
                {student[key]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentInfo;