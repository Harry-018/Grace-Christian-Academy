import { React, useState, useEffect } from "react";
import axios from "axios";
import WebManagementStore from "../../../Store/HomeManagementStore";
import { useRevalidator } from "react-router-dom";
import { updateHomeVideo } from "../../../services/service/homeVidService";

const EditHomeVidModal = () => {
  const revalidator = useRevalidator();
  const closeHomeVideoModal = WebManagementStore(
    (state) => state.closeHomeVideoModal,
  );
  const selectedVid = WebManagementStore((state) => state.selectedVid);

  const [isSaving, setIsSaving] = useState(false);
  const [video, setVideo] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video) {
      alert("Please select a video first.");
      return;
    }

    try {
      setIsSaving(true);

      const submitData = new FormData();

      if (video) {
        submitData.append("home_video", video);
      }

      await updateHomeVideo(selectedVid.id, submitData);

      revalidator.revalidate();

      setVideo(null);
      closeHomeVideoModal();
      alert(`Successfully Updated Video`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center bg-egg-dark/50 p-5">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h3 className="font-[PoppinsBold] text-swamp-green">Update Video</h3>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
            Video:
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
              className="w-full rounded-lg border border-swamp-green/50 p-2 text-xs"
            />
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closeHomeVideoModal}
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

export default EditHomeVidModal;
