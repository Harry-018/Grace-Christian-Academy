import React from "react";
import GuardianCards from "../Components/SecurityComponents/GuardianCards";
import StudentCard from "../Components/SecurityComponents/StudentCard";

const guardian = {
  lastName: "ROMASANTA",
  firstName: "ROSALINE",
  middleName: "MADRIGAL",
  gender: "FEMALE",
  contactNo: "09123456789",
};

const account = {
  email: "romasanta@gmail.com",
};

const students = [
  {
    id: 1,
    fullName: "SANTIAGO, MARGARET C.",
    lrn: "12345678910",
    gradeLevel: "Nursery",
    tuition: "Full Cash",
  },
];

const Security = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-6 font-[Poppins] sm:px-6 lg:px-8 cursor-default">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="rounded-xl border border-swamp-green bg-linear-to-br from-white p-6 shadow-xl sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-swamp-green">
                Account Management
              </p>
              <h2 className="mt-2 text-2xl font-[PoppinsBold] text-green-950 sm:text-3xl">
                Account Settings
              </h2>
              <p className="py-3 max-w-2xl text-sm text-black sm:text-base">
                Keep your guardian information, login details, and enrolled student records up to date.
              </p>
            </div>
            <div className="inline-flex w-fit items-center justify-center rounded-lg border border-swamp-green/40 bg-white px-4 py-2 text-sm font-[PoppinsBold] text-forest-green shadow-sm sm:self-start md:text-sm md:text-center">
              Secure & Updated
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:w-[48%]">
            <GuardianCards 
            guardian={guardian}
            account={account} 
            />
          </div>

          <div className="w-full space-y-4 lg:w-[48%]">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-[PoppinsBold] uppercase text-swamp-green">
                  Enrolled Students
                </h3>
                <p className="text-sm text-[#6a7568]">
                  Your child’s current school records are listed below.
                </p>
              </div>
              <div className="rounded-lg bg-swamp-green px-3 py-1 text-sm font-[PoppinsBold] text-white">
                {students.length} Student
              </div>
            </div>

            {students.map((student) => (
              <StudentCard
              key={student.id}
              student={student}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;