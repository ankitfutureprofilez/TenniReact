function About() {
  return (  
    <section className="about-tennis-sec">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-7">
					<div className="about-tennis-tex">
						<h2>About Tennis Khelo</h2>
						<p>Our mobile app brings real-life tennis experiences to your fingertips. Connect with local tennis academies, discover match opportunities, and schedule games with fellow players. Finding nearby training facilities has never been easier with our comprehensive listing of tennis academies.
							But that's not all! We've got something special for the competitive spirits out there. Our leaderboard lets you track your progress and see how you measure up against others in your local tennis community. It's all about enhancing the social and competitive aspects of the sport, bringing players together for an unforgettable tennis journey.
							Get ready to hit the courts, connect with like-minded tennis enthusiasts, and make your mark with the tennis khelo app!</p>
						<div className="app-future">
							<Link className="view-app" to="https://stag.tenniskhelo.com/coming">Ready to play?</Link>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-5">
					<div className="about-tennis-img">
						<img src="https://stag.tenniskhelo.com/assets/img/landing/about-tennis.png" alt="img"/>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
}

export default About;