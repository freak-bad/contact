import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-hotels">
          <h3>Legal and Policy Information:</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            {/* <li>Casa del Mar Hotel</li>
            <li>Usuri Villa</li>
            <li>Qambani Luxury Resort</li>
            <li>Mwasi Boutique Resort</li>
            <li>The Loop</li> */}
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>DantewadaGovernment123@gmail.com</p>
          <p>+255 773 696 310</p>
          <p>+255 773 696 355</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <div className="footer-logo">
          <img src="src/WhatsApp Image 2024-10-01 at 11.40.11 PM.jpeg" alt="Dantewada Logo" />
          <p>© All Rights Reserved to Our Zanzibar 2017</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
