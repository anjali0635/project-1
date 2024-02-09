import React from 'react'
import './Hero.css'
import arrow_icon from '../assets/arrow.png'
import hand_icon from '../assets/hand_icon.png'
import hero_img from '../assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVAL ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>For everyone</p>
        </div>
        <div className="hero_latest_btn">
            <div>latest collection </div>
                <img src={arrow_icon} alt=""  />
            
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero
