import React from "react";
import Form from "../Components/ContactComponents/Form.jsx"
import ContactInfoCard from "../Components/ContactComponents/ContactInfoCard.jsx";
import ContactMap from "../Components/ContactComponents/ContactMap.jsx";


const Contact = () => {
  return (
    <div className="flex flex-col font-[Poppins]">
      <div className="min-h-screen px-10 py-5">

        <div className="max-w-7xl mx-auto flex flex-col gap-5 items-center lg:flex-row lg:items-start lg:justify-between py-20">
          <div className="w-full md:w-[60%] lg:w-[60%]">
            <Form />
          </div>

          <div className="w-full lg:w-full text-swamp-green">
            <ContactInfoCard />
          </div>
        </div>

        <div className="flex ">
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;