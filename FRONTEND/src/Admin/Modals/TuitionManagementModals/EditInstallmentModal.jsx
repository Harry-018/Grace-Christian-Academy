import { React, useState, useEffect } from "react";
import axios from "axios";
import TuitionManagementStore from "../../../Store/TuitionManagementStore";
import { updateInstallment } from "../../../services/service/tuitionService";

const EditInstallmentModal = () => {
  const closeInstallmentModal = TuitionManagementStore(
    (state) => state.closeInstallmentModal,
  );

  const selectedInstallment = TuitionManagementStore(
    (state) => state.selectedInstallment,
  );

  const RefreshTuition = TuitionManagementStore(
    (state) => state.RefreshTuition,
  );

  const [formData, setFormData] = useState({
    monthly_installment: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!selectedInstallment) return;

    setFormData({
      monthly_installment: selectedInstallment.monthly_installment,
    });
  }, [selectedInstallment]);

  // for handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await updateInstallment(
        selectedInstallment.grade_id,
        selectedInstallment.method_id,
        formData,
      );

      RefreshTuition();
      closeInstallmentModal();
      alert(`Successfully Edited Monthly Installment `);
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
          Edit Monthly Installment
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <div className="flex w-full flex-col gap-5">
            <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
              Monthly Installment:
              <input
                type="number"
                min="0"
                step="0.01"
                required
                name="monthly_installment"
                value={formData.monthly_installment}
                onChange={handleChange}
                className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
              />
            </label>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closeInstallmentModal}
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

export default EditInstallmentModal;
