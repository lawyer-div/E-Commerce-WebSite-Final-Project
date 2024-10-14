import React from "react";
import "./CartHeader.css";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
export default function CartHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="shop-title-main">
        <div className="shop-title-text">
          <div>
            <img src={logo} alt="" />
          </div>
          <p className="shop-title-shop">Cart</p>
          <div className="shop-title-breadcrumb-route">
            <p
              className="shop-title-breadcrumb"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home &gt;{" "}
            </p>
            <p className="shop-title-breadcrumb-next">&nbsp; Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
