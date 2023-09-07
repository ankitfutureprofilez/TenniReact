import { Link } from "react-router-dom";

function KheloAppMeant() {
  return (
    //Tennsi Kahlo App
    <section className="tennis-khelo-app-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>About Tennis Khelo</h2>
            <p>
              Our mobile app brings an unparalleled tennis experience with it's
              unique features. Connect with local tennis academies, discover
              match opportunities, and schedule games with fellow players.
              Finding nearby training facilities has never been easier with our
              comprehensive listing of tennis academies. But that's not all!
              We've got something special for the competitive spirits out there.
              Our leaderboard lets you track your progress and see how you
              measure up against others in your local tennis community. It's all
              about enhancing the social and competitive aspects of the sport,
              bringing players together for an unforgettable tennis journey. Get
              ready to hit the courts, connect with like-minded tennis
              enthusiasts, and make your mark with the tennis khelo app!
            </p>
						<div className="ready"> <p> 	Ready to play?</p></div>
          </div>
					<div className="col-md-6">
						<div>
							<img src="\image\Group.png"  alt ="Tennsi Kahlo App"/>
						</div>
					</div>
        </div>
      </div>
    </section>
  );
}

export default KheloAppMeant;
