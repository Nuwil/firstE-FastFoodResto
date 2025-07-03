import React from 'react';
import './HeroHome.css';


const HeroHome = () => {
  return (
    <div className='hero'>
      <div className="homeContainer">
          <div className="hero-left">
            <h2>Making the <br/>
                Ordinary <br/>
                <span>Extraordinary</span>
            </h2>
            <p className="hero-description">
              Lorem ipsum is a placeholder that commonly used to demonstrate
              the visual form of a document or a typeface without relying
              on meaningful content.
            </p>
          
            <button className="order-button">Order Now</button>
          
            <div className="customer-stats">
              <h3>19 Happy Customer</h3>
              <p>48 reviews (69.69% Good)</p>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="promo-banner">
              <h3>ORDER NOW</h3>
              <p>20% OFF</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HeroHome;