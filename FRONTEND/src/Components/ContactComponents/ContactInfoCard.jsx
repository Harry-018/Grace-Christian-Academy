import React from "react";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const contactItems = [
  {
    icon: Phone,
    title: "Phone Number",
    details: ["+63 992 641 8527"],
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "gracechristianacademy@gca.edu.ph"
    ],
  },
  {
    icon: FaFacebook,
    title: "Facebook Page",
    details: [
      "Grace Christian Academy",
      "Cavite Inc.",
    ],
  },
  {
    icon: Clock3,
    title: "Working Hours",
    details: [
      "Monday - Friday",
      "8:00 AM - 5:00 PM",
    ],
  },
];

const ContactInfoCard = () => {
  return (
    <>
    <div className="text-swamp-green rounded-md text-center mb-6 font-[Poppins] cursor-default">  
        <h2 className="text-5xl font-[PoppinsBold]">
          Get in Touch! 
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-[Poppins] cursor-default">
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="border rounded-xl shadow-4xl p-8 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
            >
              <Icon
                size={50}
                className="text-cgaGreen mb-4"
              />

              <h3 className="text-lg font-bold text-gray-800 px-3 py-3 font-[PoppinsBold]">
                {item.title}
              </h3>

              {item.details.map((detail, i) => (
                <p
                  key={i}
                  className="text-gray-600 text-2xs font-[PoppinsBold]"
                >
                  {detail}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactInfoCard;