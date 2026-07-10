import React from "react";

const StepCard = ({ step, title, description, Icon }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl xs:gap-5 lg:gap-8">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-swamp-green text-white xs:h-12 xs:w-12 lg:h-15 lg:w-15">
        {Icon}
      </div>

      <div className="flex flex-col justify-center gap-2">
        <h2 className="font-[PoppinsBold] text-xs text-swamp-green xs:text-sm lg:text-base">
          {step} {title}
        </h2>

        <p className="font-[Poppins] text-xs xs:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
