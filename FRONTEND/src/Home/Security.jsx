import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";

import StudentCard from "../Components/SecurityComponents/StudentCard";
import GuardianCard from "../Components/SecurityComponents/GuardianCards";
import ChangePasswordModal from "../Components/SecurityComponents/ChangePasswordModal";
import AccountCard from "../Components/SecurityComponents/AccountCard";

const guardian = {
  lastName: "ROMASANTA",
  firstName: "ROSALINE",
  middleName: "MADRIGAL",
  contactNo: "09123456789",
};

const account = {
  email: "romasanta@gmail.com",
};

const student = {
  fullName: "Santiago, Margarett",
  lrn: null,
  sy: "2025 - 2026",
  classSchedule: "Monday - Thursday",
  gradeLevel: "Nursery",
  room: "Mahogany - 3",
  classTime: "7:00 AM - 11:00 AM",
  adviser: "Ms. Rosary Mendez",
};

const Security = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const handlePasswordUpdate = (passwords) => {
    console.log("Password update submitted:", passwords);
    setShowPasswordModal(false);
  };

  return (
    <div className="min-h-screen bg-bone px-5 py-6 font-[Poppins]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between rounded-3xl border border-swamp-green/10 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-swamp-green text-white shadow-md">
              <ShieldCheck size={34} />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-[PoppinsBold] text-swamp-green ">
                Security Settings
              </h1>

              <p className="text-sm text-gray-500">
                Manage your account and enrolled student information.
              </p>
            </div>
          </div>
        </div>

        {/* Student */}
        <div className="flex flex-col gap-4 rounded-3xl border border-swamp-green/10 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">

            <h2 className="text-xl font-[PoppinsBold] text-gray-500">
              Student Information
            </h2>
          </div>
          <StudentCard student={student} />
        </div>

        {/* Guardian + Account */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-3xl border border-swamp-green/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">

              <h2 className="text-xl font-[PoppinsBold] text-gray-500">
                Guardian Information
              </h2>
            </div>
            <GuardianCard guardian={guardian} />
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-swamp-green/10 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">

              <h2 className="text-xl font-[PoppinsBold] text-gray-500">
                Account Details
              </h2>
            </div>

            <AccountCard
              account={account}
              onChangePassword={() => setShowPasswordModal(true)}
            />
          </div>

      {showPasswordModal && (
        <ChangePasswordModal
          onClose={() => setShowPasswordModal(false)}
          onSubmit={handlePasswordUpdate}
        />
      )}
    </div>
    </div>
  </div>
  );
};

export default Security;