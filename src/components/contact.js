import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const Contact = () => {
    const [loader, setLoader] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoader(false)

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwdP-7RKKLmr7C5OxKWgQq1lFETUnHtjE7KJWbHQ-42Ku0heC5mFsiYubhylDiIBWnRAA/exec'

        const form = document.forms['submit-to-google-sheet']

        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response)
                alert("Info sent successfully", response)
                form.reset()
                setLoader(true)
            })
            .catch(error => {
                alert('Error!', error.message)
                form.reset()
                setLoader(true)
            })
    }

    return (
        <div className="contact-div" id='contact-div'>
            <div className="contact-container">
                <div className="contact-row">
                    <div className="contact-left-col">
                        <h1 className="about-title">
                            <span className="letter-a">C</span>ontact Me
                        </h1>
                        <p >

                            <sapn className="email-name"> <FontAwesomeIcon icon={faEnvelope} style={{ color: "#68d388", marginRight: "10px" }} />ahamad2817@gmail.com</sapn></p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} style={{ color: "#68d388", marginRight: "10px" }} />

                            7795921352</p>

                        <div className="contact-social-icon">
                            <a href="http://www.linkedin.com/in/ahamad-nadaf-60ab37199" className="social-icon-hover" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} bounce />
                            </a>
                            <a href="https://github.com/AhamadNadaf" className="social-icon-hover" target="_blank">
                                <FontAwesomeIcon icon={faGithub} bounce />
                            </a>
                            <a href="#" className="social-icon-hover">
                                <FontAwesomeIcon icon={faInstagram} bounce />
                            </a>

                        </div>
                        <a href="images/Ahamad_CV.pdf" className="download-a" download >
                            <div className="download-button">
                                Download CV
                            </div>
                        </a>
                    </div>
                    <div className="contact-right-col" onSubmit={(e) => handleSubmit(e)}>
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Enter your Name" required />
                            <input type="email" name="Email" placeholder="Enter your Email" required />
                            <textarea name="Message" placeholder="Enter your Name" required />
                            {
                                loader === true ? (
                                    <button type="submit" className="submit-button">Submit</button>
                                ) : (
                                    <div class="lds-ripple"><div></div><div></div></div>
                                )
                            }

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact