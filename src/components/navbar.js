import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const handleCloseMenu = () => {
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.style.right = '-200px';
    }

    const handleOpenMenu = () => {
        const sideMenu = document.getElementById('sideMenu');
        sideMenu.style.right = '0';
    }
    return(
        <nav id="main-nav">
        <div ><a className="logo-name" href="#"><span className="letter-a">A</span>hamad.</a></div>

        <ul id="sideMenu">
            <li><a className="header-li" href="#header">Home</a></li>
            <li><a className="header-li" href="#end-header">About</a></li>
            <li><a className="header-li" href="#end-about">Skills</a></li>
            <li><a className="header-li" href="#end-skills">Contact</a></li>
            <li><a href="images/Ahamad_CV.pdf" className="download-a" download >
                <div className="download-button-header">
                    Download CV
                </div>
            </a></li>
            <FontAwesomeIcon onClick={() => handleCloseMenu()} className="menu-icon" icon={faXmark} style={{color: "#ffffff",fontSize:"30px"}} />
        </ul>
        <FontAwesomeIcon onClick={()=>handleOpenMenu()} className="menu-icon" icon={faBars} style={{color: "#ffffff",fontSize:"30px"}} />

    </nav>
    )
}

export default Navbar;

