import React from "react";

const Card = ({img_src,text}) => {
    return (
        <div className="skills-card">
            <div className="inner-div-skills">
                <img className="skil-img" src={img_src} alt={text} />
                <span style={{ display: "flex", justifyContent: 'center' }}>{text}</span>
            </div>
        </div>
    )
}

export default Card