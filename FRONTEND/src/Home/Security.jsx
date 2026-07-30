import React, { useState } from "react";
import { ShieldCheck, CalendarDays, School, DoorOpen, Clock3, UserRound, User, Phone, Lock } from "lucide-react";

import StudentCard from "../Components/SecurityComponents/StudentCard";
import GuardianCard from "../Components/SecurityComponents/GuardianCards";
import ChangePasswordModal from "../Components/SecurityComponents/ChangePasswordModal";
import AccountCard from "../Components/SecurityComponents/AccountCard";

const INFO_FIELDS = [
  { key: "classSchedule", label: "Class Schedule", icon: CalendarDays },
  { key: "gradeLevel", label: "Grade Level", icon: School },
  { key: "room", label: "Room", icon: DoorOpen },
  { key: "classTime", label: "Class Time", icon: Clock3 },
  { key: "adviser", label: "Adviser", icon: UserRound },
];

const SUMMARY_FIELDS = [
  { key: "sy", label: "School Year" },
  { key: "lrn", label: "Learner Reference Number", fallback: "Not Available" },
];

const GUARDIAN_FIELDS = [
  { key: "lastName", label: "Last Name", icon: User },
  { key: "firstName", label: "First Name", icon: User },
  { key: "middleName", label: "Middle Name", icon: User },
  { key: "contactNo", label: "Contact Number", icon: Phone },
];

const PASSWORD_FIELDS = [
  { key: "current", label: "Current Password", placeholder: "Enter current password" },
  { key: "new", label: "New Password", placeholder: "Minimum 10 characters" },
  { key: "confirm", label: "Confirm Password", placeholder: "Re-enter new password" },
];

const INITIAL_PASSWORDS = { current: "", new: "", confirm: "" };
const INITIAL_VISIBILITY = { current: false, new: false, confirm: false };

const ACCOUNT_FIELDS = [
  { key: "email", label: "Email" },
  { key: "password", label: "Password", value: "••••••••" },
];

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
  const [spin, setSpin] = useState(false);

  const handlePasswordUpdate = (passwords) => {
    console.log("Password update submitted:", passwords);
    setShowPasswordModal(false);
  };

  return (
    <div className="min-h-screen bg-bone px-5 py-6 font-[Poppins] cursor-default">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm md:p-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-swamp-green text-white shadow-md md:h-16 md:w-16 md:rounded-2xl">
              <ShieldCheck size={16} className="md:size-8.5" />
            </div>

            <div className="flex flex-col gap-0.5 md:gap-1">
              <h1 className="text-lg font-[PoppinsBold] text-swamp-green md:text-3xl">
                Security Settings
              </h1>

              <p className="text-[11px] text-gray-500 md:text-sm">
                Manage your account and enrolled student information.
              </p>
            </div>
          </div>
        </div>

        {/* Student */}
        <div className="flex flex-col gap-3 rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm md:gap-4 md:p-6">
          <div className="flex items-center gap-3">

            <h2 className="text-sm font-[PoppinsBold] text-gray-500 md:text-xl">
              Student Information
            </h2>
          </div>
          <StudentCard 
            student={student} 
            spin={spin} 
            setSpin={setSpin} 
            infoFields={INFO_FIELDS} 
            summaryFields={SUMMARY_FIELDS} 
          />
        </div>

        {/* Guardian + Account */}
        <div className="grid gap-4 md:gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm md:gap-4 md:p-6">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-[PoppinsBold] text-gray-500 md:text-xl">
                Guardian Information
              </h2>
            </div>
            <GuardianCard 
              guardian={guardian} 
              guardianFields={GUARDIAN_FIELDS} 
            />
          </div>

          <div className="flex flex-col gap-3 rounded-3xl border border-swamp-green/10 bg-white p-4 shadow-sm md:gap-4 md:p-6">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-[PoppinsBold] text-gray-500 md:text-xl">
                Account Details
              </h2>
            </div>

            <AccountCard
              account={account}
              accountFields={ACCOUNT_FIELDS}
              onChangePassword={() => setShowPasswordModal(true)}
            />
          </div>

      {showPasswordModal && (
        <ChangePasswordModal
          passwordFields={PASSWORD_FIELDS}
          initialPasswords={INITIAL_PASSWORDS}
          initialVisibility={INITIAL_VISIBILITY}
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