import React from "react";
import {
  User,
  Phone,
  UserRound,
} from "lucide-react";

const GUARDIAN_FIELDS = [
  {
    key: "lastName",
    label: "Last Name",
    icon: User,
  },
  {
    key: "firstName",
    label: "First Name",
    icon: User,
  },
  {
    key: "middleName",
    label: "Middle Name",
    icon: User,
  },
  {
    key: "contactNo",
    label: "Contact Number",
    icon: Phone,
  },
];

const GuardianCard = ({ guardian }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-2xs uppercase tracking-[0.2em] text-gray-500 md:text-xs">
            Guardian
          </p>

          <h3 className="text-base font-[PoppinsBold] text-swamp-green md:text-2xl">
            {guardian.firstName} {guardian.lastName}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-4">
        {GUARDIAN_FIELDS.map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className="flex flex-row items-center gap-2 rounded-2xl border border-swamp-green/10 bg-bone p-2 transition hover:-translate-y-1 hover:shadow-lg md:flex-col md:gap-4 md:p-5"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-black/5 text-black md:h-11 md:w-11">
              <Icon size={12} className="md:size-5" />
            </div>

            <div className="flex flex-col gap-0.5 truncate">
              <span className="truncate text-2xs uppercase tracking-wider text-gray-500 md:text-xs">
                {label}
              </span>

              <p className="truncate text-[11px] font-[PoppinsBold] text-swamp-green md:text-base">
                {guardian[key]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuardianCard;