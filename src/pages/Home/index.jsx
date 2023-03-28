import React from 'react'
import About from './components/About'
import Community from './components/Community'
import Courses from './components/Courses'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'

const index = () => {
  return (
    <div>
      <Hero />
      <About />
      <Courses />
      <Testimonial />
      <Community />
      <FAQ />
    </div>
  )
}

export default index