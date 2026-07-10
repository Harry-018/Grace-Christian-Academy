import { React, useState, useEffect } from "react";
import axios from "axios";
import TuitionManagementStore from "../../../Store/TuitionManagementStore";
import { useRevalidator } from "react-router-dom";
import { updateGrade } from "../../../services/service/tuitionService";

const EditGradeModal = () => {
  const revalidator = useRevalidator();

  const closeEditGradeModal = TuitionManagementStore(
    (state) => state.closeEditGradeModal,
  );

  const selectedGradeLevel = TuitionManagementStore(
    (state) => state.selectedGradeLevel,
  );

  const [formData, setFormData] = useState({
    grade_level: "",
    tuition_fee: "",
    miscel_fee: "",
    books: "",
    uniform_boys: "",
    pe_uniform_boys: "",
    uniform_girls: "",
    pe_uniform_girls: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!selectedGradeLevel) return;

    setFormData({
      grade_level: selectedGradeLevel.grade.grade_level,
      tuition_fee: selectedGradeLevel.grade.tuition_fee,
      miscel_fee: selectedGradeLevel.grade.miscel_fee,
      books: selectedGradeLevel.grade.books,
      uniform_boys: selectedGradeLevel.grade.uniform_boys,
      pe_uniform_boys: selectedGradeLevel.grade.pe_uniform_boys,
      uniform_girls: selectedGradeLevel.grade.uniform_girls,
      pe_uniform_girls: selectedGradeLevel.grade.pe_uniform_girls,
    });
  }, [selectedGradeLevel]);

  // for handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await updateGrade(selectedGradeLevel.grade.grade_id, formData);

      revalidator.revalidate();

      closeEditGradeModal();
      alert(`Successfully Edited  ${formData.grade_level}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center bg-egg-dark/50 p-5">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h3 className="font-[PoppinsBold] text-swamp-green">
          Edit Tuition for Grade Level
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <div className="flex w-full flex-col gap-5">
            <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
              Grade Level:
              <input
                type="text"
                required
                name="grade_level"
                onChange={handleChange}
                value={formData.grade_level}
                className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
              />
            </label>

            <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
              Tuition Fee:
              <input
                type="number"
                required
                name="tuition_fee"
                onChange={handleChange}
                value={formData.tuition_fee}
                className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
              />
            </label>

            <div className="flex flex-col gap-5">
              <h3 className="font-[PoppinsBold] text-sm text-swamp-green">
                Payable Upon Enrollment
              </h3>

              <div className="grid w-full grid-cols-2 gap-5">
                <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                  Miscellaneous Fee:
                  <input
                    type="number"
                    required
                    name="miscel_fee"
                    onChange={handleChange}
                    value={formData.miscel_fee}
                    className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                  />
                </label>
                <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                  Books:
                  <input
                    type="number"
                    required
                    name="books"
                    onChange={handleChange}
                    value={formData.books}
                    className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                  />
                </label>
                <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                  Uniform (Boys):
                  <input
                    type="number"
                    required
                    name="uniform_boys"
                    onChange={handleChange}
                    value={formData.uniform_boys}
                    className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                  />
                </label>
                <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                  PE Uniform (Boys):
                  <input
                    type="number"
                    required
                    name="pe_uniform_boys"
                    onChange={handleChange}
                    value={formData.pe_uniform_boys}
                    className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                  />
                </label>
                <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                  Uniform (Girls):
                  <input
                    type="number"
                    required
                    name="uniform_girls"
                    onChange={handleChange}
                    value={formData.uniform_girls}
                    className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                  />
                </label>
                <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                  PE Uniform (girls):
                  <input
                    type="number"
                    required
                    name="pe_uniform_girls"
                    onChange={handleChange}
                    value={formData.pe_uniform_girls}
                    className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closeEditGradeModal}
              disabled={isSaving}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="cursor-pointer rounded-lg bg-swamp-green p-2 font-[PoppinsBold] text-sm text-bone duration-300 hover:opacity-75 active:scale-95"
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGradeModal;
