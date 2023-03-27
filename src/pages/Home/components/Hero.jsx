import React from 'react';
import Button from '../../../components/Button';

import arrow from '../../../assets/icons/arrow.svg';
import curveArrow from '../../../assets/icons/curve-arrow.svg';
import heroImg from '../../../assets/images/hero-img.svg';
import person1 from '../../../assets/images/user-img/person1.png';
import person2 from '../../../assets/images/user-img/person2.png';
import person3 from '../../../assets/images/user-img/person3.png';
import person4 from '../../../assets/images/user-img/person4.png';
import person5 from '../../../assets/images/user-img/person5.png';
import dropbox from '../../../assets/images/partners/dropbox.png';
import monday from '../../../assets/images/partners/monday.png';
import stripe from '../../../assets/images/partners/stripe.png';
import slack from '../../../assets/images/partners/slack.png';
import zoom from '../../../assets/images/partners/zoom.png';

const Hero = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.leftSection}>
            <h1 className={styles.heading}>Grow your skills to advance your career path</h1>
            <p className={styles.desc}>build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
            <div className={styles.btns}>
              <Button classProp={styles.btn} isTertiary>Get Started Now <img src={arrow} alt="arrow" /></Button>
              <Button isSecondary>Enroll Now</Button>
            </div>
            <div className={styles.preview}>
              <div className={styles.imgGroup}>
                <img className={styles.imgItem} src={person1} alt="user" />
                <img className={styles.imgItems} src={person2} alt="user" />
                <img className={styles.imgItems} src={person3} alt="user" />
                <img className={styles.imgItems} src={person4} alt="user" />
                <img className={styles.imgItems} src={person5} alt="user" />
              </div>
              <div className={styles.prev}>
                <h2 className={styles.num}>255k+</h2>
                <p>Previews</p>
              </div>
            </div>
            <img className={styles.curve} src={curveArrow} alt="arrow" />
          </div>
          <div>
            <img className={styles.img} src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <img className={styles.partner} src={zoom} alt="zoom" />
        <img className={styles.partner} src={stripe} alt="stripe" />
        <img className={`${styles.partner} md:w-40 w-28`} src={monday} alt="monday" />
        <img className={`${styles.partner} w-28`} src={slack} alt="slack" />
        <img className={`${styles.partner} md:w-32 w-28`} src={dropbox} alt="dropbox" />
      </div>
    </div>
  )
}

const styles = {
  container: "bg-primary md:py-32 pt-28 md:h-screen relative",
  section: "px-5 md:px-10 lg:px-20",
  leftSection: "text-white text-center md:text-left md:w-1/2 w-full md:mt-20 my-10 relative",
  heading: "lg:text-5xl md:text-3xl text-xl font-extrabold",
  desc: "text-xs md:text-sm mt-5 mb-10 capitalize w-full md:w-3/4",
  btns: "flex md:gap-5 gap-2 flex-col md:flex-row",
  btn: "flex items-center justify-center md:justify-start gap-5 sm:px-5",
  img: "md:absolute md:w-4/12 bottom-0 md:right-40 mt-20 md:mt-0",
  preview: "mt-5 flex gap-5 items-center justify-center md:justify-start",
  prev: "text-center font-light text-sm",
  num: "font-extrabold text-lg",
  imgGroup: "flex",
  imgItem: "w-10 h-10 md:w-auto md:h-auto",
  imgItems: "-ml-5 w-10 h-10 md:w-auto md:h-auto",
  curve: "absolute w-1/5 md:top-1/2 rotate-[60deg] md:rotate-0 right-0",
  partners: "md:flex grid grid-cols-2 place-items-center items-center justify-center md:gap-20 gap-10 gap-x-0 bg-primary/20 py-10",
  partner: "w-20 cursor-pointer hover:scale-110 transition duration-300"
}

export default Hero