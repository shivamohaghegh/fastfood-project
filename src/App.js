import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MainLayout from "./Components/MainLayout/MainLayout";
import Product from "./Pages/ProductsPage";
import User from "./Pages/UserPage";
import ShoppingCardPage from "./Pages/ShoppingCardPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<MainLayout />}>
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<User />} />
          <Route path="/card" element={<ShoppingCardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
