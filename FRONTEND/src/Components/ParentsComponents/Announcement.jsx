import React from 'react'

const Announcement = ({Cimg}) => {
  return ( 
    <div className="relative flex min-h-full min-w-100 snap-center flex-col justify-end overflow-hidden rounded-2xl p-5 text-bone duration-300 hover:scale-105 lg:h-100 lg:w-100"
      style={{
        backgroundImage: `url(${Cimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


        </div>
  )
}

export default Announcement;