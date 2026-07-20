import React from 'react'

const Announcement = ({ Atitle, eventDate, eventTime, posted, message, $date, $time, $place, note }) => {
  return (
    <div className="w-full font-[Poppins] cursor-default">
      <div className="flex flex-col gap-3 rounded-2xl bg-bone p-4 shadow-md sm:gap-4 sm:p-5 md:p-6">
        {/* Header row */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h2 className="text-sm font-[PoppinsBold] font-bold text-black sm:text-base md:text-lg">{Atitle}</h2>
          <div className="flex shrink-0 items-center gap-2 text-[11px] sm:text-xs md:text-sm text-ashlight whitespace-nowrap">
            <span>{eventDate}</span>
            <span className="h-4 w-px bg-swamp-green" />
            <span>{eventTime}</span>
          </div>
        </div>

        <span className="text-[11px] sm:text-xs md:text-sm text-ashlight">Posted on: {posted}</span>
        <span className="border-t-2 border-swamp-green" />
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-ashlight">{message}</p>
        <div className="flex flex-col gap-2 sm:gap-3">
          <span className="text-xs sm:text-sm md:text-base text-ashlight">Date : {$date}</span>
          <span className="text-xs sm:text-sm md:text-base text-ashlight">Time : {$time}</span>
          <span className="text-xs sm:text-sm md:text-base text-ashlight">Place : {$place}</span>
        </div>

        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-ashlight">* {note}</p>
      </div>
    </div>
  )
}

export default Announcement
