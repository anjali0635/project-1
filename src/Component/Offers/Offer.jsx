import React from 'react'
import  './Offer.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offer-left">
    <h1>Exclusive</h1>
    <h1>Offers for you</h1>
    <p>ONLY ON THE BEST SELLERS PRODUCT</p>
    <button>check now</button>
      </div>
      <div className="offer-right">
       <img src= {exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer
