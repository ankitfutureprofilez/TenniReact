function Photo() {
  return (  
    <section className="photo-gallery-sec">
		<div className="container">
			<h2>Photo Gallery</h2>
			<p>Explore fun and Exciting events at our tournaments and academies </p>
		</div>

    <div className="exciting-photo slick-initialized slick-slider">
      <div className="slick-list draggable">
      <Slider >
        <div>
        <img src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-2.jpg" alt="img"/>
        </div>
        <div>
        <img src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-2.jpg" alt="img"/>
        </div>
        <div>
        <img src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-2.jpg" alt="img"/>
        </div>
        <div>
        <img src="https://stag.tenniskhelo.com/assets/img/landing/photo-gallery-2.jpg" alt="img"/>
        </div>
        <div>
          <img src ='https://stag.tenniskhelo.com/' alt ="img"/>
        </div>
       
      </Slider>
    </div>
    </div>

	</section>
  );
}

export default Photo;