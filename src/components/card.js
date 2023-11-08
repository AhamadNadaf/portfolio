import React from "react";

const Card = ({ img_src, text, link }) => {
    return (
        <a className="card-link" href={link} target="_blank">
            <div className="skills-card">
                <div className="inner-div-skills">
                    <img className="skil-img" src={img_src} alt={text} />
                    <span style={{ display: "flex", justifyContent: 'center' }}>{text}</span>
                </div>
            </div>
        </a>
    )
}

export default Card