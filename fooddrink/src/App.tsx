import "./App.css";
import Home from "./components/Home/Home";
import ViewLogin from "./components/ViewLogin/ViewLogin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Index from "./components/Index";
import ProductDetail from "./components/Single-product/ProductDetail";
import ProductList from "./components/product_list/ProductList";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={ViewLogin} />
          <Route path="/detail/:id" component={ProductDetail} />
          <Route path="/products" component={ProductList} />
          <Route path="/new" component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
