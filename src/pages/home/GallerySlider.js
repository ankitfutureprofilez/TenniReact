// import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GallerySlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    //Photo-gallery-section
      <>
    <section className="photo-gallery-sec">
      <div className="container">
        <h2>Photo Gallery</h2>
        <p>Explore fun and Exciting events at our tournaments and academies </p>
      </div>

      <Slider {...settings}>
        <div>
          <div
            className="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img src="\image\photo-gallery-1.jpg" alt="img" />
          </div>
        </div>
        <div>
          <div
            className="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img src="\image\photo-gallery-2.jpg" alt="img" />
          </div>
        </div>
        <div>
          <div
            className="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img src="\image\photo-gallery-3.jpg" alt="img" />
          </div>
        </div>
        <div>
          <div
            className="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img src="\image\photo-gallery-4.jpg" alt="img" />
          </div>
        </div>
        <div>
          <div
            className="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img src="\image\photo-gallery-5.jpg" alt="img" />
          </div>
        </div>
        <div>
          <div
            className="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img src="\image\photo-gallery-6.jpg" alt="img" />
          </div>
        </div>
        <div>
          <div
            className="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img src="\image\photo-gallery-4.jpg" alt="img" />
          </div>
        </div>
      </Slider>
    </section>
    </>
  );
}

export default GallerySlider;
