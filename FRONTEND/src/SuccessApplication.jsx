import React from "react";
import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

const SuccessApplication = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-y-5 p-5 font-[Poppins]">
      <div className="flex h-100 max-w-lg flex-col items-center justify-around rounded-2xl bg-bone p-5 text-center inset-shadow-med">
        <MailCheck className="scale-300 text-swamp-green" />

        <span className="flex flex-col gap-5">
          <h1 className="text-2xl">Thank you for applying!</h1>
          <h3 className="text-ashlight">
            Please wait 3-4 working days to receive the result of your
            application. On the email you have provided.
          </h3>
          <Link to="/">
            <button className="cursor-pointer rounded-sm bg-swamp-green p-3 text-sm text-neutral-50 inset-shadow-small duration-200 active:scale-95">
              Go Home
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SuccessApplication;
