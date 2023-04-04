import React, {useEffect} from "react";
import './blog.css';
import {BsArrowRightShort} from 'react-icons/bs';

import img17 from '../../Assets/wink.png'; 
import img18 from '../../Assets/pic2.jpg';
import img19 from '../../Assets/pic3.jpg';
import img20 from '../../Assets/pic4.jpg';

import Aos from "aos";
import 'aos/dist/aos.css'


// Use map method to display posts.

const Posts =[
    {
        postImage:img17,
        title:'Chickpet',
        desc:'An insight to the incredible experience in the world.An insight to the incredible experience in the world An insight to the incredible experience in the world.',      
   },
    {
        postImage:img18,
        title:'Pathanamthitta',
        desc:'An insight to the incredible experience in the world.An insight to the incredible experience in the world An insight to the incredible experience in the world.',      
    },
    {
        postImage:img19,
        title:'Coakers Walk',
        desc:'An insight to the incredible experience in the world.An insight to the incredible experience in the world An insight to the incredible experience in the world.',      
        },
    {
        postImage:img20,
        title:'Coakers Walk',
        desc:'An insight to the incredible experience in the world.An insight to the incredible experience in the world An insight to the incredible experience in the world.',      
    }

]

const Blog = () => {


    useEffect(()=>{
        Aos.init({duration: 2000})
      }, [])

    return(
    <section className="blog container section">
        <div className="secContainer">
            <div className="secIntro2">
                <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle2">
                    Our Best Blog?
                </h2>
                <p17 data-aos="fade-up" data-aos-duration="2500">
                    An insight to the incredible experience in the world.
                </p17>
            </div>


            <div className="mainContainer3 grid">
               {
                Posts.map(({postImage,title,desc})=>{
                    return(
                        <div data-aos="fade-up" data-aos-duration="2000" className="singlePost3 grid">
                        <div className="imgDiv3">
                            <img className="img30" src={postImage} alt="Image Name" />
                        </div>
    
                        <div className="postDetails3">
                            <h3 data-aos="fade-up" data-aos-duration="3000" className="hd33">
                                {title}
                            </h3>
                            <p4 data-aos="fade-up" data-aos-duration="4000">
                                {desc}
                            </p4>
                        </div>
    
                        <a href="https://en.wikipedia.org/wiki/Pathanamthitta" className="flex3" data-aos="fade-up" data-aos-duration="4500">
                            Read More
                            <BsArrowRightShort className="icon5"/>

                        </a>
                    </div>
                    )
                })
               }
            </div>
        </div>
    </section>  
  )
}

export default Blog