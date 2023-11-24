import { createContext, useEffect, useState } from "react";
import axios from "axios";

const BrandsContext = createContext();

export function BrandsProvider({ children }) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function getBrands() {
      try {
        const res = await axios.get("http://localhost:3001/brands");
        console.log(res.data);
        setBrands(res.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    getBrands();
  }, []);

  return (
    <BrandsContext.Provider value={{ brands }}>
      {children}
    </BrandsContext.Provider>
  );
}



export default BrandsContext;
