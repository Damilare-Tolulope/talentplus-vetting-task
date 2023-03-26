import React from 'react'

const Heading = ({ heading, desc, className }) => {
  return (
    <div className={`text-center ${className}`}>
        <h1 className='lg:text-5xl md:text-3xl text-xl font-extrabold text-dark md:mb-4 mb-2 capitalize'>{heading}</h1>
        <p className='text-xs md:text-sm text-light md:w-6/12 w-full mx-auto capitalize'>{desc}</p>
    </div>
  )
}

export default Heading