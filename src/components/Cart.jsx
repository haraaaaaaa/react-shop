import React, { useContext } from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-lg font-medium text-gray-700 mt-4">Your cart is empty.</p>
          <Link to="/products">
            <button className="mt-4 px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-all duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-4">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-contain border rounded-md" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 w-48">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-indigo-600 font-bold">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button onClick={() => decreaseQuantity(item.id)} className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-md text-lg font-bold">
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-md text-lg font-bold">
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 ml-4 px-3 py-1 text-sm font-medium rounded-md transition-all duration-200"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h2>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
