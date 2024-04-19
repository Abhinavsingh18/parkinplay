import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css'
import Dash from './Dash';
// import Footer from './Footer';




function AppBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 5000, // Autoplay speed in milliseconds
  };

  return (
    <main id="main" className="full-wrap">
      <div className="row m-0 market-page" id="oo">
        <div className="col-center col s12">
          <div id="mainContent">
            <div className="app-banner">
              <Slider className="slick-carousel" {...settings}>
                <div className="slider-banner">
                  <a href="javascript:void(0);">
                    <img alt="" src="https://cdn.cloudd.live/content/Banner/Casino_Banner.webp?v=51" />
                  </a>
                </div>
                <div className="slider-banner">
                  <a href="javascript:void(0);">
                    <img alt="" src="https://cdn.cloudd.live/content/Banner/New_launched_Game22.webp?v=60" />
                  </a>
                </div>
                <div className="slider-banner">
                  <a href="javascript:void(0);">
                    <img alt="" src="https://cdn.cloudd.live/content/Banner/New_launched_Game11.webp?v=51" />
                  </a>
                </div>
                <div className="slider-banner">
                  <a href="javascript:void(0);">
                    <img alt="" src="https://cdn.cloudd.live/content/Banner/Tennis_Banner.webp?v=51" />
                  </a>
                </div>
                <div className="slider-banner">
                  <a href="javascript:void(0);">
                    <img alt="" src="https://cdn.cloudd.live/content/Banner/V_cricket.webp?v=52" />
                  </a>
                </div>
                <div className="slider-banner">
                  <a href="javascript:void(0);">
                    <img alt="" src="https://cdn.cloudd.live/content/Banner/Casino1.webp?v=51" />
                  </a>
                </div>
                {/* Add more slider-banner items as needed */}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <Dash/>
      {/* <Footer/> */}
    </main>
  );
}

export default AppBanner;
