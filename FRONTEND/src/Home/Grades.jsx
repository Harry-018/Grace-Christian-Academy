import { useState } from 'react'
import StudentCard from '../Components/GradesComponents/StudentCard'
import Remarks from '../Components/GradesComponents/Remarks'
import QuarterTabs from '../Components/GradesComponents/QuarterTabs'
import DevelopmentCard from '../Components/GradesComponents/DevelopmentCard'
import GradeModal from '../Components/GradesComponents/GradeModal'

const STUDENT = {
  lastName: "Santiago",
  firstName: "Maria Leonora Teresa",
  learnerReferenceNumber: "NOT APPLICABLE",
  studentId: "GCA-S01",
  gradeLevel: "NURSERY",
};

const ATTENDANCE = {
  totalDays: "58",
  absences: "5",
};

const developments = [
    {
      title: "PHYSICAL DEVELOPMENT",
      grades: [
        {
          skill: "Gross Motor Skills",
          description: "Hopping, Skipping, Catching, Jumping, Balance",
          grade: "A",
        },
        {
          skill: "Fine Motor Skills",
          description: "Tying Shoes, Pegs, Beads, Crayons, Scissors",
          grade: "A",
        },
        {
          skill: "Drawing Recognize Pictures",
          grade: "A",
        },
        {
          skill: "Coloring with Lines",
          grade: "A",
        },
        {
          skill: "Printing Own Name",
          grade: "A",
        },
      ],
    },

    {
      title: "SOCIO-EMOTIONAL DEVELOPMENT",
      grades: [
        {
          skill: "Social Interaction",
          grade: "A",
        },
        {
          skill: "Emotional Expression",
          grade: "A",
        },
      ],
    },

    {
      title: "COGNITIVE DEVELOPMENT",
      grades: [
        {
          skill: "Problem Solving",
          grade: "A",
        },
        {
          skill: "Memory Skills",
          grade: "A",
        },
      ],
    },

    {
      title: "SPIRITUAL",
      grades: [
        {
          skill: "Prayer",
          grade: "A",
        },
        {
          skill: "Bible Knowledge",
          grade: "A",
        },
      ],
    },
  ];

const Grades = () => {
  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const [selectedDevelopment, setSelectedDevelopment] = useState(null);

  const handleGradesClick = (development) => {
    setSelectedDevelopment(development);
  };

  const handleCloseModal = () => {
    setSelectedDevelopment(null);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#ebe9e4] px-4 py-5 font-[Poppins] cursor-default sm:px-5 sm:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">

        <StudentCard
          {...STUDENT}
          {...ATTENDANCE}
        />

        <Remarks
          remarks={"Margarett, is very attentive at class. and very good at reading and writing, although she doesnt seem to be interested much in socializing. she has early signs of being introverted. "}
        />

        <QuarterTabs
          selectedQuarter={selectedQuarter}
          onQuarterChange={setSelectedQuarter}
        />

        {/* Development Cards */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {developments.map((development) => (
            <DevelopmentCard
              key={development.title}
              title={development.title}
              onGradesClick={() => handleGradesClick(development)}
            />
          ))}
        </div>
      </div>

      {/* Grade Modal */}
      {selectedDevelopment && (
        <GradeModal
          title={selectedDevelopment.title}
          items={selectedDevelopment.grades}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default Grades;
