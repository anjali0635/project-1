import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {Product} = props;
  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {Product.category} <img src={arrow_icon} alt="" /> {Product.name} 
    </div>
  )
}

export default Breadcrum
