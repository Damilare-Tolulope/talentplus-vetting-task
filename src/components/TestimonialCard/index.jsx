import React from 'react'

const index = ({ testimonial }) => {
    const { testimony, name, role, img } = testimonial;

  return (
    <div className={styles.container}>
        <p className={styles.testimony}>{testimony}</p>
        <div className={styles.user}>
            <img className={styles.img} src={img} alt={name} />
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.role}>{role}</p>
            </div>
        </div>
    </div>
  )
}

const styles = {
    container: "bg-white rounded-3xl text-light md:py-10 p-7",
    testimony: "text-xs md:w-96 w-80 leading-[20px]",
    user: "flex gap-2 items-center mt-5",
    img: "rounded-full",
    name: "font-bold text-black",
    role: "text-sm"
}


export default index