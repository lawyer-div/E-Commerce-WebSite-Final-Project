import React, { useContext, useState } from 'react';
import { CartContext } from '../../../../Context/CartContext';
import img1 from '../../../../Assets/Product/image 1.png';
import img2 from '../../../../Assets/Product/image 2 .png';
import img3 from '../../../../Assets/Product/image 3.png';
import img4 from '../../../../Assets/Product/image 4.png';
import img5 from '../../../../Assets/OurProduct/grifo Image 5.png';
import img6 from '../../../../Assets/OurProduct/image 6.png';
import img7 from '../../../../Assets/OurProduct/image 7.png';
import img8 from '../../../../Assets/OurProduct/image 8.png';
import './OurProducts.css';
import { useNavigate } from 'react-router-dom';

export default function OurProducts() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const products = [
    { id: 1, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img1 },
    { id: 2, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img2 },
    { id: 3, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img3 },
    { id: 4, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img4 },
    { id: 5, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img5 },
    { id: 6, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img6 },
    { id: 7, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img7 },
    { id: 8, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img8 },
    { id: 9, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img1 },
    { id: 10, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img2 },
    { id: 11, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img3 },
    { id: 12, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img4 },
    { id: 13, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img5 },
    { id: 14, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img6 },
    { id: 15, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img7 },
    { id: 16, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img8 }
  ];

  const initialProducts = products.slice(0, 8);
  const extraProducts = products.slice(8, 24);

  return (
    <div>
      <div className="related-products-container-xyz">
        <div className="related-product-heading-xyz">
          <span className='ourpro'>Our Products</span>
        </div>
        <div className="related-products-xyz">
          {initialProducts.map((product) => (
            <div key={product.id} className="r-prod-card-xyz" onClick={() => handleProductClick(product.id)}>
              {product.oldPrice &&
                <div className="bubble-xyz">
                  -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>}
              <img className='img-fluid' src={product.img} alt={product.name} />
              <div className="r-prod-desc-xyz">
                <ul className="ul-content">
                  <li className="li-bc-xyz">{product.name}</li>
                  <li className="li-content">{product.description}</li>
                  <li className='li-contentt'>
                    Rp {product.price.toLocaleString()}
                    {product.oldPrice && <span>Rp {product.oldPrice.toLocaleString()}</span>}
                  </li>
                </ul>
              </div>
              <button className="add-to-cart-button" onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                Add to Cart
              </button>
            </div>
          ))}

          {showMore && extraProducts.map((product) => (
            <div key={product.id} className="r-prod-card-xyz" onClick={() => handleProductClick(product.id)}>
              {product.oldPrice &&
                <div className="bubble-xyz">
                  -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </div>}
              <img className='img-fluid' src={product.img} alt={product.name} />
              <div className="r-prod-desc-xyz">
                <ul className="ul-content">
                  <li className="li-bc-xyz">{product.name}</li>
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

      <div className="r-button-xyz">
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}
