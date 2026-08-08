import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import Copyright from "../../Components/Copyright";
import FormStore from "../../Store/FormStore";
import TermsModal from "../../Home/FormModals/TermsModal";
import SubmitAppModal from "../../Home/FormModals/SubmitAppModal";

const RootLayout = () => {
  const isTermsModalOpen = FormStore((state) => state.isTermsModalOpen);
  const isSubmitAppOpen = FormStore((state) => state.isSubmitAppOpen);

  return (
    <div className="flex min-h-screen flex-col font-[Poppins]">
      <Navbar />
      <main className="flex flex-1 justify-center bg-egg text-egg-dark">
        <Outlet />
      </main>
      <Footer />
      <Copyright />
      {isTermsModalOpen && <TermsModal />}
      {isSubmitAppOpen && <SubmitAppModal />}
    </div>
  );
};

export default RootLayout;
