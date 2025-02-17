import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          // "https://api.escuelajs.co/api/v1/products" imageUrl={product.images[0]}
          "https://fakestoreapi.com/products"
        );
        const productsData = response.data;
        setProducts(productsData);
      } catch (error) {
        setError("Error while fetching data");
      }
    };

    fetchProducts();
  }, []);
  console.log(products);

  const productsList = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        title={product.title}
        price={product.price}
        category={product.category}
        imageUrl={product.image}
      />
    );
  });

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 p-4">
        {productsList}
      </ul>
    </div>
  );
};

export default ProductList;
