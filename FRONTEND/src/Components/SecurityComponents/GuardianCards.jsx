import React, { useState } from "react";

const GuardianCards = ({ guardian, account }) => {
  const [email, setEmail] = useState(account.email);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = () => {
    setIsEditingEmail(!isEditingEmail);
  };

  const handlePassword = () => {
    setIsChangingPassword(!isChangingPassword);

    if (isChangingPassword) {
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="w-full rounded-2xl border border-swamp-green bg-white p-6 font-[Poppins] sm:p-8">
      <div className="flex flex-col gap-3 border-b border-swamp-green py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="py-2 text-xl font-[PoppinsBold] text-forest-green">
            Guardian Details
          </h2>
        </div>
        <div className="rounded-lg bg-swamp-green px-3 py-1 text-sm font-semibold text-white">
          Primary Contact
        </div>
      </div>

      <div className="px-1 py-3 grid gap-5 md:grid-cols-2">
        <div>
          <label className="pb-2 block text-sm font-[PoppinsBold] text-forest-green">
            Last Name
          </label>
          <input
            value={guardian.lastName}
            readOnly
            className="w-full rounded-2xl border border-swamp-green/20 bg-bone px-4 py-3 text-sm text-forest-green shadow-sm outline-none"
          />
        </div>

        <div>
          <label className="pb-2 block text-sm font-[PoppinsBold] text-forest-green">
            First Name
          </label>
          <input
            value={guardian.firstName}
            readOnly
            className="w-full rounded-2xl border border-swamp-green/20 bg-bone px-4 py-3 text-sm text-forest-green shadow-sm outline-none"
          />
        </div>

        <div>
          <label className="pb-2 block text-sm font-[PoppinsBold] text-forest-green">
            Middle Name
          </label>
          <input
            value={guardian.middleName}
            readOnly
            className="w-full rounded-2xl border border-swamp-green/20 bg-bone px-4 py-3 text-sm text-forest-green shadow-sm outline-none"
          />
        </div>

        <div>
          <label className="pb-2 block text-sm font-[PoppinsBold] text-forest-green">
            Gender
          </label>
          <input
            value={guardian.gender}
            readOnly
            className="w-full rounded-2xl border border-swamp-green/20 bg-bone px-4 py-3 text-sm text-forest-green shadow-sm outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="pb-2 block text-sm font-[PoppinsBold] text-forest-green">
            Contact Number
          </label>
          <input
            value={guardian.contactNo}
            readOnly
            className="w-full rounded-2xl border border-swamp-green/20 bg-bone px-4 py-3 text-sm text-forest-green shadow-sm outline-none"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-swamp-green/20 bg-bone p-5 px-4 pt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-[PoppinsBold] text-forest-green">
              Account Details
            </h3>
            <p className="text-sm text-ashlight">
              Update your email address or password securely.
            </p>
          </div>
        </div>

        <div className="pt-5 space-y-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            <div className="flex-1">
              <label className="pb-2 block text-sm font-[PoppinsBold] text-forest-green">
                Email
              </label>
              <input
                type="email"
                value={email}
                readOnly={!isEditingEmail}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full rounded-2xl border px-4 py-3 text-sm shadow-sm outline-none transition ${
                  isEditingEmail
                    ? "border-swamp-green bg-white ring-2 ring-swamp-green/20"
                    : "border-swamp-green/20 bg-bone"
                }`}
              />
            </div>

            <button
              type="button"
              onClick={handleEmail}
              className="rounded-2xl bg-swamp-green px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-lime-dark"
            >
              {isEditingEmail ? "Save" : "Edit"}
            </button>
          </div>

          {!isChangingPassword ? (
            <div className="flex flex-col gap-3 md:flex-row md:items-end">
              <div className="flex-1">
                <label className="pb-2 block text-sm font-[PoppinsBold] text-forest-green">
                  Password
                </label>
                <input
                  type="password"
                  value="********"
                  readOnly
                  className="w-full rounded-2xl border border-swamp-green/20 bg-bone px-4 py-3 text-sm shadow-sm outline-none"
                />
              </div>

              <button
                type="button"
                onClick={handlePassword}
                className="rounded-2xl bg-swamp-green px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-lime-dark"
              >
                Change
              </button>
            </div>
          ) : (
            <div className="space-y-4 rounded-2xl border border-swamp-green/20 bg-white p-4">
              <div>
                <label className="pb-2 block text-sm font-[PoppinsBold] text-forest-green">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full rounded-2xl border border-swamp-green/20 bg-bone px-4 py-3 text-sm shadow-sm outline-none transition focus:border-swamp-green focus:bg-white focus:ring-2 focus:ring-swamp-green/20"
                />
              </div>

              <div>
                <label className="pb-2 block text-sm font-[PoppinsBold] text-forest-green">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-2xl border border-swamp-green/20 bg-bone px-4 py-3 text-sm shadow-sm outline-none transition focus:border-swamp-green focus:bg-white focus:ring-2 focus:ring-swamp-green/20"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handlePassword}
                  className="rounded-2xl bg-swamp-green px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-lime-dark"
                >
                  Save
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsChangingPassword(false);
                    setNewPassword("");
                    setConfirmPassword("");
                  }}
                  className="rounded-2xl border border-reject/40 bg-reject/10 px-5 py-3 text-sm font-semibold text-reject transition hover:bg-reject/20"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuardianCards;