import React from "react";
import GuardianCards from "../Components/SecurityComponents/GuardianCards";


const guardian = {
  lastName: "ROMASANTA",
  firstName: "ROSALINE",
  middleName: "MADRIGAL",
  gender: "FEMALE",
  contactNo: "09123456789",
};

const account = {
  email: "romasanta@gmail.com",
};

const Security = () => {
  return (
    <div className="flex flex-col max-w-4xl font-[Poppins]">
        <h2 className="flex font-[poppinsBold] text-3xl text-swamp-green py-20 px-30">
            ACCOUNT SETTINGS 
        </h2>


    <div className="min-h-full flex justify-start items-center p-40 py-5">
      <GuardianCards guardian={guardian} account={account} />
    </div>
    </div>
  );
};

export default Security;