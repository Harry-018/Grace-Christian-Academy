import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full h-full sm:h-130 lg:h-170 overflow-hidden backdrop-blur px-10">
      <iframe
        className="w-400 h-300 rounded-3xl justify-center"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Grace Christian Academy of Cavite Inc.&output=embed"
        title="Grace Christian Academy map"
      ></iframe>
    </div>
  );
};

export default ContactMap;