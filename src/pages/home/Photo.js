import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Photo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <section className="photo-gallery-sec">
      <div className="container">
        <h2>Photo Gallery</h2>
        <p>Explore fun and Exciting events at our tournaments and academies </p>
      </div>

      <Slider {...settings}>
        <div>
          <div
            class="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-1.jpg"
              alt="img"
            />
          </div>
        </div>
        <div>
          <div
            class="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-2.jpg"
              alt="img"
            />
          </div>
        </div>
        <div>
          <div
            class="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-3.jpg"
              alt="img"
            />
          </div>
        </div>
        <div>
          <div
            class="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-4.jpg"
              alt="img"
            />
          </div>
        </div>
        <div>
          <div
            class="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-5.jpg"
              alt="img"
            />
          </div>
        </div>
        <div>
          <div
            class="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-6.jpg"
              alt="img"
            />
          </div>
        </div>
        <div>
          <div
            class="play-photo"
            style={{ width: "100%", display: "inline-block" }}
          >
            <img
              src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-1.jpg"
              alt="img"
            />
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Photo;
