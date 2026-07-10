import { React, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { EditIcon, PlusCircle, Trash } from "lucide-react";
import TranspoManagementStore from "../../Store/TranspoManagementStore";

const Transport = () => {
  const { transpoData } = useLoaderData();

  const openEditTranspoModal = TranspoManagementStore(
    (state) => state.openEditTranspoModal,
  );

  const openPostTranspoModal = TranspoManagementStore(
    (state) => state.openPostTranspoModal,
  );
  const openDeleteTranspoModal = TranspoManagementStore(
    (state) => state.openDeleteTranspoModal,
  );

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-2xl">
        <div className="flex items-center justify-between rounded-2xl bg-bone p-5 inset-shadow-med">
          <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
            Location
          </h1>
          <button
            onClick={() => openPostTranspoModal()}
            className="flex cursor-pointer items-center rounded-lg text-xs text-swamp-green active:scale-95 md:text-sm lg:text-base"
          >
            <PlusCircle className="h-5" />
            Add
          </button>
        </div>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {transpoData.map((transpo) => {
            return (
              <div className="flex max-w-full flex-col gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
                <span className="flex gap-3 self-end lg:gap-5">
                  <button
                    onClick={() => openEditTranspoModal(transpo)}
                    className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base"
                  >
                    <EditIcon className="h-5" />
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      openDeleteTranspoModal(transpo);
                    }}
                    className="flex cursor-pointer items-center rounded-lg text-xs text-reject active:scale-95 md:text-sm lg:text-base"
                  >
                    <Trash className="h-5" />
                    Delete
                  </button>
                </span>
                <span className="flex flex-col gap-2">
                  <h3 className="text-xs">Location:</h3>
                  <div className="flex gap-2 rounded-lg border border-swamp-green p-2 text-sm text-ashlight">
                    {transpo.location}
                  </div>
                </span>
                <div className="flex justify-between">
                  <span className="flex flex-col gap-2">
                    <h3 className="text-xs">Distance (km):</h3>
                    <div className="flex w-fit gap-2 rounded-lg border border-swamp-green p-2 text-sm text-ashlight">
                      {transpo.distance}
                    </div>
                  </span>
                  <span className="flex flex-col gap-2">
                    <h3 className="text-xs">Price:</h3>
                    <div className="flex w-25 gap-2 rounded-lg border border-swamp-green p-2 text-sm text-ashlight">
                      ₱ {transpo.price}
                    </div>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transport;
