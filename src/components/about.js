import React from "react";
import about_me from '../assets/me-removebg-preview.png'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from '../state'
import js_img from '../assets/js.png'
import react_img from '../assets/react.png'
import redux_img from '../assets/redux.png'
import node_js from '../assets/node.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import mongodb from '../assets/mongoDB.png'
import rest_api from '../assets/rest_api.png'
import Card from './card'


const About = () => {
    const { activeLink } = useSelector(state => state)
    const dispatch = useDispatch()
    const { handleActiveLink } = bindActionCreators(actionCreator, dispatch)
    return (
        <div className="about" id='about'>
            <div className="about-container">
                <div className="about-row">
                    <div className="about-col-1">
                        <img className="about-img" src={about_me} alt="about_img" />
                    </div>
                    <div className="about-col-2">
                        <h1 className="about-title"><span className="letter-a">A</span>bout Me</h1>
                        <p className="about-intro">
                            I am a developer with knowledge of JavaScript, HTML, CSS, React JS, Redux, MongoDB, Node.js, Express.js and API integration, with a track record of successfully completed multiple projects.
                        </p>
                        <hr ></hr>
                        <div className="about-sub-title">
                            <p onClick={() => handleActiveLink('Skills')} className={activeLink === "Skills" ? "about-sub-links active-about-link" : "about-sub-links"} >Skills</p>
                            <p onClick={() => handleActiveLink('Education')} className={activeLink === "Education" ? "about-sub-links active-about-link" : "about-sub-links"} >Education</p>
                            <p onClick={() => handleActiveLink('Project')} className={activeLink === "Project" ? "about-sub-links active-about-link" : "about-sub-links"} >Project Experience</p>
                        </div>
                        <div className="about-sub-content">
                            {
                                activeLink === "Skills" ? (
                                    <div className="about-kills">
                                        <ul className="ul-div">
                                            <li>
                                                <Card img_src={js_img} text='Javascript' />
                                            </li>
                                            <li>
                                                <Card img_src={react_img} text='React js' />
                                            </li>
                                            <li>
                                                <Card img_src={redux_img} text='Redux' />
                                            </li>
                                            <li>
                                                <Card img_src={node_js} text='Node Js' />
                                            </li>
                                            <li>
                                                <Card img_src={html} text='HTML' />
                                            </li>
                                            <li>
                                                <Card img_src={css} text='CSS' />
                                            </li>
                                            <li>
                                                <Card img_src={mongodb} text='MongoDB' />
                                            </li>
                                            <li>
                                                <Card img_src={rest_api} text='REST API' />
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    activeLink === "Education" ? (
                                        <div className="education-div">
                                            <div className="education-col">
                                                <h2>MCA</h2>
                                                <h5>2023</h5>
                                                <p>Amrita School of Arts and Sciences
                                                    Mysore</p>
                                            </div>
                                            <br></br>
                                            <div className="education-col">
                                                <h2>BCA</h2>
                                                <h5>2021</h5>
                                                <p>JSS SMI UG And PG Studies
                                                    Dharwad
                                                </p>
                                            </div>
                                            <br></br>

                                            <div className="education-col">
                                                <h2>12th</h2>
                                                <h5>2018</h5>
                                                <p>JSS SMPU College Vidyagiri
                                                    Dharwad
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="project-div">
                                            <div className="first-project">
                                                <h2 className="xflix">XFlix</h2>
                                                <p>
                                                    XFlix is a video sharing platform which hosts videos for the
                                                    world to watch.
                                                    It also features uploading new videos by using external video
                                                    links (eg:YouTube) and playing these video.
                                                    Improved UX by providing filters to get the desired type of
                                                    videos
                                                </p>
                                                <p>
                                                    <span className="project-skills-used-text">Skills used: </span>React JS, JavaScript, HTML, CSS , MongoDB, Node JS, Material UI,
                                                    Postman, Rest API’s, Netlify.</p>
                                                <br></br>
                                                <a className="project-link" target="_blank" href="https://ahamad-xflix.netlify.app/">
                                                    Click here for Demo </a>

                                            </div>
                                            <hr className="project-hr-line"></hr>

                                            <div className="first-project">

                                                <h2 className="xflix">QKart</h2>
                                                <p>
                                                    QKart is an e-commerce application offering a variety of
                                                    products for customers to choose from.
                                                    It also enhances the user experience by featuring a
                                                    functionality to add items to cart and checkout the items by
                                                    paying through virtual wallet.
                                                </p>
                                                <p>
                                                    <span className="project-skills-used-text">Skills used: </span>React JS, JavaScript, HTML, CSS, Node.js,
                                                    MongoDB, Material UI, Rest API’s, Netlify.
                                                </p>
                                                <br></br>

                                                <a className="project-link" target="_blank" href="https://ahamadqkart.netlify.app/">
                                                    Click here for Demo </a>
                                            </div>

                                            <hr className="project-hr-line"></hr>


                                            <div className="first-project">

                                                <h2 className="xflix">XBoard</h2>
                                                <p>
                                                    XBoard is a News Feed website that will feature the latest news
                                                    for select topics, from Flipboard.
                                                    Used Accordions and Image Carousel to improve UI
                                                    Fetched news content from flipboard's RSS feed using REST
                                                    API
                                                </p>
                                                <p>
                                                    <span className="project-skills-used-text">Skills used: </span>JavaScript, HTML, CSS, Rest API’s, Netlify.
                                                </p>
                                                <br></br>
                                                <a className="project-link" target="_blank" href="https://ahamad-xboard.netlify.app/">
                                                    Click here for Demo </a>
                                            </div>
                                            <hr className="project-hr-line"></hr>

                                            <div className="first-project">

                                                <h2 className="xflix">QTrip</h2>
                                                <p>
                                                    QTrip is a travel website aimed at travelers looking for a
                                                    multitude of adventures in different cities.
                                                    Improved UX by using filters and pills for adventure type and
                                                    adventure duration.
                                                </p>
                                                <p>
                                                    <span className="project-skills-used-text">Skills used: </span> JavaScript, HTML, CSS, Bootstrap, Netlify.</p>
                                                <br></br>
                                                <a className="project-link" target="_blank" href="https://ahamad-qtrip-dynamic-17.netlify.app/">
                                                    Click here for Demo </a>
                                            </div>
                                            <hr className="project-hr-line"></hr>

                                            <div className="first-project">
                                                <h2 className="xflix">CCTV Camera Distribution Management
                                                </h2>
                                                <p>
                                                    This is the Web application based project, which is used to add,
                                                    delete and edit the product and manage the all services of
                                                    distributor.


                                                </p>
                                                <p>
                                                    <span className="project-skills-used-text">Skills used: </span>HTML, CSS, JavaScript, MySQL, PHP</p>
                                            </div>
                                            <hr className="project-hr-line"></hr>


                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About