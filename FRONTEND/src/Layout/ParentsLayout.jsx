import React from "react";
import { Outlet } from "react-router-dom";
import ParentsHeader from "../Components/ParentsHeader";
import Copyright from "../Components/Copyright";

const ParentsLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <ParentsHeader />
      <main className="flex-1 bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </main>
      <Copyright />
    </div>
  );
};

export default ParentsLayout;
