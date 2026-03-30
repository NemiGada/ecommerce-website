import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/components/ProductCard.css';

// ProductCard Component - displays a single product
// Demonstrates: props, event handling, Redux dispatch, JSX rendering
function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  const handleIncreaseQuantity = () => {
    dispatch({
      type: 'INCREMENT_QUANTITY',
      payload: {
        itemId: product.id,
        price: product.price,
      },
    });
  };

  const handleDecreaseQuantity = () => {
    dispatch({
      type: 'DECREMENT_QUANTITY',
      payload: {
        itemId: product.id,
        price: product.price,
      },
    });
  };

  return (
    <div className="product-card">
      {/* Display product emoji image */}
      <div className="product-image">{product.image}</div>
      
      {/* Product details */}
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        
        {quantity === 0 ? (
          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        ) : (
          <div className="quantity-control">
            <button
              className="qty-btn minus-btn"
              onClick={handleDecreaseQuantity}
            >
              −
            </button>
            <span className="qty-display">{quantity}</span>
            <button
              className="qty-btn plus-btn"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
