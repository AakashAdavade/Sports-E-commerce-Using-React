import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contact">
       <div className="wrapper">
        <spam>BE IN TOUCH WITH US:</spam>
        <div className="mail">
            <input type="text" placeholder='Enter your e-mail...' />
            <button>JOIN US</button>
        </div>
        <div className="icons">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillTwitterSquare />
            <AiFillYoutube />
            <AiOutlineWhatsApp />
        </div>
       </div>
    </div>
  )
}

export default Contact
