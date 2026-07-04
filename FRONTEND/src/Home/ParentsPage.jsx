import React from 'react'
import StudentInfo from '../Components/ParentsComponents/StudentInfo'
import Announcement from '../Components/ParentsComponents/Announcement'
import RatingCard from '../Components/ParentsComponents/RatingCard'

const assessmentData = [
  {
    id: 1,
    title: "Speaking",
    overall: 4,
    ratings: [
      { name: "Pronunciation", score: 4 },
      { name: "Fluency", score: 4 },
      { name: "Confidence", score: 4 },
    ],
  },
  {
    id: 2,
    title: "Listening",
    overall: 5,
    ratings: [
      { name: "Comprehension", score: 5 },
      { name: "Attention", score: 5 },
      { name: "Accuracy", score: 5 },
    ],
  },
  {
    id: 3,
    title: "Participation",
    overall: 5,
    ratings: [
      { name: "Activeness", score: 5 },
      { name: "Sportmanship", score: 5 },
      { name: "Recitation", score: 5 },
    ],
  },
  {
    id: 4,
    title: "Socializing",
    overall: 3,
    ratings: [
      { name: "Helpfulness", score: 5 },
      { name: "Companionship", score: 5 },
      { name: "Kindness", score: 5 },
    ],
  },
  
  
];

const ParentsPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6 font-[Poppins] cursor-default">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 border border-swamp-green rounded-lg bg-bone p-6">
          <span className="text-lg font-medium text-ashlight">Student Information</span>
          
          <div className="grid grid-cols-4 gap-9">
            <StudentInfo Htittle="LRN" Otittle="2026147528128" />
            <StudentInfo Htittle="Class Schedule" Otittle="Monday - Thursday" />
            <StudentInfo Htittle="Class Time" Otittle="7am - 11am" />
            <StudentInfo Htittle="Room" Otittle="Room - Hope" />
          </div>
          
          <div className="grid grid-cols-5 gap-9">
            <StudentInfo Htittle="Last Name" Otittle="Santiago" />
            <StudentInfo Htittle="First Name" Otittle="Margarett" />
            <StudentInfo Htittle="Middle Name" Otittle="Mendoza" />
            <StudentInfo Htittle="Sex" Otittle="Female" />
            <StudentInfo Htittle="Status" Otittle="Pre-Kinder" />
          </div>
        </div>
      </div>

        <div className="flex flex-col gap-4 p-5">
          <span className="text-lg font-[PoppinsBold] text-swamp-green">Announcements</span>
          <div className="flex scroll-smooth snap-x snap-mandatory gap-7 overflow-x-auto px-5 py-5 no-scrollbar">
            <Announcement 
              Cimg = {"/assets/nc1.webp"}
            />
            <Announcement 
              Cimg = {"/assets/fd.webp"}
            />
            <Announcement 
              Cimg = {"/assets/cp.webp"}
            />
            <Announcement 
              Cimg = {"/assets/hp.jpg"}
            />
            <Announcement 
              Cimg = {"/assets/fr.jpg"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <span className="text-lg font-[PoppinsBold] text-swamp-green">Student Performance</span>
        </div>
        <div className="grid grid-cols-1 gap-3 p-8 md:grid-cols-2 lg:flex-cols-3 xl:grid-cols-4 overflow-x-auto">
      {assessmentData.map((card) => (
        <RatingCard
          key={card.id}
          title={card.title}
          overall={card.overall}
          ratings={card.ratings}
        />
      ))}
    </div>
  </div>
  )
}

export default ParentsPage;