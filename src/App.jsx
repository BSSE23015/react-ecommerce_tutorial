import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
