import React, { useContext, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import p1 from "../../../Assets/Product/p1.png";
import p2 from "../../../Assets/Product/p2.png";
import p3 from "../../../Assets/Product/p3.png";
import p4 from "../../../Assets/Product/p4.png";
import p5 from "../../../Assets/Product/p5.png";
import star from "../../../Assets/Product/star.png";
import halfStar from "../../../Assets/Product/halfStar.png";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import "./SingleProductOne.css";

function SingleProductOne() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Asgaard sofa",
    price: 250000,
    image: p2,
    quantity: quantity,
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <div className="product-container123-xyz">
        <div className="prod-header-xyz">
          <div style={{ color: "#9F9F9F" }}>
            <Link to="/" style={{ textDecoration: "none", color: "#9F9F9F" }}>
              Home
            </Link>
          </div>
          <div>
            <FaChevronRight style={{ fontSize: "0.9rem" }} />
          </div>
          <div style={{ color: "#9F9F9F" }}>
            <Link to="/shop" style={{ textDecoration: "none", color: "#9F9F9F" }}>
              Shop
            </Link>
          </div>
          <div>
            <FaChevronRight style={{ fontSize: "0.9rem" }} />
          </div>
          <div>
            <RxDividerVertical style={{ fontSize: "2rem", color: "#9F9F9F" }} />
          </div>
          <div>
            <Link to="/product/asgaard-sofa" style={{ textDecoration: "none", color: "black" }}>
              Asgaard sofa
            </Link>
          </div>
        </div>

        <div className="product-card-one-xyz container">
          <div className="product-image-show-xyz">
            <div className="side-images-xyz">
              <img src={p1} alt="" />
              <img src={p3} alt="" />
              <img src={p4} alt="" />
              <img src={p5} alt="" />
            </div>
            <div className="image-active-xyz">
              <img src={p2} alt="a" />
            </div>
          </div>
          <div className="product-desc-xyz">
            <h2>Asgaard sofa</h2>
            <p style={{ color: "#9F9F9F" }}>Rs. 250,000.00</p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", color: "#9F9F9F" }}>
              <div>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={halfStar} alt="" />
              </div>
              <span style={{ fontSize: "1.25rem" }}>|</span>
              <span style={{ fontSize: "1.5rem" }}> 5 Customer Review</span>
            </div>
            <p style={{ fontSize: "1.7rem" }}>
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <p style={{ color: "#9F9F9F" }}>Size</p>
            <span className="size-buttons-xyz">
              <button style={{ backgroundColor: "#B88E2F" }}>L</button>
              <button>XL</button>
              <button>XS</button>
            </span>
            <p style={{ color: "#9F9F9F" }}>Color</p>
            <span className="color-buttons-xyz">
              <button style={{ backgroundColor: "#816DFA" }}></button>
              <button style={{ backgroundColor: "#000000" }}></button>
              <button style={{ backgroundColor: "#B88E2F" }}></button>
            </span>
            <p className="config-buttons-xyz">
              <button className="spro-btn-one">
                <span style={{ paddingRight: "2rem", fontSize: "25px", cursor: "pointer" }} onClick={decrementQuantity}>
                  -
                </span>
                {quantity}
                <span style={{ paddingLeft: "2rem", fontSize: "25px", cursor: "pointer" }} onClick={incrementQuantity}>
                  +
                </span>
              </button>
              <button className="spro-btn" onClick={handleAddToCart}>Add to cart</button>
              <button className="spro-btn">+ Compare</button>
            </p>
            <hr />

            <div
              className="prod-des-details-xyz"
              style={{ color: "#9F9F9F", maxWidth: "fit-content" }}
            >
              <div>SKU</div>
              <div>: SS001</div>
              <div>Category</div>
              <div>: Sofas</div>
              <div>Tags</div>
              <div>: Sofa,Chair,Home,Shop</div>
              <div>Share</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                :{" "}
                <span style={{ color: "black", fontSize: "1.25rem" }}>
                  <FaFacebook /> <FaLinkedin /> <AiFillTwitterCircle />
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default SingleProductOne;
