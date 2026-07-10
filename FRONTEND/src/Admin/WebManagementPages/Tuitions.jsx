import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getTuition } from "../../services/service/tuitionService";
import { Edit, PlusCircle, Trash } from "lucide-react";
import TuitionManagementStore from "../../Store/TuitionManagementStore";

const Tuitions = () => {
  const { grades } = useLoaderData();
  const [selectedGrade, setSelectedGrade] = useState(
    grades?.[0]?.grade_id ?? null,
  );
  const [tuitionData, setTuitionData] = useState(null);

  const openCreateGradeModal = TuitionManagementStore(
    (state) => state.openCreateGradeModal,
  );
  const openEditGradeModal = TuitionManagementStore(
    (state) => state.openEditGradeModal,
  );
  const openDeleteGradeModal = TuitionManagementStore(
    (state) => state.openDeleteGradeModal,
  );

  const openCreateMethodModal = TuitionManagementStore(
    (state) => state.openCreateMethodModal,
  );

  console.log(tuitionData);

  const fetchTuition = async (grade_id) => {
    try {
      const data = await getTuition(grade_id);

      console.log("Backend returned:", data);

      setTuitionData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedGrade) {
      fetchTuition(selectedGrade);
    }
  }, [selectedGrade]);

  const formatCurrency = (amount) => {
    return Number(amount || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="grid h-full w-full grid-cols-1 gap-10 lg:grid-cols-2">
      {/* fees title & create button */}
      <div className="flex flex-col gap-y-5 md:gap-y-8">
        <div className="flex justify-between rounded-2xl bg-bone p-5 inset-shadow-med">
          <h3 className="font-[PoppinsBold] text-swamp-green md:text-lg">
            FEES
          </h3>

          <button
            onClick={() => openCreateGradeModal()}
            className="flex cursor-pointer items-center rounded-lg text-xs text-swamp-green active:scale-95 md:text-sm lg:text-base"
          >
            <PlusCircle className="h-5" />
            Create
          </button>
        </div>

        {/* grade levels button */}
        <div className="flex items-center gap-5 rounded-2xl px-5">
          Select Grade:
          <div className="no-scrollbar flex flex-row-reverse gap-3 overflow-y-auto">
            {grades.map((grade) => {
              const isActive = selectedGrade === grade.grade_id;

              return (
                <button
                  key={grade.grade_id}
                  onClick={() => {
                    console.log("Clicked:", grade.grade_id);
                    setSelectedGrade(grade.grade_id);
                  }}
                  className={`cursor-pointer rounded-lg text-sm ${
                    isActive ? "bg-swamp-green p-2 text-bone" : ""
                  }`}
                >
                  {grade.grade_level}
                </button>
              );
            })}
          </div>
        </div>

        {/* tuition fees display */}
        <div className="flex flex-col gap-10 rounded-2xl bg-bone p-5 inset-shadow-med">
          {tuitionData && (
            <div className="flex flex-col gap-10 text-ashlight">
              <div className="flex justify-between">
                <span className="font-[PoppinsBold] text-lg text-swamp-green">
                  {tuitionData.grade.grade_level}
                </span>
                <span className="flex gap-5">
                  <button
                    onClick={() => openEditGradeModal(tuitionData)}
                    className="flex cursor-pointer items-center rounded-lg text-xs text-ashlight active:scale-95 md:text-sm lg:text-base"
                  >
                    <Edit className="h-5" />
                    Edit
                  </button>
                  <button
                    onClick={() => openDeleteGradeModal(tuitionData)}
                    className="flex cursor-pointer items-center rounded-lg text-xs text-reject active:scale-95 md:text-sm lg:text-base"
                  >
                    <Trash className="h-5" />
                    Remove
                  </button>
                </span>
              </div>

              <div className="opacity/75 flex flex-col gap-5">
                <div className="flex justify-between border-b border-swamp-green/75 pb-4">
                  <span> Tuition Fee:</span>
                  <span className="font-bold">
                    ₱ {formatCurrency(tuitionData.grade.tuition_fee)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-swamp-green/75 pb-4">
                  <span> Miscellaneus Fee:</span>
                  <span className="font-bold">
                    ₱ {formatCurrency(tuitionData.grade.miscel_fee)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-swamp-green/75 pb-4">
                  <span> Books:</span>
                  <span className="font-bold">
                    ₱ {formatCurrency(tuitionData.grade.books)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-swamp-green/75 pb-4">
                  <span> Uniform (Boys):</span>
                  <span className="font-bold">
                    ₱ {formatCurrency(tuitionData.grade.uniform_boys)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-swamp-green/75 pb-4">
                  <span> PE Uniform (Boys):</span>
                  <span className="font-bold">
                    ₱ {formatCurrency(tuitionData.grade.pe_uniform_boys)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-swamp-green/75 pb-4">
                  <span> Uniform (Girls):</span>
                  <span className="font-bold">
                    ₱ {formatCurrency(tuitionData.grade.uniform_girls)}
                  </span>
                </div>
                <div className="flex justify-between border-b border-swamp-green/75 pb-4">
                  <span> PE Uniform (Girls):</span>
                  <span className="font-bold">
                    ₱ {formatCurrency(tuitionData.grade.pe_uniform_girls)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* method title & create button */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between rounded-2xl bg-bone p-5 inset-shadow-med">
          <h3 className="font-[PoppinsBold] text-swamp-green md:text-lg">
            PAYMENT METHODS
          </h3>

          <button
            onClick={() => openCreateMethodModal()}
            className="flex cursor-pointer items-center rounded-lg text-xs text-swamp-green active:scale-95 md:text-sm lg:text-base"
          >
            <PlusCircle className="h-5" />
            Create
          </button>
        </div>
        <div className="flex flex-col gap-5"></div>
      </div>
    </div>
  );
};

export default Tuitions;
