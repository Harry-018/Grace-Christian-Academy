import React, { useRef, useState, useEffect } from 'react'
import { CalendarDays, School, DoorOpen, Clock3, UserRound } from "lucide-react";
import StudentInfo from '../Components/ParentsComponents/StudentInfo'
import Announcement from '../Components/ParentsComponents/Announcement'

const INFO_FIELDS = [
  { key: "classSchedule", label: "Class Schedule", icon: CalendarDays },
  { key: "gradeLevel", label: "Grade Level", icon: School },
  { key: "room", label: "Room", icon: DoorOpen },
  { key: "classTime", label: "Class Time", icon: Clock3 },
  { key: "adviser", label: "Adviser", icon: UserRound },
];

const SUMMARY_FIELDS = [
  { key: "sy", label: "School Year" },
  { key: "lrn", label: "Learner Reference Number", fallback: "Not Available" },
];

const student = {
  fullName: "Santiago, Margarett",
  lrn: null,
  sy: "2025 - 2026",
  classSchedule: "Monday - Thursday",
  gradeLevel: "Nursery",
  room: "Mahogany - 3",
  classTime: "7:00 AM - 11:00 AM",
  adviser: "Ms. Rosary Mendez",
};

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
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(Math.min(idx, announcements.length - 1));
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bone px-5 py-6 font-[Poppins] cursor-default">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">

        {/* Student */}
        <div className="flex flex-col gap-4 rounded-3xl border border-swamp-green/10 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-[PoppinsBold] text-gray-500 md:text-xl">
              Student Information
            </h2>
          </div>
          <StudentInfo student={student} spin={spin} setSpin={setSpin} infoFields={INFO_FIELDS} summaryFields={SUMMARY_FIELDS} />
        </div>

        <span className="mx-auto max-w-7xl w-full text-sm font-[PoppinsBold] text-swamp-green py-8 sm:text-lg md:text-xl">
          Announcements
        </span>
        <div ref={scrollRef} className="mx-auto max-w-7xl w-full overflow-x-auto lg:overflow-visible no-scrollbar snap-mandatory transition-smooth">
          <div className="flex gap-4 lg:grid lg:grid-cols-2 lg:gap-5">
            {announcements.map((a, i) => (
              <Announcement key={i} {...a} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 pb-4 lg:hidden">
          {announcements.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === activeIndex ? "w-4 bg-black" : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ParentsDashboard;