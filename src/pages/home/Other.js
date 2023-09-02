import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Other() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return ( 
    <section className="other-apps-sec">
		<div className="container">
    <Slider {...settings}>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="https://stag.tenniskhelo.com/assets/img/landing/A.png" alt="img"/>
    </div>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="https://stag.tenniskhelo.com/assets/img/landing/A.png" alt="img"/>
    </div>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="https://stag.tenniskhelo.com/assets/img/landing/A.png" alt="img"/>
    </div>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="https://stag.tenniskhelo.com/assets/img/landing/A.png" alt="img"/>
    </div>
    <div>
      <div style={{ width: '100%', display: 'inline-block' }} ></div>
      <img src="https://stag.tenniskhelo.com/assets/img/landing/A.png" alt="img"/>
    </div>
    </Slider>
      </div>
      
	</section>
   );
}

export default Other;