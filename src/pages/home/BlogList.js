import { Link } from "react-router-dom";

function BlogList() {
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

          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="coming-citi">
                <img
                  className="card-img-top"
                  src="\image\read.png"
                  alt="img"
                />
                <div className="coming-text">
                  <h4>#Tournament </h4>
                  <h3>
                    Coming Citi Open Tennis Tournament 2023 - Jaipur
                  </h3>
                  <p>
                    Tennis khelo organized a tournament with Vivekanand academy
                    with under 14 kids who played in the tournament....
                  </p>
                  <div className="read-whole">
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

export default BlogList;


