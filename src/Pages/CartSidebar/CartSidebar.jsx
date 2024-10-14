import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


// import SingleProductOne from "../SingleProduct/SingleProductOne/SingleProductOne";
// import ShoppingCart from "./ShoppingCart/ShoppingCart";
// import Description  from "../SingleProduct/Description/Description";
// import RelatedProduct from "../SingleProduct/RelatedProduct/RelatedProduct";

import ShoppingCart from "./ShoppingCart/ShoppingCart";
import SingleProduct from "../SingleProduct/SingleProduct";
import RelatedProductApi from "../SingleProduct/RelatedProductApi/RelatedProductApi";

// import ProductPageApi from "../SingleProduct/ProductPageApi/ProductPageApi";




export default function CartSidebar() {
  return (
    // عرض المنتجات الثابتة 
    
    // <div>
    //   <Navbar />
    //   <div className="content">
    //     <SingleProductOne />
    //     <ShoppingCart />
    //     <Description/>
    //    <RelatedProduct />
    //   </div>
    //   <Footer />
    // </div>



    // عرض المنتجات من API
    <>
      <Navbar />
      <div className="content">
        {/* <ProductPageApi product={product} /> */}
        <br /><br /><br />
        <RelatedProductApi />
        <ShoppingCart />
      </div>
      <Footer />
    </>
  );
}
