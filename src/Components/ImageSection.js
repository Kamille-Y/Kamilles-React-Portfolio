import React from 'react';
import about from '../img/about.jpg';

function HomePage() {
    return (
        <div className="HomePage">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Kamille Young</span></h4>
                <p className="about-text">
                   I am new full stack Developer. I really enjoy UX/UI and styling. 
                   I hope to hone my database and middleware skills over time. I desire to 
                   obtain work as a freelance while I expand and build my ideas.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Kamille Tramia Young</p>
                        <p>: 35</p>
                        <p>: English</p>
                        <p>: English, Some Spanish</p>
                        <p>: Cleveland Ohio</p>
                        <p>: United States</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default HomePage;
