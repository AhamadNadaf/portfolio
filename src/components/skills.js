import React from "react";
import js_img from '../assets/js.png'
import react_img from '../assets/react.png'
import redux_img from '../assets/redux.png'
import node_js from '../assets/node.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import mongodb from '../assets/mongoDB.png'
import rest_api from '../assets/rest_api.png'
import Card from './card'

const Skills = () => {
    return (
        <>
        <div className="about-kills" id='skills'>
            <h1>What I know</h1>
            <hr className="project-hr-line"></hr>
            <ul className="ul-div">
                <li>
                    <Card img_src={js_img} text='Javascript' link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
                </li>
                <li>
                    <Card img_src={react_img} text='React js' link='https://legacy.reactjs.org/docs/getting-started.html' />
                </li>
                <li>
                    <Card img_src={redux_img} text='Redux' link="https://redux.js.org/" />
                </li>
                <li>
                    <Card img_src={node_js} text='Node Js' link="https://nodejs.org/en/docs" />
                </li>
                <li>
                    <Card img_src={html} text='HTML' link="https://developer.mozilla.org/en-US/docs/Web/HTML" />
                </li>
                <li>
                    <Card img_src={css} text='CSS' link="https://developer.mozilla.org/en-US/docs/Web/CSS" />
                </li>
                <li>
                    <Card img_src={mongodb} text='MongoDB' link="https://www.mongodb.com/docs/" />
                </li>
                <li>
                    <Card img_src={rest_api} text='REST API' link="https://www.ibm.com/docs/en/intelligent-promising?topic=apis-rest-api-documentation" />
                </li>
            </ul>
        </div>
        <div id='end-skills'></div>
        </>
    )
}

export default Skills