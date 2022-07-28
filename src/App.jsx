
import { Route, Routes } from "react-router-dom";
import AlertContextProvider, { AlertContext } from "./context/AlertContext";
import AuthContextProvider from "./context/AuthController";
import CartContextProvider from "./context/CartContext";
import Account from "./screens/Auth/Account";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import Cart from "./screens/Cart";
import Categories from "./screens/Categories";
import Home from "./screens/Home";
import React from "react";
const App = () => {
  
  return (
    <div>
     
      <AlertContextProvider>
        <CartContextProvider>
          <AuthContextProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="categories/:id" element={<Categories />} />
              <Route path="login" element={<Login />} />
              <Route path="account" element={<Account />} />
              <Route path="register" element={<Register />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </AuthContextProvider>
        </CartContextProvider>
      </AlertContextProvider>
    </div>
  );
};

export default App;
