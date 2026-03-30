import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import '../styles/pages/Home.css';

// Home Page - displays all products
// Demonstrates: useSelector hook, map function for lists, component structure
function Home() {
  // Get products from Redux store
  const products = useSelector(state => state.products.items);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TechStore</h1>
          <p>Discover amazing tech products at great prices</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="section-header">
          <h2>All Products</h2>
          <p>Browse and add items to your cart</p>
        </div>
        
        {/* Display products in a grid */}
        <div className="products-grid">
          {/* Map through products array and render a ProductCard for each */}
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
