import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./shared/Navigation/NavBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/products" element={<ProductList />} />
        {/* <Route
          exact
          path="*"
          element={<ErrorPage errorTitle={"Stranica nije pronadjena"} errorContent={"Ne mozemo pronaci stranicu koju trazite."} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
