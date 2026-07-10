import { Frown } from "lucide-react";
import { Link } from "react-router-dom";

import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-5 bg-neutral-100 font-[Poppins]">
      <span className="flex items-center gap-x-2 text-2xl text-neutral-800 md:gap-x-3 md:text-3xl">
        <Frown className="scale-100 md:scale-125" /> Page Not Found
      </span>
      <span className="text-xs text-neutral-500 md:text-sm">
        The page you entered is closed or does not exist
      </span>

      <Link to="/">
        <button className="cursor-pointer rounded-sm bg-swamp-green p-3 text-sm text-neutral-50 inset-shadow-small duration-200 active:scale-95">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
