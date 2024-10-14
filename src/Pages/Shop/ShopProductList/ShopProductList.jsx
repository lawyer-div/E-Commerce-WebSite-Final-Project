import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';
import img1 from '../../../Assets/Product/image 1.png';
import img2 from '../../../Assets/Product/image 2 .png';
import img3 from '../../../Assets/Product/image 3.png';
import img4 from '../../../Assets/Product/image 4.png';
import img5 from '../../../Assets/OurProduct/grifo Image 5.png';
import img6 from '../../../Assets/OurProduct/image 6.png';
import img7 from '../../../Assets/OurProduct/image 7.png';
import img8 from '../../../Assets/OurProduct/image 8.png';
import './ShopProductList.css';


export default function ShopProductList() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

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
    { id: 16, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img8 },
    
    { id: 17, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img1 },
    { id: 18, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img2 },
    { id: 19, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img3 },
    { id: 20, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img4 },
    { id: 21, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img5 },
    { id: 22, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img6 },
    { id: 23, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img7 },
    { id: 24, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img8 },
    { id: 25, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img1 },
    { id: 26, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img2 },
    { id: 27, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img3 },
    { id: 28, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img4 },
    { id: 29, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img5 },
    { id: 30, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img6 },
    { id: 31, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img7 },
    { id: 32, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img8 },
    { id: 33, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img1 },
    { id: 34, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img2 },
    { id: 35, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img3 },
    { id: 36, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img4 },
    { id: 37, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img5 },
    { id: 38, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img6 },
    { id: 39, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img7 },
    { id: 40, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img8 },
    { id: 41, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img1 },
    { id: 42, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img2 },
    { id: 43, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img3 },
    { id: 44, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img4 },
    { id: 45, name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, img: img5 },
    { id: 46, name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, img: img6 },
    { id: 47, name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, img: img7 },
    { id: 48, name: 'Respira', description: 'Outdoor bar table and stool', price: 500000, img: img8 },
    
  ];
    

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

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

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <div className="related-products-container-xyz">
        <div className="related-product-heading-xyz">
          <span className='ourpro'></span>
        </div>
        <div className="related-products-xyz">
          {currentProducts.map((product) => (
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

      <div className="pagination-buttons">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
