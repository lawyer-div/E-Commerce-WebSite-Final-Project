import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartApi.css';

const ShoppingCartApi = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        const selectedProducts = data.slice(0, 5).map(item => ({
          id: item.id,
          name: item.title,
          price: item.price,
          image: item.images[0] || '/path/to/default-image.jpg',
          quantity: 1
        }));
        setCartItems(selectedProducts);
        setLoading(false);
      } catch (error) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="cart-sidebar">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
              onError={(e) => e.target.src = '/path/to/default-image.jpg'}
            />
            <div className="item-info">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-details">
                {item.quantity} x Rs. {item.price.toLocaleString()}
              </p>
            </div>
            <button className="remove-item" onClick={() => removeItem(item.id)}>×</button>
          </div>
        ))
      )}
      <div className="subtotal">
        <h3>Subtotal:</h3>
        <p>Rs. {totalAmount.toLocaleString()}</p>
      </div>
      <div className="cart-buttons">
        <Link to="/cart">
          <button className="cart-btn">Cart</button>
        </Link>
        <Link to="/checkout">
          <button className="checkout-btn">Checkout</button>
        </Link>
        <button className="compare-btn">Comparison</button>
      </div>
    </div>
  );
};

export default ShoppingCartApi;
