import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { useDispatch } from "react-redux";
import { getProducts } from "./features/products/productsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getProducts()), [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container mx-auto lg:px-16">
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
