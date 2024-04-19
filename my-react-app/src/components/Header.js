import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import asset2 from '../Assests/images/asset 2.png';
import './Style.css';
// import Sign from './Sign';

const Header = () => {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const toggleSidenav = () => {
        setIsSidenavOpen(!isSidenavOpen);
};
    return (
        <header _ngcontent-kub-c67="">
        <div _ngcontent-kub-c67="" className="navbar-fixed mb-0">
          <nav _ngcontent-kub-c67="" id="global-nav" className="news-height">
            <a
              _ngcontent-kub-c67=""
              data-target="mobile-nav"
              className="sidenav-trigger"
              onClick={toggleSidenav}
            >
              <img
                _ngcontent-kub-c67=""
                loading="lazy"
                className="responsive-img bar-img"
                src="https://cdn.cloudd.live/theme/Aura25_theme/ParkGreen/assets/images/bars.png"
              />
            </a>
            <div
              _ngcontent-kub-c67=""
              className="nav-wrapper valign-wrapper top-header"
            >
              <a
                _ngcontent-kub-c67=""
                href="javascript:void(0);"
                className="brand-logo"
              >
                <img
                  _ngcontent-kub-c67=""
                  loading="lazy"
                  alt=""
                  className="responsive-img"
                  src="https://cdn.cloudd.live/parkinplay.bet/ap/logo-dark.png?v=5"
                />
              </a>
              <ul _ngcontent-kub-c67="" className="main-header">
                <li _ngcontent-kub-c67="">
                  <a href="/template/diamondcasino.html" _ngcontent-kub-c67="">
                    <div _ngcontent-kub-c67="" className="icon-holder-small">
                      <div _ngcontent-kub-c67="" className="sports-icon poker" />
                    </div>
                    Casino Games
                  </a>
                </li>
                <li _ngcontent-kub-c67="">
                  <a
                    _ngcontent-kub-c67=""
                    href="javascript:void(0);"
                    className="superover-img"
                  >
                     <img src={asset2} alt="Asset 2" />
                  </a>
                </li>

              </ul>
              <div _ngcontent-kub-c67="" className="user-menus">
                <ul _ngcontent-kub-c67="" className="ml-auto">
                  <li _ngcontent-kub-c67="" className="login-toggle" />
                  <li _ngcontent-kub-c67="" className="dashboard-btn">
                    {/* <a href="./sign.js" _ngcontent-kub-c67="" className="btn"> */}
                    {/* <Link to="./sign" className="btn">Go to Sign Component</Link> */}
                    <Link className='btn' to="/signin"><span _ngcontent-kub-c67="" className="animate-btn">
                        Sign In
                    </span>
                    </Link>
                    {/* </a> */}
                  </li>
                  {/**/}
                </ul>
              </div>
            </div>
            <div
              _ngcontent-kub-c67=""
              className="nav-wrapper bottom-header hide-on-med-and-down"
            >
              <ul _ngcontent-kub-c67="" className="left">
                <li _ngcontent-kub-c67="">
                  <a
                    href="https://parkinplay.in/"
                    _ngcontent-kub-c67=""
                    className="active"
                  >
                    <div _ngcontent-kub-c67="" className="icon-holder-small">
                      <div _ngcontent-kub-c67="" className="sports-icon home" />
                    </div>
                    Home
                  </a>
                </li>
                <li _ngcontent-kub-c67="">
                  <a
                    _ngcontent-kub-c67=""
                    href="javascript:void(0);"
                    className="in_play-icon"
                  >
                    <img
                      _ngcontent-kub-c67=""
                      loading="lazy"
                      className="responsive-img in_play_icon"
                      src="https://cdn.cloudd.live/content/assets/images/in-play-new.png"
                    />
                  </a>
                </li>
                <li _ngcontent-kub-c67="" className="toggle-switch right">
                  <input
                    _ngcontent-kub-c67=""
                    type="checkbox"
                    id="switch"
                    className="ng-untouched ng-valid ng-dirty"
                  />
                  <div _ngcontent-kub-c67="" className="switch-app">
                    <div _ngcontent-kub-c67="" className="content">
                      <label _ngcontent-kub-c67="" htmlFor="switch">
                        <div _ngcontent-kub-c67="" className="toggle" />
                        <div _ngcontent-kub-c67="" className="names">
                          <p _ngcontent-kub-c67="" className="light">
                            <svg
                              _ngcontent-kub-c67=""
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 25.24 25.178"
                              width="25.24"
                              height="25.178"
                            >
                              <g
                                _ngcontent-kub-c67=""
                                id="Group_3"
                                transform="translate(-1073.83 -675.943)"
                                data-name="Group 3"
                              >
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_1"
                                  fill="#ff9b09"
                                  transform="translate(-45.888 400.063) rotate(3)"
                                  d="M 1141.64 223.276 l -3.852 -3.944 l -1.547 1.393 l 4.01 4.025 Z"
                                  data-name="Path 1"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_2"
                                  fill="#ff9b09"
                                  transform="translate(-168.174 500.976)"
                                  d="M 1253.96 180.713 l 0.032 -5.746 h 1.968 v 5.746 Z"
                                  data-name="Path 2"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_3"
                                  fill="#ff9b09"
                                  transform="translate(-218.06 390.752) rotate(3)"
                                  d="M 1322.36 223.379 l 3.844 -3.988 l 1.53 1.422 l -3.893 3.928 Z"
                                  data-name="Path 3"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_4"
                                  fill="#ff9b09"
                                  transform="matrix(0.998 0.07 -0.07 0.998 -233.764 256.876)"
                                  d="M 1353.91 337.163 h 5.756 v 1.966 h -5.756 Z"
                                  data-name="Path 4"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_5"
                                  fill="#ff9b09"
                                  transform="translate(-206.814 219.648) rotate(3)"
                                  d="M 1321.94 404.826 l 4.019 4.007 l -1.386 1.431 l -4.057 -3.965 Z"
                                  data-name="Path 5"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_6"
                                  fill="#ff9b09"
                                  transform="matrix(0.995 0.105 -0.105 0.995 -116.358 129.195)"
                                  d="M 1256.27 443.038 h -2.045 v -5.7 h 2.045 Z"
                                  data-name="Path 6"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_7"
                                  fill="#ff9b09"
                                  transform="translate(-36.146 229.555) rotate(3)"
                                  d="M 1135.53 407.825 l 4.144 -4 l 1.391 1.443 l -4.045 4.03 Z"
                                  data-name="Path 7"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_8"
                                  fill="#ff9b09"
                                  transform="matrix(0.998 0.07 -0.07 0.998 8.164 274.816)"
                                  d="M 1097.66 337 v 1.858 h -5.7 v -1.94 l 5.7 -0.012 Z"
                                  data-name="Path 8"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_9"
                                  fill="#ff9b09"
                                  transform="translate(-117.404 400.953)"
                                  d="M 1203.86 282.988 a 3.81 3.81 0 0 1 0.559 4.651 c -1.567 2.586 -5.076 0.971 -5.076 0.971 a 4.568 4.568 0 0 1 0.959 -3.983 A 4.231 4.231 0 0 1 1203.86 282.988 Z"
                                  data-name="Path 9"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_10"
                                  fill="#ff9b09"
                                  transform="translate(-127.572 397.159)"
                                  d="M 1210.21 293.825 a 5.35 5.35 0 0 0 2.72 0.085 a 4.853 4.853 0 0 0 2.659 -2.076 a 4.441 4.441 0 0 0 -0.061 -4.76 a 4.573 4.573 0 0 1 1.688 1.032 c 1.117 1.062 2.2 3.043 0.607 5.8 a 4.757 4.757 0 0 1 -5.9 1.53 A 3.356 3.356 0 0 1 1210.21 293.825 Z"
                                  data-name="Path 10"
                                />
                              </g>
                            </svg>
                          </p>
                          <p _ngcontent-kub-c67="" className="dark">
                            <svg
                              _ngcontent-kub-c67=""
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20.492 20.213"
                              width="20.492"
                              height="20.213"
                            >
                              <g
                                _ngcontent-kub-c67=""
                                id="Group_5"
                                transform="translate(-1048.44 -677.007)"
                                data-name="Group 5"
                              >
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_1"
                                  fill="#7397aa"
                                  transform="matrix(0.999 -0.035 0.035 0.999 -105.356 486.692)"
                                  d="M 1152.5 236.076 l -2.836 -2.865 l -1.395 1.5 l 2.906 2.75 Z"
                                  data-name="Path 1"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_2"
                                  fill="#7397aa"
                                  transform="translate(-196.846 502.039)"
                                  d="M 1253.96 179.027 l 0.032 -4.06 h 1.962 v 4.06 Z"
                                  data-name="Path 2"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_3"
                                  fill="#7397aa"
                                  transform="translate(-260.071 446.202)"
                                  d="M 1321.85 235.486 l 2.922 -2.719 l 1.382 1.337 l -2.824 2.816 Z"
                                  data-name="Path 3"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_4"
                                  fill="#7397aa"
                                  transform="translate(-276.49 302.27) rotate(2)"
                                  d="M 1353.91 337.163 h 4.114 v 2.017 h -4.114 Z"
                                  data-name="Path 4"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_5"
                                  fill="#7397aa"
                                  transform="translate(-278.116 356.904) rotate(-3)"
                                  d="M 1322.23 403.9 l 2.734 2.891 l -1.347 1.306 l -2.828 -2.937 Z"
                                  data-name="Path 5"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_6"
                                  fill="#7397aa"
                                  transform="translate(-172.051 190.723) rotate(3)"
                                  d="M 1256.29 441.353 h -2.068 v -4.01 h 2.068 Z"
                                  data-name="Path 6"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_7"
                                  fill="#7397aa"
                                  transform="translate(-97.844 287.169)"
                                  d="M 1148.58 406.362 l 2.859 -2.672 l 1.375 1.391 l -2.891 2.75 Z"
                                  data-name="Path 7"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_8"
                                  fill="#7397aa"
                                  transform="translate(-43.516 349.672)"
                                  d="M 1096.03 336.995 v 1.847 h -4.067 v -1.929 l 4.067 -0.012 Z"
                                  data-name="Path 8"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_9"
                                  fill="#7397aa"
                                  transform="translate(-145.675 399.078)"
                                  d="M 1204.45 282.989 a 4.294 4.294 0 0 1 0.63 5.242 c -1.766 2.915 -5.721 1.095 -5.721 1.095 a 5.148 5.148 0 0 1 1.081 -4.489 A 4.769 4.769 0 0 1 1204.45 282.989 Z"
                                  data-name="Path 9"
                                />
                                <path
                                  _ngcontent-kub-c67=""
                                  id="Path_10"
                                  fill="#7397aa"
                                  transform="translate(-155.716 395.389)"
                                  d="M 1210.21 294.473 a 5.864 5.864 0 0 0 2.981 0.093 a 5.32 5.32 0 0 0 2.915 -2.276 a 4.867 4.867 0 0 0 -0.066 -5.217 a 5.013 5.013 0 0 1 1.85 1.131 c 1.224 1.164 2.413 3.336 0.665 6.362 a 5.214 5.214 0 0 1 -6.469 1.677 A 3.678 3.678 0 0 1 1210.21 294.473 Z"
                                  data-name="Path 10"
                                />
                              </g>
                            </svg>
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </li>
                <li _ngcontent-kub-c67="" className="right">
                  <div _ngcontent-kub-c67="" className="top-icon">
                    <div
                      _ngcontent-kub-c67=""
                      className="top-search-icon hide-on-med-and-down"
                    >
                      <form
                        _ngcontent-kub-c67=""
                        noValidate=""
                        className="col s12 ng-untouched ng-pristine ng-valid"
                      >
                        <div _ngcontent-kub-c67="" className="row p-0">
                          <div _ngcontent-kub-c67="" className="input-field col s12">
                            <div _ngcontent-kub-c67="" className="logo-search">
                              <input
                                _ngcontent-kub-c67=""
                                placeholder="Search"
                                type="text"
                                name="search"
                                autoComplete="off"
                                className="validate z-depth-0 search-logo ng-untouched ng-pristine ng-valid"
                                style={{
                                  backgroundImage:
                                    'url("https://cdn.cloudd.live/parkinplay.bet/ap/logo-dark.png?v=5")'
                                }}
                              />
                              <span _ngcontent-kub-c67="" className="s-icon">
                                <i _ngcontent-kub-c67="" className="fa fa-search" />
                              </span>
                            </div>
                          </div>
                          {/**/}
                        </div>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <pb-left-sidebar>
        <div id="casino-nav" className={isSidenavOpen ? 'sidenav-open' : ''}>
          <ul id="mobile-nav" className="sidenav scroller sidenav-height">
            <li className="is-hidden is-show">
              <div className="menu">
                <a href="javascript:void(0)" className="link active">
                  <div className="icon-holder-small link-icon">
                    <div className="sports-icon all-sports"></div>
                  </div>
                  <span className="link-title">All Sports</span>
                </a>
                <a href="javascript:void(0)" className="link">
                  <div className="icon-holder-small link-icon">
                    <div className="sports-icon inplay"></div>
                  </div>
                  <span className="link-title">In Play</span>
                </a>
                <a href="javascript:void(0)" className="link">
                  <div className="icon-holder-small link-icon">
                    <div className="sports-icon upcoming"></div>
                  </div>
                  <span className="link-title">Upcoming</span>
                </a>
              </div>
              <ul className="collapsible">
                <li className="active">
                  <div className="collapsible-header" >
                    <span className="blinkin-position">
                      <div className="icon-holder-small">
                        <div className="sports-icon cricket"></div>
                      </div>
                      Cricket
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <ul className="collapsible cl-1"></ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header" >
                    <span className="blinkin-position">
                      <div className="icon-holder-small">
                        <div className="sports-icon tennis"></div>
                      </div>
                      Tennis
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <ul className="collapsible"></ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header" >
                    <span className="blinkin-position">
                      <div className="icon-holder-small">
                        <div className="sports-icon soccer"></div>
                      </div>
                      Soccer
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header" >
                    <span className="blinkin-position">
                      <div className="icon-holder-small">
                        <div className="sports-icon politics"></div>
                      </div>
                      Politics
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <ul className="collapsible">
                      <li>
                        <div className="collapsible-header">
                          <a href="javascript:void(0)">India Elections <i className="fa fa-plus" style={{ transform: "rotate(0deg)" }}></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <span className="blinkin-position">
                      <div className="icon-holder-small">
                        <div className="sports-icon kabaddi"></div>
                      </div>
                      Kabaddi
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="collapsible-body">
                    <ul className="collapsible">
                      <li>
                        <div className="collapsible-header">
                          <a href="javascript:void(0)">Pro Kabaddi League <i className="fa fa-plus" style={{ transform: "rotate(0deg)" }}></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li style={{ cursor: "pointer" }}>
                  <a href="javascript:void(0);">
                    <div className="icon-holder-small">
                      <div className="sports-icon space"></div>
                    </div>
                    SPACE
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </pb-left-sidebar>
       </header>
     



    );
};

export default Header;