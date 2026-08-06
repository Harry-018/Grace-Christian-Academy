import React from "react";
import { Outlet } from "react-router-dom";
import TeacherHeader from "../Components/TeacherHeader";
import Copyright from "../Components/Copyright";

const TeacherLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <TeacherHeader />
      <main className="flex-1 bg-egg font-[Poppins] text-egg-dark">
        <Outlet />
      </main>
      <Copyright />
    </div>
  );
};

export default TeacherLayout;
