import React from 'react'
import '../Footer/Footer.css'
import { assets } from '../../assets/assets'
export default function  () {
  return (
    <div className='footer' id='footer' >
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Tomato is your one-stop solution for ordering delicious food online. We bring your favorite meals right to your doorstep with speed, quality, and reliability. Whether it’s a quick bite or a family feast, Tomato makes food ordering simple and enjoyable.</p>
                     <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                     </div>
            </div>
             <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
             </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-342-454-3434</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
           
        </div>
<hr />
<p className="footer-copyright">Copyright 2025 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}
