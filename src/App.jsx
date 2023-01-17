import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";
import Salon from "./pages/salon/Salon";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/hair" element={<Category />} />
          <Route path="/salon/details/:id" element={<Salon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
