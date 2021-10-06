import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import ViewLogin from "./components/ViewLogin/ViewLogin";
import ProductDetail from "./components/Single-product/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={ViewLogin} />
          <Route path="/detail" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
