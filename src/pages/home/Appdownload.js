import { Link } from "react-router-dom";

function Appdownload() {
  return ( 
<section className="unlock-tennis-sec">
		<div className="ios-app-box">
			<div className="container ">
				<div className="row">
					<div className="col-md-6"></div>
					<div className="col-md-6">
						<h2>Download our app</h2>
						<p>Download now to unlock your tennis potential and reach new heights</p>
						<div className="download-app-btn">
							<Link to="https://stag.tenniskhelo.com/coming"><img src="https://stag.tenniskhelo.com/assets/img/landing/google-store.png" alt="img"/></Link>
							<Link to="https://stag.tenniskhelo.com/coming"><img src="https://stag.tenniskhelo.com/assets/img/landing/apple.png" alt="img"/></Link>
						</div>
					</div>
				</div>
				<div className="madmer-phone-img">
					<img src="https://stag.tenniskhelo.com/assets/img/landing/dow-our-app.png" alt="img"/>
				</div>
			</div>
		</div>
	</section>
    );
}

export default Appdownload;