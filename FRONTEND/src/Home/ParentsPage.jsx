import React from 'react'
import StudentInfo from '../Components/ParentsComponents/StudentInfo'
import Announcement from '../Components/ParentsComponents/Announcement'
import PerformanceCard from '../Components/ParentsComponents/PerformanceCard'

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

        <div className="flex scroll-smooth snap-x snap-mandatory gap-7 overflow-x-auto px-5 py-5 no-scrollbar">
          <PerformanceCard 
            head="Speaking"
            des1="Pronounciation"
            des2="Fluency"
            des3="Confidence"
          />

          <PerformanceCard 
            head="Speaking"
            des1="Pronounciation"
            des2="Fluency"
            des3="Confidence"
          />

          <PerformanceCard 
            head="Speaking"
            des1="Pronounciation"
            des2="Fluency"
            des3="Confidence"
          />

          <PerformanceCard 
            head="Speaking"
            des1="Pronounciation"
            des2="Fluency"
            des3="Confidence"
          />
        </div>


      </div>
  )
}

export default ParentsPage;