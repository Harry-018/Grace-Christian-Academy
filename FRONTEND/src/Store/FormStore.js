import { create } from "zustand";

const FormStore = create((set) => ({
  isTermsModalOpen: false,
  isSubmitAppOpen: false,

  applicationData: null,
  termsAccepted: false,

  openTermsModal: () => {
    set({ isTermsModalOpen: true });
  },
  openSubmitAppModal: (application) => {
    set({ isSubmitAppOpen: true, applicationData: application });
  },

  closeTermsModal: (accepted) => {
    set({ isTermsModalOpen: false, termsAccepted: accepted });
  },
  closeSubmitAppModal: () => {
    set({ isSubmitAppOpen: false, applicationData: null });
  },
}));

export default FormStore;
