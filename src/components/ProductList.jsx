import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
//import { Product } from "./Product";
//import { products } from "../data/data";
import Card from "../shared/UIElements/Card";
import Button from "../shared/UIElements/Button";
import { Product } from "./Product";
import { getProducts } from "../services/api/product-services";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        const productsData = response.data;
        setProducts(productsData);
      } catch (error) {
        setError("Error while fetching data");
      }
    };

    fetchProducts();
  }, []);

  const productsList = products.map((product) => {
    return <Product key={product.id} title={product.title} price={product.price} category={product.category.name} imageUrl={product.images[0]} />;
  });

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 p-4">{productsList}</ul>
    </div>
  );
};

export default ProductList;
