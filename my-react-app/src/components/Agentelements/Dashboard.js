import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="total">
        <div className="hero-section">
          <h2>DASHBOARD</h2>
          <div className="box-content-flex">
            <div className="box-content">
              <h6>Parent</h6>
              <p>
                Credit Reference
                <span className="right">1000.00</span>
              </p>
              <p>
                Master Balance
                <span className="right">1000.00</span>
              </p>
              <p>
                Settlement
                <span className="right">0.00</span>
              </p>
            </div>
            <div className="box-content">
              <h6>Own</h6>
              <p>
                Credit Reference
                <span className="right">1000.00</span>
              </p>
              <p>
                Profit Loss
                <span className="right">0.00</span>
              </p>
              <p>
                PL with Balance
                <span className="right">1000.00</span>
              </p>
            </div>
            <div className="box-content">
              <h6>Child</h6>
              <p>
                Credit Reference
                <span className="right">1000.00</span>
              </p>
              <p>
                Balance
                <span className="right">0.00</span>
              </p>
              <p>
                Settlement
                <span className="right">1000.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="data-boxes">
          <div className="data-content">
            <i className="ri-stack-line" />
            <p className="data-right">
              <a href="">0</a>
              <br />
              <span className="data-right2">Logged in</span>
            </p>
          </div>
          <div className="data-content">
            <i className="ri-camera-lens-line" />
            <p className="data-right">
              <a href="">Click Here</a>
              <br />
              <span className="data-right2">Week PL</span>
            </p>
          </div>
          <div className="data-content">
            <i className="ri-money-dollar-box-line" />
            <p className="data-right">
              <a href="">0</a>
              <br />
              <span className="data-right2">Active Clients</span>
            </p>
          </div>
          <div className="data-content">
            <i className="ri-money-dollar-box-line" />
            <p className="data-right">
              <a href="">Click Here</a>
              <br />
              <span className="data-right2">Week Commission</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
