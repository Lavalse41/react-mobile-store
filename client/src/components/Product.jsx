import ProductList from "./ProductList";
import ProductSidebar from "./ProductSidebar";

function Product() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <ProductSidebar />
      <ProductList />
    </div>
  );
}

export default Product;
