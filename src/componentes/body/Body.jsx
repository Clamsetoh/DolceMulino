import React from 'react'
import './Body.css'
import Footer from '../footer/Footer.jsx'
import Navbar from '../navbar/Navbar'
import Form from '../contacto/form'

function Body () {
  return (<>
    <Navbar/>
    <div className='body-div'>
      <Form/>
    </div>
    <Footer/>
    </>
  )
}

export default Body


