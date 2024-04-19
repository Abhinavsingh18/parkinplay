// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Style.css'; // Make sure to adjust the path if necessary



// class Dash extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentTab: 0,
//       markets: [
//         { id: '4', name: 'Cricket', icon: 'cricket', liveCount: { strong: '5', normal: '9' } },
//         { id: '2', name: 'Tennis', icon: 'tennis', liveCount: { strong: '18', normal: '9' } },
//         { id: '1', name: 'Soccer', icon: 'soccer', liveCount: { strong: '46', normal: '1' } },
//         { id: '2378961', name: 'Politics', icon: 'politics', liveCount: { strong: '1', normal: '0' } },
//         { id: '', name: 'Kabaddi', icon: 'kabaddi', liveCount: { strong: '1', normal: '1' } },
//         { id: '', name: 'SPACE', icon: 'space', liveCount: { strong: '0', normal: '0' } }
//       ]
//     };
//   }

//   render() {
//     return (
//       <main id="main" className="full-wrap" style={{paddingTop:0}}>
//         <div className="row m-0 market-page" id="oo">
//           <div className="col-center col s12">
//             <div id="mainContent">
//               <div className="col s12 p-0 main-tabs">
//                 <div className="slider slick-initialized slick-slider">
//                  {/* <button className="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style={{ display: "block" }}>Previous</button>*/}
//                   <div className="slick-list draggable">
//                     <div className="slick-track" style={{ opacity: 1, width: 25000, transform: "translate3d(0px, 0px, 0px)" }}>
//                       {this.state.markets.map((market, index) => (
//                         <div key={index} className="item_main slick-slide slick-current slick-active" tabIndex={0} data-slick-index={index} aria-hidden="false">
//                           <a href="javascript:void(0);" onClick={() => this.handleMarketClick(market.id)}>
//                             <div className="inner-content">
//                               <span className="tag-live">
//                                 <strong>{market.liveCount.strong}</strong> {market.liveCount.normal}
//                               </span>
//                               <div className="icon-holder-big">
//                                 <div className={`sports-icon ${market.icon}`} />
//                               </div>
//                               <div className="item_details">
//                                 <div className="title">{market.name}</div>
//                               </div>
//                             </div>
//                           </a>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//               {/*    <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{ display: "block" }} aria-disabled="false">Next</button>*/}
//                 </div>
//                 <div className="event-content">
//                   <ul className="collapsible expandable">
//                     <li className="active">
//                       <div className="collapsible-body" style={{ display: "block" }}>
//                         <div className="markets-container">
//                           <div className="market-title hide-on-small-and-down">
//                             <div className="row m-0">
//                               <div className="col s9 m8">
//                                 <div className="game-title"></div>
//                               </div>
//                               <div className="col s3 m4 p-0">
//                                 <div className="row m-0">
//                                   <div className="col s4 m4 p-0 pr-5 center">1</div>
//                                   <div className="col s4 m4 p-0 pr-5 center">X</div>
//                                   <div className="col s4 m4 p-0 pr-5 center">2</div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="market-list" id="refreshDiv">
//                             {/**/}
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   handleMarketClick = (marketId) => {
//     // Handle market click here
//     console.log("Market clicked:", marketId);
//   }
// }

// export default Dash;



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Style.css'; // Make sure to adjust the path if necessary

class Dash extends React.Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef(); // Create a ref for the Slider component
    this.state = {
      currentTab: 0,
      markets: [
        { id: '4', name: 'Cricket', icon: 'cricket', liveCount: { strong: '5', normal: '9' } },
        { id: '2', name: 'Tennis', icon: 'tennis', liveCount: { strong: '18', normal: '9' } },
        { id: '1', name: 'Soccer', icon: 'soccer', liveCount: { strong: '46', normal: '1' } },
        { id: '2378961', name: 'Politics', icon: 'politics', liveCount: { strong: '1', normal: '0' } },
        { id: '', name: 'Kabaddi', icon: 'kabaddi', liveCount: { strong: '1', normal: '1' } },
        { id: '', name: 'SPACE', icon: 'space', liveCount: { strong: '0', normal: '0' } },
      ]
    };
  }

  handleMarketClick = (marketId) => {
    // Handle market click here
    console.log("Market clicked:", marketId);
  }

  handlePreviousClick = () => {
    this.sliderRef.current.slickPrev(); // Call slickPrev method to slide to previous
  }

  handleNextClick = () => {
    this.sliderRef.current.slickNext(); // Call slickNext method to slide to next
  }

  render() {
    const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    return (
      <main id="main" className="full-wrap" style={{paddingTop:0}}>
        <div className="row m-0 market-page" id="oo">
          <div className="col-center col s12" style={{ paddingBottom: "0px", important: "true" }}>
            <div id="mainContent">
              <div className="col s12 p-0 main-tabs">
                <div className="slider slick-initialized slick-slider">
                  <button className="slick-prev slick-arrow slick-disabled" onClick={this.handlePreviousClick} aria-label="Previous" type="button" aria-disabled="true" style={{ display: "block" }}>Previous</button>
                  <Slider ref={this.sliderRef} {...sliderSettings}>
                    {this.state.markets.map((market, index) => (
                      <div key={index} className="item_main slick-slide slick-current slick-active" tabIndex={0} data-slick-index={index} aria-hidden="false">
                        <a href="javascript:void(0);" onClick={() => this.handleMarketClick(market.id)}>
                          <div className="inner-content">
                            <span className="tag-live">
                              <strong>{market.liveCount.strong}</strong> {market.liveCount.normal}
                            </span>
                            <div className="icon-holder-big">
                              <div className={`sports-icon ${market.icon}`} />
                            </div>
                            <div className="item_details">
                              <div className="title">{market.name}</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </Slider>
                  <button className="slick-next slick-arrow" onClick={this.handleNextClick} aria-label="Next" type="button" style={{ display: "block" }} aria-disabled="false">Next</button>
                </div>
                <div className="event-content">
                  <ul className="collapsible expandable">
                    <li className="active">
                      <div className="collapsible-body" style={{ display: "block" }}>
                        <div className="markets-container">
                          <div className="market-title hide-on-small-and-down">
                            <div className="row m-0">
                              <div className="col s9 m8">
                                <div className="game-title"></div>
                              </div>
                              <div className="col s3 m4 p-0">
                                <div className="row m-0">
                                  <div className="col s4 m4 p-0 pr-5 center">1</div>
                                  <div className="col s4 m4 p-0 pr-5 center">X</div>
                                  <div className="col s4 m4 p-0 pr-5 center">2</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="market-list" id="refreshDiv">
                           {/**/}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Dash;
