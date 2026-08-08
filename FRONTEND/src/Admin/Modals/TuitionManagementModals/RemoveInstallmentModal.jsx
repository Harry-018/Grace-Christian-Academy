import { React, useState, useEffect } from "react";
import axios from "axios";
import TuitionManagementStore from "../../../Store/TuitionManagementStore";
import { useRevalidator } from "react-router-dom";
import { removeInstallment } from "../../../services/service/tuitionService";

const RemoveInstallmentModal = () => {
  const revalidator = useRevalidator();

  const closeRemoveInstallmentModal = TuitionManagementStore(
    (state) => state.closeRemoveInstallmentModal,
  );

  const selectedInstallment = TuitionManagementStore(
    (state) => state.selectedInstallment,
  );

  const RefreshTuition = TuitionManagementStore(
    (state) => state.RefreshTuition,
  );

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setIsDeleting(true);

      await removeInstallment(
        selectedInstallment.grade_id,
        selectedInstallment.method_id,
      );

      revalidator.revalidate();

      RefreshTuition();
      closeRemoveInstallmentModal();
      alert(`Successfully Removed Installment`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed flex h-full w-full flex-col items-center justify-center bg-egg-dark/50 p-5">
      <div className="flex flex-col items-center gap-5 rounded-2xl bg-bone p-5 inset-shadow-med">
        <form
          onSubmit={handleDelete}
          className="flex w-full flex-col items-center justify-center gap-5"
        >
          Are you sure you want to remove monthly installment?
          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closeRemoveInstallmentModal}
              disabled={isDeleting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isDeleting}
              className="cursor-pointer rounded-lg bg-reject p-2 font-[PoppinsBold] text-sm text-bone duration-300 hover:opacity-75 active:scale-95"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RemoveInstallmentModal;
