import React from 'react'

const PerformanceCard = ({des1, des2, des3, head}) => {
  return (
    <div className="flex flex-col gap-4 p-5">
      <span className="flex flex-col h-full w-120 gap-2 rounded-lg bg-white shadow-md p-6">
        <h3 className="text-lg font-bold text-egg-dark">{head}</h3>
        
        <span className="flex flex-col gap-3">
          <p className="px-4 py-2 text-xs text-gray-600">{des1}</p>
          <p className="px-4 py-2 text-xs text-gray-600">{des2}</p>
          <p className="px-4 py-2 text-xs text-gray-600">{des3}</p>
        </span>
      </span>
    </div>
  )
}

export default PerformanceCard;