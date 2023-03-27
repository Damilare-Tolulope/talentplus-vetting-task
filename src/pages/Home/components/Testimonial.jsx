import React from 'react'
import Heading from '../../../components/Heading'
import TestimonialCard from '../../../components/TestimonialCard'
import { testimonials } from '../../../data/testimonials'

const Testimonial = () => {
  return (
    <div className={styles.section}>
        <div className={styles.maxWidth}>
            <Heading 
                heading="what our clients are saying"
                desc="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
            />
            <div className={styles.testimonials}>
                {
                    testimonials.map((testimonial, index) => <TestimonialCard key={index} testimonial={testimonial}/>)
                }
            </div>
        </div>
    </div>
  )
}

const styles = {
    section: "bg-bg",
    maxWidth: "max-w-full w-full mx-auto px-5 py-10 md:px-10 lg:p-20",
    testimonials: "flex gap-5 overflow-x-scroll w-full hide-scrollbar mt-10",
}

export default Testimonial