import React,{useState} from "react";
import './navbar.css';
import{AiOutlineDingding} from 'react-icons/ai';
import{AiFillCloseCircle} from 'react-icons/ai';
import{TbGridDots} from 'react-icons/tb';
// import{AiFillAmazonCircle} from 'react-icons/ai';

const Navbar = () => {
    // code to toggle/show navBar
    const [active, setActive] = useState('navBar')
    const showNav =()=>{
        setActive('navBar activeNavbar')
    }
    // Code to remove Navbar
    const removeNav =()=>{
        setActive('navBar')
    }

// Code to add background color to the header...
const [transparent,setTransparent] = useState('header08')
const addBg = () =>{
    if(window.scrollY >= 10){
        setTransparent('header08 activeHeader08')
    }
    else{
        setTransparent('header08')
    }
 } 
 window.addEventListener('scroll', addBg)

    return(
        <section className="navBarSection">
            <div className="header08">
                
                <div className="logoDiv">
                    <a href="" className="logo08">
                        <h1 className="flexit"><AiOutlineDingding className="iconlogo"/> 
                        RAFZ
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists1 flex">

                        <li className="navItem">
                            <a href="" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="" className="navLink">Products</a>
                        </li>
                        
                        <li className="navItem">
                            <a href="" className="navLink">Resources</a>
                        </li>
                        
                        <li className="navItem">
                            <a href="" className="navLink">Contact</a>
                        </li>
                        
                        <li className="navItem">
                            <a href="" className="navLink">Blog</a>
                        </li>
                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <a20 href="https://www.redbus.in/help/login">Login</a20>
                            </button>
                            <button className="btn loginBtn">
                                <a20 href="https://m.redbus.in/signin-iframe">Sign Up</a20>
                            </button>
                            </div>
                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon11"/>
                    </div>
                </div>
            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon11"/>
            </div>
            </div>
            </section>
    )
}

export default Navbar