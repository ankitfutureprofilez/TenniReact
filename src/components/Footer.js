import { Link } from "react-router-dom";

function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row all-footer-tag">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-4">
                <ul>
                  <li>
                    <h3>Corporate </h3>
                    <ul>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">About </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">Career</a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Structure
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Senior Leadership team
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Board of director{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <h3>Media </h3>
                    <ul>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          RSS Feed{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Newsletters
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Rankings And Info Reports
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Media Guide
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Challenger Media Guide{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          News Releases{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Daily Media Notes{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul>
                  <li>
                    <h3>Partnerships</h3>
                    <ul>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Partnership Opportunities
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Official JDTA Tennis Club
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          JDTA Partner
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div class="col-md-6">
                <ul>
                  <li>
                    <h3>Related Links </h3>
                    <ul>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          JDTA Media{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">GPTCA</a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Women's Tennis Association
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Intl. Tennis Federation
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Intl. Tennis Hall Of Fame
                        </a>
                      </li>
                      <li>
                        <a href="https://stag.tenniskhelo.com/coming">
                          Intl. Tennis Integrity Agency
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul>
                  <li>
                    <h3>Contact Info </h3>
                    <ul>
                      <li>
                        <Link to="https://stag.tenniskhelo.com/coming">
                          <img
                            src="https://stag.tenniskhelo.com/assets/img/landing/call-icon.svg"
                            alt="icon"
                          />{" "}
                          +91 9983333334{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="https://stag.tenniskhelo.com/coming">
                          <img
                            src="https://stag.tenniskhelo.com/assets/img/landing/mail-icon.svg"
                            alt="icon"
                          />{" "}
                          info@futureprofilez.com
                        </Link>
                      </li>
                      <li>
											<h3 className="our-socials-text mt-3">Our Socials</h3>
											<ul className="socials-link">
												<li><Link to="https://stag.tenniskhelo.com/coming"> <img src="https://stag.tenniskhelo.com/assets/img/landing/fb-1.svg" alt="icon"/></Link></li>
												<li><Link to="https://stag.tenniskhelo.com/coming"> <img src="https://stag.tenniskhelo.com/assets/img/landing/fb-2.svg" alt="icon"/></Link></li>
												<li><Link to="https://stag.tenniskhelo.com/coming"> <img src="https://stag.tenniskhelo.com/assets/img/landing/fb-3.svg" alt="icon"/></Link></li>
											</ul>
										</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="down-footer">
				<p>© Copyright - 2022 All Rights Reserved</p>
				<p className="link"><Link to="https://stag.tenniskhelo.com/coming">Terms &amp; conditions </Link> : <Link to="https://stag.tenniskhelo.com/coming">Privacy Policy </Link></p>
			</div>
      </div>
    </section>
  );
}

export default Footer;
