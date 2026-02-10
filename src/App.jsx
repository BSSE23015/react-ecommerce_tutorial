import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ProductDetails from "./pages/ProductDetails";

import "./App.css";
import AuthProvider from "./Context/AuthContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
