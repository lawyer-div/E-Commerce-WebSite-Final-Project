import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg from "../../../Assets/Inspirations/Rectangle 24.png";
import CTA from "../../../Assets/Inspirations/CTA.png";
import Content from '../../../Assets/Inspirations/Content.png';
import image1 from "../../../Assets/Inspirations/Rectangle 25.png";
import image2 from "../../../Assets/Inspirations/Rectangle 26.jpeg";
import image3 from "../../../Assets/Inspirations/Rectangle 27.jpeg";
import image4 from "../../../Assets/Inspirations/Rectangle 26.jpeg";

import "./Inspirations.css";

export default function Inspirations() {
  return (
    <div style={{ paddingTop: "3%" }}>
      <div className="container-Head">
        <div className="text-container">
          <div className="text-inner">
            <div className="rooms">
              <div>
                <p className="main-text">
                  50+ Beautiful rooms <br /> inspiration
                </p>
                <p className="sub-text">
                  Our designer already made a lot of beautiful <br /> prototypes
                  of rooms that inspire you
                </p>
              </div>
            </div>
            <div className="button-sizing">
              <button className="button-style">Explore More</button>
            </div>
          </div>
        </div>

        <div className="image-carousel-container">
          <div className="large-image-container">
            <img src={bannerImg} alt="Large Banner" className="large-image" />

            <div className="image-description">
              <img src={CTA} alt="CTA" className="CTA" />
              <img src={Content} alt="Content" className="Content" />
            </div>
          </div>

          <div className="carousel-container">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              interval={2000}
              showThumbs={false}
              showIndicators={true}
              showStatus={false}
            >
              <div>
                <img src={image1} alt="Room 1" />
              </div>
              <div>
                <img src={image2} alt="Room 2" />
              </div>
              <div>
                <img src={image3} alt="Room 3" />
              </div>
              <div>
                <img src={image4} alt="Room 4" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
