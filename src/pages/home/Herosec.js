import { Link } from "react-router-dom";

function Herosec() {
  return (
    <section className="tennis-hero-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="ultime-box">
              <h5>
                Tenssi Khelo
              </h5>
              <h1>
                THRIVE. CHALLNGE. GROW.
              </h1>
              <p>
                download tenssi khelo app : lgnite  your growth as a player,
                reaching a wider audience for your academy  unleash your
                tennsi jounery today !
              </p>
              <div className="download-app-btn">
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
          <div className="col-md-6">
            <div className="hero-right-box">
              <img
                src="image\phone.png"
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