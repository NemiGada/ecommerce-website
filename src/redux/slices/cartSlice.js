// Redux Reducer for Cart
// Manages items added to cart and checkout

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // QUANTITY MANAGEMENT LOGIC:
      // When user clicks "Add to Cart" from ProductCard, this action runs
      // It checks if product already exists in cart
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // SCENARIO 1: Item already in cart - INCREMENT QUANTITY
        // User clicked "Add to Cart" for a product already in their cart
        // Result: quantity increases by 1, total price updates
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }  // Increment quantity
              : item
          ),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        // SCENARIO 2: New item - ADD WITH QUANTITY = 1
        // User is adding this product to cart for first time
        // Result: item added with quantity field = 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],  // Add new item with qty 1
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    }

    case 'REMOVE_FROM_CART': {
      // Remove entire item from cart (all quantities)
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
      };
    }

    case 'INCREMENT_QUANTITY': {
      const item = state.items.find(item => item.id === action.payload.itemId);
      if (!item) return state;
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.itemId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    }

    case 'DECREMENT_QUANTITY': {
      const item = state.items.find(item => item.id === action.payload.itemId);
      if (!item) return state;

      if (item.quantity === 1) {
        return {
          ...state,
          items: state.items.filter(i => i.id !== action.payload.itemId),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - action.payload.price,
        };
      }

      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.itemId
            ? { ...i, quantity: i.quantity - 1 }
            : i
        ),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
  
};

export default cartReducer;
