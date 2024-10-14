import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import './ShopProductApi.css';

export default function ShopProductList() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="related-products-container-xyz">
        <div className="related-products-xyz">
          {currentProducts.map((product) => (
            <div key={product.id} className="r-prod-card-xyz" onClick={() => handleProductClick(product.id)}>
              {product.oldPrice &&
                <div className="bubble-xyz">
                  -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>}
              <img className='img-fluid' src={product.images[0]} alt={product.name} />
              <div className="r-prod-desc-xyz">
                <ul className="ul-content">
                  <li className="li-bc-xyz">{product.title}</li>
                  <li className="li-content">{product.description}</li>
                  <li className='li-contentt'>
                    Rp {product.price.toLocaleString()}
                    {product.oldPrice && <span> Rp {product.oldPrice.toLocaleString()}</span>}
                  </li>
                </ul>
              </div>
              <button className="add-to-cart-button" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination-buttons">
        <button
          onClick={() => changePage(1)}
          className={currentPage === 1 ? 'active' : ''}
        >
          1
        </button>
        <button
          onClick={() => changePage(2)}
          className={currentPage === 2 ? 'active' : ''}
        >
          2
        </button>
        <button
          onClick={() => changePage(3)}
          className={currentPage === 3 ? 'active' : ''}
        >
          3
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage >= 3}
          className="next-button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
