import { Link } from "react-router-dom";

function Herosec() {
  return ( 
    <section className = "tennis-hero-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="ultime-box">
              <h1>
                Ace Your Tennis Connections: Unleash Your Game with Tennis
                Khelo!
              </h1>
              <p>
                Game On, Match Up: Join the Ultimate Tennis Community, Create
                Thrilling Matches, and Dominate the Court with Our Revolutionary
                App!
              </p>
              <div class="download-app-btn">
                <Link to="https://stag.tenniskhelo.com/coming">
                  <img
                    src="https://stag.tenniskhelo.com/assets/img/landing/google-store.png"
                    alt="img"
                  />
                </Link>
                <Link to="https://stag.tenniskhelo.com/coming">
                  <img
                    src="https://stag.tenniskhelo.com/assets/img/landing/apple.png"
                    alt="img"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="hero-right-box">
              <img
                src="https://stag.tenniskhelo.com/assets/img/landing/hero-phone.svg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}

export default Herosec;