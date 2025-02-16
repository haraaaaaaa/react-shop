import React from "react";
import Button from "../shared/UIElements/Button";
import Card from "../shared/UIElements/Card";
//import { useReducer } from "react";

//const productReducer = (state, action) => {};

export const Product = ({ title, price, category, imageUrl }) => {
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
    <Card>
      <li>
        <h1>{title}</h1>
        <h2>{category}</h2>
        <h3>{price}</h3>
        <img src={imageUrl} alt="" />
        <Button>Add to Cart</Button>
      </li>
    </Card>
  );
};
