import { create } from "zustand";

const TranspoManagementStore = create((set) => ({
  isEditTranspoOpen: false,
  isPostTranspoOpen: false,
  isDeleteTranspoOpen: false,
  selectedTranspo: null,

  openEditTranspoModal: (transpo) => {
    console.log("Opening Modal", transpo);

    set({
      isEditTranspoOpen: true,
      selectedTranspo: transpo,
    });
  },

  openPostTranspoModal: (transpo) => {
    console.log("Opening Modal", transpo);

    set({
      isPostTranspoOpen: true,
    });
  },
  openDeleteTranspoModal: (transpo) => {
    console.log("Opening Modal", transpo);

    set({
      isDeleteTranspoOpen: true,
      selectedTranspo: transpo,
    });
  },

  closeEditTranspoModal: () => {
    set({
      isEditTranspoOpen: false,
      selectedTranspo: null,
    });
  },
  closePostTranspoModal: () => {
    set({
      isPostTranspoOpen: false,
    });
  },
  closeDeleteTranspoModal: () => {
    set({
      isDeleteTranspoOpen: false,
      selectedTranspo: null,
    });
  },
}));

export default TranspoManagementStore;
