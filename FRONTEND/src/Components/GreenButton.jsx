import React from "react";

const GreenButton = ({ Label, onClick, Ptitle, children }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-swamp-green px-4 py-2 font-[PoppinsBold] text-sm text-bone inset-shadow-small duration-150 active:scale-90 active:bg-lime-green"
    >
      {children ?? (
        <>
          {Label} {Ptitle}
        </>
      )}
    </button>
  );
};

export default GreenButton;
