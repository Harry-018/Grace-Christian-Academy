import React from "react";
import { useLoaderData } from "react-router-dom";

const TransportationPage = () => {
  const { transpoData } = useLoaderData();

  return (
    <div className="flex flex-col lg:py-5">
      {/* upperdiv */}
      <div className="flex flex-col gap-y-5 p-5">
        <h1 className="font-[PoppinsBold] text-swamp-green lg:text-2xl">
          Transportation
        </h1>
        <span className="flex w-full justify-between gap-x-5 rounded-2xl bg-bone p-5 text-center text-xs text-ashlight inset-shadow-med lg:text-base">
          <h2>Pickup and drop-off included</h2>
          <span className="w-0.5 bg-ashlight/50 md:hidden"></span>
          <h2>Scheduled twice a day</h2>
        </span>
      </div>

      {/* lowerdiv */}
      <div className="flex h-150 flex-col overflow-hidden py-5 md:h-auto md:w-160 lg:w-250 xl:w-300">
        <h3 className="px-5 py-5 font-[PoppinsBold] text-swamp-green lg:text-lg">
          Location Estimate
        </h3>

        <div className="no-scrollbar flex flex-col gap-5 overflow-y-auto px-5 py-3 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {transpoData.map((transpo) => (
            <div
              key={transpo.transpo_id}
              className="flex items-center justify-between gap-x-3 rounded-2xl bg-bone p-5 inset-shadow-med lg:p-8"
            >
              <div className="flex flex-col">
                <h4 className="font-[Poppins] text-sm text-swamp-green lg:text-lg">
                  {transpo.location}
                </h4>

                <p className="text-2xs text-ashlight lg:text-sm">
                  {transpo.distance} km from school
                </p>
              </div>

              <div className="flex font-[PoppinsBold] text-lg text-swamp-green lg:text-2xl">
                <span className="font-sans font-extrabold">₱</span>
                {transpo.price}
              </div>
            </div>
          ))}
          {/* this section wont render on vercel because its using a localhost as it's api yah yah yah*/}
        </div>
      </div>

      <div className="p-5 text-bone md:w-160 lg:w-250 xl:w-300">
        <p className="rounded-2xl bg-forest-green p-5 text-justify text-sm inset-shadow-med lg:text-sm">
          Note: These rates are based on standard routes. The final
          transportation fee may vary depending on the exact pickup location and
          van availability. If you would like to avail of the transportation
          service, please first visit the school on your selected schedule.
          Kindly coordinate with the school office for further assistance. Thank
          You!
        </p>
      </div>
    </div>
  );
};

export default TransportationPage;
