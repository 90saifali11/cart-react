import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Products from './pages/Products';
import About from './pages/About';
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail"; // Ensure the file extension matches
import SigninForm from './pages/Signin'; // Capitalized filename to match import convention
import UserProfile from './pages/Profile'; // Capitalized filename to match import convention
import Cart from './pages/cart';
import SignupForm from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />      
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

