import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import FeaturesDetail from "../../Shop/HeaderAndFeatures/FeatureDetail";
import './Products.css';

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (category) {
      setLoading(true);
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          setLoading(false);
        });
    }
  }, [category]);

  return (
    <div>
      <Navbar />
      <h1>Products in {category}</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
      <FeaturesDetail />
      <Footer />
    </div>
  );
}

export default Products;

