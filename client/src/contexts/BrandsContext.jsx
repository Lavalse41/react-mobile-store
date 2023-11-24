import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const BrandsContext = createContext();

function BrandsProvider({ children }) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    async function getBrands() {
      try {
        const res = await axios.get("http://localhost:3001/brands");
        // console.log(res.data);
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

function useBrands() {
  const context = useContext(BrandsContext);
  if (context === undefined)
    throw new Error("BrandsContext was used outside of the BrandsProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { BrandsProvider, useBrands };
