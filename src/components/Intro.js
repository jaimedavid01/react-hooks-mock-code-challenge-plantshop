import React from 'react';
import "./Intro.css";
import GIF from "./img/demoplant.gif";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className="intro">
            <Link to="/app">  
            <div className="btn"><p>X</p></div>
            </Link>

            <div className="intro__left">
                <img className="gif" src={GIF} alt="" />
                <h1 className="h1title demo">DEMO</h1>
            </div>
            <div className="intro__right">
            <h1 className="h1title">Plantsy</h1><br></br>
            <h2 className="h1title">Instructions:</h2>
                <p>Welcome to Plantsy! You've been tasked with building out some features for the 
                admin side of a plant store. The designers have put together the components and CSS. 
                Now it's up to you to bring the features to life by adding stateful logic as well as persisting data to the backend via our API.</p><br></br>
                    <h2 className="h1title">Project Requirements:</h2>
                <ul>
                    <li>
                    When the app starts, I can see all plants.
                    </li>
                    <li>
                    I can add a new plant to the page by submitting the form.
                    </li>
                    <li>
                    I can mark a plant as "sold out".
                    </li>
                    <li>
                    I can search for plants by their name and see a filtered list of plants.
                    </li>
                </ul>

                <Link to="/app">
                <button className="introbutton">View Final Product</button>
                </Link>
                <a href="https://github.com/jaimedavid01/react-hooks-mock-code-challenge-plantshop">
                <button className="introbutton">View Code</button>
                </a>
            </div>
            
        </div>
    )
}

export default Intro;
