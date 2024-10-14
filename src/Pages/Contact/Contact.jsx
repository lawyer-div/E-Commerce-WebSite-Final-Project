import React from "react";

import ContactHeader from "./ContactHeader";
import WarrantyDetail from "../Shop/HeaderAndFeatures/FeatureDetail";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ContactDetails from "./ContactDetails";

import "./Contact.css";

export default function Contact() {
  return (
    <div >
      <Navbar />
      <ContactHeader />
      <ContactDetails />
      <WarrantyDetail />
      <Footer />
    </div>
  );
}
