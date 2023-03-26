import React from 'react'

const Heading = ({ heading, desc, className }) => {
  return (
    <div className={`text-center ${className}`}>
        <h1 className='lg:text-5xl md:text-3xl text-xl font-bold text-dark md:mb-4 mb-2'>{heading}</h1>
        <p className='text-sm text-light md:w-6/12 w-full mx-auto'>{desc}</p>
    </div>
  )
}

export default Heading