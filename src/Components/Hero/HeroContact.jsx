import React from 'react';
import './HeroContact.css';
import fastFoodRestaurant from '../Assets/PTc0MA.png';

const HeroContact = () => {
  return (
    <div className="hero-contact">
      <div className="hero-image">
        <img src={fastFoodRestaurant} alt="Restaurant Interior" />
      </div>
      <div className="contact-form">
        <h2>Book Your Table</h2>
        <div className="form-group">
          <input type="text" placeholder="Name" required />
          <input type="tel" placeholder="Phone no." required />
          <div className="selection-group">
            <select required>
              <option value="">Select Persons</option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
              <option value="5">5 Persons</option>
              <option value="6">6 Persons</option>
            </select>
            <input type="date" min={new Date().toISOString().split('T')[0]} required />
            <input type="time" min="11:00" max="22:00" required />
          </div>
          <button type="submit">BOOK NOW</button>
        </div>
        <p>Powered by Delicious</p>
      </div>
    </div>
  );
};

export default HeroContact;