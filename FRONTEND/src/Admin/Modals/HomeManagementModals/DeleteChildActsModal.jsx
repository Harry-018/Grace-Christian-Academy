import { React, useState, useEffect } from "react";
import axios from "axios";
import WebManagementStore from "../../../Store/HomeManagementStore";
import { useRevalidator } from "react-router-dom";
import { deleteChildActivity } from "../../../services/service/childActivityService";

const DeleteChildActsModal = () => {
  const revalidator = useRevalidator();
  const closeDeleteChildActsModal = WebManagementStore(
    (state) => state.closeDeleteChildActsModal,
  );
  const selectedChildActs = WebManagementStore(
    (state) => state.selectedChildActs,
  );

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      setIsDeleting(true);

      await deleteChildActivity(selectedChildActs.id);

      revalidator.revalidate();

      closeDeleteChildActsModal();
      alert(`Successfully Deleted ${selectedChildActs.activity_title}`);
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
          Are you sure you want to delete {selectedChildActs.activity_title}
          <div className="flex gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-sm duration-300 hover:opacity-75 active:scale-95"
              onClick={closeDeleteChildActsModal}
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

export default DeleteChildActsModal;
