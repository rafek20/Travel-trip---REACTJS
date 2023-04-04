import React, {useEffect} from "react";
import './popular.css';
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';
import {BiRightArrowCircle} from 'react-icons/bi';
import {BsDot} from 'react-icons/bs';
import img from '../../Assets/pexels-sindre-fs-950058.jpg';
import img2 from '../../Assets/park.jpeg';
import img3 from '../../Assets/boating.jpeg';
import img4 from '../../Assets/img3.jpg';
import img5 from '../../Assets/magical museum.jpeg';

import Aos from "aos";
import 'aos/dist/aos.css'

// Now going to use a high order array method to display all 
// the deestination using Map.To do so we need to list all the
// destination in one aray "data" & later we shall call 
// each destination by index/id

const Data = [
    {
        id:1,
        imgSrc:img2,
        destTitle:'Franland park',
        location:'Bangalore',
        grade:'CULTURAL RELAX'
    },
    {
        id:2,
        imgSrc:img3,
        destTitle:'Kannur Boating',
        location:'Wayanad',
        grade:'CULTURAL RELAX'
    },
    {
        id:3,
        imgSrc:img4,
        destTitle:'Angkor Wat',
        location:'Kodaikanal',
        grade:'CULTURAL RELAX'
    },
    {
        id:4,
        imgSrc:img5,
        destTitle:'Jortan Park',
        location:'Ooty',
        grade:'CULTURAL RELAX'
    }

]
const popular =() => {

useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])

    return(
        <section className="popular section container">
            <div className="secContainerpop">

                <div className="secheaderpop flex">
                    <div data-aos="fade-right" data-aos-duration="2500" className="textDivpop">
                        <h2 className="secTitlepop">
                            Popular Destination
                        </h2>
                        <p29>
                        From historical cities to natural specteculars, come see the best of the world!
                        </p29>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2500"  className="iconsDivpop flex">
                        <BsArrowLeftShort className="iconspop leftIcon"/>
                        <BsArrowRightShort className="iconspop"/>
                    </div>
                </div>

                <div className="mainContentpop grid">
                  {
                    Data.map(({id,imgSrc,destTitle,location,grade})=>{
                        return(
                            <div data-aos="fade-up" className="singleDestination">
                                <div className="destImagepop">
                                     <img src={imgSrc} alt="imgpop" />

                                 <div className="overlayInfo">
                                     <h3>
                                        {destTitle}
                                    </h3>
                                 <p30>
                                    {location}
                                 </p30>
                                <BsArrowRightShort className="iconpop1"/>

                            </div>

                        </div>

                        <div className="destFooterpop">
                            <div className="number">
                                0{id}
                            </div>

                            <div className="destTextpop flex">
                                <h6>
                                    {location}
                                </h6>
                                <span className="flex">
                                    <span className="dot">
                                        <BsDot className="iconpos"/>
                                    </span>
                                    Rafz
                                </span>
                            </div>
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

export default popular