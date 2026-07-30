import React, { useState } from 'react'
import { CalendarDays, School, DoorOpen, Clock3, UserRound } from "lucide-react";
import StudentCard from '../Components/GradesComponents/StudentCard'
import Remarks from '../Components/GradesComponents/Remarks'
import GradesCard from '../Components/GradesComponents/GradesCard'

const SUMMARY_FIELDS = [
  { key: "sy", label: "School Year" },
  { key: "lrn", label: "Learner Reference Number", fallback: "Not Available" },
];

const INFO_FIELDS = [
  { key: "classSchedule", label: "Class Schedule", icon: CalendarDays },
  { key: "gradeLevel", label: "Grade Level", icon: School },
  { key: "room", label: "Room", icon: DoorOpen },
  { key: "classTime", label: "Class Time", icon: Clock3 },
  { key: "adviser", label: "Adviser", icon: UserRound },
];

const studentData = {
  fullName: "Santiago, Margarett",
  lrn: null,
  sy: "2025 - 2026",
  classSchedule: "Monday - Thursday",
  gradeLevel: "Nursery",
  room: "Mahogany - 3",
  classTime: "7:00 AM - 11:00 AM",
  adviser: "Ms. Rosary Mendez",
};

const grades = [
  { grade: "A", meaning: "Advanced" },
  { grade: "B", meaning: "Building" },
  { grade: "C", meaning: "Consistent" },
  { grade: "D", meaning: "Development" },
];

const Grades = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const [spin, setSpin] = useState(false);

  return (
    <div className="min-h-screen bg-bone px-5 py-6 font-[Poppins] cursor-default">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">

        <StudentCard 
          studentData={studentData} 
          spin={spin} setSpin={setSpin} 
          infoFields={INFO_FIELDS} 
          summaryFields={SUMMARY_FIELDS} 
        />

        <Remarks 
          remarks={"Margarett, is very attentive at class. and very good at reading and writing, although she doesnt seem to be interested much in socializing. she has early signs of being introverted. "}
          totalDays={"58"}
          absences={"5"}
        />

        <GradesCard 
          grades={grades} 
          selectedQuarter={selectedQuarter}
          onQuarterChange={setSelectedQuarter}
        />
      </div>
    </div>
  )
}

export default Grades;
