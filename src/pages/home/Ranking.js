import { Link } from "react-router-dom";

function Ranking() {
  return ( 
    <section clasName="player-ranking">
		<div clasName="container">
			<div clasName="row align-items-center">
				<div clasName="col-md-6">
					<div clasName="ranking-box">
						<h2>Player &amp; Ranking </h2>
						<p>Ready to make your mark? Our app's leaderboard is where it's at! Track your progress, challenge friends, and aim for the top spot. It's all about fun, friendly competition. Let's see who rules the court!</p>
						<h3>Get a chance to feature in our leaderboard, join us Today!</h3>
						<div clasName="app-future">
							<Link clasName="down-app" to="https://stag.tenniskhelo.com/coming">Download our app</Link>
						</div>
					</div>
				</div>
				<div clasName="col-md-6">
					<div clasName="top-player-box">
						<div clasName="player-head">
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
							<li clasName="fst-winner">
								<img src="https://stag.tenniskhelo.com/assets/img/landing/1st.png" clasName="rank-img" alt="img"/>

								<div clasName="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div clasName="profile-title">
									<h4>Noah Rubin</h4>
									<p>Prabhas Academy </p>
								</div>
								<div clasName="profile-rank">
									<p>Win % </p>
									<h4>62.5%</h4>
								</div>
							</li>
							<li>
								<img src="https://stag.tenniskhelo.com/assets/img/landing/2nd.png" clasName="rank-img" alt="img"/>

								<div clasName="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div clasName="profile-title">
									<h4>João Sousa</h4>
									<p>Prabhas Academy, Jaipur </p>
								</div>
								<div clasName="profile-rank">
									<p>Win % </p>
									<h4>60.5%</h4>
								</div>
							</li>
							<li>
								<img src="https://stag.tenniskhelo.com/assets/img/landing/3rd.png" clasName="rank-img" alt="img"/>

								<div clasName="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div clasName="profile-title">
									<h4>Sania Rubin</h4>
									<p>Prabhas Academy, Jaipur </p>
								</div>
								<div clasName="profile-rank">
									<p>Win % </p>
									<h4>58.5%</h4>
								</div>
							</li>
							<li>
								<img src="https://stag.tenniskhelo.com/assets/img/landing/4th.png" clasName="rank-img" alt="img"/>

								<div clasName="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div clasName="profile-title">
									<h4>Sharddha Bhatt</h4>
									<p>Prabhas Academy, Jaipur </p>
								</div>
								<div clasName="profile-rank">
									<p>Win % </p>
									<h4>52.5%</h4>
								</div>
							</li>
							<li>
								<img src="https://stag.tenniskhelo.com/assets/img/landing/5th.png" clasName="rank-img" alt="img"/>

								<div clasName="profile">
									<img src="https://stag.tenniskhelo.com/assets/img/landing/top-profile.png" alt="img"/>
								</div>
								<div clasName="profile-title">
									<h4>Vihan Sharma</h4>
									<p>Prabhas Academy, Jaipur </p>
								</div>
								<div clasName="profile-rank">
									<p>Win % </p>
									<h4>50.5%</h4>
								</div>
							</li>
						</ul>
						<div clasName="view-all-box">
							<Link to="https://stag.tenniskhelo.com/coming">View All</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
   );
}

export default Ranking;