import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ViewLogin from "./components/ViewLogin/ViewLogin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopCategories from "./components/TopCategories";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <TopCategories />
      <ListProduct />
      <Footer />
    </div>
  );
}

export default App;
