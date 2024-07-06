import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import Verify from "./pages/Verify/Verify";
import MyOrder from "./pages/MyOrder/MyOrder";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorder" element={<MyOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
