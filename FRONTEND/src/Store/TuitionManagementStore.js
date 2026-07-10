import { create } from "zustand";

const TuitionManagementStore = create((set) => ({
  isCreateGradeOpen: false,
  isEditGradeOpen: false,
  isDeleteGradeOpen: false,

  isCreateMethodOpen: false,

  selectedGradeLevel: null,
  selectedMethod: null,

  openCreateGradeModal: (tuition) => {
    set({
      isCreateGradeOpen: true,
    });
  },

  openEditGradeModal: (grade) => {
    console.log(grade);

    set({
      isEditGradeOpen: true,
      selectedGradeLevel: grade,
    });
  },

  openDeleteGradeModal: (grade) => {
    console.log(grade);

    set({
      isDeleteGradeOpen: true,
      selectedGradeLevel: grade,
    });
  },

  openCreateMethodModal: (method) => {
    set({
      isCreateMethodOpen: true,
    });
  },

  closeCreateGradeModal: () => {
    set({
      isCreateGradeOpen: false,
    });
  },

  closeEditGradeModal: () => {
    set({
      isEditGradeOpen: false,
      selectedGradeLevel: null,
    });
  },

  closeDeleteGradeModal: () => {
    set({
      isDeleteGradeOpen: false,
      selectedGradeLevel: null,
    });
  },

  closeCreateMethodModal: () => {
    set({
      isCreateMethodOpen: false,
    });
  },
}));

export default TuitionManagementStore;
