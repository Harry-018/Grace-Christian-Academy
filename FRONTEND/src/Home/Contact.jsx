import React from "react";
import Form from "../Components/ContactComponents/Form.jsx"
import ContactInfoCard from "../Components/ContactComponents/ContactInfoCard.jsx";
import ContactMap from "../Components/ContactComponents/ContactMap.jsx";


const Contact = () => {
  return (
    <div className="flex flex-col font-[Poppins]">
      <div className="min-h-screen px-4 py-10 sm:px-6">
        <span className="flex sm:p-6 text-swamp-green text-3xl sm:text-4xl md:text-5xl font-[PoppinsBold]">Contact Us?</span>

        <div className="max-w-7xl mx-auto flex flex-col gap-5 items-center lg:flex-row lg:items-start lg:justify-between py-8">
          <div className="w-full md:w-[60%] lg:w-[60%]">
            <Form />
          </div>

          <div className="w-full lg:w-full text-swamp-green">
            <ContactInfoCard />
          </div>
        </div>

        <div className="flex py-10">
          <ContactMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;