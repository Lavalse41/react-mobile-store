import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import { BrandsProvider } from "./contexts/BrandsContext";

function App() {
  return (
    <div className="w-screen h-screen px-32 py-16">
      <BrandsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
          </Routes>
        </Router>
      </BrandsProvider>
    </div>
  );
}

export default App;
