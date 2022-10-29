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


  // Scan the list of products in the shopping cart, if it exists, just add it to the existing one, 
  // if not, add a new product to the cart
  const handleAddProduct = (product, amount) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item) => 
        item.id === product.id 
        ?{...ProductExist, quantity: ProductExist.quantity + amount} 
        : item
        )
      );
    } else{
      setCartItems([...cartItems, {...product, quantity: amount}]);
    }
  }

  return (
    <Router>
      <Navbar cartItems={cartItems} handleAddProduct={handleAddProduct}/>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route index element={<Product productItems={productItems} handleAddProduct={handleAddProduct} />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />} />
      </Routes>
    </Router>
  );
}

export default App;
