import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Tournament() {
	const settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			centerPadding: "30px",
		  },
		},
		{
		  breakpoint: 768,
		  settings: {
			centerPadding: "20px",
		  },
		},
		{
		  breakpoint: 480,
		  settings: {
			centerPadding: "5px",
		  },
		},
	  ],
  };
  return (
    <section className="tournament-sec">
      <div className="container">
        <div className="tournament-heading">
          <h2>Latest Tournament </h2>
          <Link to="https://stag.tenniskhelo.com/coming">View All Tournaments</Link>
        </div>
        <div className="tournament-box">
        <Slider  {...settings}>
          <div>

					<div className="latest-play">
						<div className="latest-text">
							<h5><span>June 5 - June 10 </span>: Tennis Khelo Academy</h5>
							<h3>Tennis Khelo Tournament </h3>
							<p>Be Part of Latest tournament organized by Tennis Khelo Academy
								On wed June 5</p>
							<h4>Prize : <span> $500</span></h4>
							<div className="join-academy">
								<Link to="https://stag.tenniskhelo.com/coming" className="join-khelo" tabindex="-1">join Academy</Link>
								<Link to="https://stag.tenniskhelo.com/coming" className="view-khelo" tabindex="-1">View Details</Link>
							</div>
						</div>
						<div className="latest-img">
							<img className="pc-tennis" src="https://stag.tenniskhelo.com/assets/img/landing/tournament.png" alt="img"/>
							<img className="mobile-tennis" src="https://stag.tenniskhelo.com/assets/img/landing/tournament.jpg" alt="img"/>
						</div>
					</div>
				</div>
				<div>
					<div className="latest-play">
						<div className="latest-text">
							<h5><span>June 5 - June 10 </span>: Tennis Khelo Academy</h5>
							<h3>Tennis Khelo Tournament </h3>
							<p>Be Part of Latest tournament organized by Tennis Khelo Academy
								On wed June 5</p>
							<h4>Prize : <span> $500</span></h4>
							<div className="join-academy">
								<Link to="https://stag.tenniskhelo.com/coming" className="join-khelo" tabindex="-1">join Academy</Link>
								<Link to="https://stag.tenniskhelo.com/coming" className="view-khelo" tabindex="-1">View Details</Link>
							</div>
						</div>
						<div className="latest-img">
							<img className="pc-tennis" src="https://stag.tenniskhelo.com/assets/img/landing/tournament.png" alt="img"/>
							<img className="mobile-tennis" src="https://stag.tenniskhelo.com/assets/img/landing/tournament.jpg" alt="img"/>
						</div>
					</div>
				</div>
				<div>
					<div className="latest-play">
						<div className="latest-text">
							<h5><span>June 5 - June 10 </span>: Tennis Khelo Academy</h5>
							<h3>Tennis Khelo Tournament </h3>
							<p>Be Part of Latest tournament organized by Tennis Khelo Academy
								On wed June 5</p>
							<h4>Prize : <span> $500</span></h4>
							<div className="join-academy">
								<Link to="https://stag.tenniskhelo.com/coming" className="join-khelo" tabindex="-1">join Academy</Link>
								<Link to="https://stag.tenniskhelo.com/coming" className="view-khelo" tabindex="-1">View Details</Link>
							</div>
						</div>
						<div className="latest-img">
							<img className="pc-tennis" src="https://stag.tenniskhelo.com/assets/img/landing/tournament.png" alt="img"/>
							<img className="mobile-tennis" src="https://stag.tenniskhelo.com/assets/img/landing/tournament.jpg" alt="img"/>
						</div>
					</div>
				</div>
        </Slider>
        </div>
      </div>
    </section>
  );
}
export default Tournament;
