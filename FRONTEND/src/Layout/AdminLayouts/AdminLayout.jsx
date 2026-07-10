import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../../Components/AdminNav.jsx";
import WebManagementStore from "../../Store/HomeManagementStore.js";
import TranspoManagementStore from "../../Store/TranspoManagementStore.js";
import TuitionManagementStore from "../../Store/TuitionManagementStore.js";

//import editModals
import EditBannerModal from "../../Admin/Modals/HomeManagementModals/EditBannerModal.jsx";
import EditMissionVisionModal from "../../Admin/Modals/HomeManagementModals/EditMissionVisionModal.jsx";
import EditAcadProgramsModal from "../../Admin/Modals/HomeManagementModals/EditAcadProgramsModal.jsx";
import EditReasonsModal from "../../Admin/Modals/HomeManagementModals/EditReasonsModal.jsx";
import EditChildActsModal from "../../Admin/Modals/HomeManagementModals/EditChildActsModal.jsx";
import EditTranspoModal from "../../Admin/Modals/TransportManagementModals/EditTranspoModal.jsx";
import EditGradeModal from "../../Admin/Modals/TuitionManagementModals/EditGradeModal.jsx";

//import addModals
import AddAcadProgramsModal from "../../Admin/Modals/HomeManagementModals/AddAcadProgramsModal.jsx";
import AddReasonsModal from "../../Admin/Modals/HomeManagementModals/AddReasonsModal.jsx";
import AddChildActsModal from "../../Admin/Modals/HomeManagementModals/AddChildActsModal.jsx";
import AddTranspoModal from "../../Admin/Modals/TransportManagementModals/AddTranspoModal.jsx";

// import deleteModals
import DeleteAcadProgramsModal from "../../Admin/Modals/HomeManagementModals/DeleteAcadProgramsModal.jsx";
import DeleteReasonsModal from "../../Admin/Modals/HomeManagementModals/DeleteReasonsModal.jsx";
import DeleteChildActsModal from "../../Admin/Modals/HomeManagementModals/DeleteChildActsModal.jsx";
import DeleteTranspoModal from "../../Admin/Modals/TransportManagementModals/DeleteTranspoModal.jsx";
import DeleteGradeModal from "../../Admin/Modals/TuitionManagementModals/DeleteGradeModal.jsx";

// import createModals
import CreateGradeModal from "../../Admin/Modals/TuitionManagementModals/CreateGradeModal.jsx";
import CreateMethodModal from "../../Admin/Modals/TuitionManagementModals/CreateMethodModal.jsx";

const AdminLayout = () => {
  //banner
  const isBannerModalOpen = WebManagementStore(
    (state) => state.isBannerModalOpen,
  );
  const isMissVisModalOpen = WebManagementStore(
    (state) => state.isMissVisModalOpen,
  );
  const isAcadProgramsOpen = WebManagementStore(
    (state) => state.isAcadProgModalOpen,
  );
  const isPostAcadProgramsOpen = WebManagementStore(
    (state) => state.isPostAcadProgModalOpen,
  );
  const isDeleteAcadProgramsOpen = WebManagementStore(
    (state) => state.isDeleteAcadProgModalOpen,
  );
  const isReasonsOpen = WebManagementStore((state) => state.isReasonsModalOpen);
  const isPostReasonsOpen = WebManagementStore(
    (state) => state.isPostReasonsModalOpen,
  );
  const isDeleteReasonsOpen = WebManagementStore(
    (state) => state.isDeleteReasonsModalOpen,
  );
  const isChildActsOpen = WebManagementStore(
    (state) => state.isChildActsModalOpen,
  );
  const isPostChildActsOpen = WebManagementStore(
    (state) => state.isPostChildActsModalOpen,
  );
  const isDeleteChildActsOpen = WebManagementStore(
    (state) => state.isDeleteChildActsModalOpen,
  );

  //transpo

  const isEditTranspoOpen = TranspoManagementStore(
    (state) => state.isEditTranspoOpen,
  );
  const isPostTranspoOpen = TranspoManagementStore(
    (state) => state.isPostTranspoOpen,
  );
  const isDeleteTranspoOpen = TranspoManagementStore(
    (state) => state.isDeleteTranspoOpen,
  );

  //tuition
  const isCreateGradeOpen = TuitionManagementStore(
    (state) => state.isCreateGradeOpen,
  );
  const isEditGradeOpen = TuitionManagementStore(
    (state) => state.isEditGradeOpen,
  );
  const isDeleteGradeOpen = TuitionManagementStore(
    (state) => state.isDeleteGradeOpen,
  );

  const isCreateMethodOpen = TuitionManagementStore(
    (state) => state.isCreateMethodOpen,
  );

  return (
    <div className="flex max-h-screen flex-col overflow-hidden font-[Poppins] lg:flex-row">
      <AdminNav />
      <main className="flex-1 overflow-y-auto bg-egg p-5 text-egg-dark">
        <Outlet />
      </main>
      {/* Edit Modals */}
      {isBannerModalOpen && <EditBannerModal />}
      {isMissVisModalOpen && <EditMissionVisionModal />}
      {isAcadProgramsOpen && <EditAcadProgramsModal />}
      {isReasonsOpen && <EditReasonsModal />}
      {isChildActsOpen && <EditChildActsModal />}
      {isEditTranspoOpen && <EditTranspoModal />}
      {isEditGradeOpen && <EditGradeModal />}
      {/* Add Modals */}
      {isPostAcadProgramsOpen && <AddAcadProgramsModal />}
      {isPostReasonsOpen && <AddReasonsModal />}
      {isPostChildActsOpen && <AddChildActsModal />}
      {isPostTranspoOpen && <AddTranspoModal />}
      {/* Delete Modals */}
      {isDeleteAcadProgramsOpen && <DeleteAcadProgramsModal />}
      {isDeleteReasonsOpen && <DeleteReasonsModal />}
      {isDeleteChildActsOpen && <DeleteChildActsModal />}
      {isDeleteTranspoOpen && <DeleteTranspoModal />}
      {isDeleteGradeOpen && <DeleteGradeModal />}

      {/* Create Modals */}
      {isCreateGradeOpen && <CreateGradeModal />}
      {isCreateMethodOpen && <CreateMethodModal />}
    </div>
  );
};

export default AdminLayout;
