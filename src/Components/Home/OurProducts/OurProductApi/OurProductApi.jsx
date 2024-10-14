import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import './OurProductApi.css';

export default function Products() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleShowMore = () => {
    if (visibleProducts + 8 >= products.length) {
      setVisibleProducts(products.length);
      setShowMore(false);
    } else {
      setVisibleProducts(visibleProducts + 8);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <div className="products-container">
        <div className="products-heading">
          <span className='title'>Our Products</span>
        </div>
        <br />
        <div className="product-list">
          {products.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
              {product.oldPrice &&
                <div className="discount-badge">
                  -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>}
              <img className='product-img' src={product.images[0]} alt={product.name} />
              <div className="product-info">
                <ul className="product-details">
                  <li className="product-title">{product.title}</li>
                  <li className="product-desc">{product.description.slice(0, 30)}...</li>
                  <li className='product-price'>
                    Rp {product.price.toLocaleString()}
                    {product.oldPrice && <span> Rp {product.oldPrice.toLocaleString()}</span>}
                  </li>
                </ul>
              </div>
              <button className="add-to-cart-btn" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="load-more-container">
        {showMore ? (
          <button className="load-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        ) : null}
      </div>
    </div>
  );
}
