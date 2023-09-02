import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-start align-items-lg-center w-100">
                  <Link to="" className="logo">
                    <img
                      src="https://stag.tenniskhelo.com/assets/img/landing/logo.svg"
                      alt="img"
                    />
                  </Link>
                  <button
                    className="navbar-toggler burgermenu"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    {/* ... Navigation Links ... */}
                    <ul className="navbar-nav ms-auto madmer-menu">
                      <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link " to="">
                          League
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link " to="">
                          Tournament
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Academy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Player &amp; Ranking
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-success my-2 my-sm-0 mx-2">
                      Join Us
                    </button>
                    <button className="btn btn-primary my-2 my-sm-0 mx-2">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

<button className="btn btn-danger mx-2">
  <i className="bi bi-power align-middle"></i>
</button>;
