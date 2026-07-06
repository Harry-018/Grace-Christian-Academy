import React from 'react'
import StudentInfo from '../Components/ParentsComponents/StudentInfo'
import Announcement from '../Components/ParentsComponents/Announcement'

const ParentsDashboard = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 font-[Poppins] cursor-default">
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 border border-swamp-green rounded-lg bg-bone p-4 sm:p-6 w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-16 sm:w-20 rounded-full object-cover shrink-0"
            />
            <span className="text-xl sm:text-2xl md:text-3xl font-[PoppinsBold] text-black hover:text-2xl duration-300">
              Bautista, Sofia Anne
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-5 p-4 sm:p-6 border border-swamp-green rounded-lg bg-bone">
            <StudentInfo Htittle="LRN" Otittle="2026147528128" />
            <StudentInfo Htittle="Class Schedule" Otittle="Monday - Friday" />
            <StudentInfo Htittle="Class Time" Otittle="7am - 10am" />
            <StudentInfo Htittle="Room" Otittle="Room - Hope" />
            <StudentInfo Htittle="Adviser" Otittle="Mrs. Rivera" />
            </div>
        </div>
      </div>

      <div className="flex flex-col p-1 sm:p-2">
        <span className="flex text-base sm:text-lg font-[PoppinsBold] text-swamp-green">
          Announcements
        </span>
        <div className="overflow-x-auto -mx-2 px-2 py-4">
          <div className="flex gap-4 px-2 lg:grid lg:grid-cols-3 lg:gap-5 lg:px-0 snap-mandatory">
            <Announcement
            Atitle={"AWARDING CEREMONY"}
            date={"July 05, 2026"}
            time={"10:00 AM"}
            posted={"July 01, 2026"}
            header1={"Dear [Team/Colleagues/Community], We are thrilled to announce that our Annual Awarding Ceremony is just around the corner! Join us as we celebrate excellence, hard work, and outstanding achievements within our organization."}
            $date={"July 05, 2026"}
            $time={"10AM - 5PM"}
            $place={"Covered Court"}
            bullet={"To secure your child's spot, please complete and sign the attached permission slip and return it to [Teacher's Name] no later than Deadline Date. Payment can be made at [Payment Location/Method, e.g., the School Office] ."}
            />

            <Announcement
            Atitle={"FIELD TRIP 2026"}
            date={"August 12, 2026"}
            time={"7:00 AM"}
            posted={"July 05, 2026"}
            header1={"Dear [Team/Colleagues/Community], We are thrilled to announce that our Annual Awarding Ceremony is just around the corner! Join us as we celebrate excellence, hard work, and outstanding achievements within our organization."}
            $date={"July 05, 2026"}
            $time={"10AM - 5PM"}
            $place={"Covered Court"}
            bullet={"To secure your child's spot, please complete and sign the attached permission slip and return it to [Teacher's Name] no later than Deadline Date. Payment can be made at [Payment Location/Method, e.g., the School Office] ."}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentsDashboard;