import React from "react";
import { Outlet } from "react-router-dom";
import ParentsHeader from "../Components/ParentsHeader";

const ParentsLayout = () => {
  return (
    <div className="flex flex-col justify-between">
        <ParentsHeader />

      <div className="h-full justify-center bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </div>
    </div>
  );
};

export default ParentsLayout;
