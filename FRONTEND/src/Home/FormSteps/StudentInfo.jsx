import React from "react";
import { Circle } from "lucide-react";

const StudentInfo = ({ formdata, setFormData, handleChange }) => {
  return (
    <div className="flex max-w-4xl flex-col gap-10">
      <span className="flex items-center gap-5">
        <span className="rounded-full bg-swamp-green px-5 py-2.5 text-bone">
          1
        </span>
        <h1 className="font-[PoppinsBold] text-swamp-green xl:text-lg">
          Student & Address Information
        </h1>
      </span>

      {/* Student Information */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-10 rounded-2xl bg-bone p-5 text-sm inset-shadow-med xs:flex-row xs:flex-wrap md:gap-5">
          {/* grade level */}
          <h1 className="w-full font-[PoppinsBold] text-swamp-green">
            Student Information
          </h1>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              Grade Level:
              <h3 className="text-xs text-reject">*</h3>
            </span>
            <select
              name="stu_grade_level"
              id=""
              className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              value={formdata.stu_grade_level}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Grade Level
              </option>
              <option value="Nursery">Nursery</option>
              <option value="Kinder">Kinder</option>
            </select>
          </div>
          {/* student name */}
          <div className="flex flex-col gap-5 xs:flex-row xs:flex-wrap">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Last Name:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="stu_last_name"
                value={formdata.stu_last_name}
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
                name="stu_first_name"
                value={formdata.stu_first_name}
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
                name="stu_mid_name"
                value={formdata.stu_mid_name}
                onChange={handleChange}
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
          </div>

          {/* age gender */}
          <div className="flex flex-col gap-5 md:flex-row">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Age:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                min={0}
                name="stu_age"
                value={formdata.stu_age}
                onChange={handleChange}
                required
                type="number"
                className="max-w-25 rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Gender:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <select
                name="stu_gender"
                value={formdata.stu_gender}
                onChange={handleChange}
                required
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>

          {/* Date of Birth Place of Birth */}
          <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Date of Birth:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="stu_date_birth"
                value={formdata.stu_date_birth}
                onChange={handleChange}
                required
                type="date"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Place of Birth:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="stu_place_birth"
                value={formdata.stu_place_birth}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
                placeholder="Place of Birth"
              />
            </label>
          </div>

          {/* religion nationality */}
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Religion:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="stu_religion"
                value={formdata.stu_religion}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
                placeholder="Religion"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Nationality:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="stu_nationality"
                value={formdata.stu_nationality}
                onChange={handleChange}
                required
                type="text"
                className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
                placeholder="Nationality"
              />
            </label>
          </div>

          {/* disability */}
          <div className="flex flex-wrap gap-5">
            {" "}
            <span className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                Is the student disabled?
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <span className="flex gap-5">
                <label className="flex gap-2">
                  <input
                    name="stu_disabled"
                    value="No"
                    onChange={handleChange}
                    required
                    type="radio"
                    className="cursor-pointer rounded-lg border-0 text-xs text-swamp-green ring-1 ring-swamp-green focus:border-0 focus:ring-2"
                    placeholder="Place of Birth"
                  />
                  No
                </label>
                <label className="flex gap-2">
                  <input
                    name="stu_disabled"
                    value="Yes"
                    onChange={handleChange}
                    required
                    type="radio"
                    className="cursor-pointer rounded-lg border-0 text-xs text-swamp-green ring-1 ring-swamp-green focus:border-0 focus:ring-2"
                    placeholder="Place of Birth"
                  />
                  Yes
                </label>
              </span>
            </span>
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                If yes what is his/her disabilty:
                <h3 className="text-xs text-reject">*</h3>
              </span>
              <input
                name="stu_disability"
                value={formdata.stu_disability}
                onChange={handleChange}
                disabled={formdata.stu_disabled !== "Yes"}
                type="text"
                className={`${formdata.stu_disabled !== "Yes" ? "cursor-not-allowed opacity-75" : ""} rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2`}
                placeholder="Disability"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-10 rounded-2xl bg-bone p-5 text-sm inset-shadow-med xs:flex-row xs:flex-wrap md:gap-5">
          <h1 className="w-full font-[PoppinsBold] text-swamp-green">
            Student Address
          </h1>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              House No. / Street:
              <h3 className="text-xs text-reject">*</h3>
            </span>
            <input
              name="stu_house_street"
              value={formdata.stu_house_street}
              onChange={handleChange}
              required
              type="text"
              className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              placeholder="House No. / Street"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              Barangay:
              <h3 className="text-xs text-reject">*</h3>
            </span>
            <input
              name="stu_barangay"
              value={formdata.stu_barangay}
              onChange={handleChange}
              required
              type="text"
              className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              placeholder="Barangay"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              City / Municipality:
              <h3 className="text-xs text-reject">*</h3>
            </span>
            <input
              name="stu_city"
              value={formdata.stu_city}
              onChange={handleChange}
              required
              type="text"
              className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              placeholder="City / Municipality"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              Province:
              <h3 className="text-xs text-reject">*</h3>
            </span>
            <input
              name="stu_province"
              value={formdata.stu_province}
              onChange={handleChange}
              required
              type="text"
              className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              placeholder="Province"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              Region:
              <h3 className="text-xs text-reject">*</h3>
            </span>
            <input
              name="stu_region"
              value={formdata.stu_region}
              onChange={handleChange}
              required
              type="text"
              className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              placeholder="Region"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              Zip Code:
              <h3 className="text-xs text-reject">*</h3>
            </span>
            <input
              name="stu_zipcode"
              value={formdata.stu_zipcode}
              onChange={handleChange}
              required
              type="text"
              className="rounded-lg border-0 text-xs ring-1 ring-swamp-green focus:border-0 focus:ring-2"
              placeholder="Zip Code"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
