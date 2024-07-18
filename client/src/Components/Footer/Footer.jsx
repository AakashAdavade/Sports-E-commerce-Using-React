import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
      <div className="footer">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Cricket</span>
            <span>FootBall</span>
            <span>VolleyBall</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
          <h1>Contact Us</h1>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Whatsapp</span>
          </div>
          <div className="item">
            <h1>About</h1>
            <span>
            Welcome to [ Shivaji Sports Products Website]! At [Sports Products Website], we are passionate about sports and believe that a love for sports can transform lives.
 Our mission is to provide athletes, sports enthusiasts, and fitness enthusiasts with the highest quality sports products
  to help them perform at their best and reach new heights in their athletic journey.   
            </span>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="logo">ShivajiSports</span>
            <span className="copyright">
            © Copyright 2023. All rights reserved
            </span>
          </div>
          <div className="right">
            <img src="/img/payment.png" alt="" height="50px" />
          </div>
        </div>
      </div>
      
  );
};

export default Footer
