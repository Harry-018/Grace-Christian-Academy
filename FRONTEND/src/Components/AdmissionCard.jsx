import React from "react";

const AdmissionCard = ({ Icon, Atitle }) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-bone p-5 inset-shadow-med">
      <span className="text-swamp-green">{Icon}</span>
      <span className="text-xs xs:text-sm lg:text-base">{Atitle}</span>
    </div>
  );
};

export default AdmissionCard;
