import React from "react";
import Lottie from 'lottie-react'
import * as animationData from '../assets/animation_lmq48roc.json'

const HeroSection = () => {
    return (
        <>           <div className="header-title">
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
        <div id='end-header'></div>
        </>

    )
}

export default HeroSection