import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <div className="w-screen h-screen px-32 py-16">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
