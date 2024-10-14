import React from "react";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function AboutHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="shop-title-main">
        <div className="shop-title-text">
          <div>
            <img src={logo} alt="" />
          </div>
          <p className="shop-title-shop">About</p>
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
            <p className="shop-title-breadcrumb-next">&nbsp; About</p>
          </div>
        </div>
      </div>
      <h1>About</h1>
    </div>
  );
}
