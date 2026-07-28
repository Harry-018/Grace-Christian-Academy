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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {ACCOUNT_FIELDS.map(({ key, label, value }) => (
          <div
            key={key}
            className="flex flex-col gap-1 rounded-2xl border border-swamp-green/10 bg-bone p-5"
          >
            <span className="text-xs uppercase tracking-wider text-gray-500">
              {label}
            </span>

            <p className="break-all text-base font-[PoppinsBold] text-swamp-green">
              {value ?? account[key]}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onChangePassword}
        className="flex items-center justify-center gap-2 rounded-xl bg-swamp-green py-3 text-sm font-[PoppinsBold] text-white transition hover:bg-lime-dark"
      >
        <Lock size={16} />
        Change Password
      </button>
    </div>
  );
};

export default AccountCard;