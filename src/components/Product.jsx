import React from "react";
import Button from "../shared/UIElements/Button";
import Card from "../shared/UIElements/Card";

export const Product = ({ product }) => {
  return (
    <Card>
      <li>
        <h1>{product.title}</h1>
        <h3>{product.price}</h3>
        <Button>Add to Cart</Button>
      </li>
    </Card>
  );
};
