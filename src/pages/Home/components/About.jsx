import React from 'react'
import Button from '../../../components/Button'
import Heading from '../../../components/Heading'

import setting from '../../../assets/icons/setting.png'
import autoplay from '../../../assets/icons/autoplay.png'
import file from '../../../assets/icons/file.png'
import speaker from '../../../assets/icons/speaker.png'
import atm from '../../../assets/icons/atm.png'
import cast from '../../../assets/icons/cast.png'
import group from '../../../assets/icons/group.png'
import schedule from '../../../assets/icons/schedule.png'
import img from '../../../assets/images/img-2.png'

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.section}>
            <div>
                <div>
                    <h1 className={styles.heading}>High quality video, audio & live classes</h1>
                    <p className={styles.desc}>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    <div className={styles.btn}>
                        <Button>View Courses</Button>
                    </div>
                    <div>
                        <div className={styles.classes}>
                            <div className={styles.class}>
                                <img src={speaker} alt="speaker" />
                                <p>Audio Classes</p>
                            </div>
                            <div className={styles.class}>
                                <img src={setting} alt="setting" />
                                <p>Live Classes</p>
                            </div>
                        </div>
                        <div className={styles.classes}>
                            <div className={styles.class}>
                                <img src={autoplay} alt="autoplay" />
                                <p>Recorded Classes</p>
                            </div>
                            <div className={styles.class}>
                                <img src={file} alt="file" />
                                <p>50+ Notes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>

            <div className={styles.sec}>
                <div className={styles.leftSec}>
                    <h1 className={styles.heading}>This is why we are best from others</h1>
                    <p className={styles.desc}>high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
                    <img className={styles.imgg} src={img} alt="person" />
                </div>
                <div className={styles.reasons}>
                    <div className={styles.reason}>
                        <img src={cast} alt="cast" />
                        <h4 className={styles.reasonH}>Experienced Mentors</h4>
                        <p className={styles.reasonP}>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>
                    <div className={styles.reason}>
                        <img src={schedule} alt="schedule" />
                        <h4 className={styles.reasonH}>One-On-One Meetings</h4>
                        <p className={styles.reasonP}>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>
                    <div className={styles.reason}>
                        <img src={group} alt="group" />
                        <h4 className={styles.reasonH}>One-On-One meetings</h4>
                        <p className={styles.reasonP}>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>
                    <div className={styles.reason}>
                        <img src={atm} alt="atm" />
                        <h4 className={styles.reasonH}>Affordable Prices</h4>
                        <p className={styles.reasonP}>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const styles = {
    container: "bg-bg py-20 px-5 md:px-10 lg:px-20",
    section: "max-w-full mx-auto w-full",
    heading: "lg:text-5xl md:text-3xl text-2xl font-extrabold text-center lg:text-left",
    desc: "text-light text-xs md:text-sm mt-5 mb-10 capitalize text-center lg:text-left",
    btn: "mx-auto md:mx-0 text-center lg:text-left",
    classes: "flex items-center mt-5 gap-5",
    class: "bg-white flex items-center gap-5 font-medium md:p-5 p-3 rounded text-xs md:text-sm",
    sec: "mt-10 md:mt-16 flex lg:flex-row flex-col md:gap-20 gap-10 items-start justify-between mx-auto",
    leftSec: "flex-1",
    imgg: "mt-5",
    reasons: "flex-1 grid md:grid-cols-2 gap-5",
    reason: "p-5 bg-white rounded",
    reasonH: "mt-5 mb-3 font-bold text-xs text-sm",
    reasonP: "md:leading-[30px] leading-[20px] capitalize text-light text-xs text-sm",
}

export default About