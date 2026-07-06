import React from 'react'

const Announcement = ({Atitle, posted, time, date, header1, bullet, $date, $time, $place}) => {
  return ( 
    <div className="flex min-w-50 w-full sm:w-[320px] max-w-sm shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink lg:snap-none font-[Poppins] cursor-default">
      <div className="flex h-full flex-col gap-3 sm:gap-4 rounded-lg bg-bone p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
          <span className="text-base sm:text-lg font-[PoppinsBold] text-black">{Atitle}</span>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-ashlight">
            <span>{date}</span>
            <span className="h-4 sm:h-5 w-px bg-swamp-green" />
            <span>{time}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm text-ashlight">Posted on: {posted}</span>
          <span className="flex border-t-2 border-swamp-green"></span>
          <span className="text-sm sm:text-base text-ashlight">{header1}</span>

          <span className="text-sm sm:text-base text-ashlight">Date : {$date}</span>
          <span className="text-sm sm:text-base text-ashlight">Time : {$time}</span>
          <span className="text-sm sm:text-base text-ashlight">Place : {$place}</span>
          <p className="text-sm sm:text-base text-ashlight">* {bullet}</p>
        </div>
      </div>
    </div>
  )
}

export default Announcement;