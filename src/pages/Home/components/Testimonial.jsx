import React from 'react'
import Heading from '../../../components/Heading'
import TestimonialCard from '../../../components/TestimonialCard'
import { testimonials } from '../../../data/testimonials'
import { Splide, SplideSlide } from '@splidejs/react-splide';


const Testimonial = () => {
  return (
    <div className={styles.section}>
        <div className={styles.maxWidth}>
            <Heading 
                heading="what our clients are saying"
                desc="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
            />
            <Splide 
                options={{
                    type   : 'loop',
                    perPage: 3,
                    perMove: 1,
                    gap: '1rem',
                    arrows: '',
                    breakpoints: {
                        375: {
                            perPage: 1,
                        },
                        768: {
                            perPage: 2,
                        },
                    },
                    
                }} 
                aria-label="Testimonials"
                className={styles.testimonials}
                >
                {
                    testimonials.map((testimonial, index) => (
                        <SplideSlide>
                            <TestimonialCard key={index} testimonial={testimonial}/>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>
    </div>
  )
}

const styles = {
    section: "bg-bg",
    maxWidth: "max-w-full w-full mx-auto px-5 py-10 md:px-10 lg:p-20",
    testimonials: "mt-10 cursor-pointer",
}

export default Testimonial