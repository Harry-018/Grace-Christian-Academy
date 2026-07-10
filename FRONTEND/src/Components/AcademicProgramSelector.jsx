import React from "react";

const AcademicProgramSelector = ({
  programData,
  selectedProgramId,
  onSelectProgram,
}) => {
  return (
    <div className="flex justify-between gap-y-3">
      <div className="no-scrollbar flex gap-x-5 overflow-x-auto">
        {programData.map((program) => {
          const isActive = selectedProgramId === program.id;

          return (
            <button
              key={program.id}
              onClick={() => onSelectProgram(program.id)}
              className={`min-w-fit cursor-pointer text-xs md:text-sm ${
                isActive ? "border-b text-swamp-green" : "text-ashlight"
              } pb-2`}
            >
              {program.program}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AcademicProgramSelector;
