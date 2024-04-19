import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import "./Style.css";
import "../css-agent/agentdashboard.css";
import "../css-agent/agentdashboardview.css";
// import "../template-agent/site.min.css"
import "../template-agent/style.css";
// import "../template-agent/app.css"
import "../template-agent/font-Fira.css";
import "../template-agent/icons.css";
import "../template-agent/bootstraplocal.css";
import Dashboard from "./Agentelements/Dashboard";
import Userlist from "./Agentelements/Userlist";
import AddClientForm from "./Agentelements/AddClientForm";
import AddAgentForm from "./Agentelements/AddAgentForm";
import BalanceSheet from "./Agentelements/BalanceSheet";
import OpenMarkets from "./Agentelements/OpenMarkets";
import RiskAnalysis from "./Agentelements/RiskAnalysis";


function Agent() {
  let { username } = useParams();

  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };


  return (
    <>
    

      <div className="header">
        <div className="threelines" onClick={toggleSidenav}>
          <i
            className="fa-solid fa-bars"
            style={{ fontSize: "1.5rem", color: "#fff", marginLeft: "7px" }}
          ></i>
        </div>
        <img
          src="https://cdn.cloudd.live/parkinplay.bet/ap/logo-light.png?v=5"
          alt=""
        />
        <div className="header-content">
          <ul>
            <li>
              <i className="ri-money-dollar-circle-fill" id="Dollar"></i>
            </li>
            <li>
              <i className="ri-search-line"></i>
            </li>
            <li>
              <i className="ri-dashboard-fill"></i>
            </li>
            <li>
              <i className="ri-fullscreen-line"></i>
            </li>
            <li>
              <i className="ri-user-fill"></i>
              <span className="user-name">{username}</span>
              <select name="" id="user-name">
                <option value=""> Demo</option>
                <option value="">Block Market</option>
                <option value="">Unblock Market </option>
                <a href="/index.html">
                  <i className="ri-logout-box-r-fill"></i>
                  <option value=""> Sign Out </option>
                </a>
              </select>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav2-content">
        <div
          className="go-to-content"
          style={{ display: isSidenavOpen ? "flex" : "none" }}
        >
          <p className="">
            <Link
              to={`/agent/${username}/dashboard`}
              role="button"
              style={{ color: "#242424", fontWeight: 400 }}
            >
              <i className="ri-computer-line"></i> Dashboard
            </Link>
          </p>
          <p className="">
            <Link
              to={`/agent/${username}/userlist`}
              role="button"
              style={{ color: "#242424", fontWeight: 400 }}
            >
              <i className="ri-group-line"></i>User List
            </Link>
          </p>
          <p className="">
            <Link
              to={`/agent/${username}/riskanalysis`}
              role="button"
              style={{ color: "#242424", fontWeight: 400 }}
            >
              <i className="ri-line-chart-fill"></i>Risk Analysis
            </Link>
          </p>
          <p className="">
            <Link
              to={`/agent/${username}/balancesheet`}
              role="button"
              style={{ color: "#242424", fontWeight: 400 }}
            >
              <i className="ri-file-text-line"></i>Balance Sheet
            </Link>
          </p>
          <p className="">
            <Link
              to={`/agent/${username}/openmarkets`}
              role="button"
              style={{ color: "#242424", fontWeight: 400 }}
            >
              <i className="ri-book-open-line"></i>Open Markets
            </Link>
          </p>
          <p className="" style={{ display: "flex", width: "fit-content" }}>
            <i className="ri-lock-line"></i>
            <select name="" id="">
              <option value="">Block/Unblock</option>
              <option value="">Block Market</option>
              <option value="">Unblock Market </option>
            </select>
          </p>
          <p className="">
            <i className="ri-book-open-line"></i>
            <select name="" id="">
              <option value="">Reports</option>
              <option value="">Event Wise Market PL </option>
              <option value="">Client Bet History</option>
              <option value="">Account Statement</option>
              <option value="">User Wise PL</option>
              <option value="">Market PL</option>
              <option value="">Bet Failed Reason</option>
              <option value="">Market Wise Stake</option>
              <option value="">Request Log</option>
              <option value="">Cash Statement</option>
              <option value="">Open Bets</option>
            </select>
          </p>
          <p className="" style={{ display: "flex", width: "fit-content" }}>
            <i className="ri-book-open-line"></i>
            <select name="" id="">
              <option value="">Report History</option>
              <option value="">Balance Sheet</option>
              <option value="">Account Statement</option>
              <option value="">User Wise PL</option>
              <option value="">Market PL</option>
              <option value="">Cash Statement</option>
            </select>
          </p>
        </div>

        <>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/userlist" element={<Userlist />} />
            <Route path="/riskanalysis" element={<RiskAnalysis />} />
            <Route path="/balancesheet" element={<BalanceSheet />} />
            <Route path="/openmarkets" element={<OpenMarkets />} />
            <Route path="/AddClient" element={<AddClientForm />} />
            <Route
              path="/AddAgent"
              element={<AddAgentForm agentusername={username} />}
            />
          </Routes>
        </>
      </div>
    </>
  );
}

export default Agent;
