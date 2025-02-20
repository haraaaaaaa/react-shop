import React, { useReducer, useState, useContext, createContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR":
      return [];

    case "INCREASE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE_QUANTITY":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  const addToCart = (product) =>
    cartDispatch({ type: "ADD", payload: product });
  const removeFromCart = (id) => cartDispatch({ type: "REMOVE", payload: id });
  const clearCart = () => cartDispatch({ type: "CLEAR" });
  const increaseQuantity = (id) =>
    cartDispatch({ type: "INCREASE_QUANTITY", payload: id });
  const decreaseQuantity = (id) =>
    cartDispatch({ type: "DECREASE_QUANTITY", payload: id });

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
