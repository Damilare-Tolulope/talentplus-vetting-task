import React, { useState } from 'react'
import { footerLinks } from '../data/links';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { path } from '../constants/path';

import logo from '../assets/icons/logo.svg';
import InputField from '../components/InputField';


const Footer = () => {
    const [email, setEmail] = useState('')

    return (
        <footer className={styles.section}>
          <div className={styles.maxWidth}>
            <div className={styles.gridContainer}>
              <div className={styles.firstCol}>
                <img src={logo} alt="logo" />
                <p className={styles.desc}>
                    Reach out to us on any of our social media networks
                </p>
                <div className={styles.socials}>
                    {
                        footerLinks.social.map(({label, link, name}) => (
                            <Link key={label} to={link} className={styles.social}><img src={label} alt={name} /></Link>
                        ))
                    }
                </div>
              </div>
    
              <div className="">
                <h3 className={styles.title}>useful links</h3>
                <div>
                    {
                        footerLinks.usefulLinks.map(({label, link}) => (
                            <Link to={link} key={label} className={styles.link}>
                                {label}
                            </Link>
                        ))
                    }
                </div>
              </div>
              <div className="">
                <h3 className={styles.title}>community</h3>
                <div>
                    {
                        footerLinks.community.map(({label, link}) => (
                            <Link to={link} key={label} className={styles.link}>
                                {label}
                            </Link>
                        ))
                    }
                </div>
              </div>
    
              <div className={styles.thirdCol}>
                <h3 className={styles.title}>Subscribe Us</h3>
                <div className={styles.inputContainer}>
                    <InputField value={email} handleOnChange={(e) => setEmail(e.target.value)} placeholder="Nft123@gmail.com" type="text" className={styles.input}/>
                    <Link to={path.HOME}>
                        <Button
                        classProp={styles.btn}
                        >
                            Send Message
                        </Button>
                    </Link>
                </div>
              </div>
            </div>

            <div>
            </div>
          </div>
        </footer>
      );
    };
    
    const styles = {
      section: 'md:px-20 px-5 bg-secondary text-white text-xs pt-20 pb-10 w-full font-satoshi',
      maxWidth: 'max-w-full mx-auto w-full',
      gridContainer: 'grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10',
      firstCol: '',
      desc: 'my-3 md:text-lg text-sm md:w-full w-4/5',
      contact:
        'cursor-pointer flex hover:text-primary transition linear delay-2s w-[auto] hover:transition linear delay-2s',
      title: 'md:text-xl text-lg font-medium font-light border-b-1 capitalize mb-5',
      link: 'mb-5 md:text-lg text-sm block font-light cursor-pointer hover:text-light transition linear delay-2s w-auto hover:transition linear delay-2s',
      thirdCol: '',
      btn: 'px-1 text-md rounded-none',
      inputContainer: 'w-full border border-primary rounded flex justify-between bg-[#2A2A2B]',
      input: 'bg-[transparent] h-full',
      socials: 'mt-5 flex gap-5 items-center',
      social: 'transition duration-300 hover:scale-110 hover:duration-300',
    };
    

export default Footer