import React from "react";
import { Product } from "./Product";
import { products } from "../data/data";

const ProductList = () => {
  const productsList = products.map((product) => {
    return <Product title={product.title} price={product.price} />;
  });

  return <ul>{productsList}</ul>;
};

export default ProductList;
