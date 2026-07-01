import React from "react";

const GreenButton = ({ Label, onClick, Ptitle }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-full bg-swamp-green px-4 py-2 font-[PoppinsBold] text-sm text-bone inset-shadow-small duration-150 active:scale-90 active:bg-lime-green"
    >
      {Label} {Ptitle}
    </button>
  );
};

export default GreenButton;
