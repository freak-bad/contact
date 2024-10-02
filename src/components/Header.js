import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="your-logo-url.png" alt="Dantewada Government Logo" />
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="book-room">
          <button>Book Room</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
