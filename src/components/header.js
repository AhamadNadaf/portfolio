import React from "react";
import Lottie from 'lottie-react'
import * as animationData from '../assets/animation_lmq48roc.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const Header = () => {

    const handleCloseMenu = () => {
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.style.right = '-200px';
    }

    const handleOpenMenu = () => {
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.style.right = '0';
    }
    return (
        <div id='header'>
            <div className="container">
                <nav>
                    <div ><a className="logo-name" href="#"><span className="letter-a">A</span>hamad.</a></div>

                    <ul id="sideMenu">
                        <li><a className="header-li" href="#header">Home</a></li>
                        <li><a className="header-li" href="#about">About</a></li>
                        <li><a className="header-li" href="#contact-div">Contact</a></li>
                        <li><a href="images/Ahamad_CV.pdf" className="download-a" download >
                            <div className="download-button-header">
                                Download CV
                            </div>
                        </a></li>
                        <FontAwesomeIcon onClick={() => handleCloseMenu()} className="menu-icon" icon={faXmark} style={{color: "#ffffff",fontSize:"30px"}} />
                    </ul>
                    <FontAwesomeIcon onClick={()=>handleOpenMenu()} className="menu-icon" icon={faBars} style={{color: "#ffffff",fontSize:"30px"}} />

                </nav>
                <div className="header-title">
                    <div className="header-row">
                        <div className="header-col-1">
                            <h1 className="typewriter">
                                Hi, I'm <sapn className="name-text">Ahamad.</sapn>
                            </h1>
                            <p>Software Developer
                            </p>
                        </div>
                        <div className="header-col-2">
                            <Lottie className="lottie-com" animationData={animationData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header