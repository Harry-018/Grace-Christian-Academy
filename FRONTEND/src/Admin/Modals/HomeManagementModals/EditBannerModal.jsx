import { React, useState, useEffect } from "react";
import axios from "axios";
import WebManagementStore from "../../../Store/HomeManagementStore";
import { useRevalidator } from "react-router-dom";
import { updateBanner } from "../../../services/service/bannerService";

const EditBannerModal = () => {
  const revalidator = useRevalidator();

  //stores
  const closeBannerModal = WebManagementStore(
    (state) => state.closeBannerModal,
  );
  const selectedBanner = WebManagementStore((state) => state.selectedBanner);

  //state
  const [formData, setFormData] = useState({
    admission_status: "",
    school_year: "",
    banner_title: "",
    banner_quote: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  // for synchronizing zustand banner state and local formdata state or in short we get the selected banner data and copy it to the formData state locally
  useEffect(() => {
    if (!selectedBanner) return;

    setFormData({
      admission_status: selectedBanner.admission_status,
      school_year: selectedBanner.school_year,
      banner_title: selectedBanner.banner_title,
      banner_quote: selectedBanner.banner_quote,
    });
  }, [selectedBanner]);

  //handlers

  // for handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await updateBanner(selectedBanner.id, formData);

      revalidator.revalidate();

      closeBannerModal();
      alert(`Successfully Edited the Banner`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center bg-egg-dark/50 p-5">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h3 className="font-[PoppinsBold] text-swamp-green">Edit Banner</h3>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <div className="flex justify-center gap-5">
            <label className="flex flex-col gap-2 text-2xs sm:text-sm">
              Status:
              <select
                required
                name="admission_status"
                value={formData.admission_status}
                onChange={handleChange}
                className="rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
              >
                <option value="Open">Open</option>
                <option value="Closed">Close</option>
              </select>
            </label>

            <label className="flex flex-col gap-2 text-2xs sm:text-sm">
              School Year:
              <input
                required
                type="text"
                name="school_year"
                value={formData.school_year}
                onChange={handleChange}
                className="w-full rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
              />
            </label>
          </div>

          <div className="flex w-full flex-col gap-5">
            <label className="flex flex-col gap-2 text-2xs sm:text-sm">
              Title:
              <textarea
                required
                name="banner_title"
                value={formData.banner_title}
                onChange={handleChange}
                className="no-scrollbar min-h-20 w-full resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
              />
            </label>

            <label className="flex flex-col gap-2 text-2xs sm:text-sm">
              Quote:
              <textarea
                required
                name="banner_quote"
                value={formData.banner_quote}
                onChange={handleChange}
                className="no-scrollbar min-h-25 w-full resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
              />
            </label>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closeBannerModal}
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

export default EditBannerModal;
