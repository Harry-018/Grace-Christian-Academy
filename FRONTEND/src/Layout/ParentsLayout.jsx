import React from "react";
import { Outlet } from "react-router-dom";
import ParentsHeader from "../Components/ParentsHeader";
import Copyright from "../Components/Copyright";

const ParentsLayout = () => {
  return (
    <div className="flex flex-col justify-between">
        <ParentsHeader />

      <div className="h-full justify-center bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </div>

      <Copyright />
    </div>
  );
};

export default ParentsLayout;
