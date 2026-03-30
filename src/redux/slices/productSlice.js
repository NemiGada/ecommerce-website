// Redux Reducer for Products
// Demonstrates how Redux manages state - products used by the app

const initialState = {
  // Sample product data - each product has basic properties (prices in Indian Rupees ₹)
  items: [
    { id: 1, name: 'Wireless Headphones', price: 3999, image: '🎧' },
    { id: 2, name: 'USB-C Cable', price: 599, image: '🔌' },
    { id: 3, name: 'Laptop Stand', price: 1999, image: '🖥️' },
    { id: 4, name: 'Mechanical Keyboard', price: 5199, image: '⌨️' },
    { id: 5, name: 'Wireless Mouse', price: 1599, image: '🖱️' },
    { id: 6, name: 'Phone Case', price: 999, image: '📱' },
  ],
};

// Reducer function - handles state updates based on actions
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Just return the current state (no actions needed for this simple app)
    default:
      return state;
  }
};

export default productReducer;
