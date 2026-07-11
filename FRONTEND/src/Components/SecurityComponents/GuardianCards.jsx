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

{/*-----------------------------GUARDIAN DETAILS HERE AH ----------------------------------------- */}
  return (
    <div className="w-full max-w-3xl rounded-xl border border-swamp-green bg-white p-8 shadow font-[Poppins] cursor-default">
      <h2 className="py-6 text-lg font-[PoppinsBold] text-swamp-green">
        Guardian Details
      </h2>

      <div className="grid grid-cols-2 gap-5 ">
        <div>
          <label className="py-1 block text-sm font-[PoppinsBold]">
            Last Name
          </label>

          <input
            value={guardian.lastName}
            readOnly
            className="w-full rounded-lg border bg-gray-100 px-3 py-2"
          />
        </div>

        <div>
          <label className="py-1 block text-sm font-[PoppinsBold]">
            First Name
          </label>

          <input
            value={guardian.firstName}
            readOnly
            className="w-full rounded-lg border bg-gray-100 px-3 py-2"
          />
        </div>

        <div>
          <label className="py-1 block text-sm font-[PoppinsBold]">
            Middle Name
          </label>

          <input
            value={guardian.middleName}
            readOnly
            className="w-full rounded-lg border bg-gray-100 px-3 py-2"
          />
        </div>

        <div>
          <label className="py-1 block text-sm font-[PoppinsBold]">
            Gender
          </label>

          <input
            value={guardian.gender}
            readOnly
            className="w-full rounded-lg border bg-gray-100 px-3 py-2"
          />
        </div>

        <div className="col-span-2">
          <label className="py-1 block text-sm font-[PoppinsBold]">
            Contact Number
          </label>

          <input
            value={guardian.contactNo}
            readOnly
            className="w-full rounded-lg border bg-gray-100 px-3 py-2"
          />
        </div>
      </div>

{/*-----------------------------ACCOUNT DETAILS HERE AH ----------------------------------------- */}
      <h2 className="py-8 text-lg text-swamp-green font-[PoppinsBold]">
        Account Details
      </h2>

      {/* Email */}
      <div className="flex items-end gap-4">
        <div className="flex-1">
          <label className="py-3 block text-sm font-[PoppinsBold]">
            Email
          </label>

          <input
            type="email"
            value={email}
            readOnly={!isEditingEmail}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-lg border px-3 py-2 ${
              isEditingEmail ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        <button
          type="button"
          onClick={handleEmail}
          className="rounded-lg bg-green-600 px-5 py-2 text-white font-[PoppinsBold]"
        >
          {isEditingEmail ? "Save" : "Edit"}
        </button>
      </div>

      {/* Password */}
      {!isChangingPassword ? (
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label className="py-1 block text-sm">
              Password
            </label>

            <input
              type="password"
              value="********"
              readOnly
              className="w-full rounded-lg border bg-gray-100 px-3 py-2"
            />
          </div>

          <button
            type="button"
            onClick={handlePassword}
            className="rounded-lg bg-green-600 px-5 py-2 text-white font-[PoppinsBold]"
          >
            Change
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="py-3 block text-sm font-[PoppinsBold]">
              New Password
            </label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div>
            <label className="py-1 block text-sm font-[PoppinsBold]">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handlePassword}
              className="rounded-lg bg-green-600 px-5 py-2 text-white font-[PoppinsBold]"
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
              className="rounded-lg border text-white bg-red-600 px-5 py-2 font-[PoppinsBold]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuardianCards;