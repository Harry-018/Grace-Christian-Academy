import { React, useState, useEffect } from "react";
import axios from "axios";
import WebManagementStore from "../../../Store/HomeManagementStore";
import { useRevalidator } from "react-router-dom";
import { updateReason } from "../../../services/service/reasonsService";

const EditReasonsModal = () => {
  const revalidator = useRevalidator();

  const closeReasonModal = WebManagementStore(
    (state) => state.closeReasonsModal,
  );
  const selectedReasons = WebManagementStore((state) => state.selectedReasons);

  const [formData, setFormData] = useState([]);

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!selectedReasons?.length) return;

    setFormData(selectedReasons);
  }, [selectedReasons]);

  const handleChange = (id, e) => {
    setFormData(
      formData.map((reason) => {
        if (reason.id === id) {
          return {
            ...reason,
            reasons: e.target.value,
          };
        }

        return reason;
      }),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      await Promise.all(
        formData.map((reason) =>
          updateReason(reason.id, {
            reasons: reason.reasons,
          }),
        ),
      );
      revalidator.revalidate();
      closeReasonModal();
      alert(`Successfully Edited`);
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
          Edit Why Parents Choose Us
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-center justify-center gap-2 lg:gap-5"
        >
          <div className="no-scrollbar flex max-h-100 w-full flex-col gap-2 overflow-y-scroll">
            {formData.map((reason) => (
              <input
                name="reasons"
                required
                type="text"
                className="w-full rounded-lg border border-swamp-green/50 text-xs ring-0 sm:text-sm"
                onChange={(e) => handleChange(reason.id, e)}
                value={reason.reasons}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closeReasonModal}
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

export default EditReasonsModal;
