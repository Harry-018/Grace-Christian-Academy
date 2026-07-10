import { React, useState, useEffect } from "react";
import axios from "axios";
import WebManagementStore from "../../../Store/HomeManagementStore";
import { useRevalidator } from "react-router-dom";
import { updateMissVis } from "../../../services/service/missionVisionService";

const EditMissionVisionModal = () => {
  const revalidator = useRevalidator();

  //stores
  const closeMissVisModal = WebManagementStore(
    (state) => state.closeMissVisModal,
  );
  const selectedMissVis = WebManagementStore((state) => state.selectedMissVis);

  //state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  // for synchronizing zustand banner state and local formdata state or in short we get the selected banner data and copy it to the formData state locally
  useEffect(() => {
    if (!selectedMissVis) return;

    setFormData({
      title: selectedMissVis.title,
      description: selectedMissVis.description,
    });
  }, [selectedMissVis]);

  //handlers

  // for handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await updateMissVis(selectedMissVis.type, formData);

      revalidator.revalidate();

      closeMissVisModal();
      alert(`Successfully Edited  ${selectedMissVis.type}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center bg-egg-dark/50 p-5">
      <div className="flex w-full max-w-lg flex-col items-center gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h3 className="font-[PoppinsBold] text-swamp-green">
          Edit {selectedMissVis.type}
        </h3>
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
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="no-scrollbar min-h-15 w-full resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                />
              </label>

              <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                Description:
                <textarea
                  required
                  name="description"
                  value={formData.description}
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
              onClick={closeMissVisModal}
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

export default EditMissionVisionModal;
