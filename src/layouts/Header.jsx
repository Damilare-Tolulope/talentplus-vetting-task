import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data/links';
import { path } from '../constants/path';
import Button from '../components/Button';

import logo from '../assets/icons/logo.svg';
import menu from '../assets/icons/menu.svg';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (value) => {
      setIsOpen(value);
      if (value) document.querySelector('body').style.overflow = 'hidden';
      else document.querySelector('body').style.overflow = '';
    };
  
  return (
    <nav className={styles.section}>
      <div className={styles.inner}>
        <div>
          <Link to={path.HOME}>
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink className={({ isActive }) => ( isActive ? styles.activeLink : styles.link )} key={link.label} to={link.link}>
              <button onClick={() => setIsOpen(false)} className={styles.mLink}>
                {link.label}
              </button>
            </NavLink>
          ))}
          <Link to={path.HOME}>
              <Button classProp={styles.btn} isSecondary>Enroll Now</Button>
          </Link>
        </div>


        <div className="lg:hidden">
          <img onClick={() => handleClick(!isOpen)} className="cursor-pointer" src={menu} alt="menu" />
          <div className={`${styles.mLinkContainer} ${isOpen ? '' : 'hidden'}`}>
            <div className={styles.mLinks}>
              {links.map((link) => (
                <NavLink className={({ isActive }) => ( isActive ? styles.activeLink : styles.link )} key={link.label} to={link.link}>
                  <button onClick={() => handleClick(false)} className={styles.mLink}>
                    {link.label}
                  </button>
                </NavLink>
              ))}
                <Link to={path.HOME}>
                    <Button classProp="py-3 px-12" handleClick={() => handleClick(false)} isSecondary>
                        Enroll Now
                    </Button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const styles = {
    section:
      'w-full filter backdrop-blur-lg transition-all duration-300 ease-in-out fixed z-[100] md:pt-5 md:pb-5 pt-4 pb-5 bg-secondary/50',
    inner: 'max-w-full mx-auto flex justify-between items-center md:px-20 px-5',
    logo: 'pb-2 md:w-auto w-20',
    links: 'hidden w-50 lg:flex justify-between items-center lg:gap-5',
    link: 'cursor-pointer text-white/50 hover:text-white',
    btn: 'py-3 px-12 lg:block hidden',
    mLinkContainer:
      'rounded transition linear duration-[0.3s] drop-shadow-lg fixed top-20 left-0 bg-secondary z-20 p-5 w-full',
    mLinks: 'flex flex-col gap-6 text-center',
    mLink: 'cursor-pointer py-2 px-3 transition linear duration-[0.3s] hover:transition',
    activeLink: 'text-white font-medium'
  };

export default Header