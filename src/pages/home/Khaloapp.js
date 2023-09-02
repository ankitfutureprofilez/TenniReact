import { Link } from "react-router-dom";

function Khaloapp() {
  return ( 
    <section className="tennis-khelo-app-sec">
      <div className="container">
        <div className="pro-heading">
          <h2>Tennis khelo app meant for </h2>
        </div>
        <div className="row">
				<div className="col-md-4">
					<div className="pro-player">
						<img src="https://stag.tenniskhelo.com/assets/img/landing/pro-1.png" alt="Avatar" className="image"/>
						<div className="overlay">
							<div className="text">Pro Player </div>
						</div>
						<div className="overlay-1">
							<div className="text">
								<p>
									Elevate your tennis career with our app made exclusively for elite athletes. Unleash your potential with advanced training techniques, performance analytics, and a vibrant community of like-minded pros.
								</p>
								<div className="read-whole">
									<Link to="https://stag.tenniskhelo.com/coming">Learn More </Link>
								</div>
							</div>
						</div>
						<div className="overlay-3"></div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="pro-player">
						<img src="https://stag.tenniskhelo.com/assets/img/landing/pro-2.png" alt="Avatar" className="image"/>
						<div className="overlay">
							<div className="text">Beginner Player </div>
						</div>
						<div className="overlay-1">
							<div className="text">
								<p>
									Whether you're a casual player or a die-hard tennis enthusiast, our app enhances your game. Discover courts nearby, schedule matches, track your progress, and connect with players of all levels. Get ready to fuel your passion for the game like never before!
								</p>
								<div className="read-whole">
									<Link to="https://stag.tenniskhelo.com/coming">Learn More</Link>
								</div>
							</div>
						</div>
						<div className="overlay-3"></div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="pro-player">
						<img src="https://stag.tenniskhelo.com/assets/img/landing/pro-3.png" alt="Avatar" className="image"/>
						<div className="overlay">
							<div className="text">Academy Owner </div>
						</div>
						<div className="overlay-1">
							<div className="text">
								<p>
									Attention coaches and tennis academies! Streamline your training programs with our comprehensive app. From registrations and scheduling to progress tracking and performance analysis, take your academy's efficiency and effectiveness to new heights.
								</p>
								<div className="read-whole">
									<Link to="https://stag.tenniskhelo.com/coming">Learn More </Link>
								</div>
							</div>
						</div>
						<div className="overlay-3"></div>
					</div>
				</div>
			</div>
      </div>
    </section>
   );
}

export default Khaloapp;