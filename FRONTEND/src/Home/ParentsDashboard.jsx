import React from 'react'
import StudentInfo from '../Components/ParentsComponents/StudentInfo'
import Announcement from '../Components/ParentsComponents/Announcement'

const announcements = [
  {
    Atitle: "AWARDING CEREMONY",
    eventDate: "July 05, 2026",
    eventTime: "10:00 AM",
    posted: "July 01, 2026",
    message: "Dear [Team/Colleagues/Community], We are thrilled to announce that our Annual Awarding Ceremony is just around the corner! Join us as we celebrate excellence, hard work, and outstanding achievements within our organization.",
    $date: "July 05, 2026",
    $time: "10AM - 5PM",
    $place: "Covered Court",
    note: "To secure your child's spot, please complete and sign the attached permission slip and return it to [Teacher's Name] no later than Deadline Date. Payment can be made at [Payment Location/Method, e.g., the School Office] .",
  },
  {
    Atitle: "FIELD TRIP 2026",
    eventDate: "August 12, 2026",
    eventTime: "7:00 AM",
    posted: "July 05, 2026",
    message: "Dear [Team/Colleagues/Community], We are thrilled to announce that our Annual Awarding Ceremony is just around the corner! Join us as we celebrate excellence, hard work, and outstanding achievements within our organization.",
    $date: "July 05, 2026",
    $time: "10AM - 5PM",
    $place: "Covered Court",
    note: "To secure your child's spot, please complete and sign the attached permission slip and return it to [Teacher's Name] no later than Deadline Date. Payment can be made at [Payment Location/Method, e.g., the School Office] .",
  },
  {
    Atitle: "FIELD TRIP 2026",
    eventDate: "August 12, 2026",
    eventTime: "7:00 AM",
    posted: "July 06, 2026",
    message: "Dear [Team/Colleagues/Community], We are thrilled to announce that our Annual Awarding Ceremony is just around the corner! Join us as we celebrate excellence, hard work, and outstanding achievements within our organization.",
    $date: "July 05, 2026",
    $time: "10AM - 5PM",
    $place: "Covered Court",
    note: "To secure your child's spot, please complete and sign the attached permission slip and return it to [Teacher's Name] no later than Deadline Date. Payment can be made at [Payment Location/Method, e.g., the School Office] .",
  },
]

const ParentsDashboard = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-5 md:p-6 font-[Poppins] cursor-default">
      <div className="flex flex-col">
        <StudentInfo />

        <span className="text-base font-[PoppinsBold] text-swamp-green py-3 sm:text-lg md:text-xl">
          Announcements
        </span>
        <div className="overflow-x-auto no-scrollbar">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {announcements.map((a, i) => (
              <Announcement key={i} {...a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentsDashboard
