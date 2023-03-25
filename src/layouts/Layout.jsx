import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <div className='py-20'>
          {children}
        </div>
      <Footer />
    </>
  )
}

export default Layout