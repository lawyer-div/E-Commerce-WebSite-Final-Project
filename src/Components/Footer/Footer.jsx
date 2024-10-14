import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "0.25%" }}>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-address">
            <h3>Furniro.</h3>
            <p>
              400 University Drive Suite 200 Coral
              <br />
              Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          <div className="footer-links">
            <p>Links</p>
            <ul>
              <li
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              >
                Home
              </li>
              <li
                onClick={() => navigate("/shop")}
                style={{ cursor: "pointer" }}
              >
                Shop
              </li>
              <li
                onClick={() => navigate("/about")}
                style={{ cursor: "pointer" }}
              >
                About
              </li>

              <li
                onClick={() => navigate("/contact")}
                style={{ cursor: "pointer" }}
              >
                Contact
              </li>
            </ul>
          </div>
          <div className="footer-help">
            <p>Help</p>
            <ul>
              <li style={{ cursor: "pointer" }}>Payment Options</li>
              <li style={{ cursor: "pointer" }}>Returns</li>
              <li style={{ cursor: "pointer" }}>Privacy Policies</li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <p>Newsletter</p>
            <div className="footer-newsletter-input">
              <input type="text" placeholder="Enter Your Email Address" />
              <button
                style={{
                  border: "none",
                  background: "none",
                  padding: "0",
                  font: "inherit",
                  cursor: "pointer",
                }}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="footer-rights">
          <p>2023 furniro. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
