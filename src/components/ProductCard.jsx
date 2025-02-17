import React from "react";
import Button from "../shared/UIElements/Button";
import Card from "../shared/UIElements/Card";
import { Link } from "react-router";

export const ProductCard = ({ id, title, price, category, imageUrl }) => {
  return (
    <Card className=" bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3">
      <li>
        <h1 className="mt-1 text-base font-medium h-12 line-clamp-2">
          {title}
        </h1>
        <h2 className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mt-1 mb-1">
          {category}
        </h2>
        <h3 className="text-lg font-bold text-indigo-600">${price}</h3>
        <div className="flex items-center justify-center w-full">
          <div className="w-[200px] h-[200px] md:w-[220px] md:h-[220px] border-2 border-gray-300 shadow-xl rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>

        <div className="flex w-full justify-between mt-3">
          <Link to={`/products/${id}`}>
            <Button className="bg-gray-300 text-gray-800 text-sm px-4 py-2 rounded-lg hover:bg-gray-400 transition">
              Details
            </Button>
          </Link>
          <Button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </Button>
        </div>
      </li>
    </Card>
  );
};
