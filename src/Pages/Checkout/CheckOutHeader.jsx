import React from "react";
import { useNavigate } from "react-router-dom";
import "./BillingDetails.css";

const CheckOutHeader = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");

  };

  return (
    <>
      <div className="shop-title-main">
        <div className="checkout-shop-logo"></div>

        <div className="shop-title-text">
          <p className="shop-title-shop">Checkout</p>
          <div className="shop-title-breadcrumb-route">
            <p className="shop-title-breadcrumb">
              <span style={{ cursor: 'pointer' }} onClick={goToHome}>
                Home
              </span> &gt;
            </p>
            <p className="shop-title-breadcrumb-next">&nbsp; Checkout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutHeader;
