import React from "react"
import './App.css';
import Footer from "./Components/Footer/footer"
import Home from "./Components/Home/home"
import Navbar from "./Components/Navbar/navbar"
import Popular from "./Components/Popular/popular"
import Offer from "./Components/Offers/offers"
import About from "./Components/About/about"
import Blog from "./Components/Blog/blog"


const App = () => {
    return(
        <>
        <Navbar/>
        <Home/>
        <Popular/>
        <Offer/>
        <About/>
        <Blog/>
        <Footer/>         
        </>
    )
}


export default App;
