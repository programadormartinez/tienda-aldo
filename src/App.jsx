
import { Route, Routes} from "react-router-dom";
import AuthContextProvider from "./context/AuthController";
import CartContextProvider from "./context/CartContext";
import Account from "./screens/Auth/Account";
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import Cart from "./screens/Cart";
import Categories from "./screens/Categories";
import Home from "./screens/Home";

const App = () => {
  return (
    <div>
      <CartContextProvider>
      <AuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="categories/:id" element={<Categories />} />
            <Route path="login" element={<Login />} />
            <Route path="account" element={<Account />} />
            <Route path="register" element={<Register />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
      </AuthContextProvider>
    </CartContextProvider>
    </div>
  );
};

export default App;
