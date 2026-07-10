import React from "react";

const GreenButton = ({ disable, Label, onClick }) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={`rounded-full px-4 py-2 font-[PoppinsBold] text-sm text-bone inset-shadow-small duration-150 ${
        disable
          ? "cursor-not-allowed bg-gray-400 opacity-60"
          : "cursor-pointer bg-swamp-green active:scale-90 active:bg-lime-green"
      }`}
    >
      {Label}
    </button>
  );
};
export default GreenButton;
