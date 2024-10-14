import React from "react";
import ShopHeader from "./HeaderAndFeatures/ShopHeader";
import FeaturesDetail from "./HeaderAndFeatures/FeatureDetail";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ShopFilter from "./ShopFilter/ShopFilter";


// عرض المنتجات عن طريق API
import ShopProductApi from "./ShopProductApi/ShopProductApi";

// عرض منتجات ثابتة 
// import ShopProductList from "../Shop/ShopProductList/ShopProductList";


const Shop = () => {
  return (
    // عرض المنتجات عن طريق API
    <>
      <Navbar />
      <ShopHeader />
      <ShopFilter />
      <div className="content">
        <ShopProductApi />
        <FeaturesDetail />
      </div>
      <Footer />
    </>


    // عرض منتجات ثابتة 

    //  <> 
    //       <Navbar />
    //       <ShopHeader />
    //       <ShopFilter />
    //       <div className="content">
    //         <ShopProductList />
    //         <FeaturesDetail />
    //       </div>
    //       <Footer />
    //     </> 
  );
};

export default Shop;
