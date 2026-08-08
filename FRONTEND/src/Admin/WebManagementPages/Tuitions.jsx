import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getTuition } from "../../services/service/tuitionService";
import { Edit, PlusCircle, Trash } from "lucide-react";
import TuitionManagementStore from "../../Store/TuitionManagementStore";

const Tuitions = () => {
  const { grades } = useLoaderData();

  const refreshTuition = TuitionManagementStore(
    (state) => state.refreshTuition,
  );

  const [selectedGrade, setSelectedGrade] = useState(
    grades?.[0]?.grade_id ?? null,
  );

  const [tuitionData, setTuitionData] = useState();

  const subtotalboys = tuitionData
    ? Number(tuitionData.grade.tuition_fee || 0) +
      Number(tuitionData.grade.books || 0) +
      Number(tuitionData.grade.uniform_boys || 0) +
      Number(tuitionData.grade.pe_uniform_boys || 0)
    : 0;
  const subtotalgirls = tuitionData
    ? Number(tuitionData.grade.tuition_fee || 0) +
      Number(tuitionData.grade.books || 0) +
      Number(tuitionData.grade.uniform_girls || 0) +
      Number(tuitionData.grade.pe_uniform_girls || 0)
    : 0;

  console.log(subtotalboys);
  console.log(subtotalgirls);

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
  const openEditMethodModal = TuitionManagementStore(
    (state) => state.openEditMethodModal,
  );
  const openDeleteMethodModal = TuitionManagementStore(
    (state) => state.openDeleteMethodModal,
  );
  const openInstallmentModal = TuitionManagementStore(
    (state) => state.openInstallmentModal,
  );
  const openRemoveInstallmentModal = TuitionManagementStore(
    (state) => state.openRemoveInstallmentModal,
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
  }, [selectedGrade, refreshTuition]);

  const formatCurrency = (amount) => {
    return Number(amount || 0).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  console.log(tuitionData);

  return (
    <div className="grid h-full w-full grid-cols-1 gap-10 lg:grid-cols-2">
      <div className="flex flex-col gap-y-5 md:gap-y-8">
        {/* fees title & create button */}
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
          <div className="no-scrollbar flex gap-3 overflow-x-auto">
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
                <div className="flex justify-between border-t border-swamp-green/75 py-4">
                  <span> Tuition Fee:</span>
                  <span className="font-[PoppinsBold] font-extrabold text-swamp-green">
                    ₱ {formatCurrency(tuitionData.grade.tuition_fee)}
                  </span>
                </div>

                <div className="flex justify-between border-t border-swamp-green/75 pt-4">
                  <span> Books:</span>
                  <span className="font-[PoppinsBold] font-extrabold text-swamp-green">
                    ₱ {formatCurrency(tuitionData.grade.books)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span> Uniform (Boys):</span>
                  <span className="font-[PoppinsBold] font-extrabold text-swamp-green">
                    ₱ {formatCurrency(tuitionData.grade.uniform_boys)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span> PE Uniform (Boys):</span>
                  <span className="font-[PoppinsBold] font-extrabold text-swamp-green">
                    ₱ {formatCurrency(tuitionData.grade.pe_uniform_boys)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span> Uniform (Girls):</span>
                  <span className="font-[PoppinsBold] font-extrabold text-swamp-green">
                    ₱ {formatCurrency(tuitionData.grade.uniform_girls)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span> PE Uniform (Girls):</span>
                  <span className="font-[PoppinsBold] font-extrabold text-swamp-green">
                    ₱ {formatCurrency(tuitionData.grade.pe_uniform_girls)}
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between border-t-2 border-swamp-green/75 py-4">
            <span> SUBTOTAL:</span>
            <span className="font-[PoppinsBold] font-extrabold text-swamp-green">
              ₱ {formatCurrency(subtotalboys)}- ₱{" "}
              {formatCurrency(subtotalgirls)}
            </span>
          </div>
        </div>
      </div>

      {/* method title & create button */}
      <div className="flex flex-col gap-5">
        {/* Payment title & create button */}
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

        <div className="flex flex-col gap-5 overflow-y-auto p-2">
          {tuitionData?.payment_methods?.map((paymethod) => {
            const totalBoys =
              Number(subtotalboys || 0) - Number(paymethod.discount || 0);

            const totalGirls =
              Number(subtotalgirls || 0) - Number(paymethod.discount || 0);

            return (
              <div
                key={paymethod.method_id}
                className="flex flex-col gap-10 rounded-2xl bg-bone p-5 inset-shadow-med"
              >
                <div className="flex justify-between">
                  <h1 className="font-[PoppinsBold] text-lg text-swamp-green">
                    {paymethod.method}
                  </h1>
                  <span className="flex gap-5">
                    <button
                      onClick={() => openEditMethodModal(paymethod)}
                      className="flex cursor-pointer items-center rounded-lg text-xs text-ashlight active:scale-95 md:text-sm lg:text-base"
                    >
                      <Edit className="h-5" />
                      Edit
                    </button>
                    <button
                      onClick={() => openDeleteMethodModal(paymethod)}
                      className="flex cursor-pointer items-center rounded-lg text-xs text-reject active:scale-95 md:text-sm lg:text-base"
                    >
                      <Trash className="h-5" />
                      Remove
                    </button>
                  </span>
                </div>

                <div className="flex flex-col gap-3 opacity-75">
                  <div className="flex gap-3 text-sm">
                    <h1>Due Date:</h1>
                    <h1>
                      {paymethod.due_date.length !== 0
                        ? paymethod.due_date
                        : "N/A"}
                    </h1>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <h1>Discount:</h1>
                    <h1>
                      {Number(paymethod.discount) !== 0 ? (
                        <div className="flex gap-3">
                          ₱ {formatCurrency(paymethod.discount)}{" "}
                        </div>
                      ) : (
                        "No Discount Available"
                      )}
                    </h1>
                  </div>

                  <div className="flex gap-3 text-sm">
                    <h1>Monthly Installment:</h1>
                    <h1>
                      {" "}
                      {Number(paymethod.monthly_installment) !== 0 ? (
                        <div className="flex gap-3">
                          ₱ {formatCurrency(paymethod.monthly_installment)}{" "}
                          <button
                            onClick={() => {
                              openRemoveInstallmentModal({
                                grade_id: selectedGrade,
                                method_id: paymethod.method_id,
                              });
                            }}
                            className="cursor-pointer text-reject active:scale-95"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <button
                          className="cursor-pointer text-swamp-green active:scale-95"
                          onClick={() => {
                            console.log("Opening installment modal");
                            openInstallmentModal({
                              grade_id: selectedGrade,
                              method_id: paymethod.method_id,
                              monthly_installment:
                                paymethod.monthly_installment,
                            });
                          }}
                        >
                          Edit
                        </button>
                      )}
                    </h1>
                  </div>
                </div>

                <div className="flex justify-between gap-3 text-lg">
                  <h1>TOTAL:</h1>
                  <h1 className="font-[PoppinsBold] font-bold text-swamp-green">
                    ₱ {formatCurrency(totalBoys)} - ₱{" "}
                    {formatCurrency(totalGirls)}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tuitions;
