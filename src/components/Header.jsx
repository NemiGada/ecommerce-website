import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/components/Header.css';

// Header Component - simple top navigation with cart
// Demonstrates: JSX, component structure, useSelector, routing with Link
function Header() {
  // Get total cart items from Redux store
  const cartItems = useSelector(state => state.cart.totalItems);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">🛍️</span>
          TechStore
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/checkout" className="nav-link cart-link">
            🛒 Cart ({cartItems})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
