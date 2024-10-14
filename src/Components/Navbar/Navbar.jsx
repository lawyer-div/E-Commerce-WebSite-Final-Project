import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Frame 168.png";
import ShoppingCart from "../../Pages/CartSidebar/ShoppingCart/ShoppingCart";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
        <div className="container">
          <Link className="navbar-brand ms-2 me-auto" to={"/"}>
            <img
              src={logo}
              alt="Furniro Logo"
              style={{ height: "40px", marginRight: "100px" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end align-items-center bg-light"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 ms-3">
              <li className="nav-item">
                <Link
                  className="nav-link active mx-4 fw-bold fs-6"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link fw-bold fs-6" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link fw-bold fs-6" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-4">
                <Link className="nav-link fw-bold fs-6" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav d-flex align-items-center ms-auto ps-5">
              <li className="nav-item">
                <i className="fa-regular fa-user fa-1x mx-3"></i>
              </li>
              <li className="nav-item">
                <i className="fa-solid fa-magnifying-glass fa-1x mx-3"></i>
              </li>
              <li className="nav-item">
                <i className="fa-regular fa-heart fa-1x mx-3"></i>
              </li>
              <li className="nav-item">
                <i
                  className="fa-solid fa-cart-shopping fa-1x mx-3"
                  style={{ cursor: "pointer" }}
                  onClick={toggleSidebar}
                ></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <div className="shopping-cart-overlay">
          <ShoppingCart />
        </div>
      )}
    </>
  );
}
