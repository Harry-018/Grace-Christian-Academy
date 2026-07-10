import React from "react";
import { Link } from "react-router-dom";
import AdmissionCard from "../Components/AdmissionCard";
import { FileBadge, Camera, File, Form, Mail, BadgeCheck } from "lucide-react";
import StepCard from "../Components/StepCard.jsx";

const AdmissionPage = () => {
  return (
    <div className="flex flex-col items-center gap-y-15 p-5 lg:grid lg:grid-cols-2 lg:items-start lg:p-10">
      <div className="flex w-full flex-col gap-y-10">
        <h1 className="font-[PoppinsBold] text-swamp-green xs:text-xl lg:text-2xl">
          ADMISSION
        </h1>
        <div className="flex flex-col items-center gap-y-3 lg:gap-y-5">
          <h3 className="text-xs md:text-sm">
            Please prepare the following documents
          </h3>
          <div className="grid grid-cols-2 gap-5">
            <AdmissionCard
              Icon={<FileBadge className="xs:size-10 lg:size-15" />}
              Atitle={"PSA"}
            />
            <AdmissionCard
              Icon={<Camera className="xs:size-10 lg:size-15" />}
              Atitle={"2x2 ID Picture"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-10">
        <h1 className="font-[PoppinsBold] text-swamp-green xs:text-xl lg:text-2xl">
          ADMISSION PROCESS
        </h1>
        <div className="flex flex-col items-center gap-y-3 lg:gap-y-5">
          <h3 className="text-center text-xs xs:text-sm">
            Please follow these simple steps to complete your admission
            application.
          </h3>
          <div className="flex flex-col gap-y-5 rounded-2xl bg-bone p-5 inset-shadow-med xs:gap-y-8 lg:gap-y-10 lg:p-10">
            <StepCard
              Icon={<File className="size-5 lg:size-8" />}
              title={"STEP 1: FILL OUT FORM"}
              description={"Complete the online application form"}
            />
            <StepCard
              Icon={<Mail className="size-5 lg:size-8" />}
              title={"STEP 2: WAIT FOR EMAIL"}
              description={
                "Wait for confirmation message and date of submission"
              }
            />

            <StepCard
              Icon={<Form className="size-5 lg:size-8" />}
              title={"STEP 3: REQUIREMENTS"}
              description={"The following requirements must be submitted"}
            />

            <StepCard
              Icon={<BadgeCheck className="size-5 lg:size-8" />}
              title={"STEP 4: ENROLLMENT"}
              description={
                "Complete enrollment and become a part of Grace Christian Academy"
              }
            />
          </div>
          <Link
            to="/enrollment"
            className="w-full rounded-lg bg-swamp-green p-3 text-center font-[PoppinsBold] text-bone inset-shadow-med duration-300 hover:opacity-75 active:scale-95 lg:text-xl"
          >
            FILL OUT FORM
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
