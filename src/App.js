import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import productDetails from "./data/productDetails";
import Layout from "./Pages/Layout";
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Collections from "./Pages/Collections"
import Navbar from "./components/Navbar";
import Product from "./components/Product"
import Cart from "./Pages/Cart";


function App() {
  const { productItems } = productDetails;
  const [cartItems, setCartItems] = useState([]);

  return (
      <Router>
        <Navbar cartItems={cartItems}/>
        <Routes>
          <Route exact path="/" element={ <Layout />} />
          <Route index element={ <Product productItems={productItems} /> } />
          <Route path="/men" element={ <Men />} />
          <Route path="/women" element={ <Women />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
      </Router>
  );
}

export default App;
