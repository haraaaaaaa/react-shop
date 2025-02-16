import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
//import { Product } from "./Product";
//import { products } from "../data/data";
import Card from "../shared/UIElements/Card";
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

  console.log(products); // 2x output in console
  return (
    <Card className={`max-w`}>
      <ul>test</ul>
    </Card>
  );
};

export default ProductList;
