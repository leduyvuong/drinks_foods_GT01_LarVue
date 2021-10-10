import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ViewLogin from "./components/ViewLogin/ViewLogin";
import ProductDetail from "./components/Single-product/ProductDetail";
import Cart from "./components/cart_view/Cart";
import ProductList from "./components/product_list/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
