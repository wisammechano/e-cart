import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto lg:px-16">
        <Cart />
        <Home />
      </div>
    </div>
  );
}

export default App;
