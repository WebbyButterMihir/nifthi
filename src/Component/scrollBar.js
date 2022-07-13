import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Scrollbar.css";

import ArtistItems from "./scrollJson";

const ScrollBar = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slidercss">
      <div className="container">
        <div className="row">
          <Slider {...settings}>
            {ArtistItems.map((item) => (
              <div className="col-4">
                <img src={item.image} alt="slider"></img>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ScrollBar;
