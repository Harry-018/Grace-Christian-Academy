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
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Guardian
          </p>

          <h3 className="text-2xl font-[PoppinsBold] text-swamp-green">
            {guardian.firstName} {guardian.lastName}
          </h3>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {GUARDIAN_FIELDS.map(({ key, label, icon: Icon }) => (
          <div
            key={key}
            className="flex flex-col gap-4 rounded-2xl border border-swamp-green/10 bg-bone p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 text-black">
              <Icon size={20} />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-gray-500">
                {label}
              </span>

              <p className="text-base font-[PoppinsBold] text-swamp-green wrap-break-words">
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