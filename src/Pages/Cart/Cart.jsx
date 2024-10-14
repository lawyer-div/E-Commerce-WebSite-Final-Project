import React from "react";
import CartHeader from "./CartHeader";
import Navbar from "../../Components/Navbar/Navbar";
import FeaturesDetail from "../Shop/HeaderAndFeatures/FeatureDetail";
import Footer from "../../Components/Footer/Footer";
import CartDetails from "./CartDetails";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <CartHeader />
      <CartDetails />
      <FeaturesDetail />
      <Footer />
    </div>
  );
}
