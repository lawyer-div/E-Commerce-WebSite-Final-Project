import React, { useContext } from "react";
import { TbTrashFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./CartDetails.css";

export default function CartDetails() {
  const { cartItems, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(cartItems)
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const shortenTitle = (title) => {
    if (!title) return "";
    const words = title.split(" ");
    return words.slice(0, 2).join(" ");
  };

  return (
    <div className="Main-cartContainer">
      <div className="cart-content">
        <div className="cart-Product">
          <div className="cart-nav">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-product-details">
                <div className="image-designing">
                  <img
                    src={item.images && item.images.length > 0 ? item.images[0] : "default-image.jpg"}
                    alt={item.title || "Product Image"}
                    className="cart-product-image"
                  />
                </div>
                <span className="cart-span">{shortenTitle(item.title)}</span>
                <span className="cart-pricing">
                  Rs. {item.price.toLocaleString()}
                </span>
                <span className="cart-quantity">{item.quantity}</span>
                <span className="cart-subtotal">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </span>
                <TbTrashFilled
                  className="trash-icon"
                  onClick={() => removeItem(item.id)}
                />
              </div>
            ))
          ) : (
            <div className="empty-cart">Your cart is empty</div>
          )}
        </div>

        <div className="cart-Total" id="totalall">
          <div className="cart-heading">
            <span>Cart Totals</span>
          </div>

          <div className="cart-items-price">
            <div className="cart-items-st">
              <span className="text" >Subtotal</span>
              <br />
              <span className="text">Total</span>
            </div>

            <div className="cart-rs">
              <span className="st">Rs. {calculateTotal().toLocaleString()}</span>
              <br />
              <span className="to">Rs. {calculateTotal().toLocaleString()}</span>
            </div>
          </div>

          <div className="cart-checkout-button">
            <button
              className="cart-button"
              onClick={() => navigate("/checkout")}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
