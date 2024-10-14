import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProductPageApi from "../SingleProduct/ProductPageApi/ProductPageApi";
import RelatedProductApi from "./RelatedProductApi/RelatedProductApi";

// عرض تفاصيل المنتج الواحد من منتجات ثابتة 

// import RelatedProduct from "./RelatedProduct/RelatedProduct";
// import SingleProductOne from "./SingleProductOne/SingleProductOne";
// import Description from "./Description/Description";


const staticProducts = [
  {
    id: "asgaard-sofa",
    name: "Asgaard sofa",
    price: "250,000.00",
    description: "Setting the bar as one of the loudest speakers in its class...",
    rating: 4.5,
    sizes: ["L", "XL", "XS"],
    colors: ["#816DFA", "#000000", "#B88E2F"],
    sku: "SS001",
    category: "Sofas",
    tags: ["Sofa", "Chair", "Home", "Shop"],
    images: ["/path/to/p1.png", "/path/to/p3.png", "/path/to/p4.png", "/path/to/p5.png"],
    mainImage: "/path/to/p2.png",
  },
];

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch product details");
          }
          return response.json();
        })
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    } else {
      setProduct(staticProducts[0]);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    // عرض تفاصيل المنتج الواحد من منتجات ثابتة 

    // <>
    //   <Navbar />
    //   <div className="content">
    //     <SingleProductOne />
    //     <Description />
    //     <RelatedProduct />
    //   </div>
    //   <Footer />
    // </>


    // عرض تفاصيل المنتج الواحد من API

    <>
      <br /><br /> <br /> <br />
      <Navbar />
      <div className="content">
        <ProductPageApi product={product} />
        <br />
        <RelatedProductApi />
      </div>
      <Footer />
    </>
  );
}
