import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/category/Category";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
