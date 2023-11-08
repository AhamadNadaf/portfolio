import React from "react";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import HeroSection from "./hero_section";
import Navbar from "./navbar";
import Skills from "./skills";

const Home = () => {
    return(
        <>
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Contact />
        </>
    )
}

export default Home