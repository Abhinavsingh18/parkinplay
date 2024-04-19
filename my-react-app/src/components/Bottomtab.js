import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import './Style.css';

function Bottomtab(props){
  const comp = useRef(null);
    const [animate, setAnimate] = useState(false);

    useLayoutEffect(() => {
        if (animate) {
            const tl = gsap.timeline();
            tl.to('#m-itm-2',{
                y:-56,
                x:-18,
                delay:0.4,
                scale:1.9,
                backgroundColor: "white",
                borderColor: "grey",
                borderWidth: "0.2px",
                borderStyle: "solid",
                boxShadow: "2px 5px 5px rgba(0, 0, 0, 0.5)"
            })
            .to('#m-itm-3',{
                y:-56,
                x:18,
                delay:0.5,
                scale:1.9,
                backgroundColor: "white",
                borderColor: "grey",
                borderWidth: "0.2px",
                borderStyle: "solid",
                boxShadow: "2px 5px 5px rgba(0, 0, 0, 0.5)"
            }, "-=1")
            .to('#m-itm-1',{
                y:-25,
                x:-53,
                delay:0.3,
                scale:1.9,
                backgroundColor: "white",
                borderColor: "grey",
                borderWidth: "0.2px",
                borderStyle: "solid",
                boxShadow: "2px 5px 5px rgba(0, 0, 0, 0.5)"
            }, "-=1")
            .to('#m-itm-4',{
                y:-25,
                x:53,
                delay:0.6,
                scale:1.9,
                backgroundColor: "white",
                borderColor: "grey",
                borderWidth: "0.2px",
                borderStyle: "solid",
                boxShadow: "2px 5px 5px rgba(0, 0, 0, 0.5)"
            }, "-=1");

            tl.timeScale(1).addPause(2);

            return () => {
                tl.kill();
            };
        } else {
            gsap.to('#m-itm-1, #m-itm-2, #m-itm-3, #m-itm-4', {
                duration: 1,
                y: 0,
                x: 0,
                scale: 1,
                backgroundColor: "initial",
                borderColor: "initial",
                borderWidth: "initial",
                borderStyle: "initial",
                boxShadow: "initial"
            });
        }
    }, [animate]);

    const [isdrop, setdrop] = useState(false);
    const dropdown2 = () => {
      
        setdrop(!isdrop);
    };
             

  
  return (
  <div _ngcontent-kub-c67="" className="bottom-tabs" ref={comp}>
  <ul _ngcontent-kub-c67="">
    <li _ngcontent-kub-c67="" className="truncate">
      <a href="index.html" _ngcontent-kub-c67="" className="active">
        <svg
          _ngcontent-kub-c67=""
          xmlns="http://www.w3.org/2000/svg"
          width="18.372"
          height="17.153"
          viewBox="0 0 18.372 17.153"
        >
          <g
            _ngcontent-kub-c67=""
            id="Group_396"
            data-name="Group 396"
            transform="translate(-0.045 0.003)"
          >
            <g _ngcontent-kub-c67="" id="Group_395" data-name="Group 395">
              <path
                _ngcontent-kub-c67=""
                id="Path_185"
                data-name="Path 185"
                d="M18.11,24.8l-2.791-2.791V18.781a1.056,1.056,0,0,0-2.111,0v1.113L11.13,17.815a2.777,2.777,0,0,0-3.84,0L.31,24.8A1.056,1.056,0,0,0,1.8,26.291l6.979-6.98a.623.623,0,0,1,.854,0l6.98,6.98a1.056,1.056,0,0,0,1.5-1.491Z"
                transform="translate(-0.001 -17.047)"
                fill="#333"
              />
              <path
                _ngcontent-kub-c67=""
                id="Path_186"
                data-name="Path 186"
                d="M75.652,127.9a.518.518,0,0,0-.733,0l-6.139,6.138a.52.52,0,0,0-.152.367v4.477a1.9,1.9,0,0,0,1.9,1.9h3.04v-4.707H77v4.707h3.04a1.9,1.9,0,0,0,1.9-1.9V134.4a.518.518,0,0,0-.152-.367Z"
                transform="translate(-66.075 -123.632)"
                fill="#333"
              />
            </g>
          </g>
        </svg>
        Home
      </a>
    </li>
    <li _ngcontent-kub-c67=""  className="truncate">
      <a _ngcontent-kub-c67="">
        <svg
          _ngcontent-kub-c67=""
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
        >
          <path
            _ngcontent-kub-c67=""
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 18v-12l10 6-10 6z"
          ></path>
        </svg>
        In-Play
      </a>
    </li>
    <div className="onb" style={{ display: "none" }}>
      <div
        className="onb-item itm1"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(-13px, -55px)",
          
        }}
      >
        <svg
          _ngcontent-die-c67=""
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 14.144 14.422"
        >
          <path
            _ngcontent-die-c67=""
            id="Path_188"
            data-name="Path 188"
            d="M9.963,8.561A5.424,5.424,0,1,0,8.294,10.1l4,3.976a1.136,1.136,0,1,0,1.647-1.564l-.041-.041Zm-4.431.371A3.5,3.5,0,1,1,8.009,7.905,3.5,3.5,0,0,1,5.532,8.932Zm0,0"
            transform="translate(-0.109 -0.007)"
          />
        </svg>
      </div>
      <div
        className="onb-item itm2"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(-8px, -95px)"
        }}
      >
        <svg
          _ngcontent-die-c67=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 357.058 475.569"
          width={16}
          height={21}
        >
          <g _ngcontent-die-c67="" id="tap" transform="translate(-0.284)">
            <path
              _ngcontent-die-c67=""
              id="Path_1"
              fill="#242424"
              d="M 318.918 187.566 h -0.668 a 36.676 36.676 0 0 0 -24.719 9.4 c -5.492 -15.2 -19.449 -26.125 -35.8 -26.125 A 37.139 37.139 0 0 0 231.2 182.254 c -6.383 -12.922 -19.187 -21.687 -33.91 -21.687 h -0.711 a 34.815 34.815 0 0 0 -21.832 7.273 V 75.718 c 0 -22.262 -17.332 -40.371 -38.414 -40.371 c -21.059 0 -38.3 18.1 -38.313 40.344 l -0.176 182.773 L 87.5 245.9 a 52.171 52.171 0 0 0 -36.867 -19.363 A 51.334 51.334 0 0 0 12.18 240.148 l -9 7.457 a 8 8 0 0 0 -1.992 9.852 l 87.5 168.2 c 16 30.738 46.441 49.914 79.445 49.914 H 266.75 v -0.086 c 50 0 90.539 -43.387 90.59 -96.66 c 0.02 -23.836 -0.07 -41.6 -0.055 -56 c 0.051 -38.523 0.012 -52.738 -0.086 -95.18 c -0.051 -22.211 -17.258 -40.078 -38.281 -40.078 Z m 22.25 135.2 c -0.016 14.4 -0.039 32.238 -0.062 56.074 c -0.043 44.465 -33.609 80.723 -74.824 80.723 H 168.141 c -27.016 0 -52.02 -15.879 -65.25 -41.3 L 18.363 255.839 l 4.172 -3.48 c 0.105 -0.086 0.207 -0.187 0.309 -0.277 A 35.512 35.512 0 0 1 49.508 242.5 a 36.3 36.3 0 0 1 25.609 13.563 l 24.488 29.8 a 8 8 0 0 0 14.18 -5.07 L 113.93 75.7 c 0.008 -13.43 10.164 -24.355 22.414 -24.355 S 158.75 62.28 158.75 75.718 v 123.66 c 0 0.43 -0.02 0.863 -0.02 1.3 c 0 0.188 0.02 0.379 0.02 0.563 v 52.871 a 8 8 0 1 0 16 0 V 199.647 c 0 -12.957 9.9 -23.082 21.832 -23.082 h 0.711 c 12.258 0 22.457 10.684 22.457 24.121 v 48.379 a 8 8 0 1 0 16 0 V 211.108 c 0 -13.441 9.711 -24.375 22.035 -24.375 c 12.254 0 21.965 10.93 21.965 24.375 v 35.809 a 8 8 0 0 0 16 0 V 227.526 c 0 -13.441 10.242 -23.961 22.5 -23.961 h 0.668 c 12.227 0 22.191 10.7 22.223 24.1 c 0.1 42.41 0.078 56.609 0.027 95.105 Z m 0 0"
              data-name="Path 1"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_2"
              fill="#242424"
              d="M 72.609 79.172 a 8 8 0 0 0 8 -8 a 55.438 55.438 0 0 1 110.875 0 a 8 8 0 1 0 16 0 a 71.438 71.438 0 0 0 -142.875 0 a 8 8 0 0 0 8 8 Z m 0 0"
              data-name="Path 2"
            />
          </g>
        </svg>
      </div>
      <div
        className="onb-item itm3"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(8px, -95px)"
        }}
      >
        <svg
          className="ddd"
          style={{ scale: "0.5" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
        </svg>
      </div>
      <div
        className="onb-item itm4 switch-app ttt"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(13px, -55px)"
        }}
      >
        <svg
          _ngcontent-die-c67=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.24 25.178"
          width="25.24"
          height="25.178"
        >
          <g
            _ngcontent-die-c67=""
            id="Group_3"
            transform="translate(-1073.83 -675.943)"
            data-name="Group 3"
          >
            <path
              _ngcontent-die-c67=""
              id="Path_1"
              fill="#ff9b09"
              transform="translate(-45.888 400.063) rotate(3)"
              d="M 1141.64 223.276 l -3.852 -3.944 l -1.547 1.393 l 4.01 4.025 Z"
              data-name="Path 1"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_2"
              fill="#ff9b09"
              transform="translate(-168.174 500.976)"
              d="M 1253.96 180.713 l 0.032 -5.746 h 1.968 v 5.746 Z"
              data-name="Path 2"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_3"
              fill="#ff9b09"
              transform="translate(-218.06 390.752) rotate(3)"
              d="M 1322.36 223.379 l 3.844 -3.988 l 1.53 1.422 l -3.893 3.928 Z"
              data-name="Path 3"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_4"
              fill="#ff9b09"
              transform="matrix(0.998 0.07 -0.07 0.998 -233.764 256.876)"
              d="M 1353.91 337.163 h 5.756 v 1.966 h -5.756 Z"
              data-name="Path 4"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_5"
              fill="#ff9b09"
              transform="translate(-206.814 219.648) rotate(3)"
              d="M 1321.94 404.826 l 4.019 4.007 l -1.386 1.431 l -4.057 -3.965 Z"
              data-name="Path 5"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_6"
              fill="#ff9b09"
              transform="matrix(0.995 0.105 -0.105 0.995 -116.358 129.195)"
              d="M 1256.27 443.038 h -2.045 v -5.7 h 2.045 Z"
              data-name="Path 6"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_7"
              fill="#ff9b09"
              transform="translate(-36.146 229.555) rotate(3)"
              d="M 1135.53 407.825 l 4.144 -4 l 1.391 1.443 l -4.045 4.03 Z"
              data-name="Path 7"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_8"
              fill="#ff9b09"
              transform="matrix(0.998 0.07 -0.07 0.998 8.164 274.816)"
              d="M 1097.66 337 v 1.858 h -5.7 v -1.94 l 5.7 -0.012 Z"
              data-name="Path 8"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_9"
              fill="#ff9b09"
              transform="translate(-117.404 400.953)"
              d="M 1203.86 282.988 a 3.81 3.81 0 0 1 0.559 4.651 c -1.567 2.586 -5.076 0.971 -5.076 0.971 a 4.568 4.568 0 0 1 0.959 -3.983 A 4.231 4.231 0 0 1 1203.86 282.988 Z"
              data-name="Path 9"
            />
            <path
              _ngcontent-die-c67=""
              id="Path_10"
              fill="#ff9b09"
              transform="translate(-127.572 397.159)"
              d="M 1210.21 293.825 a 5.35 5.35 0 0 0 2.72 0.085 a 4.853 4.853 0 0 0 2.659 -2.076 a 4.441 4.441 0 0 0 -0.061 -4.76 a 4.573 4.573 0 0 1 1.688 1.032 c 1.117 1.062 2.2 3.043 0.607 5.8 a 4.757 4.757 0 0 1 -5.9 1.53 A 3.356 3.356 0 0 1 1210.21 293.825 Z"
              data-name="Path 10"
            />
          </g>
        </svg>
      </div>
    </div>
    
    <li _ngcontent-kub-c67="" className="truncate">
      <a _ngcontent-kub-c67="" href="javascript:void(0);">
        &nbsp;
      </a>
    </li>
    <li _ngcontent-kub-c67="" className="big bbiigg" onClick={() => setAnimate(!animate)} >
      <a _ngcontent-kub-c67=""  href="javascript:void(0);">
        {/**/}
        <span _ngcontent-kub-c67="" >
        
          <svg
            _ngcontent-kub-c67=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 357.058 475.569"
            width={19}
            height={29}
            style={{padding:"1.75px",boxSizing:"border-box", borderRadius:"50%",height:"20px",width:"20px"}}
            id='m-itm-2'
          >
            <g _ngcontent-kub-c67=""  id="tap"  transform="translate(-0.284)">
              <path
                _ngcontent-kub-c67=""
                id="Path_1"
                fill="#242424"
                d="M 318.918 187.566 h -0.668 a 36.676 36.676 0 0 0 -24.719 9.4 c -5.492 -15.2 -19.449 -26.125 -35.8 -26.125 A 37.139 37.139 0 0 0 231.2 182.254 c -6.383 -12.922 -19.187 -21.687 -33.91 -21.687 h -0.711 a 34.815 34.815 0 0 0 -21.832 7.273 V 75.718 c 0 -22.262 -17.332 -40.371 -38.414 -40.371 c -21.059 0 -38.3 18.1 -38.313 40.344 l -0.176 182.773 L 87.5 245.9 a 52.171 52.171 0 0 0 -36.867 -19.363 A 51.334 51.334 0 0 0 12.18 240.148 l -9 7.457 a 8 8 0 0 0 -1.992 9.852 l 87.5 168.2 c 16 30.738 46.441 49.914 79.445 49.914 H 266.75 v -0.086 c 50 0 90.539 -43.387 90.59 -96.66 c 0.02 -23.836 -0.07 -41.6 -0.055 -56 c 0.051 -38.523 0.012 -52.738 -0.086 -95.18 c -0.051 -22.211 -17.258 -40.078 -38.281 -40.078 Z m 22.25 135.2 c -0.016 14.4 -0.039 32.238 -0.062 56.074 c -0.043 44.465 -33.609 80.723 -74.824 80.723 H 168.141 c -27.016 0 -52.02 -15.879 -65.25 -41.3 L 18.363 255.839 l 4.172 -3.48 c 0.105 -0.086 0.207 -0.187 0.309 -0.277 A 35.512 35.512 0 0 1 49.508 242.5 a 36.3 36.3 0 0 1 25.609 13.563 l 24.488 29.8 a 8 8 0 0 0 14.18 -5.07 L 113.93 75.7 c 0.008 -13.43 10.164 -24.355 22.414 -24.355 S 158.75 62.28 158.75 75.718 v 123.66 c 0 0.43 -0.02 0.863 -0.02 1.3 c 0 0.188 0.02 0.379 0.02 0.563 v 52.871 a 8 8 0 1 0 16 0 V 199.647 c 0 -12.957 9.9 -23.082 21.832 -23.082 h 0.711 c 12.258 0 22.457 10.684 22.457 24.121 v 48.379 a 8 8 0 1 0 16 0 V 211.108 c 0 -13.441 9.711 -24.375 22.035 -24.375 c 12.254 0 21.965 10.93 21.965 24.375 v 35.809 a 8 8 0 0 0 16 0 V 227.526 c 0 -13.441 10.242 -23.961 22.5 -23.961 h 0.668 c 12.227 0 22.191 10.7 22.223 24.1 c 0.1 42.41 0.078 56.609 0.027 95.105 Z m 0 0"
                data-name="Path 1"
              />
              <path
                _ngcontent-kub-c67=""
                id="Path_2"
                fill="#242424"
                d="M 72.609 79.172 a 8 8 0 0 0 8 -8 a 55.438 55.438 0 0 1 110.875 0 a 8 8 0 1 0 16 0 a 71.438 71.438 0 0 0 -142.875 0 a 8 8 0 0 0 8 8 Z m 0 0"
                data-name="Path 2"
              />
            </g>
          </svg>
      

        

          <svg
            _ngcontent-kub-c67=""
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 14.144 14.422"
            style={{ padding:"1.9px",boxSizing:"border-box", borderRadius:"50%",height:"20px",width:"20px"}}
            id='m-itm-3'
          >
            <path
              _ngcontent-kub-c67=""
              id="Path_188"
              data-name="Path 188"
              d="M9.963,8.561A5.424,5.424,0,1,0,8.294,10.1l4,3.976a1.136,1.136,0,1,0,1.647-1.564l-.041-.041Zm-4.431.371A3.5,3.5,0,1,1,8.009,7.905,3.5,3.5,0,0,1,5.532,8.932Zm0,0"
              transform="translate(-0.109 -0.007)"
            />
          </svg>
        </span>
        {/**/}
        <span _ngcontent-kub-c67="">
          <svg
            _ngcontent-kub-c67=""
            xmlns="http://www.w3.org/2000/svg"
            version={1.0}
            width="203.000000pt"
            height="251.000000pt"
            viewBox="0 0 203.000000 251.000000"
            preserveAspectRatio="xMidYMid meet"
            style={{padding:"1.75px",boxSizing:"border-box", borderRadius:"50%",height:"20px",width:"20px"}}
            id='m-itm-1'
          >
            <g
              _ngcontent-kub-c67=""
              transform="translate(0.000000,251.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                _ngcontent-kub-c67=""
                d="M872 2400 c-171 -24 -345 -113 -474 -242 -57 -57 -168 -214 -168 -238 0 -6 -5 -8 -12 -4 -6 4 -8 3 -4 -4 3 -6 -3 -35 -14 -65 -142 -380 26 -830 386 -1030 264 -147 600 -142 851 13 355 218 499 632 359 1025 -40 110 -95 195 -190 293 -115 119 -257 203 -398 237 -79 19 -253 27 -336 15z m-2 -169 l0 -69 -32 -7 c-18 -4 -64 -21 -101 -38 l-68 -30 -45 44 c-24 24 -44 46 -44 49 0 22 220 116 278 119 8 1 12 -19 12 -68z m333 54 c68 -18 140 -52 133 -64 -7 -10 22 -37 52 -48 22 -8 21 -9 -17 -47 l-40 -39 -68 30 c-37 17 -83 34 -100 38 l-33 7 0 69 c0 38 4 69 8 69 4 0 34 -7 65 -15z m-80 -230 c231 -60 387 -262 387 -500 0 -142 -46 -250 -150 -356 -104 -106 -208 -149 -361 -149 -106 0 -192 24 -275 78 -311 203 -313 648 -3 861 106 73 271 100 402 66z m-669 -208 c-17 -34 -38 -81 -45 -104 l-12 -43 -68 0 -68 0 6 33 c13 70 73 203 112 250 14 17 18 15 61 -28 l47 -46 -33 -62z m1189 101 c35 -56 80 -161 92 -215 l7 -33 -70 0 -69 0 -12 43 c-7 23 -27 70 -45 104 l-33 61 46 46 c25 25 47 46 48 46 2 0 18 -24 36 -52z m-1243 -540 c6 -24 25 -74 42 -111 l31 -68 -43 -44 c-24 -25 -47 -45 -51 -45 -25 0 -119 226 -119 284 0 25 2 26 65 26 l64 0 11 -42z m1340 18 c0 -62 -93 -286 -118 -286 -4 0 -27 20 -51 44 l-44 45 26 55 c14 30 33 79 42 110 l16 56 65 0 c61 0 64 -1 64 -24z m-1016 -419 c37 -18 64 -35 61 -38 -2 -3 3 -6 13 -6 74 1 72 3 72 -73 0 -83 0 -83 -108 -46 -70 24 -146 61 -187 92 -18 14 -17 16 25 59 24 25 47 45 51 45 4 0 37 -15 73 -33z m674 -10 c23 -23 42 -46 42 -49 0 -24 -234 -127 -288 -128 -22 0 -23 3 -20 65 l3 66 68 24 c37 13 82 32 100 44 17 11 37 21 42 21 6 0 30 -19 53 -43z"
              ></path>
              <path
                _ngcontent-kub-c67=""
                d="M911 1967 c-6 -6 -11 -27 -11 -47 0 -27 -7 -43 -31 -66 -44 -42 -59 -76 -59 -134 0 -107 79 -190 180 -190 52 0 96 -22 115 -60 53 -102 -53 -208 -155 -155 -32 17 -50 44 -59 89 -13 59 -71 57 -71 -3 1 -34 32 -101 59 -125 16 -15 21 -31 21 -71 0 -46 12 -75 31 -75 19 0 39 35 39 66 0 31 3 34 29 34 28 0 30 -3 33 -41 6 -87 68 -75 68 13 0 42 4 53 25 70 14 11 33 34 42 51 19 36 33 139 20 153 -4 5 -18 25 -30 44 -30 46 -91 80 -145 80 -82 0 -132 48 -132 126 0 54 53 104 110 104 58 0 96 -29 113 -88 16 -54 38 -72 61 -53 31 26 13 97 -37 157 -19 23 -27 43 -27 72 0 72 -61 84 -68 13 -3 -27 -7 -31 -33 -31 -23 0 -29 4 -29 23 0 39 -36 67 -59 44z"
              ></path>
              <path
                _ngcontent-kub-c67=""
                d="M193 671 c-67 -20 -127 -40 -131 -46 -9 -10 19 -301 36 -375 9 -40 -1 -37 322 -95 80 -14 204 -37 275 -50 233 -43 309 -55 348 -55 30 0 117 39 385 174 510 256 492 246 509 284 27 64 -16 132 -83 132 -17 0 -171 -47 -342 -105 -171 -58 -317 -105 -325 -105 -9 0 -17 -15 -21 -41 -5 -28 -18 -53 -40 -75 -51 -51 -66 -50 -331 23 -212 58 -245 75 -226 112 17 30 40 27 239 -29 220 -63 244 -67 265 -45 9 9 17 20 17 25 0 21 -41 50 -105 73 -217 79 -664 237 -667 236 -2 -1 -58 -18 -125 -38z"
              ></path>
            </g>
          </svg>
          <svg
            _ngcontent-kub-c67=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.24 25.178"
            width="25.24"
            height="25.178"
            style={{padding:"1.75px",boxSizing:"border-box", borderRadius:"50%",height:"20px",width:"20px"}}
            id='m-itm-4'
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
              ></path>
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
              ></path>
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
        </span>
        {/**/}
      </a>
      
      <span _ngcontent-kub-c67="" className="menu-item items">
        <a _ngcontent-kub-c67="" href="javascript:void(0);">
          <svg
            _ngcontent-kub-c67=""
            xmlns="http://www.w3.org/2000/svg"
            version={1.0}
            width="203.000000pt"
            height="251.000000pt"
            viewBox="0 0 203.000000 251.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              _ngcontent-kub-c67=""
              transform="translate(0.000000,251.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                _ngcontent-kub-c67=""
                d="M872 2400 c-171 -24 -345 -113 -474 -242 -57 -57 -168 -214 -168 -238 0 -6 -5 -8 -12 -4 -6 4 -8 3 -4 -4 3 -6 -3 -35 -14 -65 -142 -380 26 -830 386 -1030 264 -147 600 -142 851 13 355 218 499 632 359 1025 -40 110 -95 195 -190 293 -115 119 -257 203 -398 237 -79 19 -253 27 -336 15z m-2 -169 l0 -69 -32 -7 c-18 -4 -64 -21 -101 -38 l-68 -30 -45 44 c-24 24 -44 46 -44 49 0 22 220 116 278 119 8 1 12 -19 12 -68z m333 54 c68 -18 140 -52 133 -64 -7 -10 22 -37 52 -48 22 -8 21 -9 -17 -47 l-40 -39 -68 30 c-37 17 -83 34 -100 38 l-33 7 0 69 c0 38 4 69 8 69 4 0 34 -7 65 -15z m-80 -230 c231 -60 387 -262 387 -500 0 -142 -46 -250 -150 -356 -104 -106 -208 -149 -361 -149 -106 0 -192 24 -275 78 -311 203 -313 648 -3 861 106 73 271 100 402 66z m-669 -208 c-17 -34 -38 -81 -45 -104 l-12 -43 -68 0 -68 0 6 33 c13 70 73 203 112 250 14 17 18 15 61 -28 l47 -46 -33 -62z m1189 101 c35 -56 80 -161 92 -215 l7 -33 -70 0 -69 0 -12 43 c-7 23 -27 70 -45 104 l-33 61 46 46 c25 25 47 46 48 46 2 0 18 -24 36 -52z m-1243 -540 c6 -24 25 -74 42 -111 l31 -68 -43 -44 c-24 -25 -47 -45 -51 -45 -25 0 -119 226 -119 284 0 25 2 26 65 26 l64 0 11 -42z m1340 18 c0 -62 -93 -286 -118 -286 -4 0 -27 20 -51 44 l-44 45 26 55 c14 30 33 79 42 110 l16 56 65 0 c61 0 64 -1 64 -24z m-1016 -419 c37 -18 64 -35 61 -38 -2 -3 3 -6 13 -6 74 1 72 3 72 -73 0 -83 0 -83 -108 -46 -70 24 -146 61 -187 92 -18 14 -17 16 25 59 24 25 47 45 51 45 4 0 37 -15 73 -33z m674 -10 c23 -23 42 -46 42 -49 0 -24 -234 -127 -288 -128 -22 0 -23 3 -20 65 l3 66 68 24 c37 13 82 32 100 44 17 11 37 21 42 21 6 0 30 -19 53 -43z"
              ></path>
              <path
                _ngcontent-kub-c67=""
                d="M911 1967 c-6 -6 -11 -27 -11 -47 0 -27 -7 -43 -31 -66 -44 -42 -59 -76 -59 -134 0 -107 79 -190 180 -190 52 0 96 -22 115 -60 53 -102 -53 -208 -155 -155 -32 17 -50 44 -59 89 -13 59 -71 57 -71 -3 1 -34 32 -101 59 -125 16 -15 21 -31 21 -71 0 -46 12 -75 31 -75 19 0 39 35 39 66 0 31 3 34 29 34 28 0 30 -3 33 -41 6 -87 68 -75 68 13 0 42 4 53 25 70 14 11 33 34 42 51 19 36 33 139 20 153 -4 5 -18 25 -30 44 -30 46 -91 80 -145 80 -82 0 -132 48 -132 126 0 54 53 104 110 104 58 0 96 -29 113 -88 16 -54 38 -72 61 -53 31 26 13 97 -37 157 -19 23 -27 43 -27 72 0 72 -61 84 -68 13 -3 -27 -7 -31 -33 -31 -23 0 -29 4 -29 23 0 39 -36 67 -59 44z"
              ></path>
              <path
                _ngcontent-kub-c67=""
                d="M193 671 c-67 -20 -127 -40 -131 -46 -9 -10 19 -301 36 -375 9 -40 -1 -37 322 -95 80 -14 204 -37 275 -50 233 -43 309 -55 348 -55 30 0 117 39 385 174 510 256 492 246 509 284 27 64 -16 132 -83 132 -17 0 -171 -47 -342 -105 -171 -58 -317 -105 -325 -105 -9 0 -17 -15 -21 -41 -5 -28 -18 -53 -40 -75 -51 -51 -66 -50 -331 23 -212 58 -245 75 -226 112 17 30 40 27 239 -29 220 -63 244 -67 265 -45 9 9 17 20 17 25 0 21 -41 50 -105 73 -217 79 -664 237 -667 236 -2 -1 -58 -18 -125 -38z"
              ></path>
            </g>
          </svg>
        </a>
      </span>
      <span _ngcontent-kub-c67="" className="menu-item items">
        <a _ngcontent-kub-c67="" href="javascript:void(0);">
          <svg
            _ngcontent-kub-c67=""
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 14.144 14.422"
          >
            <path
              _ngcontent-kub-c67=""
              id="Path_188"
              data-name="Path 188"
              d="M9.963,8.561A5.424,5.424,0,1,0,8.294,10.1l4,3.976a1.136,1.136,0,1,0,1.647-1.564l-.041-.041Zm-4.431.371A3.5,3.5,0,1,1,8.009,7.905,3.5,3.5,0,0,1,5.532,8.932Zm0,0"
              transform="translate(-0.109 -0.007)"
            />
          </svg>
        </a>
      </span>
      <span _ngcontent-kub-c67="" className="toggle-switch menu-item items">
        <input
          _ngcontent-kub-c67=""
          type="checkbox"
          id="switch-mobile"
          className="ng-untouched ng-pristine ng-valid"
        />
        <div _ngcontent-kub-c67="" className="switch-app">
          <div _ngcontent-kub-c67="" className="content">
            <label _ngcontent-kub-c67="" htmlFor="switch-mobile">
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
      </span>
      <span _ngcontent-kub-c67="" className="bottom-circle">
        <span _ngcontent-kub-c67="" className="circle-nav">
          <span _ngcontent-kub-c67="" className="circle-nav-open" />
        </span>
      </span>
    </li>
    <li _ngcontent-kub-c67="" className="truncate">
      <a href="./template/diamondcasino.html" _ngcontent-kub-c67="">
        <svg
          _ngcontent-kub-c67=""
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_2"
          data-name="Layer 2"
          width={18}
          height={18}
          viewBox="0 0 17.927 17.927"
        >
          <g _ngcontent-kub-c67="" id="_1" data-name={1}>
            <path
              _ngcontent-kub-c67=""
              id="Path_159"
              data-name="Path 159"
              d="M8.964,17.927a8.964,8.964,0,1,1,8.964-8.964,8.964,8.964,0,0,1-8.964,8.964Zm0-17.2A8.232,8.232,0,1,0,17.2,8.964,8.232,8.232,0,0,0,8.964.732Z"
              fill="#242424"
            />
            <path
              _ngcontent-kub-c67=""
              id="Path_160"
              data-name="Path 160"
              d="M59.172,64.294a5.122,5.122,0,1,1,5.122-5.122A5.122,5.122,0,0,1,59.172,64.294Zm0-9.512a4.39,4.39,0,1,0,4.39,4.39A4.39,4.39,0,0,0,59.172,54.782Z"
              transform="translate(-50.209 -50.209)"
              fill="#242424"
            />
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_44"
              data-name="Rectangle 44"
              width="1.402"
              height="1.402"
              transform="translate(8.262 1.951)"
              fill="#242424"
            />
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_45"
              data-name="Rectangle 45"
              width="2.053"
              height="3.191"
              transform="translate(15.325 7.744)"
              fill="#242424"
            />
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_46"
              data-name="Rectangle 46"
              width="2.053"
              height="3.191"
              transform="translate(0.65 7.744)"
              fill="#242424"
            />
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_47"
              data-name="Rectangle 47"
              width="2.053"
              height="3.191"
              transform="matrix(0.512, 0.859, -0.859, 0.512, 13.618, 13.943)"
              fill="#242424"
            />
            <path
              _ngcontent-kub-c67=""
              id="Path_161"
              data-name="Path 161"
              d="M46.211,11.61l1.323,2.276-2.741,1.635L43.47,13.244Z"
              transform="translate(-40.38 -10.785)"
              fill="#242424"
            />
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_48"
              data-name="Rectangle 48"
              width="2.053"
              height="3.191"
              transform="matrix(-0.512, 0.859, -0.859, -0.512, 7.153, 15.577)"
              fill="#242424"
            />
            <path
              _ngcontent-kub-c67=""
              id="Path_162"
              data-name="Path 162"
              d="M154.286,15.96l-1.256,1.967,2.741,1.635,1.255-1.967Z"
              transform="translate(-142.154 -14.826)"
              fill="#242424"
            />
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_49"
              data-name="Rectangle 49"
              width="1.402"
              height="1.402"
              transform="translate(8.262 15.122)"
              fill="#242424"
            />
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_50"
              data-name="Rectangle 50"
              width="1.395"
              height="1.395"
              transform="translate(14.865 4.887) rotate(59.826)"
              fill="#242424"
            ></rect>
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_51"
              data-name="Rectangle 51"
              width="1.395"
              height="1.395"
              transform="translate(3.561 11.541) rotate(59.826)"
              fill="#242424"
            ></rect>
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_52"
              data-name="Rectangle 52"
              width="1.402"
              height="1.402"
              transform="translate(4.235 5.666) rotate(120.27)"
              fill="#242424"
            />
            <rect
              _ngcontent-kub-c67=""
              id="Rectangle_53"
              data-name="Rectangle 53"
              width="1.402"
              height="1.402"
              transform="translate(15.611 12.305) rotate(120.27)"
              fill="#242424"
            ></rect>
            <path
              _ngcontent-kub-c67=""
              id="Path_163"
              data-name="Path 163"
              d="M102.231,83.124v-.845a2.909,2.909,0,0,1-1.411-.383l.235-.818a2.753,2.753,0,0,0,1.358.383c.549,0,.924-.27.924-.688,0-.392-.3-.645-.95-.88-.914-.33-1.506-.748-1.506-1.559a1.516,1.516,0,0,1,1.4-1.48V76h.711v.81a2.79,2.79,0,0,1,1.2.284l-.235.8a2.585,2.585,0,0,0-1.184-.3c-.61,0-.827.313-.827.61,0,.355.313.557,1.053.853.976.366,1.411.837,1.411,1.611a1.588,1.588,0,0,1-1.472,1.55v.9Z"
              transform="translate(-93.654 -70.598)"
              fill="#242424"
            />
          </g>
        </svg>
        <span _ngcontent-kub-c67="">Casino</span>
      </a>
    </li>
    {props.username ? (
       <li _ngcontent-kub-c67="" className="truncate">
      
       <Link  >       
         <svg
           _ngcontent-kub-c67=""
           xmlns="http://www.w3.org/2000/svg"
           width={18}
           height={18}
           viewBox="0 0 16 16"
         >
           <path
             _ngcontent-kub-c67=""
             id="ic_person_24px"
             d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0,2c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z"
             transform="translate(-4 -4)"
           />
         </svg>
         <span _ngcontent-kub-c67="" className="username" onClick={dropdown2}>
                 {props.username}
         </span>
         </Link>
      
       </li>
      ) : (
        <li _ngcontent-kub-c67="" className="truncate">
      
      <Link to="/signin" >       
        <svg
          _ngcontent-kub-c67=""
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 16 16"
        >
          <path
            _ngcontent-kub-c67=""
            id="ic_person_24px"
            d="M12,12A4,4,0,1,0,8,8,4,4,0,0,0,12,12Zm0,2c-2.67,0-8,1.34-8,4v2H20V18C20,15.34,14.67,14,12,14Z"
            transform="translate(-4 -4)"
          />
        </svg>
        <span _ngcontent-kub-c67="" className="username">
               signin
        </span>
        </Link>
     
  </li>
)}
  </ul>
  <ul id="dropdown2" style={{display:isdrop?"block":"none",}} className="dropdown-content animated animatedFadeInUp fadeInUp is-hidden is-show">
      <li><a><i className="fas fa-user"></i> Welcome, {props.username}</a></li>
      <li><a><i className="fas fa-chart-area"></i> Account Statement</a></li>
      <li><a><i className="fas fa-chart-line"></i> Profit-Loss</a></li>
      <li><a><i className="fas fa-trophy"></i> Results</a></li>
      <li><a><i className="fas fa-history"></i> My Bets</a></li>
      <li><a><i className="fas fa-cog"></i> Chip Setting</a></li>
      <li><a><i className="fas fa-key"></i> Change Password</a></li>
      <li><a><i className="fas fa-info-circle"></i> Terms and Condition</a></li>
      <li className="log-out"><Link to="/signin"><i className="fas fa-sign-out-alt"></i> Sign Out</Link></li>
      <li><a href="javascript:void(0)" className="close-btn"><i className="fas fa-times"></i></a></li>
</ul>
</div>


  );
};
export default Bottomtab;
