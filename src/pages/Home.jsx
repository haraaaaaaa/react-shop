import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to ReactShop</h1>
          <p className="text-lg mb-6">
            Discover the best deals on the latest products!
          </p>
          <NavLink
            to="/products"
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Shop Now
          </NavLink>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold">Product {product}</h3>
              <p className="text-gray-600">$19.99</p>
              <NavLink
                to="/products"
                className="mt-3 inline-block text-indigo-600 font-semibold hover:underline"
              >
                View Details
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Electronics", "Clothing", "Accessories", "Home & Kitchen"].map(
            (category) => (
              <NavLink
                key={category}
                to={`/products?category=${category.toLowerCase()}`}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
              >
                {category}
              </NavLink>
            )
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Exclusive Offers Just for You!
        </h2>
        <p className="text-lg mb-6">
          Sign up now and get 10% off your first purchase.
        </p>
        <NavLink
          to="/signup"
          className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Sign Up
        </NavLink>
      </section>
    </div>
  );
};

export default Home;
