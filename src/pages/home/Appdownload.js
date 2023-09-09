import { Link } from "react-router-dom";

function Appdownload() {
  return (
    //unlock-tennis-sec
    <>
    <section className="unlock-tennis-sec">
      <div className="ios-app-box">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div>
                <img src="/image/Download-App.png" alt="" />
              </div>
              <div className="download">
                <h2>Download tennis khelo App</h2>
                <p>
                  Get the tennis khelo app now and experience the game! Install
                  our app today, available on both iOS and Android platforms.
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
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Appdownload;
