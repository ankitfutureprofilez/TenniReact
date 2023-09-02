import { Link } from "react-router-dom";

function Latestcart() {
  return (
    <>
      <section className="latest-blog-sec">
        <div className="container">
          <div className="latest-blog-view">
            <div>
              <h2>LATEST BLOG</h2>
              <p>
                Explore fun and Exciting events at our tournaments and academies{" "}
              </p>
            </div>
            <Link to="https://stag.tenniskhelo.com/coming">View All</Link>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://stag.tenniskhelo.com/assets/img/landing/read-1.jpg"
                  alt="img"
                />
                <div className="card-body">
                  <h4 className="card-title">#Tournament </h4>
                  <h3 className="card-text">
                    Coming Citi Open Tennis Tournament 2023 - Jaipur
                  </h3>
                  <p className="card-text">
                    Tennis khelo organized a tournament with Vivekanand academy
                    with under 14 kids who played in the tournament....
                  </p>
                  <div class="read-whole">
                    <Link to="https://stag.tenniskhelo.com/coming">
                      Read whole story{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Latestcart;


