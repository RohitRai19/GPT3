import React from 'react'
import './footer.css'
import logo from '../../assets/GPT-3.svg'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={logo} alt='logo'/>
          <p>Rohitrai19</p>
          </div> 
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counter</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
        
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Rohitra19</p>
            <p>Social Media</p>
            <p>Rairohit1505@gmail.com</p>

          </div>
      </div>
    </div>
  )
}

export default Footer
