import { React, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AcademicProgramSelector from "../../Components/AcademicProgramSelector";

import { EditIcon, PlusCircle, Trash } from "lucide-react";
import WebManagementStore from "../../Store/HomeManagementStore";

const Home = () => {
  const {
    bannerData,
    academicCardData,
    mission_visionData,
    reasonsData,
    childActivityData,
  } = useLoaderData();

  const banner = bannerData[0];
  const missvis = mission_visionData[""];

  // Open Modals State
  const openBannerModal = WebManagementStore((state) => state.openBannerModal);
  const openMissVisModal = WebManagementStore(
    (state) => state.openMissVisModal,
  );
  const openAcadProgramsModal = WebManagementStore(
    (state) => state.openAcadProgramsModal,
  );
  const openPostAcadProgramsModal = WebManagementStore(
    (state) => state.openPostAcadProgramsModal,
  );
  const openDeleteAcadProgramsModal = WebManagementStore(
    (state) => state.openDeleteAcadProgramsModal,
  );

  const openReasonsModal = WebManagementStore(
    (state) => state.openReasonsModal,
  );

  const openPostReasonsModal = WebManagementStore(
    (state) => state.openPostReasonsModal,
  );
  const openDeleteReasonsModal = WebManagementStore(
    (state) => state.openDeleteReasonsModal,
  );
  const openChildActsModal = WebManagementStore(
    (state) => state.openChildActsModal,
  );
  const openPostChildActsModal = WebManagementStore(
    (state) => state.openPostChildActsModal,
  );
  const openDeleteChildActsModal = WebManagementStore(
    (state) => state.openDeleteChildActsModal,
  );

  // Selected Program Selector State
  const [selectedProgramId, setSelectedProgramId] = useState(
    academicCardData?.[0]?.id ?? null,
  );
  const selectedProgram = academicCardData.find(
    (program) => program.id === selectedProgramId,
  );

  return (
    <div className="">
      <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2">
        {/* Banner */}
        <div className="flex flex-col gap-y-10 rounded-2xl bg-bone p-5 inset-shadow-med">
          <div className="flex items-center justify-between text-sm">
            <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
              Banner
            </h1>
            <button
              onClick={() => openBannerModal(banner)}
              className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base"
            >
              <EditIcon className="h-5" /> Edit
            </button>
          </div>

          <div className="flex w-full flex-col gap-5">
            <span className="flex flex-col gap-5 sm:flex-row">
              {/* admission status */}
              <span className="flex min-w-30 flex-col gap-y-3 text-xs">
                <h3>Admission Status:</h3>
                <span className="opacity-75">{banner.admission_status}</span>
              </span>
              {/* school year */}
              <span className="flex min-w-20 flex-col gap-y-3 text-xs">
                <h3>School Year:</h3>
                <span className="max-w-20 rounded-md border border-swamp-green p-2 opacity-75">
                  {banner.school_year}
                </span>
              </span>
            </span>

            {/* title */}
            <span className="flex flex-col gap-y-3 text-xs">
              <h3>Title:</h3>
              <span className="rounded-md border border-swamp-green p-2 opacity-75">
                {banner.banner_title}
              </span>
            </span>
            {/* quote */}
            <span className="flex flex-col gap-y-3 text-xs">
              <h3>Quote:</h3>
              <span className="rounded-md border border-swamp-green p-2 opacity-75">
                {banner.banner_quote}
              </span>
            </span>
          </div>
        </div>

        {/* Academic Programs */}
        <div className="flex flex-col gap-y-10 overflow-hidden rounded-2xl bg-bone p-5 inset-shadow-med">
          <div className="flex flex-wrap items-center justify-between gap-y-3 text-sm">
            <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
              Academic Programs
            </h1>

            <span className="flex gap-3 lg:gap-5">
              <button
                onClick={() => openAcadProgramsModal(selectedProgram)}
                className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base"
              >
                <EditIcon className="h-5" />
                Edit
              </button>
              <button
                onClick={() => openPostAcadProgramsModal()}
                className="flex cursor-pointer items-center rounded-lg text-xs text-swamp-green active:scale-95 md:text-sm lg:text-base"
              >
                <PlusCircle className="h-5" />
                Add
              </button>
              <button
                onClick={() => {
                  openDeleteAcadProgramsModal(selectedProgram);
                }}
                className="flex cursor-pointer items-center rounded-lg text-xs text-reject active:scale-95 md:text-sm lg:text-base"
              >
                <Trash className="h-5" />
                Delete
              </button>
            </span>
          </div>

          <div className="flex flex-col gap-y-5">
            <AcademicProgramSelector
              programData={academicCardData}
              selectedProgramId={selectedProgramId}
              onSelectProgram={setSelectedProgramId}
            />

            {selectedProgram ? (
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-y-3">
                    <h3 className="text-xs">Program:</h3>
                    <div className="w-25 rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                      {selectedProgram.program}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h3 className="text-xs">Age Limit:</h3>
                    <div className="w-25 rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                      {selectedProgram.ages}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-3">
                  <h3 className="text-xs">Description:</h3>
                  <div className="rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                    {selectedProgram.description}
                  </div>
                </div>
              </div>
            ) : (
              <div>There's no data for that program</div>
            )}
          </div>
        </div>

        {/* Mission Vision */}
        <div className="flex h-full flex-col">
          <div className="grid h-full grid-rows-2 gap-5">
            {mission_visionData.map((missvis) => {
              return (
                <div className="flex flex-col gap-y-10 rounded-2xl bg-bone p-5 inset-shadow-med">
                  <div className="flex items-center justify-between text-sm">
                    <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
                      {missvis.type}
                    </h1>
                    <button
                      onClick={() => openMissVisModal(missvis)}
                      className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base"
                    >
                      <EditIcon className="h-5" />
                      Edit
                    </button>
                  </div>

                  <div className="flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-3">
                      <h3 className="text-xs">Title:</h3>
                      <div className="rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                        {missvis.title}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <h3 className="text-xs">Description:</h3>
                      <div className="rounded-lg border border-swamp-green p-3 text-xs opacity-75">
                        {missvis.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* video + why parents choose us */}

        <div className="flex flex-col gap-y-10 rounded-2xl bg-bone p-5 inset-shadow-med">
          <label className="flex flex-col gap-5 font-[PoppinsBold] text-swamp-green lg:text-lg">
            Grace Hands Learning Story
            <video
              className="h-50 w-[50%] rounded-2xl inset-shadow-med"
              controls
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </label>

          <div className="flex flex-wrap items-center justify-between gap-y-3 text-sm">
            <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
              Why Parents Choose Us
            </h1>

            <span className="flex items-center gap-3 overflow-y-auto py-3 lg:gap-5">
              <button
                onClick={() => openReasonsModal(reasonsData)}
                className="flex cursor-pointer items-center text-xs text-ashlight active:scale-95 md:text-sm lg:text-base"
              >
                <EditIcon className="h-5" />
                Edit
              </button>
              <button
                onClick={() => openPostReasonsModal()}
                className="flex cursor-pointer items-center rounded-lg text-xs text-swamp-green active:scale-95 md:text-sm lg:text-base"
              >
                <PlusCircle className="h-5" />
                Add
              </button>
            </span>
          </div>

          <div className="no-scrollbar flex max-h-50 flex-col gap-y-3 overflow-y-auto">
            {reasonsData.map((reasons, id) => {
              return (
                <div className="flex gap-3">
                  <h3
                    key={reasons.id}
                    className="w-full rounded-lg border border-swamp-green p-2 text-xs opacity-75"
                  >
                    {reasons.reasons}
                  </h3>
                  <button
                    onClick={() => {
                      openDeleteReasonsModal(reasons);
                    }}
                    className="flex cursor-pointer items-center gap-2 rounded-lg text-xs text-reject active:scale-95 md:text-sm lg:text-base"
                  >
                    <Trash className="h-5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* children activities */}
        <div className="col-span-2 flex flex-col gap-y-5 rounded-2xl p-5">
          <div className="flex flex-wrap items-center justify-between gap-y-3 text-sm">
            <h1 className="font-[PoppinsBold] text-swamp-green md:text-base lg:text-lg">
              Children Activities
            </h1>

            <span className="no-scrollbar flex gap-3 overflow-y-auto py-2 lg:gap-5">
              <button
                onClick={() => openPostChildActsModal()}
                className="flex cursor-pointer items-center rounded-lg text-xs text-swamp-green active:scale-95 md:text-sm lg:text-base"
              >
                <PlusCircle className="h-5" />
                Add
              </button>
            </span>
          </div>
          <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-y-auto p-3">
            {childActivityData.map((childActData, index) => {
              return (
                <div
                  key={index}
                  className="flex min-h-60 min-w-65 snap-center flex-col gap-y-5 rounded-2xl border-swamp-green bg-bone p-5 inset-shadow-med"
                >
                  <span className="flex flex-col gap-y-2">
                    <button
                      onClick={() => openDeleteChildActsModal(childActData)}
                      className="rounded-lgtext-xs flex cursor-pointer items-center justify-center self-end text-reject active:scale-95 md:text-sm lg:text-base"
                    >
                      <Trash className="h-5" />
                    </button>

                    <h3 className="text-xs opacity-75">Title:</h3>

                    <h3 className="rounded-lg border border-swamp-green p-2 text-xs opacity-75">
                      {childActData.activity_title}
                    </h3>
                  </span>
                  <span className="flex flex-col gap-y-3">
                    <h3 className="text-xs">Description:</h3>
                    <h3 className="min-h-25 rounded-lg border border-swamp-green p-2 text-xs opacity-75">
                      {childActData.activity_description}
                    </h3>
                  </span>
                  <span className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => openChildActsModal(childActData)}
                      className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-ashlight py-1 text-xs text-ashlight active:scale-95 md:text-sm lg:text-base"
                    >
                      <EditIcon className="h-5" />
                      Edit
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
