import React, { useState, useReducer } from "react";
//import { Product } from "./Product";
//import { products } from "../data/data";
import Card from "../shared/UIElements/Card";
import { getProducts } from "../services/api/product-services";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // getProducts()
  //   .then((data) => {
  //     setProducts(data);
  //   })
  //   .catch(console.error.bind(console));

  //console.log(products);
  return (
    <Card className={`max-w`}>
      <ul>test</ul>
    </Card>
  );
};

export default ProductList;
