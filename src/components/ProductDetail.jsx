import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import useRequest from "../hooks/useRequest";
import Button from "../shared/UIElements/Button";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  const { sendRequest } = useRequest({
    url: `https://fakestoreapi.com/products/${params.id}`,
    method: "get",
    onSuccess: (data) => [setProduct(data)],
  });

  useEffect(() => {
    sendRequest();
  }, [params.id]);

  const onAddToCart = () => {
    console.log("Add to cart");
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="w-full h-[300px] border-2 border-gray-300 shadow-xl rounded-lg flex items-center justify-center">
        <img
          src={product.image}
          className="w-[280px] h-[280px] object-contain rounded-lg"
        />
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-gray-500 text-sm mt-1">{product.category}</p>
        <p className="text-indigo-600 font-bold text-xl mt-2">
          ${product.price}
        </p>
        <p className="text-gray-700 text-md mt-4">{product.description}</p>
      </div>

      <div className="mt-6 flex justify-between">
        <Link to={"/products"}>
          <Button className="bg-gray-300 text-gray-800 text-sm px-4 py-2 rounded-lg hover:bg-gray-400 transition">
            Go Back
          </Button>
        </Link>

        <Button
          onClick={onAddToCart}
          className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
