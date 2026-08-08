import { React, useState, useEffect } from "react";
import axios from "axios";
import TuitionManagementStore from "../../../Store/TuitionManagementStore";
import { useRevalidator } from "react-router-dom";
import { updateMethod } from "../../../services/service/tuitionService";

const EditMethodModal = () => {
  const revalidator = useRevalidator();

  const closeEditMethodModal = TuitionManagementStore(
    (state) => state.closeEditMethodModal,
  );

  const selectedMethod = TuitionManagementStore(
    (state) => state.selectedMethod,
  );

  const RefreshTuition = TuitionManagementStore(
    (state) => state.RefreshTuition,
  );

  const [formData, setFormData] = useState({
    method: "",
    due_date: "",
    // monthly_installment: "",
    discount: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!selectedMethod) return;

    setFormData({
      method: selectedMethod.method,
      due_date: selectedMethod.due_date,
      // monthly_installment: "",
      discount: selectedMethod.discount,
    });
  }, [selectedMethod]);

  // for handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await updateMethod(selectedMethod.method_id, formData);

      revalidator.revalidate();

      RefreshTuition();
      closeEditMethodModal();
      alert(`Successfully Edited  ${formData.method}`);
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
          Edit Payment Method
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <div className="flex w-full flex-col gap-5">
            <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
              Payment Method:
              <input
                type="text"
                required
                name="method"
                onChange={handleChange}
                value={formData.method}
                className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
              />
            </label>

            <div className="flex flex-col gap-5">
              <label className="flex flex-col gap-2 text-2xs sm:text-sm">
                Due Date:
                <input
                  type="text"
                  name="due_date"
                  onChange={handleChange}
                  value={formData.due_date}
                  className="no-scrollbar resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                />
              </label>

              <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                Discount:
                <input
                  type="number"
                  name="discount"
                  onChange={handleChange}
                  value={formData.discount}
                  className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closeEditMethodModal}
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

export default EditMethodModal;
