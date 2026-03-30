import React from 'react';
import '../styles/components/Footer.css';

// Footer Component - displays at the bottom of every page
// Demonstrates: component structure, dynamic year using JavaScript
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About TechStore</h3>
          <p>Your one-stop shop for all tech accessories and gadgets</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@techstore.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} TechStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
