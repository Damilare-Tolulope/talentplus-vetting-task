import React, { useState } from 'react'
import Heading from '../../../components/Heading'
import CourseCard from '../../../components/CourseCard'
import { courses } from '../../../data/courses';
import { tabs } from '../../../utils/helper';


const Courses = () => {
    const [currentTab, setCurrentTab] = useState('All Categories');

    const [filteredCourses, setFilteredCourses] = useState(courses)
    const filterCoursesByTags = (value) => {
        setCurrentTab(value)
        const q = value;

        let newList = [...courses]
        newList = newList.filter((course) => course.tag.toLowerCase().indexOf(q.toLowerCase()) !== -1);

        if(q === "All Categories") return setFilteredCourses(courses)
        setFilteredCourses(newList)
    }

  return (
    <div className={styles.section}>
        <div className={styles.maxWidth}>
            <Heading 
                heading="browse our popular courses" 
                desc="high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image"
            />

            <ul className={styles.tabs}>
                {
                    tabs.map((tab) => (
                        <li key={tab.key} className={currentTab === tab.value ? `${styles.activeTab} ${styles.tab}` : styles.tab} onClick={() => filterCoursesByTags(tab.value)}>{tab.label}</li>
                    ))
                }
            </ul>

            <div className={styles.courses}>
                {
                    filteredCourses.map(course => <CourseCard key={course.title} course={course} />)
                }
            </div>
        </div>
    </div>
  )
}

const styles = {
    section: "bg-bg",
    maxWidth: "px-5 md:px-10 lg:px-20 py-10 md:py-20",
    courses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",
    tabs: "overflow-x-scroll md:w-2/3  pl-20 hide-scrollbar md:text-sm text-xs flex mx-auto items-center justify-center md:gap-10 gap-2 mt-10 mb-5 font-bold",
    tab: "py-2 px-4 w-full text-center cursor-pointer text-light",
    activeTab: "bg-white text-primary",
}

export default Courses