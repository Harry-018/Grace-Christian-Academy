import { React, useState, useEffect } from "react";
import axios from "axios";
import WebManagementStore from "../../../Store/HomeManagementStore";
import { useRevalidator } from "react-router-dom";
import { postReason } from "../../../services/service/reasonsService";

const AddReasonsModal = () => {
  const revalidator = useRevalidator();
  const closePostReasonsModal = WebManagementStore(
    (state) => state.closePostReasonsModal,
  );

  const [formData, setFormData] = useState({
    reasons: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await postReason(formData);

      revalidator.revalidate();

      closePostReasonsModal();
      alert(`Successfully Added A Reason`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center bg-egg-dark/50 p-5">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h3 className="font-[PoppinsBold] text-swamp-green">Add Reason</h3>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <div className="flex justify-center gap-5">
            <label className="flex flex-col gap-2 text-2xs sm:text-sm">
              Reason:
              <input
                required
                type="text"
                name="reasons"
                value={formData.reasons}
                onChange={handleChange}
                className="w-full rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
              />
            </label>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closePostReasonsModal}
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

export default AddReasonsModal;
