import React from "react";
import CheckOutHeader from "./CheckOutHeader";
import FeaturesDetail from "../Shop/HeaderAndFeatures/FeatureDetail";
import BillingDetails from "./BillingDetails";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./BillingDetails.css";

const CheckOut = () => {
  return (
    <>
      <Navbar />
      <CheckOutHeader />
      <BillingDetails />
      <FeaturesDetail />
      <Footer />
    </>
  );
};

export default CheckOut;
