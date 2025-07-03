import React from 'react';
import HeroContact from '../Components/Hero/HeroContact';
import HeroContactStaff from '../Components/Hero/HeroContactStaff';

const Contact = () => {
  return (
    <main className="contact-page">
      <HeroContact />
      <HeroContactStaff />
    </main>
  );
};

export default Contact;