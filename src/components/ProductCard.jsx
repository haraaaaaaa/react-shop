import React from "react";
import Button from "../shared/UIElements/Button";
import Card from "../shared/UIElements/Card";
//import { useReducer } from "react";

//const productReducer = (state, action) => {};

export const ProductCard = ({ title, price, category, imageUrl }) => {
  /* 
 const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        const productData = response.data;
        setProducts(productData);
      } catch (error) {
        setError("Error while fetching data");
      }
    };

    fetchProduct();
  }, [params.id]);

  console.log(product); //
*/
  return (
    <Card className=" bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-3">
      <li>
        <h1 className="mt-1 text-base font-medium h-12 line-clamp-2">
          {title}
        </h1>
        <h2 className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mt-1 mb-1">
          {category}
        </h2>
        <h3 className="text-lg font-bold text-indigo-600">${price}</h3>
        <img src={imageUrl} className="w-full rounded-xl mt-4" />

        <div className="flex w-full justify-between mt-3">
          <Button className="bg-gray-300 text-gray-800 text-sm px-4 py-2 rounded-lg hover:bg-gray-400 transition">
            Details
          </Button>
          <Button className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Add to Cart
          </Button>
        </div>
      </li>
    </Card>
  );
};
