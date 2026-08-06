import React from "react";

export const Row = ({ children }) => (
  <div className="flex flex-col md:flex-row md:gap-4">
    {children}
  </div>
);

export const FieldRow = Row;

export const SectionLabel = ({ title }) => (
  <p className="text-2xs font-bold uppercase tracking-widest text-[#7A8C4E] mb-3">{title}</p>
);

export const Divider = () => (
  <div className="border-t border-dashed border-gray-200 my-5" />
);

export const TextInput = ({ label, value, onChange, required }) => (
  <div className="mb-4 md:flex-1">
    <label className="block text-xs font-[PoppinsBold] text-gray-600 mb-1 tracking-wide uppercase">
      {label}{required && <span className="text-red-400 ml-1">*</span>}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7A8C4E] focus:border-transparent transition"
    />
  </div>
);

export const DateInput = ({ label, value, onChange, required }) => (
  <div className="mb-4 md:flex-1">
    <label className="block text-xs font-[PoppinsBold] text-gray-600 mb-1 tracking-wide uppercase">
      {label}{required && <span className="text-red-400 ml-1">*</span>}
    </label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7A8C4E] focus:border-transparent transition"
    />
  </div>
);

export const RadioGroup = ({ label, options, value, onChange, required }) => (
  <div className="mb-4">
    <label className="block text-xs font-[PoppinsBold] text-gray-600 mb-2 tracking-wide uppercase">
      {label}{required && <span className="text-red-400 ml-1">*</span>}
    </label>
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer text-sm transition
            ${value === opt.value
              ? "border-[#5C6B3A] bg-[#f0f3eb] text-[#3d4d20] font-[PoppinsBold]"
              : "border-gray-200 bg-white text-gray-600"
            }`}
        >
          <input
            type="radio"
            name={label}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="accent-[#5C6B3A] text-swamp-green"
          />
          {opt.label}
        </label>
      ))}
    </div>
  </div>
);

export const SelectInput = ({ label, options, value, onChange, required }) => (
  <div className="mb-4 md:flex-1">
    <label className="block text-xs font-[PoppinsBold] text-gray-600 mb-1 tracking-wide uppercase">
      {label}{required && <span className="text-red-400 ml-1">*</span>}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7A8C4E] focus:border-transparent transition"
    >
      <option value="">— Select —</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export const StepHeader = ({ number, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-9 h-9 rounded-full bg-[#5C6B3A] flex items-center justify-center text-white font-bold text-sm shrink-0">
      {number}
    </div>
    <div>
      <p className="text-2xs font-[PoppinsBold] text-[#7A8C4E] uppercase tracking-widest">Step {number}</p>
      <p className="text-sm font-bold text-[#3d4d20]">{title}</p>
    </div>
  </div>
);

export const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="flex items-center gap-1.5 mb-6">
    {Array.from({ length: totalSteps }).map((_, i) => (
      <div
        key={i}
        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
          i < currentStep ? "bg-[#5C6B3A]" : "bg-gray-200"
        }`}
      />
    ))}
  </div>
);

export const NavButtons = ({ onPrev, onNext, isFirst, isLast, isNextDisabled }) => (
  <div className="flex gap-3 mt-6">
    <button
      onClick={onPrev}
      disabled={isFirst}
      className={`flex-1 py-3 rounded-xl text-sm font-[PoppinsBold] border transition
        ${isFirst
          ? "border-gray-100 text-gray-300 bg-gray-50 cursor-not-allowed"
          : "border-[#5C6B3A] text-[#5C6B3A] bg-white active:bg-[#f0f3eb]"
        }`}
    >
      PREV
    </button>
    <button
      onClick={onNext}
      disabled={isNextDisabled}
      className={`flex-1 py-3 rounded-xl text-sm font-bold transition
        ${isNextDisabled
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-[#5C6B3A] text-white active:bg-[#3d4d20]"
        }`}
    >
      {isLast ? "SUBMIT" : "NEXT"}
    </button>
  </div>
);

export const Checkbox = ({ label, checked, onChange, required }) => (
  <label className="flex items-start gap-3 cursor-pointer mb-2">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-0.5 w-4 h-4 text-red-700 shrink-0"
    />
    <span className="text-xs text-gray-600 leading-relaxed font-[PoppinsBold]">
      {label}{required && <span className="text-red-400 ml-1">*</span>}
    </span>
  </label>
);

export const ReviewSection = ({ title, fields }) => (
  <div className="mb-5">
    <p className="text-2xs font-bold uppercase tracking-widest text-[#7A8C4E] mb-2">{title}</p>
    <div className="bg-[#F2F4EE] rounded-xl p-3 space-y-2">
      {fields.map(({ label, value }) => (
        <div key={label} className="flex justify-between items-start gap-2">
          <span className="text-xs text-gray-500 shrink-0">{label}</span>
          <span className="text-xs font-[PoppinsBold] text-gray-800 text-right">
            {value || <span className="text-gray-300 italic">—</span>}
          </span>
        </div>
      ))}
    </div>
  </div>
);