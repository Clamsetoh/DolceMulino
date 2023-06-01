import React from 'react'
import './Body.css'
import Footer from '../footer/Footer.jsx'
import Navbar from '../navbar/Navbar'

function Body () {
  return (<>
    <Navbar/>
    <div className='body-div'></div>
    <Footer/>
    </>
  )
}

export default Body


