import React from 'react'
import './Footer.css'
import Footer_logo from '../assets/logo_big.png'
import Instagram_icon from '../assets/instagram_icon.png'
import Pinterest_icon from '../assets/pintester_icon.png'
import Whatsapp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='Footer'>
     <div className="Footer-logo">
     <img src={Footer_logo} alt="" />
      <p>SHOPPER</p>
     </div>
     <ul className='Footer-links'>
       <li>Company</li>
       <li>Products</li>
       <li>Offices</li>
       <li>About</li>
       <li>Contact</li>
     </ul>
     <div className="Footer-social-icon">
        <div className="Footer-icon-container">
            <img src={Instagram_icon} alt="" />
        </div>
        <div className="Footer-icon-container">
            <img src={Pinterest_icon} alt="" />
        </div>
        <div className="Footer-icon-container">
            <img src={Whatsapp_icon} alt="" />
        </div>
     </div>
     <div className="Footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All right Reserved.</p>
     </div>
    </div>
  )
}

export default Footer
