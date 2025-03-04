import React from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import Card from "../shared/UIElements/Card";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3 flex flex-col items-center w-[200px] md:w-[220px]">
      <li className="w-full flex flex-col items-center text-center">
        <h1
          className="text-sm md:text-base font-medium h-[48px] px-2 overflow-hidden text-ellipsis 
                       line-clamp-2"
        >
          {product.title}
        </h1>

        <h2 className="bg-gray-200 text-gray-700 text-xs md:text-sm font-medium px-3 py-1 rounded-full uppercase tracking-wide mt-1 mb-1">
          {product.category}
        </h2>

        <h3 className="text-lg md:text-xl font-bold text-indigo-600 mt-1">${product.price}</h3>

        <div className="flex items-center justify-center w-full my-2">
          <div className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] border-2 border-gray-300 shadow-xl rounded-lg flex items-center justify-center overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-full object-contain p-2" />
          </div>
        </div>

        <div className="flex w-full justify-between mt-3 px-2 gap-2">
          <Link to={`/products/${product.id}`} className="w-1/2">
            <button className="w-full h-10 md:h-12 bg-gray-300 text-gray-800 text-xs md:text-sm rounded-lg hover:bg-gray-400 transition">
              Details
            </button>
          </Link>
          <button
            className="w-1/2 h-10 md:h-12 bg-indigo-600 text-white text-xs md:text-sm rounded-lg hover:bg-indigo-700 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </li>
    </Card>
  );
};
