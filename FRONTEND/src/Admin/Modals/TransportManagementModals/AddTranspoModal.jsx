import { React, useState } from "react";
import axios from "axios";
import TranspoManagementStore from "../../../Store/TranspoManagementStore";
import { useRevalidator } from "react-router-dom";
import { postTranspo } from "../../../services/service/transpoService";

const AddTranspoModal = () => {
  const revalidator = useRevalidator();
  const closePostTranspoModal = TranspoManagementStore(
    (state) => state.closePostTranspoModal,
  );
  const [formData, setFormData] = useState({
    location: "",
    distance: "",
    price: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await postTranspo(formData);

      revalidator.revalidate();

      closePostTranspoModal();
      alert(`Successfully Added  ${formData.location}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center bg-egg-dark/50 p-5">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <h3 className="font-[PoppinsBold] text-swamp-green">Add Location</h3>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          <div className="flex w-full gap-3">
            <div className="flex w-full flex-col gap-5">
              <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                Location:
                <textarea
                  required
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="no-scrollbar w-full resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                />
              </label>

              <div className="grid grid-cols-2">
                <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                  Distance (km):
                  <input
                    type="number"
                    required
                    name="distance"
                    value={formData.distance}
                    onChange={handleChange}
                    className="no-scrollbar h-10 w-25 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                  />
                </label>
                <label className="flex w-full flex-col gap-2 text-2xs sm:text-sm">
                  Price:
                  <input
                    type="number"
                    required
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="no-scrollbar h-10 w-25 resize-none rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closePostTranspoModal}
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

export default AddTranspoModal;
