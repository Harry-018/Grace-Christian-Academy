import React from "react";

const ParentInfo = ({ formdata, setFormData, handleChange }) => {
  return (
    <div className="flex max-w-4xl flex-col gap-10">
      <span className="flex items-center gap-5">
        <span className="rounded-full bg-swamp-green px-5 py-3 text-bone">
          2
        </span>
        <h1 className="font-[PoppinsBold] text-swamp-green xl:text-lg">
          Parent & Guardian Information
        </h1>
      </span>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-10 rounded-2xl bg-bone p-5 text-sm inset-shadow-med xs:flex-row xs:flex-wrap md:gap-5">
          {/* father info */}
          <h1 className="font-[PoppinsBold] text-swamp-green">
            Father Information
          </h1>
          <div className="flex flex-col gap-5 xs:flex-row xs:flex-wrap">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Last Name:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="fat_last_name"
                value={formdata.fat_last_name}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                First Name:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="fat_first_name"
                value={formdata.fat_first_name}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="flex items-center justify-between">
                Middle Name:
                <h3 className="text-xs text-ashlight italic">optional</h3>
              </span>
              <input
                name="fat_mid_name"
                value={formdata.fat_mid_name}
                onChange={handleChange}
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
          </div>
          <div className="flex flex-col gap-5 xs:flex-row xs:flex-wrap">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Occupation:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="fat_occupation"
                value={formdata.fat_occupation}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Contact Number:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                maxLength={11}
                name="fat_contact"
                value={formdata.fat_contact}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="flex items-center justify-between">
                Email:
                <h3 className="text-xs text-ashlight italic">optional</h3>
              </span>
              <input
                name="fat_email"
                value={formdata.fat_email}
                onChange={handleChange}
                type="email"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-10 rounded-2xl bg-bone p-5 text-sm inset-shadow-med xs:flex-row xs:flex-wrap md:gap-5">
          {/* mother info */}
          <h1 className="font-[PoppinsBold] text-swamp-green">
            Mother Information
          </h1>
          <div className="flex flex-col gap-5 xs:flex-row xs:flex-wrap">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Last Name:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="mot_last_name"
                value={formdata.mot_last_name}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                First Name:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="mot_first_name"
                value={formdata.mot_first_name}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="flex items-center justify-between">
                Middle Name:
                <h3 className="text-xs text-ashlight italic">optional</h3>
              </span>
              <input
                name="mot_mid_name"
                value={formdata.mot_mid_name}
                onChange={handleChange}
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
          </div>
          <div className="flex flex-col gap-5 xs:flex-row xs:flex-wrap">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Occupation:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="mot_occupation"
                value={formdata.mot_occupation}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Contact Number:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                maxLength={11}
                name="mot_contact"
                value={formdata.mot_contact}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="flex items-center justify-between">
                Email:
                <h3 className="text-xs text-ashlight italic">optional</h3>
              </span>
              <input
                name="mot_email"
                value={formdata.mot_email}
                onChange={handleChange}
                type="email"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-10 rounded-2xl bg-bone p-5 text-sm inset-shadow-med xs:flex-row xs:flex-wrap md:gap-5">
          {/* Guardian info */}
          <h1 className="font-[PoppinsBold] text-swamp-green">
            Emergency Contact
          </h1>
          <div className="flex flex-col gap-5 xs:flex-row xs:flex-wrap">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Last Name:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="ec_last_name"
                value={formdata.ec_last_name}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                First Name:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="ec_first_name"
                value={formdata.ec_first_name}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Contact Number:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                maxLength={11}
                name="ec_contact_number"
                value={formdata.ec_contact_number}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Relation w/ Student:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="ec_relation_student"
                value={formdata.ec_relation_student}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-10 rounded-2xl bg-bone p-5 text-sm inset-shadow-med xs:flex-row xs:flex-wrap md:gap-5">
          <label className="flex flex-col gap-2">
            <h1 className="font-[PoppinsBold] text-swamp-green">
              Confirmation Email
            </h1>
            <span className="flex flex-wrap items-center gap-5">
              <input
                name="confirm_email"
                value={formdata.confirm_email}
                onChange={handleChange}
                type="email"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
              <h1 className="text-xs">
                This email address will be used to send your application
                confirmation and all future updates.
              </h1>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ParentInfo;
