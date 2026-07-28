import React from 'react'

const Announcement = ({ title, posted, message, date, time, venue }) => {
  return (
    <div className="w-full h-flex font-[Poppins] cursor-default">
      <div className="flex flex-col gap-3 rounded-2xl bg-bone p-4 shadow-sm sm:gap-4 sm:p-5 md:p-6">
        {/* Header row */}
        <div className="flex flex-col gap-1 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
          <h2 className="text-sm font-[PoppinsBold] text-swamp-green sm:text-base md:text-lg">
            {title}
          </h2>
          <span className="shrink-0 whitespace-nowrap text-[11px] text-ashlight sm:text-xs md:text-sm">
            Posted on: {posted}
          </span>
        </div>

        <p className="border-t pt-3 text-xs leading-relaxed text-ashlight sm:text-sm md:text-base">
          {message}
        </p>

        <ul className="list-disc space-y-2 pl-5 text-xs text-ashlight sm:text-sm md:text-base">
          <li>Date: {date}</li>
          <li>Time: {time}</li>
          <li>Venue: {venue}</li>
        </ul>
      </div>
    </div>
  )
}

export default Announcement