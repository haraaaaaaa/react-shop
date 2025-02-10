import React from "react";
import Button from "../shared/UIElements/Button";

export const Product = (props) => {
  return (
    <li>
      <h1>{props.title}</h1>
      <h3>{props.price}</h3>
      <Button>Add to Cart</Button>
    </li>
  );
};
