import React from 'react'
import StudentInfo from '../Components/ParentsComponents/StudentInfo'
import Announcement from '../Components/ParentsComponents/Announcement'

const announcements = [
  {
    title: "AWARDING CEREMONY",
    posted: "June 1, 2026",
    message:
      "Dear [Team/Colleagues/Community], We are thrilled to announce that our Annual Awarding Ceremony is just around the corner! Join us as we celebrate excellence, hard work, and outstanding achievements within our organization, We will Incourage and Expecting all of you is Join this Oppurtunity.",
    date: "[Day of week], [Month, Date, Year]",
    time: "[Start Time] to [End Time]",
    venue: "[Location Name, Address] / [Virtual Platform Link]",
  },
  {
    title: "FIELD TRIP",
    posted: "June 1, 2026",
    message:
      "Dear Parents and Guardians, We are excited to announce an upcoming educational field trip for [Grade Level/Class] students to [Destination] on [Date]. This trip is designed to complement our current curriculum in [Subject] by providing students with hands-on, real-world experiences outside the classroom.",
    date: "[Day of week], [Month, Date, Year]",
    time: "[Start Time] to [End Time]",
    venue: "[Location Name, Address] / [Virtual Platform Link]",
  },
]

const ParentsDashboard = () => {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-5 md:p-6 font-[Poppins] cursor-default">
      <div className="flex flex-col">
        <StudentInfo />

        <span className="mx-auto max-w-7xl w-full text-base font-[PoppinsBold] text-swamp-green py-8 sm:text-lg md:text-xl px-4 sm:px-6 md:px-12">
          Announcements
        </span>
        <div className="mx-auto max-w-7xl w-full overflow-x-auto no-scrollbar px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {announcements.map((a, i) => (
              <Announcement key={i} {...a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentsDashboard;