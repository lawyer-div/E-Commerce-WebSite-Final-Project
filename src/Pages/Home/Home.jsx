import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Home/Banner/Banner";
import Inspirations from "../../Components/Home/Inspirations/Inspirations";
import Header from "../../Components/Home/Banner/Header";
import { Box as Share } from "../../Components/Home/Share/Share";
import './Home.css';

// عرض منتجات ثابتة 
// import OurProducts from "../../Components/Home/OurProducts/OurProducts/OurProducts";

// عرض المنتجات من API (Get)
import OurProductApi from "../../Components/Home/OurProducts/OurProductApi/OurProductApi";



export default function Home() {

  return (
    // عرض منتجات ثابتة 
    // <>
    //   <Navbar />
    //   <Header />
    //   <div className="content">
    //     <Banner />
    //     <OurProducts />
    //     <Inspirations />
    //     <Share />
    //   </div>
    //   <Footer />
    // </>



    // عرض المنتجات من API (Get)
    <>
      <Navbar />
      <Header />
      <Banner />
      <div className="content">
        <OurProductApi />
        <Inspirations />
        <Share />
      </div>
      <Footer />
    </>
  );
}
