import React from "react";
import { Outlet, NavLink } from "react-router-dom";
const WebManagementLayout = () => {
  return (
    <div className="flex flex-col gap-y-5 font-[Poppins]">
      <div className="w-full rounded-2xl lg:rounded-2xl lg:bg-bone lg:p-5 lg:inset-shadow-med">
        Website Management
      </div>
      <div className="flex overflow-hidden">
        <div className="no-scrollbar flex h-12 items-center overflow-x-auto px-2 text-xs">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              `${isActive ? " rounded-lg bg-swamp-green text-bone inset-shadow-small" : "text-ashlight"} p-3 duration-300`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="tuition"
            className={({ isActive }) =>
              `${isActive ? " rounded-lg bg-swamp-green text-bone inset-shadow-small" : "text-ashlight"} p-3 duration-300`
            }
          >
            Tuitions
          </NavLink>
          <NavLink
            to="transport"
            className={({ isActive }) =>
              `${isActive ? " rounded-lg bg-swamp-green text-bone inset-shadow-small" : "text-ashlight"} p-3 duration-300`
            }
          >
            Transportation
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default WebManagementLayout;
