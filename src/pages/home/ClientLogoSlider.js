import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ClientLogoSlider() {
  const settings = {
    dots: false,
    navigation: false,
    infinite: true,
    nav:false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
		autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  };
  

  return ( 
    <section className="other-apps-sec">
		<div className="container">
    <Slider {...settings}>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="\image\A.png" alt="img"/>
    </div>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="\image\A.png" alt="img"/>
    </div>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="\image\A.png" alt="img"/>
    </div>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="\image\A.png" alt="img"/>
    </div>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="\image\A.png" alt="img"/>
    </div>
    </Slider>
      </div>
	</section>
   );
}

export default ClientLogoSlider;