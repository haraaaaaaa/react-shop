import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import useRequest from "../hooks/useRequest";
import { ProductCard } from "../components/ProductCard";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const { sendRequest } = useRequest({
    url: "https://fakestoreapi.com/products?limit=3",
    method: "get",
    onSuccess: (data) => [setFeaturedProducts(data)],
  });

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <div className="bg-gray-50">
      <section className="bg-indigo-600 text-white h-[500px] sm:h-[600px] flex items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="max-w-3xl space-y-6 z-10">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">Welcome to SAAISolutions React Shop!</h1>
          <p className="text-xl sm:text-2xl mb-6 max-w-md mx-auto">Discover amazing products with unbeatable prices. Start shopping today!</p>
          <Link to="/products">
            <button className="bg-indigo-700 text-white px-8 py-4 rounded-md text-lg hover:bg-indigo-800 transition duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} className="bg-white">
                <div className="w-full h-[200px] sm:h-[250px] border-2 border-gray-300 shadow-md rounded-lg flex items-center justify-center">
                  <img src={product.image} alt={product.title} className="w-full h-full object-contain p-2" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{product.title}</h3>
                <p className="text-lg text-indigo-600 font-bold mt-2">{product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <button className="mt-4 bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition">View Details</button>
                </Link>
              </ProductCard>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 SAAI Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
