import { MapPinHouse } from "lucide-react";
import React from "react";

const ContactMap = () => {
  return (
    <div className="mx-auto w-full max-w-6xl rounded-3xl bg-swamp-green p-4 sm:p-6 md:p-10 shadow-xl shadow-swamp-green backdrop-blur-5xl font-[Poppins] cursor-default">
      <div className="flex flex-wrap items-center gap-3 text-red-500">
        <h2 className="text-2xl font-[PoppinsBold] uppercase tracking-widest sm:text-3xl md:text-4xl">
          Find us here
        </h2>
        <MapPinHouse size={45} className="text-red lg:3xl md:text-2xl sm:text-2xs" />
      </div>
      <p className="py-2 max-w-3xl text-sm text-white sm:text-base">See our campus location and get directions directly from Google Maps.</p>
      <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/90 aspect-5/3 sm:aspect-video">
        <iframe
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Grace Christian Academy of Cavite Inc.&output=embed"
          aria-label="Grace Christian Academy map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;