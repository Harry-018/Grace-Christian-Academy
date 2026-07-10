import { React, useState } from "react";
import axios from "axios";
import TuitionManagementStore from "../../../Store/TuitionManagementStore";
import { useRevalidator } from "react-router-dom";
import { createMethod } from "../../../services/service/tuitionService";

const CreateMethodModal = () => {
  const revalidator = useRevalidator();

  const closeCreateMethodModal = TuitionManagementStore(
    (state) => state.closeCreateMethodModal,
  );
  const [formData, setFormData] = useState({
    method: "",
    due_date: "",
    // monthly_installment: "",
    discount: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  // for handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await createMethod(formData);

      revalidator.revalidate();

      closeCreateMethodModal();
      alert(`Successfully Added  ${formData.method}`);
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
          Create Payment Method
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
                  className="no-scrollbar resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                />
              </label>
              {/* <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                  Monthly Installment:
                  <input
                    type="text"
                    name="monthly_installment"
                    onChange={handleChange}
                    className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                  />
                </label> */}

              <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                Discount:
                <input
                  type="number"
                  name="discount"
                  onChange={handleChange}
                  className="no-scrollbar w-40 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closeCreateMethodModal}
              disabled={isSaving}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="cursor-pointer rounded-lg bg-swamp-green p-2 font-[PoppinsBold] text-sm text-bone duration-300 hover:opacity-75 active:scale-95"
            >
              {isSaving ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMethodModal;
