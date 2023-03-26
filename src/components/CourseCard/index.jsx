import React from 'react'

import star from '../../assets/icons/star.svg'
import book from '../../assets/icons/book.svg'
import clock from '../../assets/icons/clock.svg'

const index = ({ course }) => {
    const { img, title, tag, time, lessons, price, userImg, name, favourites, enrolledStudents } = course;

  return (
    <div className={styles.container}>
        <img src={img} alt={title} />

        <div className={styles.details}>
            <div className={styles.tagFav}>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.fav}>{favourites} <img src={star} alt="star" /> <span className={styles.span}>({enrolledStudents})</span></p>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.timeLesson}>
                <p className={styles.tl}><img src={clock} alt="clock" /> {time}</p>
                <p className={styles.tl}><img src={book} alt="book" /> {lessons} Lessons</p>
            </div>
            <div className={styles.userDetails}>
                <div className={styles.user}>
                    <img src={userImg} alt={name} />
                    <p>{name}</p>
                </div>
                <p className={styles.price}>${price}</p>
            </div>
        </div>
    </div>
  )
}

const styles = {
    container: "bg-white p-5",
    previewImg: "",
    tag: " rounded-full bg-primary/20 text-primary py-1 px-4 font-bold",
    fav: "flex text-light font-bold",
    span: "ml-1",
    details: "mt-5",
    title: "font-bold my-3 text-lg md:w-3/4",
    tagFav: "flex items-center justify-between text-xs",
    timeLesson: "flex items-center justify-between text-xs text-light",
    tl: "flex items-center gap-1",
    userDetails: "flex items-center justify-between mt-4",
    user: "flex items-center gap-2 text-sm font-bold",
    price: "text-primary font-bold",
}

export default index