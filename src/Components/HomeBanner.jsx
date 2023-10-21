import './HomeBnner.css';

const Slideshow = () => {

  return (
    <div className="slideshow slideshow-wrapper pb-section sliderFull">
      <div className="home-slideshow">
        <div className="slide slide1 d-block">
          <div className="slideimg blur-up lazyload bg-size">
            <div className="slideshow__text-wrap slideshow__overlay classic bottom home_banner1">
              <div className="slideshow__text-content mt-0 text-shadow center">
                <div className="col-md-6">
                  <div style={{paddingTop:'200px'}}>
                    <p style={{fontSize:'22px'}}>Welcome to</p>
                    <h1 style={{fontWeight:'bold'}}>Diva New Fashion style</h1>
                    <p style={{fontSize:'22px'}}>Made with love and passion</p><br/>
                    <button><a href="/" className="btn btn--large">
                      Shop now
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="slide slide2 d-block">
          <div className="slideimg blur-up lazyload bg-size">
            <div className="slideshow__text-wrap slideshow__overlay classic bottom home_banner2">
              <div className="slideshow__text-content mt-0 center">
                <div className="col-md-6">
                  <div className="wrap-caption right" style={{paddingTop:'200px'}}>
                    <h1>Happy Customers</h1>
                    <p>Save up to 50% off this weekend only</p><br/>
                    <button><a href="/" className="btn btn--large">
                      Shop now
                    </a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="slide slide3 d-block">
          <div className="slideimg blur-up lazyload bg-size">
            <div className="slideshow__text-wrap slideshow__overlay classic bottom home_banner1">
              <div className="slideshow__text-content mt-0 text-shadow center">
                <div className="col-md-6">
                  <div className="wrap-caption left" style={{paddingTop:'200px'}}>
                    <h1>Unique Styles</h1>
                    <p>
                      We design and developed theme that are amazingly Unique
                    </p><br/>
                    <button><a className="btn btn--large">Buy now</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Slideshow;