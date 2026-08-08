import { React, useState } from "react";
import FormStore from "../../Store/FormStore";

const Review = ({ formData }) => {
  const openTermsModal = FormStore((state) => state.openTermsModal);
  return (
    <div className="flex min-w-75 flex-col gap-10 lg:min-w-4xl">
      <span className="flex items-center gap-5">
        <span className="rounded-full bg-swamp-green px-5 py-3 text-bone">
          3
        </span>
        <h1 className="font-[PoppinsBold] text-swamp-green xl:text-lg">
          Review Application
        </h1>
      </span>
      {/* student info */}
      <div className="flex flex-col gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h1 className="font-[PoppinsBold] text-swamp-green">
          Student Information
        </h1>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-4">
          <span className="flex flex-col gap-2 text-sm">
            <h3> Grade Level:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_grade_level}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Last Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_last_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> First Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_first_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Middle Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_mid_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Age :</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_age}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Gender :</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_gender}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Date of Birth :</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_date_birth}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Place of Birth :</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_place_birth}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Religion :</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_religion}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Nationality :</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_nationality}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Is the student disabled? :</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_disabled}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Student Disability :</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_disability}
            </span>
          </span>
        </div>
      </div>

      {/* student address */}
      <div className="flex flex-col gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h1 className="font-[PoppinsBold] text-swamp-green">
          Address Information
        </h1>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-4">
          <span className="flex flex-col gap-2 text-sm">
            <h3> House No. / Street:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_house_street}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Barangay:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_barangay}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> City / Municipality:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_city}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Province:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_province}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Region:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_region}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Zip Code:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.stu_zipcode}
            </span>
          </span>
        </div>
      </div>

      {/* parent info */}
      <div className="flex flex-col gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h1 className="font-[PoppinsBold] text-swamp-green">
          Father Information
        </h1>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
          <span className="flex flex-col gap-2 text-sm">
            <h3> Last Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.fat_last_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> First Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.fat_first_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Middle Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.fat_mid_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Occupation:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.fat_occupation}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Contact:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.fat_contact}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Email:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.fat_email}
            </span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h1 className="font-[PoppinsBold] text-swamp-green">
          Mother Information
        </h1>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
          <span className="flex flex-col gap-2 text-sm">
            <h3> Last Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.mot_last_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> First Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.mot_first_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Middle Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.mot_mid_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Occupation:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.mot_occupation}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Contact:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.mot_contact}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Email:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.mot_email}
            </span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h1 className="font-[PoppinsBold] text-swamp-green">
          Emergency Contact
        </h1>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
          <span className="flex flex-col gap-2 text-sm">
            <h3> Last Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.ec_last_name}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> First Name:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.ec_first_name}
            </span>
          </span>

          <span className="flex flex-col gap-2 text-sm">
            <h3> Relation w/ Student:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.ec_relation_student}
            </span>
          </span>
          <span className="flex flex-col gap-2 text-sm">
            <h3> Contact:</h3>{" "}
            <span className="rounded-lg border border-ashlight p-2 opacity-75">
              {formData.ec_contact_number}
            </span>
          </span>
          <span className="col-span-2 flex w-full flex-col gap-2 text-sm">
            <h3 className="font-[PoppinsBold] text-swamp-green">
              Confirmation Email:
            </h3>
            <span className="w-full rounded-lg border border-ashlight p-2 opacity-75">
              {formData.confirm_email}
            </span>
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        Please agree to our
        <button
          type="button"
          className="cursor-pointer text-swamp-green underline duration-150 hover:font-bold active:scale-95"
          onClick={() => openTermsModal()}
        >
          Terms and Conditions
        </button>
        to continue.
      </div>
    </div>
  );
};

export default Review;
