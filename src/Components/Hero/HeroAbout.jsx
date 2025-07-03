import React from 'react';
import './HeroAbout.css';
import foodVideo from '../../Components/Assets/food-showcase.mp4';

const HeroAbout = () => {
    return (
        <div id="heroAbout">
            <div className="aboutContainer">
                <div className="content-wrapper">
                    <div className="square-video-box">
                        <video autoPlay loop muted playsInline>
                            <source src={foodVideo} type="video/mp4" />
                        </video>
                    </div>

                    <div className="right-content">
                        <h2 className="section-title">About Us</h2>
                        <h1 className="main-heading">We Always Provide Quality Fast Foods For You</h1>

                        <div className="features-grid">
                            {[
                                "● Delicious & Healthy Food",
                                "● Specific Family & Kids Zone",
                                "● Best Price & Offers",
                                "● Made By Fresh Ingredients",
                                "● Music & Other Facilities"
                            ].map((feature, index) => (
                                <div className="feature-item" key={index}>
                                    <h3>{feature}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroAbout;