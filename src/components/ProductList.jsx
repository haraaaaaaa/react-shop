import React from "react";
import { Product } from "./Product";
import { products } from "../data/data";
import Card from "../shared/UIElements/Card";

const ProductList = () => {
  const productsList = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });

  return (
    <Card className={`max-w`}>
      <ul>{productsList}</ul>
    </Card>
  );
};

export default ProductList;
