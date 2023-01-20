import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartItem from "./components/cartItem/CartItem";
import MyBooking from "./components/myBooking/MyBooking";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import Salon from "./pages/salon/Salon";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/hair" element={<Category />} />
          <Route path="/salon/details/:id" element={<Salon />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/my-cart" element={<CartItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
