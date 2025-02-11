import React from "react";
import Button from "../shared/UIElements/Button";

export const Product = ({ product }) => {
  return (
    <li>
      <h1>{product.title}</h1>
      <h3>{product.price}</h3>
      <Button>Add to Cart</Button>
    </li>
  );
};
