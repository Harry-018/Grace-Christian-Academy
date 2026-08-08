import { create } from "zustand";

const TuitionManagementStore = create((set) => ({
  isCreateGradeOpen: false,
  isEditGradeOpen: false,
  isDeleteGradeOpen: false,

  isCreateMethodOpen: false,
  isEditMethodOpen: false,
  isDeleteMethodOpen: false,

  isEditInstallmentModalOpen: false,
  isRemoveInstallmentModalOpen: false,

  refreshTuition: 0,

  RefreshTuition: () =>
    set((state) => ({
      refreshTuition: state.refreshTuition + 1,
    })),

  selectedGradeLevel: null,
  selectedMethod: null,
  selectedInstallment: null,

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
  openEditMethodModal: (method) => {
    console.log(method);

    set({
      isEditMethodOpen: true,
      selectedMethod: method,
    });
  },

  openDeleteMethodModal: (method) => {
    console.log(method);

    set({
      isDeleteMethodOpen: true,
      selectedMethod: method,
    });
  },

  openInstallmentModal: (installment) => {
    console.log("Store received:", installment);
    set({ isEditInstallmentModalOpen: true, selectedInstallment: installment });
  },
  openRemoveInstallmentModal: (installment) => {
    console.log("Store received:", installment);
    set({
      isRemoveInstallmentModalOpen: true,
      selectedInstallment: installment,
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
  closeEditMethodModal: () => {
    set({
      isEditMethodOpen: false,
      selectedMethod: null,
    });
  },

  closeDeleteMethodModal: () => {
    set({
      isDeleteMethodOpen: false,
      selectedMethod: null,
    });
  },
  closeInstallmentModal: () => {
    set({ isEditInstallmentModalOpen: false, selectedInstallment: null });
  },
  closeRemoveInstallmentModal: () => {
    set({
      isRemoveInstallmentModalOpen: false,
      selectedInstallment: null,
    });
  },
}));

export default TuitionManagementStore;
