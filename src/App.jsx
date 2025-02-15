import ProductList from "./components/ProductList";
import { getProducts } from "./services/api/product-services";

function App() {
  let products = getProducts();
  console.log(products);

  return (
    <div>
      <ProductList />
    </div>
  );
}

export default App;
