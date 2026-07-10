import { React, useState } from "react";
import { MenuIcon, X } from "lucide-react";
import {
  LayoutDashboard,
  FileUser,
  User,
  MonitorCog,
  LogOut,
  UserPen,
  GraduationCap,
  FileInput,
} from "lucide-react";
import { NavLink, Link } from "react-router-dom";

import AuthStore from "../Store/AuthStore";

const SideNav = () => {
  const [sidebar, setSideBar] = useState(false);
  const [logout, setLogout] = useState(false);

  const Logout = AuthStore((state) => state.logout);

  return (
    <div className="flex w-full lg:max-w-90">
      {/* for mobile to tablet */}
      <div className="relative z-50 flex h-15 w-full items-center gap-x-5 bg-bone p-3 text-xs inset-shadow-med lg:hidden">
        <MenuIcon
          onClick={() => {
            setSideBar(!sidebar);
          }}
        />
        <span>
          <Link to="/admin">
            <span>Admin Panel</span>
          </Link>
        </span>
      </div>
      {/* for laptop and above */}
      <div className="hidden h-screen w-full flex-col gap-y-5 bg-egg p-5 inset-shadow-small lg:flex">
        <div className="flex items-center justify-around rounded-2xl bg-bone p-5 inset-shadow-med">
          <img
            src="/assets/logowbg.png"
            alt="Logo"
            className="size-10 rounded-full"
          />
          <h1>Grace Christian Academy</h1>
        </div>
        <div className="flex h-full flex-col rounded-2xl bg-bone p-5 inset-shadow-med">
          <span className="flex h-full flex-col justify-between">
            <div className="flex flex-col">
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  `${isActive ? "rounded-lg bg-swamp-green font-[PoppinsBold] text-egg inset-shadow-small " : " text-ashlight"} flex h-12 items-center gap-x-5 px-3 text-xs duration-300 hover:scale-95`
                }
              >
                <LayoutDashboard className="size-5" />
                <span>Dashboard</span>
              </NavLink>
              <NavLink
                to="application"
                className={({ isActive }) =>
                  `${isActive ? "rounded-lg bg-swamp-green font-[PoppinsBold] text-egg inset-shadow-small " : " text-ashlight"} flex h-12 items-center gap-x-5 px-3 text-xs duration-300 hover:scale-95`
                }
              >
                <FileUser className="size-5" />
                <span>Applications</span>
              </NavLink>
              <NavLink
                to="submission"
                className={({ isActive }) =>
                  `${isActive ? "rounded-lg bg-swamp-green font-[PoppinsBold] text-egg inset-shadow-small " : " text-ashlight"} flex h-12 items-center gap-x-5 px-3 text-xs duration-300 hover:scale-95`
                }
              >
                <FileInput className="size-5" />
                <span>Submissions</span>
              </NavLink>
              <NavLink
                to="student"
                className={({ isActive }) =>
                  `${isActive ? "rounded-lg bg-swamp-green font-[PoppinsBold] text-egg inset-shadow-small " : " text-ashlight"} flex h-12 items-center gap-x-5 px-3 text-xs duration-300 hover:scale-95`
                }
              >
                <User className="size-5" />
                <span>Students</span>
              </NavLink>
              <NavLink
                to="teacher"
                className={({ isActive }) =>
                  `${isActive ? "rounded-lg bg-swamp-green font-[PoppinsBold] text-egg inset-shadow-small " : " text-ashlight"} flex h-12 items-center gap-x-5 px-3 text-xs duration-300 hover:scale-95`
                }
              >
                <UserPen className="size-5" />
                <span>Teachers</span>
              </NavLink>
              <NavLink
                to="class"
                className={({ isActive }) =>
                  `${isActive ? "rounded-lg bg-swamp-green font-[PoppinsBold] text-egg inset-shadow-small " : " text-ashlight"} flex h-12 items-center gap-x-5 px-3 text-xs duration-300 hover:scale-95`
                }
              >
                <GraduationCap className="size-5" />
                <span>Classes</span>
              </NavLink>

              <NavLink
                to="webmanagement"
                className={({ isActive }) =>
                  `${isActive ? "rounded-lg bg-swamp-green font-[PoppinsBold] text-egg inset-shadow-small " : " text-ashlight"} flex h-12 items-center gap-x-5 px-3 text-xs duration-300 hover:scale-95`
                }
              >
                <MonitorCog className="size-5" />
                <span>Website Management</span>
              </NavLink>
            </div>

            <button
              onClick={() => {
                setLogout(!logout);
              }}
              className="flex h-12 cursor-pointer items-center gap-x-5 px-3 text-xs text-ashlight hover:text-reject"
            >
              <LogOut className="size-5" />
              Logout
            </button>
          </span>
        </div>
      </div>

      {sidebar && (
        <div className="fixed top-0 z-50 h-full w-full bg-egg-dark/50">
          <span className="md: flex h-full max-w-[60%] flex-col justify-between gap-y-5 bg-bone p-5 xs:max-w-[40%]">
            <div className="flex flex-col gap-y-5">
              <X
                onClick={() => {
                  setSideBar(!sidebar);
                }}
              />
              <div className="flex flex-col">
                <NavLink
                  to="/admin"
                  end
                  className={({ isActive }) =>
                    `${isActive ? " text-swamp-green " : " text-ashlight"} flex h-12 items-center gap-x-2 px-3 text-sm`
                  }
                >
                  <span>Dashboard</span>
                </NavLink>
                <NavLink
                  to="application"
                  className={({ isActive }) =>
                    `${isActive ? "text-swamp-green" : " text-ashlight"} flex h-12 items-center gap-x-2 px-3 text-sm`
                  }
                >
                  <span>Applications</span>
                </NavLink>
                <NavLink
                  to="submission"
                  className={({ isActive }) =>
                    `${isActive ? "text-swamp-green" : " text-ashlight"} flex h-12 items-center gap-x-2 px-3 text-sm`
                  }
                >
                  <span>Submissions</span>
                </NavLink>
                <NavLink
                  to="student"
                  className={({ isActive }) =>
                    `${isActive ? "text-swamp-green" : " text-ashlight"} flex h-12 items-center gap-x-2 px-3 text-sm`
                  }
                >
                  <span>Students</span>
                </NavLink>
                <NavLink
                  to="teacher"
                  className={({ isActive }) =>
                    `${isActive ? "text-swamp-green" : " text-ashlight"} flex h-12 items-center gap-x-2 px-3 text-sm`
                  }
                >
                  <span>Teachers</span>
                </NavLink>
                <NavLink
                  to="class"
                  className={({ isActive }) =>
                    `${isActive ? "text-swamp-green" : " text-ashlight"} flex h-12 items-center gap-x-2 px-3 text-sm`
                  }
                >
                  <span>Classes</span>
                </NavLink>
                <NavLink
                  to="webmanagement"
                  className={({ isActive }) =>
                    `${isActive ? "text-swamp-green" : " text-ashlight"} flex h-12 items-center gap-x-2 px-3 text-sm`
                  }
                >
                  <span>Website Management</span>
                </NavLink>
              </div>
            </div>

            <button
              onClick={() => {
                setLogout(!logout);
              }}
              className="flex h-10 items-center text-sm text-reject"
            >
              Logout
            </button>
          </span>
        </div>
      )}
      {logout && (
        <div className="fixed z-999 flex h-full w-full items-center justify-center bg-neutral-500/50">
          <div className="flex h-30 w-75 flex-col items-center justify-center gap-y-3 rounded-2xl bg-bone inset-shadow-med">
            <span className="text-xs md:text-sm">
              Are you sure you want to logout?
            </span>
            <div className="flex">
              <button
                className="cursor-pointer p-3 px-3 py-2 text-sm text-ashlight"
                onClick={() => {
                  setLogout(!logout);
                }}
              >
                Cancel
              </button>

              <button
                onClick={() => Logout()}
                className="cursor-pointer rounded-lg bg-reject px-3 py-2 text-sm text-bone inset-shadow-small duration-300 hover:scale-105 active:scale-95"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
