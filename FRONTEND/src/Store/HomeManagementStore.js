import { create } from "zustand";

const WebManagementStore = create((set) => ({
  // home edit/add/remove states
  isBannerModalOpen: false,
  selectedBanner: null,

  isAcadProgModalOpen: false,
  selectedProgram: null,
  isPostAcadProgModalOpen: false,
  isDeleteAcadProgModalOpen: false,

  isMissVisModalOpen: false,
  selectedMissVis: null,

  isReasonsModalOpen: false,
  selectedReasons: [],
  isPostReasonsModalOpen: false,
  isDeleteReasonsModalOpen: false,
  deleteSelectedReasons: null,

  isChildActsModalOpen: false,
  selectedChildActs: null,
  isPostChildActsModalOpen: false,
  isDeleteChildActsModalOpen: false,

  // open modals ============================================================

  // banner
  openBannerModal: (banner) => {
    console.log(banner);

    set({
      isBannerModalOpen: true,
      selectedBanner: banner,
    });
  },

  // academic programs
  openAcadProgramsModal: (program) => {
    console.log("Opening Modal", program);

    set({
      isAcadProgModalOpen: true,
      selectedProgram: program,
    });
  },
  openPostAcadProgramsModal: () => {
    set({
      isPostAcadProgModalOpen: true,
    });
  },
  openDeleteAcadProgramsModal: (program) => {
    set({
      isDeleteAcadProgModalOpen: true,
      selectedProgram: program,
    });
  },

  // mission vision
  openMissVisModal: (missvis) => {
    console.log(missvis);

    set({
      isMissVisModalOpen: true,
      selectedMissVis: missvis,
    });
  },

  // why parents choose us
  openReasonsModal: (reasons) => {
    console.log("Opening Modal", reasons);

    set({
      isReasonsModalOpen: true,
      selectedReasons: reasons,
    });
  },
  openPostReasonsModal: () => {
    set({
      isPostReasonsModalOpen: true,
    });
  },
  openDeleteReasonsModal: (reasons) => {
    set({
      isDeleteReasonsModalOpen: true,
      deleteSelectedReasons: reasons,
    });
  },

  // child activtity
  openChildActsModal: (activities) => {
    console.log("Opening Modal", activities);

    set({
      isChildActsModalOpen: true,
      selectedChildActs: activities,
    });
  },
  openPostChildActsModal: (activities) => {
    console.log("Opening Modal", activities);

    set({
      isPostChildActsModalOpen: true,
    });
  },
  openDeleteChildActsModal: (activities) => {
    console.log("Opening Modal", activities);

    set({
      isDeleteChildActsModalOpen: true,
      selectedChildActs: activities,
    });
  },

  // close modals ============================================================

  // banner
  closeBannerModal: () =>
    set({
      isBannerModalOpen: false,
      selectedBanner: null,
    }),

  // academic programs
  closeAcadProgramsModal: () =>
    set({
      isAcadProgModalOpen: false,
      selectedProgram: null,
    }),
  closePostAcadProgramsModal: () =>
    set({
      isPostAcadProgModalOpen: false,
    }),
  closeDeleteAcadProgramsModal: () => {
    set({
      isDeleteAcadProgModalOpen: false,
      selectedProgram: null,
    });
  },

  // why parents choose us
  closeReasonsModal: () => {
    set({
      isReasonsModalOpen: false,
      selectedReasons: null,
    });
  },
  closePostReasonsModal: () => {
    set({
      isPostReasonsModalOpen: false,
    });
  },
  closeDeleteReasonsModal: () => {
    set({
      isDeleteReasonsModalOpen: false,
      deleteSelectedReasons: null,
    });
  },

  // mission vision
  closeMissVisModal: () =>
    set({
      isMissVisModalOpen: false,
      selectedMissVis: null,
    }),

  // child activity
  closeChildActsModal: () => {
    set({
      isChildActsModalOpen: false,
      selectedChildActs: null,
    });
  },
  closePostChildActsModal: () => {
    set({
      isPostChildActsModalOpen: false,
    });
  },
  closeDeleteChildActsModal: () => {
    set({
      isDeleteChildActsModalOpen: false,
      selectedChildActs: null,
    });
  },
}));

export default WebManagementStore;
