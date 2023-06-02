import React from 'react'
import Footer from '../footer/Footer.jsx'
import Navbar from '../navbar/Navbar'
import ProductList from '../products/ProductList'

function Body () {
  return (<>
    <Navbar/>
    <div className='body-div'>
    <ProductList/>
    </div>
    <Footer/>
    </>
  )
}

export default Body


