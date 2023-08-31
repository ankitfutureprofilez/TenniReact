import { Link } from "react-router-dom";

function Header() {
  return (
    <section id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container-fluid">
                <Link to="" className="logo">
                  <img
                    src="https://stag.tenniskhelo.com/assets/img/landing/logo.svg"
                    alt="img"
                  />
                  <button
                    class="navbar-toggler burgermenu"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </Link>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto madmer-menu">
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to=""
                      >
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
                        Tournament{" "}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        Academy{" "}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        Player &amp; Ranking{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="">
                        Contact Us{" "}
                      </Link>
                    </li>
                  </ul>
                  <div className="btn">
                    <button
                      className="btn btn-success my-2 my-sm-0" >
                     Join Us
                    </button>
                  </div>
                  <div className="btn">
                    <button
                      className="btn btn-primary my-2 my-sm-0"
                    >
                    Login
                    </button>
                  </div>
                  <div className="btn">
                    <button
                      className="btn btn-danger "
                    >
                    <i class="bi bi-power"></i>
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
