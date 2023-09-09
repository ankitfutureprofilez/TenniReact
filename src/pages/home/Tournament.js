import { Link } from "react-router-dom";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Tournament() {
  return (
    <section className="tournament-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <div className="nearbybox">
                <h2>Play and Compete in Thrilling Tournaments Nearby </h2>
                <p>
                  Compete against the best players and see your name soar
                  through the ranks. Track your progress, surpass records, and
                  establish yourself as a tennis champion. Are you ready to
                  dominate the leaderboard?
                </p>
                <div className="app-future">
                  <Link
                    className="down-app"
                    to="https://stag.tenniskhelo.com/coming"
                  >
                    Nearby Tournaments
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Tournament;
