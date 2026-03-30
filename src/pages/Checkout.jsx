import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/pages/Checkout.css';

// Checkout Page - displays cart items and allows checkout
// Demonstrates: useSelector, useDispatch, event handling, conditional rendering
function Checkout() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle remove item from cart
  const handleRemoveItem = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: itemId,
    });
  };

  // Handle place order
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setOrderPlaced(true);
    // Clear cart after order
    dispatch({ type: 'CLEAR_CART' });
  };

  // Success message
  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="success-message">
          <h2>✓ Order Placed Successfully!</h2>
          <p>Thank you for your purchase.</p>
          <p>Your order has been confirmed.</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Shopping Cart</h1>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="cart-items">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id} className="cart-item">
                      <td className="product-cell">
                        <span className="product-icon">{item.image}</span>
                        {item.name}
                      </td>
                      <td>₹{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>₹{item.price * item.quantity}</td>
                      <td>
                        <button
                          className="remove-btn"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <div className="summary-item">
                <span>Subtotal:</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="summary-item">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="summary-item total">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="checkout-actions">
              <Link to="/" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="place-order-btn" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout;
