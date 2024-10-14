import React from "react";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from "../../../Assets/share/image 10.jpeg";
import image2 from "../../../Assets/share/image 11.jpeg";
import image3 from "../../../Assets/share/image 12.jpeg";
import image4 from "../../../Assets/share/image 13.jpeg";
import image5 from "../../../Assets/share/image 14.jpeg";
import image6 from "../../../Assets/share/image 15.jpeg";
import image7 from "../../../Assets/share/image 16.jpeg";
import image8 from "../../../Assets/share/image 17.jpeg";
import "./Share.css";

export const Box = () => {
  return (
    <div className="grid-container">
      <div className="text-item">
        <div className="text-wrapper">Share your setup with</div>
        <div className="Furniro">#FuniroFurniture</div>
      </div>

      <div className="grid-item">
        <img className="images" alt="Image1" src={image1} />
      </div>
      <div className="grid-item">
        <img className="images" alt="Image2" src={image2} />
      </div>
      <div className="grid-item">
        <img className="images" alt="Image3" src={image3} />
      </div>
      <div className="grid-item">
        <img className="images" alt="Image4" src={image4} />
      </div>
      <div className="grid-item">
        <img className="images" alt="Image5" src={image5} />
      </div>
      <div className="grid-item">
        <img className="images" alt="Image6" src={image6} />
      </div>
      <div className="grid-item">
        <img className="images" alt="Image7" src={image7} />
      </div>
      <div className="grid-item">
        <img className="images" alt="Image8" src={image8} />
      </div>

    </div>
  );
};
