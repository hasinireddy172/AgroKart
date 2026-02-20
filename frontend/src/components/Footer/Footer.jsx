import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
              <img src={assets.LOGO} alt="" />
              <p>AgroKart is an agriculture-based e-commerce platform built to support modern farmers. We offer high-quality farming tools, seeds, fertilizers, and smart IoT farming gadgets — all in one place.AgroKart helps farmers choose the right products for better productivity and smarter farming.We combine technology and agriculture to create a meaningful social impact by empowering farmers with the right tools at the right time.</p>
              <div className="footer-social-icons">
                 <img src={assets.facebook_icon} alt="" />
                 <img src={assets.twitter_icon} alt="" />
                 <img src={assets.linkedin_icon} alt="" />
              </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
                 <h2>GET IN TOUCH</h2>
                 <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@agro.com</li>
                 </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 &copy; Agro.com - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer
