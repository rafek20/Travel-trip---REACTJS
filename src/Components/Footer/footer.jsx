import React, {useEffect} from "react";
import './footer.css';
import {AiOutlineDingding} from 'react-icons/ai';
import {ImFacebook} from 'react-icons/im';
import {BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';

import Aos from "aos";
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])

    return(
        <div className="footer">
            <div className="secContainer7 container grid">
                <div className="logoDiv2" data-aos="fade-up" data-aos-duration="2000">
                    <div data-aos="fade-up" data-aos-duration="2000" className="footerlogo">
                    <a href="" className="logo2 flex5">
                       <h1 className="flex5"><AiOutlineDingding className="icon25"/>
                    RAFZ
                    </h1>
                    </a>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2500" className="socials flex">
                    <ImFacebook className="icon12"/>
                    <BsTwitter className="icon12"/>
                    <AiFillInstagram className="icon12"/>
                    </div>
               
                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
                <span className="linkTitle1">
                    Information
                </span>
                <li>
                    <a href="#" className="a27">Home</a>
                </li>
                <li>
                    <a href="#" className="a27">Explore</a>
                </li>
                <li>
                    <a href="#" className="a27">Travel</a>
                </li>
                <li>
                    <a href="#" className="a27">Blog</a>
                </li>
               </div>

               <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
                <span className="linkTitle1">
                    Helpful Links
                </span>
                <li>
                    <a href="#" className="a27">Destination</a>
                </li>
                <li>
                    <a href="#" className="a27">Support</a>
                </li>
                <li>
                    <a href="#" className="a27">Travel & Condition</a>
                </li>
                <li>
                    <a href="#" className="a27">Privacy</a>
                </li>
               </div>

               <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
                <span className="linkTitle1">
                    Contact Us
                </span>
            <span className="Phone">044 456 856</span>
            <span className="email">rafztvltrip@yahoo.com</span>
               </div>

            </div>
        </div>
    )
}

export default Footer