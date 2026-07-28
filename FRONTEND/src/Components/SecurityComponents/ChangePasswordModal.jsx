import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  X,
} from "lucide-react";

const PASSWORD_FIELDS = [
  {
    key: "current",
    label: "Current Password",
    placeholder: "Enter current password",
  },
  {
    key: "new",
    label: "New Password",
    placeholder: "Minimum 10 characters",
  },
  {
    key: "confirm",
    label: "Confirm Password",
    placeholder: "Re-enter new password",
  },
];

const INITIAL_PASSWORDS = {
  current: "",
  new: "",
  confirm: "",
};

const INITIAL_VISIBILITY = {
  current: false,
  new: false,
  confirm: false,
};

const ChangePasswordModal = ({ onClose, onSubmit }) => {
  const [passwords, setPasswords] = useState(INITIAL_PASSWORDS);
  const [visibility, setVisibility] = useState(INITIAL_VISIBILITY);

  const updatePassword = (key, value) => {
    setPasswords((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleVisibility = (key) => {
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = () => {
    onSubmit?.(passwords);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-5">
      <div className="flex w-full max-w-lg flex-col gap-6 rounded-3xl bg-white p-7 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-swamp-green text-white">
              <ShieldCheck size={28} />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-[PoppinsBold] text-forest-green">
                Change Password
              </h2>

              <p className="text-sm text-gray-500">
                Keep your account secure by using a strong password.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-gray-400 transition hover:bg-gray-100 hover:text-red-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Password Fields */}
        <div className="flex flex-col gap-5">
          {PASSWORD_FIELDS.map(({ key, label, placeholder }) => (
            <div key={key} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-forest-green">
                {label}
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type={visibility[key] ? "text" : "password"}
                  value={passwords[key]}
                  placeholder={placeholder}
                  onChange={(e) => updatePassword(key, e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-12 text-sm outline-none transition focus:border-swamp-green focus:bg-white focus:ring-4 focus:ring-swamp-green/10"
                />

                <button
                  type="button"
                  onClick={() => toggleVisibility(key)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-swamp-green"
                >
                  {visibility[key] ? (
                    <Eye size={18} />
                  ) : (
                    <EyeOff size={18} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-xl bg-swamp-green px-6 py-3 text-sm font-[PoppinsBold] text-white transition hover:bg-lime-dark"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;