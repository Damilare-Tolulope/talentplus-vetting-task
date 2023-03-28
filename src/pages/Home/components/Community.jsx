import React from 'react'
import Button from '../../../components/Button'

import communityImg from '../../../assets/images/community.svg';

const Community = () => {
  return (
    <div className={styles.section}>
        <div className={styles.maxWidth}>
            <div className={styles.textContainer}>
                <p className={styles.head}>join our community</p>
                <h1 className={styles.title}>Are you  ready to connect with the future talent of the tech world</h1>
                <p className={styles.desc}>meet up with other techstars and grow together</p>
            </div>
            <img src={communityImg} alt='join community img' className={styles.img} />
            <Button classProp="mx-auto" isSecondary>Join Our Community</Button>
        </div>
    </div>
  )
}

const styles = {
    section: 'bg-primary',
    maxWidth: 'text-center text-white max-w-full mx-auto w-full py-16 md:py-20 px-5',
    img: 'my-5 mx-auto md:w-1/2 w-full',
    textContainer: 'w-full lg:w-1/2 md:w-2/3 mx-auto',
    head: 'uppercase text-xs',
    title: 'font-bold my-2 md:text-4xl text-2xl',
    desc: 'capitalize text-xs md:text-sm',
}

export default Community