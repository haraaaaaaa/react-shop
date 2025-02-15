import axios from "axios";

export const getProducts = async () => {
  try {
    const productsList = await axios.get("https://api.escuelajs.co/api/v1/products");
    return productsList.data;
  } catch (error) {
    return "Error while fetching data";
  }
};

export const getProduct = async (productId) => {
  try {
    const product = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
    return product.data;
  } catch (error) {
    return "Error while fetching data";
  }
};
