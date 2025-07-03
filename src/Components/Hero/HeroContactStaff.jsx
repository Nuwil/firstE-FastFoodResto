import React from 'react';
import './HeroContactStaff.css';
import { FaPhone, FaEnvelope, FaStar } from 'react-icons/fa6';

const HeroContactStaff = () => {
  // Staff data with placeholder images
  const staffMembers = [
    {
      id: 1,
      imgSrc: 'https://randomuser.me/api/portraits/men/32.jpg',
      firstName: 'BRANDON',
      lastName: 'RAZER',
      role: 'Chief Chef',
      phone: '+1 (555) 123-4567',
      email: 'brandon@restaurant.com'
    },
    {
      id: 2,
      imgSrc: 'https://randomuser.me/api/portraits/women/44.jpg',
      firstName: 'NAISA',
      lastName: 'CARG',
      role: 'Chief Chef',
      phone: '+1 (555) 123-4568',
      email: 'naisa@restaurant.com'
    },
    {
      id: 3,
      imgSrc: 'https://randomuser.me/api/portraits/men/75.jpg',
      firstName: 'JOSEPH',
      lastName: 'CARTER',
      role: 'Senior Chef',
      phone: '+1 (555) 123-4569',
      email: 'joseph@restaurant.com'
    },
    {
      id: 4,
      imgSrc: 'https://randomuser.me/api/portraits/women/68.jpg',
      firstName: 'MICHEL',
      lastName: 'CLARKE',
      role: 'Senior Chef',
      phone: '+1 (555) 123-4570',
      email: 'michel@restaurant.com'
    }
  ];

  const customerFeedback = [
    {
      id: 1,
      name: 'JOHN WILLIAM',
      rating: 5,
      comment: 'The food was absolutely delicious! Best dining experience ever.'
    },
    {
      id: 2,
      name: 'LILY WILLIAM',
      rating: 5,
      comment: 'Excellent service and amazing atmosphere. Will come back again!'
    },
    {
      id: 3,
      name: 'RAYAN COOK',
      rating: 5,
      comment: 'Every dish was perfect. Highly recommend this place!'
    }
  ];

  const handleContactClick = (phone) => {
    window.open(`tel:${phone}`);
  };

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`);
  };

  const renderStars = (count) => {
    return Array(count).fill(0).map((_, i) => (
      <FaStar key={i} className="star-icon" />
    ));
  };

  return (
    <div className="hero-contact-staff">
      {/* Staff Section */}
      <section className="staff-section">
        <div className="container">
          <h1>OUR EXPERT STAFF</h1>
          <div className="staff-grid">
            {staffMembers.map((staff) => (
              <div key={staff.id} className="staff-card">
                <img 
                  src={staff.imgSrc} 
                  alt={`${staff.firstName} ${staff.lastName}`} 
                  className="staff-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150?text=Staff+Photo';
                  }}
                />
                <div className="staff-info">
                  <h2>{`${staff.firstName} ${staff.lastName}`}</h2>
                  <p className="role">{staff.role}</p>
                  <div className="staff-contacts">
                    <FaPhone 
                      onClick={() => handleContactClick(staff.phone)} 
                      className="contact-icon" 
                      aria-label={`Call ${staff.firstName}`}
                    />
                    <FaEnvelope 
                      onClick={() => handleEmailClick(staff.email)} 
                      className="email-icon" 
                      aria-label={`Email ${staff.firstName}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="feedback-section">
        <div className="container">
          <h1>CUSTOMERS FEEDBACK</h1>
          <p className="feedback-intro">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
          </p>
          
          <div className="feedback-grid">
            {customerFeedback.map((feedback) => (
              <div key={feedback.id} className="feedback-card">
                <div className="feedback-number">66</div>
                <p className="feedback-text">{feedback.comment}</p>
                <div className="feedback-author">
                  <span>{feedback.name}</span>
                  <div className="feedback-rating">
                    {renderStars(feedback.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroContactStaff;