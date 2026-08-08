import { React, useState } from "react";
import FormStore from "../../Store/FormStore.js";
import { applyApplication } from "../../services/service/applicationService.jsx";
import { useNavigate } from "react-router-dom";

const SubmitAppModal = () => {
  const navigate = useNavigate();

  const closeSubmitAppModal = FormStore((state) => state.closeSubmitAppModal);
  const applicationData = FormStore((state) => state.applicationData);

  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(applicationData);
    try {
      setIsSaving(true);

      await applyApplication(applicationData);

      alert(`Successfully Applied`);

      closeSubmitAppModal();

      navigate("successapplication");
    } catch (error) {
      console.error(error);
      if (error.response?.status === 409) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong.");
      }
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <div className="fixed flex h-full w-full items-center justify-center bg-egg-dark/25 p-5">
      <div className="flex max-w-150 flex-col items-center gap-10 rounded-2xl bg-bone p-5 inset-shadow-med">
        <span className="flex flex-col items-center gap-3">
          <h1 className="flex flex-wrap text-base">
            You may not be able to edit your information after submission.
          </h1>
          <h1 className="flex flex-wrap text-sm">
            Are you sure you want to submit your application?
          </h1>
        </span>
        <span className="flex gap-2">
          <button
            type="button"
            className="cursor-pointer rounded-lg p-2 duration-150 hover:opacity-75 active:scale-95"
            onClick={() => closeSubmitAppModal()}
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-swamp-green p-2 text-bone inset-shadow-small duration-150 hover:opacity-75 active:scale-95"
            onClick={handleSubmit}
          >
            {isSaving ? "Submitting" : "Submit"}
          </button>
        </span>
      </div>
    </div>
  );
};

export default SubmitAppModal;
