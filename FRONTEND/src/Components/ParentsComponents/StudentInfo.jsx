import React from 'react'

const StudentInfo = ({ Htittle, Otittle }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="rounded-lg border-2 border-swamp-green bg-white px-4 py-2.5 text-center shadow-sm">
        <span className="text-sm font-semibold text-egg-dark">{Otittle}</span>
      </div>
      <span className="text-xs font-medium text-swamp-green">{Htittle}</span>
    </div>
  )
}

export default StudentInfo;