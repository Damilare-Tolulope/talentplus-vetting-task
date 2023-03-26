import React, { useState } from 'react'
import Heading from '../../../components/Heading';
import { faqs } from '../../../data/faqs';

const FAQ = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    };

  return (
    <div className={styles.section}>
        <Heading 
            heading="Frequently Asked Questions"
            desc="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
            className="capitalize"
        />

        <div className={styles.faqContainer}>
            {faqs.map(({ question, answer }, index) => (
            <div className={styles.accordionItem} key={question}>
                <div
                    className={styles.accordionContainer}
                    onClick={() => toggle(index)}
                >
                    <h2 className={`${styles.accordionTitle} ${selected === index ? "text-primary" : "text-dark"}`}>
                        {question}
                    </h2>
                    <span className={styles.accordionIcon}>
                        {selected === index ? "-" : "+"}
                    </span>
                </div>
                <div
                    className={
                        selected === index ? "accordion-show" : "accordion-close"
                    }
                >
                    <p className={styles.accordionBody}>
                        {answer}
                    </p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

const styles = {
    section: "px-5 pt-10",
    faqContainer: "lg:w-2/3 md:w-3/4 w-full mx-auto my-10",
    accordion: "accordion bg-transparent mx-auto mt-20",
    accordionItem: "accordion-item border-b my-5 md:py-0 bg-white",
    accordionContainer: "accordion-title accordion-button bg-transparent cursor-pointer relative flex justify-between items-center w-full md:py-4 md:pt-3 py-1 text-left rounded-none transition outline-none focus:outline-none",
    accordionTitle: "lg:text-2xl md:text-lg font-bold",
    accordionIcon: "accordion-icon md:text-3xl font-bold",
    accordionBody: "accordion-body pt-2 pb-6 text-light text-xs md:text-md leading-[20px] md:leading-[auto] capitalize",
  }

export default FAQ