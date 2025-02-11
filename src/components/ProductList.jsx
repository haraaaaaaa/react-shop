import React from "react";
import { Product } from "./Product";
import { products } from "../data/data";

const ProductList = () => {
  const productsList = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });

  return <ul>{productsList}</ul>;
};

export default ProductList;
