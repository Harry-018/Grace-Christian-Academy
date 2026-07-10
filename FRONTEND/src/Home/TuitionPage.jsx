import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getTuition } from "../services/service/tuitionService";

const TuitionPage = () => {
  const { grades } = useLoaderData();

  const [selectedGrade, setSelectedGrade] = useState(null);
  const [tuitionData, setTuitionData] = useState(null);

  const fetchTuition = async (grade_id) => {
    try {
      const data = await getTuition(grade_id);

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

  return (
    <div className="flex w-80 flex-col gap-y-10 p-5 xs:w-100 md:w-150 md:gap-y-8 md:p-8 lg:w-full lg:flex-row lg:gap-x-12"></div>
  );
};

export default TuitionPage;
