import { Link } from "react-router-dom";

function PlayerRanking() {
  return ( 
    <section className="player-ranking">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-6">
					<div className="ranking-box">
						<h2>Player &amp; Ranking </h2>
						<p>Ready to make your mark? Our app's leaderboard is where it's at! Track your progress, challenge friends, and aim for the top spot. It's all about fun, friendly competition. Let's see who rules the court!</p>
						<h3>Get a chance to feature in our leaderboard, join us Today!</h3>
						<div className="app-future">
							<Link className="down-app" to="https://stag.tenniskhelo.com/coming">Download our app</Link>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="top-player-box">
						<div className="player-head">
							<h3>State League Top Player</h3>
							<form>
								<select name="cars" id="cars">
									<option value="volvo">Rajasthan</option>
									<option value="saab">Saab</option>
									<option value="opel">Opel</option>
									<option value="audi">Audi</option>
								</select>
							</form>
						</div>
						<ul>
							<li className="fst-winner">
								<img src="https://stag.tenniskhelo.com/assets/img/landing/1st.png" className="rank-img" alt="img"/>

								<div className="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div className="profile-title">
									<h4>Noah Rubin</h4>
									<p>Prabhas Academy </p>
								</div>
								<div className="profile-rank">
									<p>Win % </p>
									<h4>62.5%</h4>
								</div>
							</li>
							<li>
								<img src="https://stag.tenniskhelo.com/assets/img/landing/2nd.png" className="rank-img" alt="img"/>

								<div className="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div className="profile-title">
									<h4>João Sousa</h4>
									<p>Prabhas Academy, Jaipur </p>
								</div>
								<div className="profile-rank">
									<p>Win % </p>
									<h4>60.5%</h4>
								</div>
							</li>
							<li>
								<img src="https://stag.tenniskhelo.com/assets/img/landing/3rd.png" className="rank-img" alt="img"/>

								<div className="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div className="profile-title">
									<h4>Sania Rubin</h4>
									<p>Prabhas Academy, Jaipur </p>
								</div>
								<div className="profile-rank">
									<p>Win % </p>
									<h4>58.5%</h4>
								</div>
							</li>
							<li>
								<img src="https://stag.tenniskhelo.com/assets/img/landing/4th.png" className="rank-img" alt="img"/>

								<div className="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div className="profile-title">
									<h4>Sharddha Bhatt</h4>
									<p>Prabhas Academy, Jaipur </p>
								</div>
								<div className="profile-rank">
									<p>Win % </p>
									<h4>52.5%</h4>
								</div>
							</li>
							<li>
								<img src="https://stag.tenniskhelo.com/assets/img/landing/5th.png" className="rank-img" alt="img"/>

								<div className="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div className="profile-title">
									<h4>Vihan Sharma</h4>
									<p>Prabhas Academy, Jaipur </p>
								</div>
								<div className="profile-rank">
									<p>Win % </p>
									<h4>50.5%</h4>
								</div>
							</li>
						</ul>
						<div className="view-all-box">
							<Link to="https://stag.tenniskhelo.com/coming">View All</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
   );
}

export default PlayerRanking;