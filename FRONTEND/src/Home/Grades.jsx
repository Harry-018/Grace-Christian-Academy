import React from 'react'
import RatingCard from '../Components/ParentsComponents/RatingCard'
import RatingStars from '../Components/ParentsComponents/Stars'
import StudentAverage from '../Components/ParentsComponents/StudentAverage';
import WeeklyAssessment from '../Components/ParentsComponents/WeeklyAssessment';

const assessmentData = [
  {
    id: 1,
    title: "Reading & Writing",
    overall: 4.0,
    ratings: [
      { name: "Cursive Writing", score: 4.0 },
      { name: "English Reading", score: 4.0 },
      { name: "Tagalog Reading", score: 4.0 },
    ],
  },
  {
    id: 2,
    title: "Speaking",
    overall: 4.0,
    ratings: [
      { name: "Pronounciation", score: 4.0 },
      { name: "Fluency", score: 4.0 },
      { name: "Confidence", score: 4.0 },
    ],
  },
  {
    id: 3,
    title: "Participation",
    overall: 4.0,
    ratings: [
      { name: "Activeness", score: 4.0 },
      { name: "Sportsmanship", score: 4.0 },
      { name: "Recitation", score: 4.0 },
    ],
  },
  {
    id: 4,
    title: "Socializing",
    overall: 4.0,
    ratings: [
      { name: "Helpfulness", score: 4.0 },
      { name: "Companionship", score: 4.0 },
      { name: "Kindness", score: 4.0 },
    ],
  },
  {
    id: 5,
    title: "Classroom Behavior",
    overall: 4.0,
    ratings: [
      { name: "Participation", score: 4.0 },
      { name: "Following Instructions", score: 4.0 },
      { name: "Responsibility", score: 4.0 },
    ],
  },
  {
    id: 6,
    title: "Subject Skills",
    overall: 4.0,
    ratings: [
      { name: "Counting", score: 4.0 },
      { name: "Problem Solving", score: 4.0 },
      { name: "Letter Recognition", score: 4.0 },
    ],
  },
];

const Grades = () => {
  return (
    <div className="flex flex-col p-5">
      <span className="flex py-5 text-2xl font-[PoppinsBold] text-swamp-green sm:px-10 lg:px-30">
        STUDENT PERFORMANCE
      </span>

      <div className="grid grid-cols-1 gap-6 snap-mandatory overflow-x-auto p-4 sm:grid-cols-2 sm:p-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10 xl:grid-cols-3">
        {assessmentData.map((card) => (
          <RatingCard
            key={card.id}
            title={card.title}
            overall={card.overall}
            ratings={card.ratings}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between px-25">
        <div className="flex-1 sm:py p-10">
          <span className="flex py-2 text-2xl font-[PoppinsBold] text-swamp-green">
            STUDENT AVERAGE
          </span>
          <StudentAverage
            average={3.75}
            label="Outstanding"
            totalDays={68}
            totalAbsences={5}
            remarks=""
          />
        </div>

        <div className="w-full p-10">
          <span className="block py-2 text-2xl font-[PoppinsBold] text-swamp-green">
            WEEKLY ASSESSMENT
          </span>
          <WeeklyAssessment />
        </div>
      </div>
    </div>
  )
}

export default Grades;