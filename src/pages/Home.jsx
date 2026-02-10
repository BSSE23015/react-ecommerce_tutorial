import { Link } from "react-router-dom";
import { getProducts } from "../data/product";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopBrand</h1>
        <p className="home-subtitle">
          Discover the latest products at unbeatable prices.
        </p>
      </div>
      <div className="container">
        <h1 className="page-title">Our Products</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
