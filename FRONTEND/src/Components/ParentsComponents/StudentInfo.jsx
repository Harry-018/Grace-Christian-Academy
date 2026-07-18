import React from 'react'

const StudentInfo = ({Htittle, Otittle }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-fit rounded-lg bg-white/40 px-4 py-5 text-center shadow-sm">
        <span className="text-sm sm:text-base font-semibold text-egg-dark whitespace-nowrap">{Otittle}</span>
      </div>
      <span className="text-xs sm:text-sm font-medium text-white text-center whitespace-nowrap"> {Htittle} </span>
    </div>
  )
}

export default StudentInfo;