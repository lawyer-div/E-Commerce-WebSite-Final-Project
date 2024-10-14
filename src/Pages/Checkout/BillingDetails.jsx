import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import "./BillingDetails.css";

const BillingDetails = () => {
  const { cartItems } = useContext(CartContext);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.1;
    return subtotal + tax;
  };

  return (
    <>
      <div className="billing-main">
        <div className="billing-container">
          <div className="billing-inputdata">
            {/* معلومات الدفع */}
            <div className="billing-title">Billing details</div>
            <div className="billing-name">
              <div className="billing-fname">
                <p className="billing-all-text">First Name</p>
                <input type="text" className="billing-nameinput"></input>
              </div>
              <div className="billing-lname">
                <p className="billing-all-text">Last Name</p>
                <input className="billing-nameinput"></input>
              </div>
            </div>
            {/* المزيد من الحقول */}
            <div className="billing-companyname">
              <p className="billing-all-text">Company Name (Optional)</p>
              <input className="billing-all-input"></input>
            </div>
            <div className="billing-country">
              <p className="billing-all-text">Country / Region</p>
              <input className="billing-all-input" placeholder="Sri Lanka"></input>
            </div>
            <div className="billing-street">
              <p className="billing-all-text">Street address</p>
              <input className="billing-all-input"></input>
            </div>
            <div className="billing-town">
              <p className="billing-all-text">Town / City</p>
              <input className="billing-all-input"></input>
            </div>
            <div className="billing-provience">
              <p className="billing-all-text">Province</p>
              <input className="billing-all-input" placeholder="Western Province"></input>
            </div>
            <div className="billing-zip">
              <p className="billing-all-text">ZIP code</p>
              <input className="billing-all-input"></input>
            </div>
            <div className="billing-phone">
              <p className="billing-all-text">Phone</p>
              <input className="billing-all-input"></input>
            </div>
            <div className="billing-email">
              <p className="billing-all-text">Email address</p>
              <input className="billing-all-input"></input>
            </div>
            <div className="billing-additional">
              <input type="text" placeholder="Additional information" className="billing-all-input"></input>
            </div>
          </div>

          <div className="billing-detail">
            <div className="billing-order-detail">
              <div className="billing-detail-bill">
                <div className="billing-detail-product">
                  <p className="billing-text-product">Product</p>

                  {cartItems.map((item) => (
                    <div key={item.id} className="billing-product-name">
                      <p className="billing-product-text">{item.name}</p>
                      <p className="billing-quantity">X {item.quantity}</p>
                    </div>
                  ))}

                  {/* عرض الساب توتال والتوتال */}
                  <p className="billing-text-total">Subtotal</p>
                  <p className="billing-text-total">Total</p>
                </div>

                <div className="billing-detail-subtotal">
                  <p className="billing-text-product">Subtotal</p>
                  <p className="billing-text-price">Rs. {calculateSubtotal().toLocaleString()}</p>
                  <p className="billing-text-totalprice">Rs. {calculateTotal().toLocaleString()}</p>
                </div>
              </div>

              <div className="billing-detail-desc">
                <div className="billing-desc-upper">
                  <div className="bill-direct-order">
                    <FaCircle />
                    <p className="bill-direct-order-text"> &nbsp; &nbsp;Direct Bank Transfer</p>
                  </div>
                  <p className="bill-desc-upper-text">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>

                <div className="billing-desc-middle">
                  <div className="bill-direct-order">
                    <FaRegCircle className="circle-logo"></FaRegCircle>
                    <div className="bill-middle-order-text"> &nbsp; &nbsp;Direct Bank Transfer</div>
                  </div>

                  <div className="bill-direct-order">
                    <FaRegCircle className="circle-logo"></FaRegCircle>
                    <div className="bill-middle-order-text"> &nbsp; &nbsp;Cash On Delivery</div>
                  </div>
                </div>

                <div className="billing-desc-bottom">
                  <p className="bill-desc-bottom-text">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <span className="bill-bottom-privacy">privacy policy.</span>
                  </p>
                </div>
              </div>

              <div className="billing-detail-btn">
                <button className="bill-btn-placeorder">Place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingDetails;
