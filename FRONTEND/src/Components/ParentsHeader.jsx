import React, { useState } from "react";
import { MenuIcon, X, LogOut, User, ChevronDown, Settings, Home, Bus, CreditCard, ClipboardList, LayoutDashboard } from "lucide-react";
import GreenButton from "./GreenButton";
import { NavLink, useNavigate, Link } from "react-router-dom";

const ParentsHeader = () => {
  const [sidebar, setSideBar] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="font-[Poppins]">
      <div className="relative z-50 flex w-full items-center justify-around bg-bone p-3 text-xs inset-shadow-small lg:hidden">
        <MenuIcon
          onClick={() => {
            setSideBar(!sidebar);
          }}
        />
        <span className="flex items-center gap-x-2">
          <img src="/assets/logowbg.png" alt="" className="h-8 rounded-full" />
          <Link to="/">
            <span>Grace Christian Academy</span>
          </Link>
        </span>

        <GreenButton onClick={() => navigate("/tuition")} Label={"Login"} />
      </div>

      <div className="relative z-50 hidden h-20 w-full items-center justify-between bg-[#0c2423] p-5 px-10 text-xs inset-shadow-med lg:flex">
        <span className="flex items-center gap-x-5">
          <img
            src="/assets/logowbg.png"
            alt=""
            className="h-8 rounded-full lg:h-12"
          />
          <Link to="/">
            <h1 className="text-sm tracking-[0.30em] text-bone">
              Grace Christian Academy Cavite Inc. <br />
            </h1>
            <span className="font-[PoppinsBold] text-base text-bone">
              Grace Christian Academy
            </span>
          </Link>
        </span>

        <span className="px-auto flex items-center gap-x-8">
          <NavLink
            to="/parents"
            className={({ isActive }) =>
              `${isActive ? "text-swamp-green" : "text-bone"} flex items-center gap-x-2 font-[PoppinsBold] tracking-wide`
            }
          >
            <LayoutDashboard size={18} />
            DASHBOARD
          </NavLink>

          {/* User dropdown */}
          <div className="relative">
            <button
              onClick={() => setUserMenu(!userMenu)}
              className="flex items-center gap-x-2 text-bone"
            >
              <User size={18} />
              <span className="font-[PoppinsBold]">Rosamanta</span>
              <ChevronDown
                size={14}
                className={`transition-transform ${userMenu ? "rotate-180" : ""}`}
              />
            </button>

            {userMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-bone p-2 shadow-lg">
                <button
                  onClick={() => {
                    setUserMenu(false);
                    navigate("/account-settings");
                  }}
                  className="flex w-full items-center gap-x-3 rounded-lg px-3 py-2 text-left text-ashlight hover:bg-egg-dark/10"
                >
                  <Settings size={16} />
                  Account Settings
                </button>
                <button
                  onClick={() => {
                    setUserMenu(false);
                    navigate("/");
                  }}
                  className="flex w-full items-center gap-x-3 rounded-lg px-3 py-2 text-left text-red-500 hover:bg-red-50"
                >
                  <LogOut size={16} />
                  Log Out
                </button>
              </div>
            )}
          </div>
        </span>
      </div>

      {sidebar && (
        <div className="fixed top-0 z-50 h-full w-full bg-neutral-500/50">
          <span className="flex h-full w-[60%] flex-col gap-y-5 bg-bone p-5 md:w-[30%]">
            <X
              onClick={() => {
                setSideBar(!sidebar);
              }}
            />
            <div className="flex flex-col gap-y-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? " bg-swamp-green text-bone" : " text-swamp-green"} flex h-10 items-center justify-center gap-x-2 rounded-xl font-[PoppinsBold] text-xs`
                }
              >
                <Home size={16} />
                <span>Home</span>
              </NavLink>
              <NavLink
                to="transport"
                className={({ isActive }) =>
                  `${isActive ? " bg-swamp-green text-bone" : " text-swamp-green"} flex h-10 items-center justify-center gap-x-2 rounded-xl font-[PoppinsBold] text-xs`
                }
              >
                <Bus size={16} />
                <span>Transportation</span>
              </NavLink>
              <NavLink
                to="tuition"
                className={({ isActive }) =>
                  `${isActive ? "bg-swamp-green text-bone" : " text-swamp-green"} flex h-10 items-center justify-center gap-x-2 rounded-xl font-[PoppinsBold] text-xs`
                }
              >
                <CreditCard size={16} />
                <span>Tuitions</span>
              </NavLink>
              <NavLink
                to="admission"
                className={({ isActive }) =>
                  `${isActive ? "bg-swamp-green text-bone" : " text-swamp-green"} flex h-10 items-center justify-center gap-x-2 rounded-xl font-[PoppinsBold] text-xs`
                }
              >
                <ClipboardList size={16} />
                <span>Admission</span>
              </NavLink>
            </div>
          </span>
        </div>
      )}
    </div>
  );
};

export default ParentsHeader;