import { Link } from "react-router-dom";

function Functionality() {
  return ( 
    <section className="app-functionality-sec">
		<div className="container">
			<div className="app-functi-text">
				<h2>App’s Functionality </h2>
				<p>Unleash the Tennis Superstar Within You with the Tennis Khelo App's Exciting Features</p>
			</div>
			<div className="functi-tabs">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">My league </button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">State League</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">List your academy</button>
					</li>
					<li className="nav-item" role="presentation">
						<button className="nav-link" id="book-court-tab" data-bs-toggle="tab" data-bs-target="#book-court" type="button" role="tab" aria-controls="book-court" aria-selected="false">Book a court</button>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
						<div className="my-league-img">
							<img src="https://stag.tenniskhelo.com/assets/img/landing/my-league-1.png" alt=""/>
              				</div>
						<div className="my-league-text">
							<h3>My league</h3>
							<p>Create Thrilling Leagues: Organize and participate in exciting tennis leagues, compete against players of all levels, and experience the thrill of competitive tennis.</p>
							<div className="app-future">
								<Link className="view-app" to="https://stag.tenniskhelo.com/coming">Learn More</Link>
							</div>

						</div>
					</div>
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						<div className="my-league-img">
							<img src="https://stag.tenniskhelo.com/assets/img/landing/my-league-2.png" alt=""/>
						</div>
						<div className="my-league-text">
							<h3>State League</h3>
							<p>Connect with Players of right skillsets of your age group: : Find and connect with fellow tennis enthusiasts to arrange matches and tournaments.</p>
							<div className="app-future">
								<Link className="view-app" to="https://stag.tenniskhelo.com/coming">Learn More</Link>
							</div>

						</div>
					</div>
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						<div className="my-league-img">
							<img src="https://stag.tenniskhelo.com/assets/img/landing/my-league-3.png" alt=""/>
						</div>
						<div className="my-league-text">
							<h3>List your academy </h3>
							<p>Expand your academy's reach and impact! List your tennis academy on the tennis khelo app to connect with passionate players, gain exposure, and foster skill development in a thriving tennis community.</p>
							<div className="app-future">
								<Link className="view-app" to="https://stag.tenniskhelo.com/coming">Learn More</Link>
							</div>

						</div>
					</div>
					<div className="tab-pane fade" id="book-court" role="tabpanel" aria-labelledby="book-court">
						<div className="my-league-img">
							<img src="https://stag.tenniskhelo.com/assets/img/landing/my-league-4.png" alt=""/>
						</div>
						<div className="my-league-text">
							<h3>Book a court</h3>
							<p>Easily set the selection time, venue, and location of your matches, ensuring a smooth and convenient playing experience for all participants.</p>
							<div className="app-future">
								<Link className="view-app" to="https://stag.tenniskhelo.com/coming">Learn More</Link>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div className="download-khelo-app">
				<h2>Download tennis khelo App</h2>
				<p>Get the tennis khelo app now and experience the game! Install our app today, available on both iOS and Android platforms.</p>
				<div className="download-app-btn">
					<Link to="https://stag.tenniskhelo.com/coming"><img src="https://stag.tenniskhelo.com/assets/img/landing/google-store.png" alt="img"/></Link>
					<Link to="https://stag.tenniskhelo.com/coming"><img src="https://stag.tenniskhelo.com/assets/img/landing/apple.png" alt="img"/></Link>
				</div>
			</div>
		</div>
	</section>
   );
}

export default Functionality.js;