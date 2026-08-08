import { React, useState } from "react";
import StudentInfo from "./FormSteps/StudentInfo";
import ParentInfo from "./FormSteps/ParentInfo";
import Review from "./FormSteps/Review";
import FormStore from "../Store/FormStore";

const ApplicationFormPage = () => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    // student info
    stu_grade_level: "",
    stu_last_name: "",
    stu_first_name: "",
    stu_mid_name: "",
    stu_age: "",
    stu_gender: "",
    stu_date_birth: "",
    stu_place_birth: "",
    stu_religion: "",
    stu_nationality: "",
    stu_disabled: "",
    stu_disability: "",
    // student address info
    stu_house_street: "",
    stu_barangay: "",
    stu_city: "",
    stu_province: "",
    stu_region: "",
    stu_zipcode: "",
    // father info
    fat_last_name: "",
    fat_first_name: "",
    fat_mid_name: "",
    fat_occupation: "",
    fat_contact: "",
    fat_email: "",
    // mother info
    mot_last_name: "",
    mot_first_name: "",
    mot_mid_name: "",
    mot_occupation: "",
    mot_contact: "",
    mot_email: "",

    ec_last_name: "",
    ec_first_name: "",
    ec_contact_number: "",
    ec_relation_student: "",

    confirm_email: "",
  });

  //validator for next button
  const studentFields = [
    "stu_grade_level",
    "stu_last_name",
    "stu_first_name",
    "stu_age",
    "stu_gender",
    "stu_date_birth",
    "stu_place_birth",
    "stu_religion",
    "stu_nationality",
    "stu_disabled",

    "stu_house_street",
    "stu_barangay",
    "stu_city",
    "stu_province",
    "stu_region",
    "stu_zipcode",
  ];

  const parentsFields = [
    "fat_last_name",
    "fat_first_name",
    "fat_occupation",
    "fat_contact",

    "mot_last_name",
    "mot_first_name",
    "mot_occupation",
    "mot_contact",

    "ec_last_name",
    "ec_first_name",
    "ec_contact_number",
    "ec_relation_student",

    "confirm_email",
  ];

  const requiredFields = {
    0: studentFields,
    1: parentsFields,
  };

  const isPageComplete =
    requiredFields[page]?.every(
      (field) => formData[field]?.toString().trim() !== "",
    ) ?? true;

  const termsAccepted = FormStore((state) => state.termsAccepted);
  const openSubmitAppModal = FormStore((state) => state.openSubmitAppModal);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-w-75 flex-col gap-10 p-5">
      {/* progressbar */}
      <div className="flex w-full gap-2">
        <div
          className={`h-2 flex-1 rounded-full ${
            page >= 0 ? "bg-swamp-green" : "bg-ashlight/50"
          }`}
        ></div>

        <div
          className={`h-2 flex-1 rounded-full ${
            page >= 1 ? "bg-swamp-green" : "bg-ashlight/50"
          }`}
        ></div>

        <div
          className={`h-2 flex-1 rounded-full ${
            page >= 2 ? "bg-swamp-green" : "bg-ashlight/50"
          }`}
        ></div>
      </div>

      {/* form */}
      <form className="flex flex-col gap-10">
        {/* body */}
        <div>
          {page === 0 ? (
            <StudentInfo
              formdata={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          ) : page === 1 ? (
            <ParentInfo
              formdata={formData}
              setFormData={setFormData}
              handleChange={handleChange}
            />
          ) : page === 2 ? (
            <Review formData={formData} />
          ) : (
            ""
          )}
        </div>
        {/* button */}
        <div className="flex justify-between">
          <button
            type="button"
            className={`rounded-lg bg-bone px-3 py-2 inset-shadow-small duration-150 lg:px-8 lg:py-3 ${
              page === 0
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:opacity-75 active:scale-95"
            }`}
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          {page < 2 ? (
            <button
              disabled={!isPageComplete}
              type="button"
              className={`${isPageComplete ? "cursor-pointer duration-150 hover:opacity-75 active:scale-95" : "cursor-not-allowed opacity-75"} rounded-lg bg-swamp-green px-3 py-2 text-bone inset-shadow-small lg:px-8 lg:py-3`}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              disabled={!termsAccepted}
              className={`rounded-lg bg-swamp-green px-3 py-2 text-bone inset-shadow-small duration-150 lg:px-8 lg:py-3 ${
                !termsAccepted
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer hover:opacity-75 active:scale-95"
              }`}
              onClick={() => openSubmitAppModal(formData)}
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplicationFormPage;
