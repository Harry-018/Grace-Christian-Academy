import React from "react";
import { Lock } from "lucide-react";

const ACCOUNT_FIELDS = [
  {
    key: "email",
    label: "Email",
  },
  {
    key: "password",
    label: "Password",
    value: "••••••••",
  },
];

const AccountCard = ({ account, onChangePassword }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className="flex flex-col gap-2 md:gap-4">
        {ACCOUNT_FIELDS.map(({ key, label, value }) => (
          <div
            key={key}
            className="flex flex-col gap-1 rounded-2xl border border-swamp-green/10 bg-bone p-3 md:p-5"
          >
            <span className="text-2xs uppercase tracking-wider text-gray-500 md:text-xs">
              {label}
            </span>

            <p className="truncate text-xs font-[Poppins] text-black md:text-base">
              {value ?? account[key]}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onChangePassword}
        className="flex items-center justify-center gap-2 rounded-xl bg-swamp-green py-2.5 text-xs font-[PoppinsBold] text-white transition hover:bg-lime-dark md:py-3 md:text-sm"
      >
        <Lock size={14} className="md:size-4" />
        Change Password
      </button>
    </div>
  );
};

export default AccountCard;