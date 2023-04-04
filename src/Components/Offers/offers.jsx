import React, {useEffect} from "react";
import './offers.css';

import {MdKingBed} from "react-icons/md";
import {MdBathtub} from "react-icons/md";
import {FaWifi} from "react-icons/fa";
import {MdAirportShuttle} from "react-icons/md";
import {MdLocationOn} from "react-icons/md";
import {BsArrowRightShort} from "react-icons/bs"

// let us import images ======>
import img6 from '../../Assets/house.jpg'
import img7 from '../../Assets/house1.jpg'
import img8 from '../../Assets/house2.jpg'


import Aos from "aos";
import 'aos/dist/aos.css'

const Offers = [
    {
        id:1,
        imgSrc:img6,
        stTitle:'Chickpet',
        location:'Bangalore',
        price:'₹ 20700'
    },
    {
        id:2,
        imgSrc:img8,
        stTitle:'Pathanamthitta',
        location:'Wayanad',
        price:'₹ 18600'
    },
    {
        id:3,
        imgSrc:img7,
        stTitle:'Coakers Walk',
        location:'Kodaikanal',
        price:'₹ 16500'
    }
]

const Offer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


    return(
        <section className="offer container section">
            <div className="secContainer">

                <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                    <h2 className="secTitle">
                        Special Offers
                    </h2>
                    <p>
                        From historical cities to natural specteculars, come see the best of the world!
                    </p>
                </div>

                <div className="mainContent-1 grid">  

                   {
                        Offers.map(({id,imgSrc,stTitle,location,price})=>{
                            return(
                                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt={stTitle} />

                                        <span className="discount">
                                            30% Off
                                        </span>
                                    </div>

                        <div className="offerBody">
                          <div className="price flex">
                            <h4>
                               {price}
                            </h4>
                            <span className="status">
                                For Rent
                            </span>
                            </div>  

                            <div className="amentities flex">
                                <div className="singleAmenity-flex">
                                 <MdKingBed className="icon-03"/>
                                <small>2 Beds</small>
                             </div>
                             <div className="singleAmenity-flex">
                                 <MdBathtub className="icon-03"/>
                                <small>1 Bathtub</small>
                             </div>
                             <div className="singleAmenity-flex">
                                 <FaWifi className="icon-03"/>
                                <small>Wifi</small>
                             </div>
                             <div className="singleAmenity-flex">
                                 <MdAirportShuttle className="icon-03"/>
                                <small>Shuttle</small>
                             </div>
                            </div>

                            <div className="location-flex">
                                <MdLocationOn className="icon-33"/>
                                <small>{stTitle}, {location}</small>
                            </div>

                            <button className="btn6">
                             View Details
                             <BsArrowRightShort className="icon-04"/>
                            </button>
                        </div>
                             </div>
                            )
                        })
                    }    
              
              
                </div>
            </div>
        </section>
    )
}

export default Offer