import React, { useState } from "react";
import { Link } from 'react-router-dom';
import asset2 from "../Assests/images/asset 2.png";
import "./Style.css";
// import Sign from './Sign';

const Headerafter = (props) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  const [isdrop, setdrop] = useState(false);
    const dropdown1 = () => {
      console.log("hyy");
        setdrop(!isdrop);
      };



  return (
    <header _ngcontent-wkv-c59="">
      <div _ngcontent-wkv-c59="" className="navbar-fixed">
        <nav _ngcontent-wkv-c59="" id="global-nav" className="kala6">
          <a
            _ngcontent-wkv-c59=""
            data-target="mobile-nav"
            className="sidenav-trigger"
            onClick={toggleSidenav}
          >
            <img
              _ngcontent-wkv-c59=""
              loading="lazy"
              className="responsive-img bar-img"
              src="https://cdn.cloudd.live/theme/Aura25_theme/ParkGreen/assets/images/bars.png"
            />
          </a>
          <div
            _ngcontent-wkv-c59=""
            className="nav-wrapper valign-wrapper top-header"
          >
            <a
              _ngcontent-wkv-c59=""
              href="javascript:void(0);"
              className="brand-logo"
            >
              <img
                _ngcontent-wkv-c59=""
                alt=""
                className="responsive-img"
                src="https://cdn.cloudd.live/parkinplay.bet/ap/logo-dark.png?v=5"
              />
            </a>
            <ul _ngcontent-wkv-c59="" className="main-header">
              <li _ngcontent-wkv-c59="" className="mr-10">
                <a _ngcontent-wkv-c59="" className="active">
                  <div _ngcontent-wkv-c59="" className="icon-holder-small">
                    <div
                      _ngcontent-wkv-c59=""
                      className="sports-icon all-sports"
                    />
                  </div>
                  Sports
                </a>
              </li>
              <li _ngcontent-wkv-c59="">
                <a _ngcontent-wkv-c59="" href="#/live-casino">
                  <div _ngcontent-wkv-c59="" className="icon-holder-small">
                    <div _ngcontent-wkv-c59="" className="sports-icon poker" />
                  </div>
                  Casino Games
                </a>
              </li>
              <li _ngcontent-wkv-c59="">
                <a
                  _ngcontent-wkv-c59=""
                  href="#/market/virtual-sports"
                  className="superover-img"
                >
                  <img src={asset2} alt="Asset 2" />
                </a>
              </li>
              {/**/}
            </ul>
            <div _ngcontent-wkv-c59="" className="news-feed">
              <marquee
                _ngcontent-wkv-c59=""
                behavior="scroll"
                direction="left"
                onmouseout="this.start();"
                onmouseover="this.stop();"
                scrolldelay={100}
                className="marquee-style"
              >
                <div _ngcontent-wkv-c59="" className="marquee-news">
                  <i _ngcontent-wkv-c59="" className="fas fa-circle" />
                  <span _ngcontent-wkv-c59="" className="marquee-news-text">
                    Jo bhi client 5-10 sec me Lay/Back karega uski bets delete
                    ki jaayegi aur valid nhi maani jaayegi.
                  </span>
                </div>
                <div _ngcontent-wkv-c59="" className="marquee-news">
                  <i _ngcontent-wkv-c59="" className="fas fa-circle" />
                  <span _ngcontent-wkv-c59="" className="marquee-news-text">
                    Our Centre Server facing malware attack So for now all
                    system down. We setup new server once it will complete we
                    inform you. It will setup in minimum 4 hours. Sorry for
                    Inconvenience.
                  </span>
                </div>
                <div _ngcontent-wkv-c59="" className="marquee-news">
                  <i _ngcontent-wkv-c59="" className="fas fa-circle" />
                  <span _ngcontent-wkv-c59="" className="marquee-news-text">
                    Dear Clients, Due to server issue site bnd hone ki vjah se
                    all client ki bets cancel ki gyi he chahe woh loss me tha
                    chahe woh profit me tha so please support with us. Sorry for
                    Inconvenience.
                  </span>
                </div>
                {/**/}
                <div _ngcontent-wkv-c59="" style={{ clear: "both" }} />
              </marquee>
            </div>
            {/**/}
            <div _ngcontent-wkv-c59="" className="user-menus">
              <ul _ngcontent-wkv-c59="" className="right">
                {/**/}
                {/**/}
                <li
                  _ngcontent-wkv-c59=""
                  className="refresh hide-on-small-only"
                />
                {/**/}
                <li _ngcontent-wkv-c59="" className="ac_bal">
                  <a _ngcontent-wkv-c59="" href="javascript:void(0);">
                    <svg
                      _ngcontent-wkv-c59=""
                      xmlns="http://www.w3.org/2000/svg"
                      version={1.0}
                      width={15}
                      height={15}
                      viewBox="0 0 460.000000 503.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        _ngcontent-wkv-c59=""
                        transform="translate(0.000000,503.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                      >
                        <path
                          _ngcontent-wkv-c59=""
                          d="M875 5011 c-23 -10 -48 -30 -58 -44 -9 -14 -104 -263 -212 -553 -205 -554 -213 -585 -184 -661 24 -63 99 -113 171 -113 80 0 1137 188 1171 208 51 29 77 76 77 139 0 30 -7 70 -16 89 -21 43 -88 84 -137 84 -21 0 -150 -18 -288 -40 -138 -22 -259 -40 -268 -40 -25 1 142 105 265 165 198 96 431 165 664 196 155 21 414 16 550 -9 390 -72 789 -279 1042 -538 334 -343 519 -742 571 -1230 14 -133 27 -163 80 -191 46 -24 149 -22 209 5 86 38 90 73 47 351 -54 344 -184 701 -346 946 -208 315 -515 584 -867 762 -419 211 -840 295 -1267 253 -359 -36 -767 -176 -1044 -359 -41 -28 -75 -48 -75 -46 0 2 36 105 80 229 44 125 80 239 80 254 0 36 -33 100 -62 121 -59 43 -122 50 -183 22z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M2075 3785 c-45 -8 -127 -30 -184 -49 -432 -147 -748 -507 -848 -968 -26 -121 -23 -358 6 -495 70 -334 240 -592 531 -805 120 -88 340 -176 508 -204 134 -22 392 -14 512 16 574 143 980 654 980 1234 0 341 -124 654 -352 892 -175 182 -369 296 -617 361 -82 22 -122 26 -276 29 -124 2 -205 -1 -260 -11z m485 -113 c47 -11 106 -29 132 -39 l47 -18 -80 -123 c-43 -67 -79 -124 -79 -127 0 -2 73 -48 163 -101 89 -53 176 -105 194 -115 l31 -19 69 106 c37 59 71 112 75 118 17 26 153 -139 226 -274 45 -82 107 -257 117 -332 l7 -48 -126 0 -126 0 0 -230 0 -230 115 0 c75 0 115 -4 115 -11 0 -6 -12 -45 -26 -87 -53 -158 -159 -326 -281 -445 l-60 -59 -48 81 c-26 45 -51 84 -56 87 -6 4 -354 -195 -388 -222 -2 -2 18 -40 44 -84 27 -46 44 -85 39 -90 -5 -4 -52 -18 -104 -31 -137 -34 -383 -34 -517 0 -51 12 -93 27 -93 33 0 6 20 44 45 85 25 40 45 77 45 81 -1 13 -382 234 -390 226 -5 -5 -31 -47 -59 -94 l-51 -85 -80 83 c-128 133 -219 284 -273 452 l-24 75 123 3 124 3 0 229 0 230 -136 0 -136 0 7 43 c23 136 115 350 203 470 51 69 141 167 153 167 4 0 40 -56 80 -125 39 -68 74 -123 78 -121 62 34 360 213 370 222 13 12 -6 50 -121 241 l-19 31 51 17 c130 43 219 55 380 51 106 -3 182 -11 240 -24z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M2207 3523 c-4 -3 -7 -48 -7 -100 l0 -93 100 0 100 0 0 100 0 100 -93 0 c-52 0 -97 -3 -100 -7z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M2215 3251 c-304 -38 -542 -251 -627 -561 -21 -78 -16 -263 10 -354 73 -255 265 -448 516 -516 69 -19 97 -22 215 -17 114 3 148 9 210 31 241 85 422 288 477 533 20 93 15 279 -11 363 -106 344 -440 564 -790 521z m230 -116 c475 -112 645 -705 301 -1048 -153 -153 -366 -217 -576 -173 -224 47 -417 234 -475 461 -19 76 -19 224 0 300 57 222 241 406 461 459 77 19 213 19 289 1z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M2258 2978 l-3 -62 -46 -13 c-53 -15 -114 -69 -135 -119 -19 -45 -18 -128 3 -171 21 -46 90 -96 178 -129 89 -34 124 -59 141 -100 17 -41 7 -72 -33 -104 -25 -20 -37 -22 -108 -18 -52 3 -97 12 -127 26 l-48 21 -16 -54 c-8 -30 -13 -59 -9 -65 8 -13 130 -50 166 -50 29 0 29 0 29 -60 l0 -60 50 0 50 0 0 65 c0 59 2 65 20 65 49 0 136 64 166 122 21 41 28 108 15 156 -18 65 -62 107 -160 153 -172 80 -181 88 -181 145 0 66 90 99 190 70 30 -8 64 -18 76 -21 18 -6 23 0 36 47 15 51 14 53 -6 65 -12 6 -49 17 -83 23 l-62 12 -3 57 -3 56 -47 3 -47 3 -3 -63z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M3071 3064 c-41 -24 -79 -48 -84 -53 -6 -6 4 -33 26 -73 64 -113 52 -109 146 -54 44 26 81 50 81 53 0 7 -67 128 -84 154 -10 15 -19 12 -85 -27z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M1410 3021 c-22 -39 -43 -76 -46 -84 -3 -9 22 -30 80 -64 l84 -51 26 47 c14 25 37 64 50 87 l25 40 -80 47 c-44 26 -84 47 -89 47 -5 0 -27 -31 -50 -69z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M1437 2104 l-77 -46 32 -56 c18 -32 39 -69 48 -84 8 -16 18 -28 22 -28 6 0 157 86 166 94 6 7 -91 166 -102 166 -6 -1 -46 -21 -89 -46z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M3030 2065 c-29 -47 -50 -87 -49 -89 19 -14 162 -96 167 -96 6 0 85 127 100 161 2 4 -25 24 -60 45 -35 21 -73 44 -85 51 -20 13 -23 10 -73 -72z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M2207 1643 c-4 -3 -7 -48 -7 -100 l0 -93 100 0 100 0 0 100 0 100 -93 0 c-52 0 -97 -3 -100 -7z"
                        ></path>
                        <path
                          _ngcontent-wkv-c59=""
                          d="M90 2838 c-80 -41 -85 -59 -84 -313 0 -295 31 -483 121 -755 88 -266 257 -554 456 -781 152 -172 465 -403 710 -523 697 -342 1648 -290 2273 123 49 32 90 58 91 57 2 -1 -36 -103 -82 -226 -47 -123 -85 -236 -85 -250 0 -40 41 -112 78 -137 71 -47 171 -35 229 28 13 14 102 240 217 554 162 437 196 538 196 581 0 66 -13 100 -52 141 -37 39 -83 56 -147 55 -25 -1 -288 -44 -584 -96 -489 -86 -542 -97 -573 -121 -41 -32 -74 -92 -74 -137 1 -77 62 -153 132 -164 18 -3 157 15 308 40 151 25 276 43 278 42 6 -6 -157 -106 -247 -151 -226 -113 -473 -187 -720 -216 -151 -17 -438 -7 -565 21 -347 74 -718 257 -967 475 -139 123 -298 329 -402 525 -85 158 -165 379 -202 560 -21 98 -34 330 -26 447 7 105 1 144 -26 182 -47 63 -168 82 -253 39z"
                        ></path>
                      </g>
                    </svg>
                    <span
                      _ngcontent-wkv-c59=""
                      className="wallet-title hide-on-small-only"
                    >
                      Balance:
                    </span>
                    <span _ngcontent-wkv-c59="">0</span>
                  </a>
                  {/**/}
                </li>
                <li _ngcontent-wkv-c59="" className="liability">
                  <a _ngcontent-wkv-c59="">
                    <svg
                      _ngcontent-wkv-c59=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15 13.333"
                      width={15}
                      height="13.333"
                    >
                      <path
                        _ngcontent-wkv-c59=""
                        id="hand-holding-usd-solid"
                        fill="#333"
                        transform="translate(0)"
                        d="M 7.059 3.758 l 1.413 0.372 a 0.224 0.224 0 0 1 0.173 0.211 a 0.229 0.229 0 0 1 -0.237 0.219 H 7.48 A 0.781 0.781 0 0 1 7.189 4.5 a 0.373 0.373 0 0 0 -0.4 0.052 L 6.3 5.01 a 0.3 0.3 0 0 0 -0.059 0.069 a 0.3 0.3 0 0 0 0.1 0.41 a 2.181 2.181 0 0 0 0.9 0.3 V 6.25 a 0.437 0.437 0 0 0 0.452 0.417 h 0.452 a 0.437 0.437 0 0 0 0.453 -0.417 V 5.792 A 1.5 1.5 0 0 0 9.987 4.151 A 1.579 1.579 0 0 0 8.775 2.909 L 7.361 2.536 a 0.224 0.224 0 0 1 -0.173 -0.211 a 0.229 0.229 0 0 1 0.237 -0.219 h 0.927 a 0.781 0.781 0 0 1 0.292 0.057 a 0.373 0.373 0 0 0 0.4 -0.052 l 0.495 -0.456 A 0.3 0.3 0 0 0 9.6 1.589 a 0.3 0.3 0 0 0 -0.1 -0.411 a 2.183 2.183 0 0 0 -0.9 -0.3 V 0.417 A 0.437 0.437 0 0 0 8.144 0 H 7.692 a 0.437 0.437 0 0 0 -0.452 0.417 V 0.875 A 1.5 1.5 0 0 0 5.846 2.516 A 1.581 1.581 0 0 0 7.059 3.758 Z M 14.72 8.544 a 0.862 0.862 0 0 0 -1.109 0 L 11.2 10.469 a 1.657 1.657 0 0 1 -1.042 0.365 H 7.083 a 0.417 0.417 0 1 1 0 -0.833 H 9.122 a 0.864 0.864 0 0 0 0.866 -0.693 A 0.812 0.812 0 0 0 10 9.165 a 0.833 0.833 0 0 0 -0.833 -0.832 H 5 a 3.064 3.064 0 0 0 -1.93 0.685 L 1.859 10 H 0.417 A 0.417 0.417 0 0 0 0 10.416 v 2.5 a 0.417 0.417 0 0 0 0.417 0.417 H 9.707 a 1.667 1.667 0 0 0 1.042 -0.365 l 3.938 -3.151 a 0.833 0.833 0 0 0 0.033 -1.273 Z"
                      ></path>
                    </svg>
                    <span
                      _ngcontent-wkv-c59=""
                      className="liability-title hide-on-small-only"
                    >
                      Liability:
                    </span>
                    <span _ngcontent-wkv-c59="">0</span>
                  </a>
                </li>
                <li _ngcontent-wkv-c59="" className="hide-on-med-and-down">
                  <a
                    _ngcontent-wkv-c59=""
                    data-target="dropdown1"
                    className="dropdown-trigger"
                    onClick={dropdown1}
                  >
                    <svg
                      _ngcontent-wkv-c59=""
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width={12}
                      height={12}
                    >
                      <path
                        _ngcontent-wkv-c59=""
                        id="ic_person_24px"
                        transform="translate(-4 -4)"
                        d="M 12 12 A 4 4 0 1 0 8 8 A 4 4 0 0 0 12 12 Z m 0 2 c -2.67 0 -8 1.34 -8 4 v 2 H 20 V 18 C 20 15.34 14.67 14 12 14 Z"
                      ></path>
                    </svg>
                    <span
                      _ngcontent-wkv-c59=""
                      className="hide-on-med-and-down"
                    >
                      {props.username}
                    </span>
                    <i
                      _ngcontent-wkv-c59=""
                      className="fas fa-caret-down right"
                    />
                  </a>
                  <ul
                    _ngcontent-wkv-c59=""
                    id="dropdown1"
                    className="dropdown-content"
                    tabIndex={0}
                    style={{
                      display:isdrop?"block":"none",
                      width: 190,
                      left: 5,
                      top: "-45px",
                      height: 380,
                      transformOrigin: "100% 0px",
                      opacity: 1,
                      transform: "scaleX(1) scaleY(1)"
                    }}
                    
                  >
                    <li _ngcontent-wkv-c59="" tabIndex={0}>
                      <a _ngcontent-wkv-c59="" href="javascript:void(0);">
                        <i _ngcontent-wkv-c59="" className="fas fa-user" />
                        Welcome, {props.username}
                      </a>
                    </li>
                    <li _ngcontent-wkv-c59="" tabIndex={0}>
                      <a _ngcontent-wkv-c59="">
                        <i
                          _ngcontent-wkv-c59=""
                          className="fas fa-chart-area"
                        />
                        Account Statement
                      </a>
                    </li>
                    {/**/}
                    {/**/}
                    {/**/}
                    {/**/}
                    <li _ngcontent-wkv-c59="" tabIndex={0}>
                      <a _ngcontent-wkv-c59="">
                        <i
                          _ngcontent-wkv-c59=""
                          className="fas fa-chart-line"
                        />
                        Profit-Loss
                      </a>
                    </li>
                    <li _ngcontent-wkv-c59="" tabIndex={0}>
                      <a _ngcontent-wkv-c59="">
                        <i _ngcontent-wkv-c59="" className="fas fa-trophy" />
                        Results
                      </a>
                    </li>
                    <li _ngcontent-wkv-c59="" tabIndex={0}>
                      <a _ngcontent-wkv-c59="">
                        <i _ngcontent-wkv-c59="" className="fas fa-history" />
                        My Bets
                      </a>
                    </li>
                    <li _ngcontent-wkv-c59="" tabIndex={0}>
                      <a _ngcontent-wkv-c59="">
                        <i _ngcontent-wkv-c59="" className="fas fa-cog" />
                        Chip Setting
                      </a>
                    </li>
                    <li _ngcontent-wkv-c59="" tabIndex={0}>
                      <a _ngcontent-wkv-c59="">
                        <i _ngcontent-wkv-c59="" className="fas fa-key" />
                        Change Password
                      </a>
                    </li>
                    <li _ngcontent-wkv-c59="" tabIndex={0}>
                      <a _ngcontent-wkv-c59="">
                        <i
                          _ngcontent-wkv-c59=""
                          className="fas fa-info-circle"
                        />
                        Terms and Condition
                      </a>
                    </li>
                    <li _ngcontent-wkv-c59="" className="log-out" tabIndex={0}>
                      <Link to="/signin" _ngcontent-wkv-c59="">
                        <i
                          _ngcontent-wkv-c59=""
                          className="fas fa-sign-out-alt"
                        />
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                            .dropdown-content {\n                              min-width: 190px;\n                              top: 50px !important;\n                              position: absolute;\n                              right: 15px;\n                              left: auto !important;\n                              border-radius: 0;\n                              width: 190px !important;\n                              overflow: inherit;\n                              background-color: var(--background-color);\n                              transition: all .3s;\n                            }\n                          ",
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            _ngcontent-wkv-c59=""
            className="nav-wrapper bottom-header hide-on-med-and-down"
          >
            <ul _ngcontent-wkv-c59="" className="left">
              <li _ngcontent-wkv-c59="">
                <a
                  _ngcontent-wkv-c59=""
                  href="javascript:void(0);"
                  className="active"
                >
                  <div _ngcontent-wkv-c59="" className="icon-holder-small">
                    <div _ngcontent-wkv-c59="" className="sports-icon home" />
                  </div>
                  Home
                </a>
              </li>
              <li _ngcontent-wkv-c59="">
                <a
                  _ngcontent-wkv-c59=""
                  href="javascript:void(0);"
                  className="in_play-icon"
                >
                  <img
                    _ngcontent-wkv-c59=""
                    loading="lazy"
                    className="responsive-img in_play_icon"
                    src="https://cdn.cloudd.live/content/assets/images/in-play-new.png"
                  />
                </a>
              </li>
              {/**/}
              <li _ngcontent-wkv-c59="" className="toggle-switch right">
                <input
                  _ngcontent-wkv-c59=""
                  type="checkbox"
                  id="switch"
                  className="ng-untouched ng-pristine ng-valid"
                />
                <div
                  _ngcontent-wkv-c59=""
                  className="switch-app"
                  onclick="demodark()"
                >
                  <div _ngcontent-wkv-c59="" className="content">
                    <label _ngcontent-wkv-c59="" htmlFor="switch">
                      <div _ngcontent-wkv-c59="" className="toggle" />
                      <div _ngcontent-wkv-c59="" className="names">
                        <p _ngcontent-wkv-c59="" className="light">
                          <svg
                            _ngcontent-wkv-c59=""
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25.24 25.178"
                            width="25.24"
                            height="25.178"
                          >
                            <g
                              _ngcontent-wkv-c59=""
                              id="Group_3"
                              transform="translate(-1073.83 -675.943)"
                              data-name="Group 3"
                            >
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_1"
                                fill="#ff9b09"
                                transform="translate(-45.888 400.063) rotate(3)"
                                d="M 1141.64 223.276 l -3.852 -3.944 l -1.547 1.393 l 4.01 4.025 Z"
                                data-name="Path 1"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_2"
                                fill="#ff9b09"
                                transform="translate(-168.174 500.976)"
                                d="M 1253.96 180.713 l 0.032 -5.746 h 1.968 v 5.746 Z"
                                data-name="Path 2"
                              ></path>
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_3"
                                fill="#ff9b09"
                                transform="translate(-218.06 390.752) rotate(3)"
                                d="M 1322.36 223.379 l 3.844 -3.988 l 1.53 1.422 l -3.893 3.928 Z"
                                data-name="Path 3"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_4"
                                fill="#ff9b09"
                                transform="matrix(0.998 0.07 -0.07 0.998 -233.764 256.876)"
                                d="M 1353.91 337.163 h 5.756 v 1.966 h -5.756 Z"
                                data-name="Path 4"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_5"
                                fill="#ff9b09"
                                transform="translate(-206.814 219.648) rotate(3)"
                                d="M 1321.94 404.826 l 4.019 4.007 l -1.386 1.431 l -4.057 -3.965 Z"
                                data-name="Path 5"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_6"
                                fill="#ff9b09"
                                transform="matrix(0.995 0.105 -0.105 0.995 -116.358 129.195)"
                                d="M 1256.27 443.038 h -2.045 v -5.7 h 2.045 Z"
                                data-name="Path 6"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_7"
                                fill="#ff9b09"
                                transform="translate(-36.146 229.555) rotate(3)"
                                d="M 1135.53 407.825 l 4.144 -4 l 1.391 1.443 l -4.045 4.03 Z"
                                data-name="Path 7"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_8"
                                fill="#ff9b09"
                                transform="matrix(0.998 0.07 -0.07 0.998 8.164 274.816)"
                                d="M 1097.66 337 v 1.858 h -5.7 v -1.94 l 5.7 -0.012 Z"
                                data-name="Path 8"
                              ></path>
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_9"
                                fill="#ff9b09"
                                transform="translate(-117.404 400.953)"
                                d="M 1203.86 282.988 a 3.81 3.81 0 0 1 0.559 4.651 c -1.567 2.586 -5.076 0.971 -5.076 0.971 a 4.568 4.568 0 0 1 0.959 -3.983 A 4.231 4.231 0 0 1 1203.86 282.988 Z"
                                data-name="Path 9"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_10"
                                fill="#ff9b09"
                                transform="translate(-127.572 397.159)"
                                d="M 1210.21 293.825 a 5.35 5.35 0 0 0 2.72 0.085 a 4.853 4.853 0 0 0 2.659 -2.076 a 4.441 4.441 0 0 0 -0.061 -4.76 a 4.573 4.573 0 0 1 1.688 1.032 c 1.117 1.062 2.2 3.043 0.607 5.8 a 4.757 4.757 0 0 1 -5.9 1.53 A 3.356 3.356 0 0 1 1210.21 293.825 Z"
                                data-name="Path 10"
                              />
                            </g>
                          </svg>
                        </p>
                        <p _ngcontent-wkv-c59="" className="dark">
                          <svg
                            _ngcontent-wkv-c59=""
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20.492 20.213"
                            width="20.492"
                            height="20.213"
                          >
                            <g
                              _ngcontent-wkv-c59=""
                              id="Group_5"
                              transform="translate(-1048.44 -677.007)"
                              data-name="Group 5"
                            >
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_1"
                                fill="#7397aa"
                                transform="matrix(0.999 -0.035 0.035 0.999 -105.356 486.692)"
                                d="M 1152.5 236.076 l -2.836 -2.865 l -1.395 1.5 l 2.906 2.75 Z"
                                data-name="Path 1"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_2"
                                fill="#7397aa"
                                transform="translate(-196.846 502.039)"
                                d="M 1253.96 179.027 l 0.032 -4.06 h 1.962 v 4.06 Z"
                                data-name="Path 2"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_3"
                                fill="#7397aa"
                                transform="translate(-260.071 446.202)"
                                d="M 1321.85 235.486 l 2.922 -2.719 l 1.382 1.337 l -2.824 2.816 Z"
                                data-name="Path 3"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_4"
                                fill="#7397aa"
                                transform="translate(-276.49 302.27) rotate(2)"
                                d="M 1353.91 337.163 h 4.114 v 2.017 h -4.114 Z"
                                data-name="Path 4"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_5"
                                fill="#7397aa"
                                transform="translate(-278.116 356.904) rotate(-3)"
                                d="M 1322.23 403.9 l 2.734 2.891 l -1.347 1.306 l -2.828 -2.937 Z"
                                data-name="Path 5"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_6"
                                fill="#7397aa"
                                transform="translate(-172.051 190.723) rotate(3)"
                                d="M 1256.29 441.353 h -2.068 v -4.01 h 2.068 Z"
                                data-name="Path 6"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_7"
                                fill="#7397aa"
                                transform="translate(-97.844 287.169)"
                                d="M 1148.58 406.362 l 2.859 -2.672 l 1.375 1.391 l -2.891 2.75 Z"
                                data-name="Path 7"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_8"
                                fill="#7397aa"
                                transform="translate(-43.516 349.672)"
                                d="M 1096.03 336.995 v 1.847 h -4.067 v -1.929 l 4.067 -0.012 Z"
                                data-name="Path 8"
                              />
                              <path
                                _ngcontent-wkv-c59=""
                                id="Path_9"
                                fill="#7397aa"
                                transform="translate(-145.675 399.078)"
                                d="M 1204.45 282.989 a 4.294 4.294 0 0 1 0.63 5.242 c -1.766 2.915 -5.721 1.095 -5.721 1.095 a 5.148 5.148 0 0 1 1.081 -4.489 A 4.769 4.769 0 0 1 1204.45 282.989 Z"
                                data-name="Path 9"
                              />
                              <path
                                _ngcontent-wkv-c59=""
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
              <li _ngcontent-wkv-c59="" className="right">
                <div
                  _ngcontent-wkv-c59=""
                  data-position="top"
                  data-tooltip="One Click Bet"
                  className="one-click-bet hide-on-med-and-down tooltipped"
                >
                  <div
                    _ngcontent-wkv-c59=""
                    className="one-click-collapse z-depth-0"
                  >
                    <div _ngcontent-wkv-c59="" className="title">
                      <h3 _ngcontent-wkv-c59="">
                        <svg
                          _ngcontent-wkv-c59=""
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 357.058 475.569"
                          width={16}
                          height={21}
                        >
                          <g
                            _ngcontent-wkv-c59=""
                            id="tap"
                            transform="translate(-0.284)"
                          >
                            <path
                              _ngcontent-wkv-c59=""
                              id="Path_1"
                              fill="#242424"
                              d="M 318.918 187.566 h -0.668 a 36.676 36.676 0 0 0 -24.719 9.4 c -5.492 -15.2 -19.449 -26.125 -35.8 -26.125 A 37.139 37.139 0 0 0 231.2 182.254 c -6.383 -12.922 -19.187 -21.687 -33.91 -21.687 h -0.711 a 34.815 34.815 0 0 0 -21.832 7.273 V 75.718 c 0 -22.262 -17.332 -40.371 -38.414 -40.371 c -21.059 0 -38.3 18.1 -38.313 40.344 l -0.176 182.773 L 87.5 245.9 a 52.171 52.171 0 0 0 -36.867 -19.363 A 51.334 51.334 0 0 0 12.18 240.148 l -9 7.457 a 8 8 0 0 0 -1.992 9.852 l 87.5 168.2 c 16 30.738 46.441 49.914 79.445 49.914 H 266.75 v -0.086 c 50 0 90.539 -43.387 90.59 -96.66 c 0.02 -23.836 -0.07 -41.6 -0.055 -56 c 0.051 -38.523 0.012 -52.738 -0.086 -95.18 c -0.051 -22.211 -17.258 -40.078 -38.281 -40.078 Z m 22.25 135.2 c -0.016 14.4 -0.039 32.238 -0.062 56.074 c -0.043 44.465 -33.609 80.723 -74.824 80.723 H 168.141 c -27.016 0 -52.02 -15.879 -65.25 -41.3 L 18.363 255.839 l 4.172 -3.48 c 0.105 -0.086 0.207 -0.187 0.309 -0.277 A 35.512 35.512 0 0 1 49.508 242.5 a 36.3 36.3 0 0 1 25.609 13.563 l 24.488 29.8 a 8 8 0 0 0 14.18 -5.07 L 113.93 75.7 c 0.008 -13.43 10.164 -24.355 22.414 -24.355 S 158.75 62.28 158.75 75.718 v 123.66 c 0 0.43 -0.02 0.863 -0.02 1.3 c 0 0.188 0.02 0.379 0.02 0.563 v 52.871 a 8 8 0 1 0 16 0 V 199.647 c 0 -12.957 9.9 -23.082 21.832 -23.082 h 0.711 c 12.258 0 22.457 10.684 22.457 24.121 v 48.379 a 8 8 0 1 0 16 0 V 211.108 c 0 -13.441 9.711 -24.375 22.035 -24.375 c 12.254 0 21.965 10.93 21.965 24.375 v 35.809 a 8 8 0 0 0 16 0 V 227.526 c 0 -13.441 10.242 -23.961 22.5 -23.961 h 0.668 c 12.227 0 22.191 10.7 22.223 24.1 c 0.1 42.41 0.078 56.609 0.027 95.105 Z m 0 0"
                              data-name="Path 1"
                            />
                            <path
                              _ngcontent-wkv-c59=""
                              id="Path_2"
                              fill="#242424"
                              d="M 72.609 79.172 a 8 8 0 0 0 8 -8 a 55.438 55.438 0 0 1 110.875 0 a 8 8 0 1 0 16 0 a 71.438 71.438 0 0 0 -142.875 0 a 8 8 0 0 0 8 8 Z m 0 0"
                              data-name="Path 2"
                            />
                          </g>
                        </svg>
                        {/**/}
                      </h3>
                    </div>
                    {/**/}
                  </div>
                </div>
              </li>
              {/**/}
              <li _ngcontent-wkv-c59="" className="right">
                <div _ngcontent-wkv-c59="" className="top-icon">
                  <div
                    _ngcontent-wkv-c59=""
                    className="top-search-icon hide-on-med-and-down"
                  >
                    <form
                      _ngcontent-wkv-c59=""
                      noValidate=""
                      className="col s12 ng-untouched ng-pristine ng-valid"
                    >
                      <div _ngcontent-wkv-c59="" className="row p-0">
                        <div
                          _ngcontent-wkv-c59=""
                          className="input-field col s12"
                        >
                          <div _ngcontent-wkv-c59="" className="logo-search">
                            <input
                              _ngcontent-wkv-c59=""
                              placeholder="Search"
                              type="text"
                              name="search"
                              autoComplete="off"
                              className="validate z-depth-0 search-logo ng-untouched ng-pristine ng-valid"
                              style={{
                                backgroundImage:
                                  'url("https://cdn.cloudd.live/parkinplay.bet/ap/logo-dark.png?v=5")',
                              }}
                            />
                            <span _ngcontent-wkv-c59="" className="s-icon">
                              <i
                                _ngcontent-wkv-c59=""
                                className="fa fa-search"
                              />
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
        <div id="casino-nav" className={isSidenavOpen ? "sidenav-open" : ""}>
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
                  <div className="collapsible-header">
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
                  <div className="collapsible-header">
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
                  <div className="collapsible-header">
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
                  <div className="collapsible-header">
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
                          <a href="javascript:void(0)">
                            India Elections{" "}
                            <i
                              className="fa fa-plus"
                              style={{ transform: "rotate(0deg)" }}
                            ></i>
                          </a>
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
                          <a href="javascript:void(0)">
                            Pro Kabaddi League{" "}
                            <i
                              className="fa fa-plus"
                              style={{ transform: "rotate(0deg)" }}
                            ></i>
                          </a>
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

export default Headerafter;
