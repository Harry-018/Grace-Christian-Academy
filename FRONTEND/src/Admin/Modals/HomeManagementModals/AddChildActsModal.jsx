import { React, useState, useEffect } from "react";
import axios from "axios";
import WebManagementStore from "../../../Store/HomeManagementStore";
import { useRevalidator } from "react-router-dom";
import { postChildActivity } from "../../../services/service/childActivityService";

const AddChildActsModal = () => {
  const revalidator = useRevalidator();
  const closePostChildActsModal = WebManagementStore(
    (state) => state.closePostChildActsModal,
  );

  const [formData, setFormData] = useState({
    activity_title: "",
    activity_description: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await postChildActivity(formData);

      revalidator.revalidate();

      closePostChildActsModal();
      alert(`Successfully Added  ${formData.activity_title}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center bg-egg-dark/50 p-5">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h3 className="font-[PoppinsBold] text-swamp-green">Add Activity</h3>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <div className="flex w-full gap-3">
            <div className="flex w-full flex-col gap-5">
              <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                Title:
                <textarea
                  required
                  name="activity_title"
                  value={formData.activity_title}
                  onChange={handleChange}
                  className="no-scrollbar min-h-15 w-full resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                />
              </label>

              <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                Description:
                <textarea
                  required
                  name="activity_description"
                  value={formData.activity_description}
                  onChange={handleChange}
                  className="no-scrollbar min-h-30 w-full resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closePostChildActsModal}
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

export default AddChildActsModal;
