import React from "react";
import { X } from "lucide-react";

function SkillRow({ name, detail, grade }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-300 py-4 last:border-b-0">
      <div>
        <p className="text-sm font-[PoppinsBold] px-2 text-slate-800">{name}</p>
        {detail && <p className="text-sm px-2 text-slate-500">({detail})</p>}
      </div>
      <span className="text-xl px-10 font-[PoppinsBold] text-swamp-green">{grade}</span>
    </div>
  );
}

function GradesModal({ category, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between">
            <span className="rounded-md bg-swamp-green px-4 py-2 text-sm font-[PoppinsBold] uppercase text-bone">
              {category.label}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-md p-1 text-slate-400 hover:text-slate-600"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex justify-between border-b border-slate-400 pb-2 text-sm text-slate-500">
            <span>Skills</span>
            <span>Grades</span>
          </div>

          {category.skills.map((skill) => (
            <SkillRow key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GradesModal;