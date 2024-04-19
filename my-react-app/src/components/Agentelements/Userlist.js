import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Modal from "react-modal";

const Userlist = () => {
  let { username } = useParams(); //USED GLOBALLY IN THIS

  const [showPassword, setShowPassword] = useState(false); //////for deposit modal

  const [clients, setClients] = useState([]); //FOR DISPLAYING THE SET OF CLIENTS CORRESPONDING TO THE LOGGED IN AGENT
  ////////////////////////
  const calculateTotalBalance = () => {
    let totalPoints = 0;
    clients.forEach((client) => {
      totalPoints += parseInt(client.Point, 10);;
    });
    return totalPoints;
  };
  const calculateTotalReference = () => {
    let totalReference = 0;
    clients.forEach((client) => {
      totalReference += parseInt(client.Reference, 10);;
    });
    return totalReference;
  };
  const calculateTotalExposure = () => {
    let totalExposure = 0;
    clients.forEach((client) => {
      totalExposure += parseInt(client.Exposurelimit, 10);;
    });
    return totalExposure;
  };
/////////////////
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const [isOpenWithdraw, setisOpenWithdraw] = useState(false);
  const openModalWithdraw = () => {
    setisOpenWithdraw(true);
  };
  const closeModalWithdraw = () => {
    setisOpenWithdraw(false);
  };

  ///////////////////
  const [selectedClient, setSelectedClient] = useState(null);
  const [agentData, setAgentData] = useState(null);

  ///////////////
  useEffect(() => {
    axios
      .get(`http://localhost:3001/clients/${username}`)
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Error fetching clients:", error);
      });
  }, [username]);

  const handleButtonClick = (client) => {
    /////////FOR FETCHING THE CORRESPONDING SELECTED CLIENT AND DEPOSIT AND WITHDRAW
    setSelectedClient(client);
  };

  /////////////////

  useEffect(() => {
    axios
      .get(`http://localhost:3001/agent/${username}`)
      .then((response) => {
        setAgentData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching agent data:", error);
      });
  }, [username]);

  ////////////////////////
  const [DepositformData, setDepositFormData] = useState({
    password: "",
  });

  const handleChangeDeposit = (e) => {
    setDepositFormData({ ...DepositformData, [e.target.name]: e.target.value });
    console.log(DepositformData);
  };

  const [agentBalance, setAgentBalance] = useState();
  const [clientBalance, setClientBalance] = useState();
  const chipsRef = useRef("");

  const handleDeposit = () => {
    DepositformData.password === agentData[0].Password
      ? (() => {
          updateAgentPointDeposit(username, agentBalance);
          updateClientPointDeposit(selectedClient.Username, clientBalance);
        })()
      : alert("invalid password");
  };

  const updateAgentPointDeposit = (username, newPoint) => {
    axios
      .put(`http://localhost:3001/agent/${username}`, { Point: newPoint })
      .then((response) => {
        alert("CHIPS ADDED SUCCESFULLY")
      })
      .catch((error) => {
        // console.error("Error updating Agent Point:", error);
        alert("INTERNAL SERVER ISSUE")
      });
  };

  const updateClientPointDeposit = (username, newPoint) => {
    axios
      .put(`http://localhost:3001/client/${username}`, { Point: newPoint })
      .then((response) => {
        console.log("Client Point updated successfully");
      })
      .catch((error) => {
        console.error("Error updating Client Point:", error);
      });
  };
  return (
    <>
      {selectedClient && (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="custom-modal"
          style={{
            overlay: {
              zIndex: 1000,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "50%",
              height: "80%",
              margin: "auto",
              transform: "scale(0.8)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <div>
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="modal-title">
                  <label id="clientchipsmodaltitle">
                    {selectedClient.Username}
                  </label>
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                  onClick={closeModal}
                >
                  ×
                </button>
              </div>
              <div
                className="dt-buttons flex-wrap ol-lg-3 col-md-12 col-sm-12 col-xs-12 text-right hide"
                id="divNavFreechipCash"
              >
                <ul className="nav nav-tabs nav-bordered mb-4 text-left">
                  <li className="nav-item liDW">
                    <a
                      href="#FreeChip"
                      data-toggle="tab"
                      onclick="HideShowFreeChip(true)"
                      className="nav-link active"
                    >
                      Free Chips
                    </a>
                  </li>
                  <li className="nav-item liDW">
                    <a
                      href="#Cash"
                      data-toggle="tab"
                      onclick="HideShowFreeChip(false)"
                      className="nav-link"
                    >
                      Cash
                    </a>
                  </li>
                </ul>
              </div>
              <div className="modal-body" id="FreeChip">
                <form action="#" id="DepositWithdrawClientForm">
                  <div className="row">
                    <table className="datatable table dt-responsive nowrap">
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="hidden"
                              id="hdnAgentBalance"
                              defaultValue={898}
                            />
                            <input
                              type="hidden"
                              id="hdnClientBalance"
                              defaultValue={2}
                            />
                            <label
                              className="col-form-label"
                              htmlFor="chipstodeposit"
                            >
                              Deposit Credit :
                            </label>
                          </td>
                          <td>
                            <div className="input-group">
                              <input
                                className="form-control numeric"
                                id="txtIncreaseBalance"
                                name="chipstodeposit"
                                min={0}
                                placeholder="Enter Chips"
                                type="text"
                                required
                                maxLength={18}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  const newValue = parseInt(value) || 0;
                                  chipsRef.current = newValue;
                                  // updateBalances();
                                  const totalChipsEntered =
                                    parseInt(chipsRef.current) || 0;
                                  const newAgentBalance =
                                    agentData[0].Point - totalChipsEntered;
                                  const newClientBalance =
                                    parseInt(selectedClient.Point) +
                                    totalChipsEntered;
                                  setAgentBalance(
                                    newAgentBalance >= 0 ? newAgentBalance : 0
                                  );
                                  setClientBalance(newClientBalance);
                                }}
                              />
                              <span className="input-group-text hidden-sm">
                                PTS
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label">
                              {selectedClient.Parentname} [] :
                            </label>
                          </td>
                          <td>
                            <input
                              type="text"
                              id="txtAgentNewBalance"
                              disabled
                              className="form-control"
                              placeholder={agentData[0].Point}
                              value={agentBalance}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label">
                              {selectedClient.Username} [
                              {selectedClient.Clientname}] :
                            </label>
                          </td>
                          <td>
                            <input
                              type="text"
                              id="txtClientNewBalance"
                              disabled
                              className="form-control"
                              placeholder={selectedClient.Point}
                              value={clientBalance}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label">Remarks :</label>
                          </td>
                          <td>
                            <textarea
                              className="form-control textarea"
                              cols={20}
                              id="txtRemarkClientDW"
                              name="txtRemarkClientDW"
                              rows={2}
                              required
                              defaultValue={"Deposit Credit"}
                            />
                          </td>
                        </tr>
                        <tr className="b2bDWPassword">
                          <td>
                            <label
                              className="col-form-label"
                              htmlFor="password"
                            >
                              Password :
                            </label>
                          </td>
                          <td>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                name="password"
                                value={DepositformData.password}
                                onChange={handleChangeDeposit}
                                id="txtPassword"
                                placeholder="password"
                                required
                                type={showPassword ? "text" : "password"}
                                style={{
                                  border:
                                    DepositformData.password ===
                                    agentData[0].Password
                                      ? "1px solid green"
                                      : "none",
                                }}
                              />
                              <div
                                className="input-group-append"
                                data-password="false"
                                onclick="HideShowPassword()"
                              >
                                <div
                                  className="input-group-text"
                                  onClick={() => {
                                    setShowPassword(!showPassword);
                                  }}
                                >
                                  <span className="password-eye" />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row" style={{ float: "right" }}>
                    <div className="form-inline">
                      <button
                        id="btnDWClient"
                        className="btn btn-primary"
                        type="button"
                        onClick={handleDeposit}
                      >
                        Deposit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-body hide" id="Cash">
                <form action="#" id="DepositWithdrawClientFormCash">
                  <div className="row">
                    <table className="datatable table dt-responsive nowrap">
                      <tbody>
                        <tr>
                          <td>
                            <label className="col-form-label">
                              Deposit Cash :
                            </label>
                          </td>
                          <td>
                            <div className="input-group">
                              <input
                                className="form-control"
                                id="txtIncreaseBalanceCash"
                                name="txtIncreaseBalanceCash"
                                max={10}
                                min={0}
                                onkeypress="return charNotAllow(this,event)"
                                placeholder="Enter Cash"
                                type="text"
                                autoComplete="off"
                                required
                                maxLength={18}
                              />
                              <span className="input-group-text hidden-sm">
                                PTS
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label">Remarks :</label>
                          </td>
                          <td>
                            <textarea
                              className="form-control textarea"
                              cols={20}
                              id="txtRemarkClientDWCash"
                              name="txtRemarkClientDWCash"
                              rows={2}
                              required
                              defaultValue={"Deposit Cash"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label">Password :</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row" style={{ float: "right" }}>
                    <div className="form-inline">
                      <button
                        id="btnDWClientCash"
                        className="btn btn-primary"
                        type="button"
                        onclick="return SaveOperationCash();"
                      >
                        Deposit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {selectedClient && (
        <Modal
          isOpen={isOpenWithdraw}
          onRequestClose={closeModalWithdraw}
          contentLabel="Example Modal"
          className="custom-modal"
          style={{
            overlay: {
              zIndex: 1000,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              width: "50%",
              height: "80%",
              margin: "auto",
              transform: "scale(0.8)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <div>
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="modal-title">
                  <label id="clientchipsmodaltitle">{selectedClient.Username}</label>
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                  onClick={closeModalWithdraw}
                >
                  ×
                </button>
              </div>
              <div
                className="dt-buttons flex-wrap ol-lg-3 col-md-12 col-sm-12 col-xs-12 text-right hide"
                id="divNavFreechipCash"
              >
                <ul className="nav nav-tabs nav-bordered mb-4 text-left">
                  <li className="nav-item liDW">
                    <a
                      href="#FreeChip"
                      data-toggle="tab"
                      onclick="HideShowFreeChip(true)"
                      className="nav-link active"
                    >
                      Free Chips
                    </a>
                  </li>
                  <li className="nav-item liDW">
                    <a
                      href="#Cash"
                      data-toggle="tab"
                      onclick="HideShowFreeChip(false)"
                      className="nav-link"
                    >
                      Cash
                    </a>
                  </li>
                </ul>
              </div>
              <div className="modal-body" id="FreeChip">
                <form action="#" id="DepositWithdrawClientForm">
                  <div className="row">
                    <table className="datatable table dt-responsive nowrap">
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="hidden"
                              id="hdnAgentBalance"
                              defaultValue={898}
                            />
                            <input
                              type="hidden"
                              id="hdnClientBalance"
                              defaultValue={2}
                            />
                            <label className="col-form-label">
                              Withdraw Credit :
                            </label>
                          </td>
                          <td>
                            <div className="input-group">
                              <input
                                className="form-control numeric"
                                id="txtIncreaseBalance"
                                name="txtIncreaseBalance"
                                min={0}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  const newValue = parseInt(value) || 0;
                                  chipsRef.current = newValue;
                                  // updateBalances();
                                  const totalChipsEntered =
                                    parseInt(chipsRef.current) || 0;
                                  const newAgentBalance =
                                    parseInt(agentData[0].Point) + totalChipsEntered;
                                  const newClientBalance =
                                    parseInt(selectedClient.Point) -
                                    totalChipsEntered;
                                  setAgentBalance(
                                    newAgentBalance >= 0 ? newAgentBalance : 0
                                  );
                                  setClientBalance(newClientBalance);
                                }}
                                placeholder="Enter Chips"
                                type="text"
                                required
                                maxLength={18}
                              />
                              <span className="input-group-text hidden-sm">
                                PTS
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label">
                              {selectedClient.Parentname} [] :
                            </label>
                          </td>
                          <td>
                            <input
                              type="text"
                              id="txtAgentNewBalance"
                              placeholder={agentData[0].Point}
                              disabled
                              className="form-control"
                              value={agentBalance}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label">
                              {selectedClient.Username} [{selectedClient.Clientname}] :
                            </label>
                          </td>
                          <td>
                            <input
                              type="text"
                              id="txtClientNewBalance"
                              placeholder={selectedClient.Point}
                              disabled
                              className="form-control"
                              value={clientBalance}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label">Remarks :</label>
                          </td>
                          <td>
                            <textarea
                              className="form-control textarea"
                              cols={20}
                              id="txtRemarkClientDW"
                              name="txtRemarkClientDW"
                              rows={2}
                              required
                              defaultValue={"Withdraw Credit"}
                            />
                          </td>
                        </tr>
                        <tr className="b2bDWPassword">
                          <td>
                            <label className="col-form-label" htmlFor="password">Password :</label>
                          </td>
                          <td>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                name="password"
                                id="txtPassword"
                                value={DepositformData.password}
                                onChange={handleChangeDeposit}
                                type={showPassword ? "text" : "password"}
                                style={{
                                  border:
                                    DepositformData.password ===
                                    agentData[0].Password
                                      ? "1px solid green"
                                      : "none",
                                }}
                                placeholder="password"
                                required
                              
                              />
                              <div
                                className="input-group-append"
                                data-password="false"
                                onclick="HideShowPassword()"
                              >
                                <div onClick={()=>{setShowPassword(!showPassword )}} className="input-group-text">
                                  <span className="password-eye" />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row" style={{ float: "right" }}>
                    <div className="form-inline">
                      <button
                        id="btnDWClient"
                        className="btn btn-primary"
                        type="button"
                        onClick={handleDeposit}
                      >
                        Withdraw
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-body hide" id="Cash">
                <form action="#" id="DepositWithdrawClientFormCash">
                  <div className="row">
                    <table className="datatable table dt-responsive nowrap">
                      <tbody>
                        <tr>
                          <td>
                            <label className="col-form-label">
                              Withdraw Cash :
                            </label>
                          </td>
                          <td>
                            <div className="input-group">
                              <input
                                className="form-control"
                                id="txtIncreaseBalanceCash"
                                name="txtIncreaseBalanceCash"
                                max={10}
                                min={0}
                                onkeypress="return charNotAllow(this,event)"
                                placeholder="Enter Cash"
                                type="text"
                                autoComplete="off"
                                required
                                maxLength={18}
                              />
                              <span className="input-group-text hidden-sm">
                                PTS
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label">Remarks :</label>
                          </td>
                          <td>
                            <textarea
                              className="form-control textarea"
                              cols={20}
                              id="txtRemarkClientDWCash"
                              name="txtRemarkClientDWCash"
                              rows={2}
                              required
                              defaultValue={"Withdraw Cash"}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="col-form-label" >Password :</label>
                          </td>
                          <td>
                            <div className="input-group input-group-merge">
                              <input
                                className="form-control"
                                name="paf"
                               
                                id="txtPasswordCash"
                                placeholder="password"
                                required
                                type="password"
                              />
                              <div
                                className="input-group-append"
                                data-password="false"
                                onclick="HideShowPassword()"
                              >
                                <div className="input-group-text">
                                  <span className="password-eye" />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row" style={{ float: "right" }}>
                    <div className="form-inline">
                      <button
                        id="btnDWClientCash"
                        className="btn btn-primary"
                        type="button"
                        onclick="return SaveOperationCash();"
                      >
                        Withdraw
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      )}




/////////////
//////////

      <div className="content-page" style={{ backgroundSize: "0px" }}>
        <div className="content">
          {/* Start Content*/}
          <div className="container-fluid">
            <div className="Loading" style={{ display: "none" }}>
              <button className="btn" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm mr-1"
                  role="status"
                  aria-hidden="true"
                />
                Loading....
              </button>
            </div>
            <div className="page-loading" style={{ display: "none" }}></div>
            <div className="divNews pt-1 d-lg-none d-sm-block">
              <marquee
                behavior="scroll"
                direction="left"
                id="news"
                className="vertical-align-middle"
              >
                <div id="NewsDisplayBody">
                  <div style={{ display: "inline" }} className>
                    {" "}
                    <i
                      className=" dripicons-blog"
                      style={{
                        verticalAlign: "middle",
                        display: "inline",
                        fontSize: "16px",
                      }}
                      ng-cloak
                    />
                    &nbsp;Jo bhi client 5-10 sec me Lay/Back karega uski bets
                    delete ki jaayegi aur valid nhi maani jaayegi.
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </div>
                  <div style={{ display: "inline" }} className>
                    {" "}
                    <i
                      className=" dripicons-blog"
                      style={{
                        verticalAlign: "middle",
                        display: "inline",
                        fontSize: "16px",
                      }}
                      ng-cloak
                    />
                    &nbsp;Our Centre Server facing malware attack So for now all
                    system down. We setup new server once it will complete we
                    inform you. It will setup in minimum 4 hours. Sorry for
                    Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </div>
                  <div style={{ display: "inline" }} className>
                    {" "}
                    <i
                      className=" dripicons-blog"
                      style={{
                        verticalAlign: "middle",
                        display: "inline",
                        fontSize: "16px",
                      }}
                      ng-cloak
                    />
                    &nbsp;Dear Clients, Due to server issue site bnd hone ki
                    vjah se all client ki bets cancel ki gyi he chahe woh loss
                    me tha chahe woh profit me tha so please support with us.
                    Sorry for Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </div>
                </div>
              </marquee>
            </div>
            {/* start page title */}
            <div id="pageData">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    .pswrequired {\n        font-size: 0.75rem;\n        color: #f1556c;\n    }\n\n    .SettlmentPopup {\n        min-width: 95px;\n    }\n\n    tfoot {\n        display: table-header-group;\n    }\n",
                }}
              />
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0" id="UserSitemap"></ol>
                    </div>
                    <h4 className="page-title">User List</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12 manageDLPermissionAction">
                            <select className="form-control" id="ActionBox">
                              <option value>Select Action</option>
                              <option value="isApproved" key="Approval">
                                Active
                              </option>
                              <option value="isBetAllow" key="BetAllow">
                                Bet Allow
                              </option>
                            </select>
                          </div>
                          <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                            <button
                              onclick="AllowAction(true)"
                              className="btn btn-warning waves-effect waves-light manageDLPermissionAction"
                            >
                              Allow
                            </button>
                            <button
                              onclick="AllowAction(false)"
                              className="btn btn-danger waves-effect waves-light manageDLPermissionAction"
                            >
                              Block
                            </button>
                            <Link to={`/agent/${username}/AddClient`}>
                              <button
                                onclick="AddClient()"
                                className="btn btn-success waves-effect waves-light manageDLUserAction"
                              >
                                {" "}
                                Add Client
                              </button>
                            </Link>
                            <Link to={`/agent/${username}/AddAgent`}>
                              <button
                                onclick="AddClient()"
                                className="btn btn-success waves-effect waves-light manageDLUserAction"
                              >
                                {" "}
                                Add Agent
                              </button>
                            </Link>
                            <button
                              onclick="ResetUserAction()"
                              className="btn btn-primary waves-effect waves-light"
                            >
                              Reset
                            </button>
                            <div className="d-inline-flex">
                              <span
                                id="PointDetail"
                                className="font-weight-bold Text-15"
                              >
                                <label className="switch1 vertical-align-middle">
                                  <input
                                    type="checkbox"
                                    className="px"
                                    id="chkisActiveUsers"
                                    name="rbtn"
                                    defaultChecked
                                  />
                                  <div className="slider1 round1">
                                    <span className="on">Active</span>
                                    <span className="off">In‑Active</span>
                                  </div>
                                </label>
                              </span>
                            </div>
                            <div className="d-inline-flex">
                              <span
                                id="PointDetail"
                                className="font-weight-bold Text-15"
                              >
                                <label
                                  className="switchPts hide vertical-align-middle"
                                  style={{ display: "none" }}
                                >
                                  <input
                                    type="checkbox"
                                    className="px"
                                    id="rbtnPTSINR"
                                    name="rbtn"
                                  />
                                  <div className="sliderPts roundPts">
                                    <span className="onRound">PTS</span>
                                    <span className="offRound">INR</span>
                                  </div>
                                </label>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end col*/}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-12">
                              <ol
                                className="breadcrumb m-0"
                                id="UserBreadCrumb"
                              >
                                <li className="breadcrumb-item">
                                  <a
                                    href=""
                                    onclick="LoadUserListFromBreadcrumb('5A5649762B324D574F6C493D','1','Shiv4400','0')"
                                  >
                                    <i className="fa fa-home" />
                                  </a>
                                </li>
                                <li className="breadcrumb-item">
                                  {" "}
                                  <a
                                    id="btnUserName-5A5649762B324D574F6C493D"
                                    className="cursor-pointer"
                                    data-toggle="tooltip"
                                    title="Shiv4400"
                                    onclick="LoadUserListFromBreadcrumb('5A5649762B324D574F6C493D','1','Shiv4400', '0')"
                                  >
                                    {" "}
                                    {username}{" "}
                                    <i
                                      className="mdi mdi-autorenew"
                                      aria-hidden="true"
                                    />{" "}
                                  </a>{" "}
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                        <hr className="mt-1 mb-1 width-100" />
                        <div className="col-12">
                          <div className="row d-flex flex-row-reverse">
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12  mb-1">
                              <input
                                type="text"
                                id="txtsearch"
                                className="form-control"
                                placeholder="Search Min. 2 characters"
                              />
                            </div>
                            <div className="dt-buttons flex-wrap ol-lg-3 col-md-3 col-sm-12 col-xs-12 text-right">
                              <a
                                className="btn btn-secondary buttons-html5 btn-light mr-1"
                                tabIndex={0}
                                onclick="ExportTableData('CSV')"
                                title="CSV"
                                style={{ display: "inline-block" }}
                              >
                                <span>
                                  <i className=" fas fa-file-csv" />
                                </span>
                              </a>
                              <a
                                className="btn btn-secondary buttons-html5 btn-light mr-1"
                                tabIndex={0}
                                aria-controls="tbluserlist"
                                onclick="ExportTableData('Excel')"
                                title="Excel"
                                style={{ display: "inline-block" }}
                              >
                                <span>
                                  <i className="far fa-file-excel" />
                                </span>
                              </a>
                              <a
                                className="btn btn-secondary buttons-html5 btn-light mr-1"
                                tabIndex={0}
                                aria-controls="tbluserlist"
                                onclick="ExportTableData('PDF')"
                                title="PDF"
                                style={{ display: "inline-block" }}
                              >
                                <span>
                                  <i className="far fa-file-pdf" />
                                </span>
                              </a>
                            </div>
                            <div className="col-md-7 col-sm-12">
                              <div className="col-12 mt-2 font-weight-600">
                                Showing&nbsp;
                                <span id="lblselctedrecords">3</span>
                                &nbsp;of&nbsp;
                                <span id="lbltotalrecords">3</span>&nbsp;entries
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="divList" className="table-responsive">
                          <table
                            id="tbluserlist"
                            className="datatable table dt-responsive nowrap w-100 table-hover"
                          >
                            {" "}
                            <thead>
                              {" "}
                              <tr id="InformationList">
                                {" "}
                                <th className="th1 nosort no-export">
                                  {" "}
                                  <input
                                    type="checkbox"
                                    name="chkAllUser"
                                    id="chkAllUser"
                                    onclick="getallcheck(this, 'tbluserlist')"
                                  />{" "}
                                </th>{" "}
                                <th />{" "}
                                <th
                                  onclick="sortDataTable('appUserName', this);"
                                  dataorder="asc"
                                  className="sorting min-width-200"
                                >
                                  UserName [FullName]
                                </th>{" "}
                                <th className="text-right nosort">
                                  Credit Ref.
                                </th>{" "}
                                <th className="text-right nosort">P/L (Pts)</th>{" "}
                                <th className="text-right nosort manageDLSettlementAction">
                                  Settlement(P|L)
                                </th>{" "}
                                <th
                                  onclick="sortDataTable('appRealLiabilityPts', this);"
                                  dataorder="asc"
                                  className="clsPts text-right sorting"
                                >
                                  Exposure
                                </th>{" "}
                                <th
                                  onclick="sortDataTable('appRealLiabilityRs', this);"
                                  dataorder="asc"
                                  className="clsRs hide text-right sorting"
                                >
                                  Exposure
                                </th>{" "}
                                <th
                                  onclick="sortDataTable('appBalance', this);"
                                  dataorder="asc"
                                  className="clsPts text-right sorting"
                                >
                                  Availabel Bal.
                                </th>{" "}
                                <th
                                  onclick="sortDataTable('appBalanceRs', this);"
                                  dataorder="asc"
                                  className="clsRs hide text-right sorting"
                                >
                                  Availabel Bal.
                                </th>{" "}
                                <th className="text-center nosort manageDLDWAction no-export">
                                  D/W
                                </th>{" "}
                                <th className="text-right nosort">Share</th>{" "}
                                <th className="text-right nosort">Point</th>{" "}
                                <th className="text-center nosort no-export min-width-80">
                                  Action
                                </th>{" "}
                                <th className="text-center nosort width-60 manageDLUserAction no-export">
                                  Edit
                                </th>{" "}
                              </tr>{" "}
                            </thead>{" "}
                            <tfoot>
                              {" "}
                              <tr>
                                {" "}
                                <td className="no-export" /> <td /> <td />{" "}
                                <td
                                  id="th_CreditReference"
                                  className="text-right"
                                >
                                  {" "}
                                  <span className="th_CreditReferencePts clsCreditRefTotalPts clsPts">
                                    {calculateTotalReference()}
                                  </span>{" "}
                                  <span className="th_CreditReferenceRs clsCreditRefTotalRs clsRs hide">
                                    200.00
                                  </span>{" "}
                                </td>{" "}
                                <td id="th_Balance" className="text-right">
                                  {" "}
                                  <span className="th_BalancePts clsPtsTotalPts clsPts" />{" "}
                                  <span className="th_BalanceRs clsPtsTotalRs clsRs hide" />{" "}
                                </td>{" "}
                                <td id="th_SettlementPL" className="text-right">
                                  {" "}
                                  <span className="th_SettlementPLPts clsSettlementPLTotalPts clsPts">
                                    -1.00
                                  </span>{" "}
                                  <span className="th_SettlementPLRs clsSettlementPLTotalRs clsRs hide">
                                    -1.00
                                  </span>{" "}
                                </td>{" "}
                                <td id="th_RealExposure" className="text-right">
                                  {" "}
                                  <span className="th_RealExposurePts clsPts">
                                    {calculateTotalExposure()}
                                  </span>{" "}
                                  <span className="th_RealExposureRs clsRs hide">
                                    0.00
                                  </span>{" "}
                                </td>{" "}
                                <td
                                  id="th_Available_Balance"
                                  className="text-right"
                                >
                                  {" "}
                                  <span className="th_Available_BalancePts clsAvailabelBalTotalPts clsPts">
                                    {calculateTotalBalance()}
                                  </span>{" "}
                                  <span className="th_Available_BalanceRs clsAvailabelBalTotalRs clsRs hide">
                                    199.00
                                  </span>{" "}
                                </td>{" "}
                                <td className="no-export" /> <td /> <td />{" "}
                                <td className="no-export" />{" "}
                                <td className="no-export" />{" "}
                              </tr>{" "}
                            </tfoot>{" "}
                            <tbody id="tblListBody">
                              {clients.map((client) => (
                                <tr key={client.Username}>
                                  {" "}
                                  <td className="text-center no-export">
                                    {" "}
                                    <input
                                      type="checkbox"
                                      name="chkUser_3_384A434245585255394F673D"
                                      defaultValue="384A434245585255394F673D"
                                      className="chkUser_3_384A434245585255394F673D UserCheckBox"
                                      id="384A434245585255394F673D"
                                    />{" "}
                                  </td>{" "}
                                  <td className="text-center">
                                    {" "}
                                    <span
                                      className="btn btn-warning grid-button"
                                      style={{ cursor: "text" }}
                                      data-plugin="tippy"
                                      data-tippy-arrowtype="round"
                                      data-tippy-arrow="true"
                                      data-tippy-animation="fade"
                                      data-tippy
                                      data-original-title="Client"
                                    >
                                      C
                                    </span>{" "}
                                  </td>{" "}
                                  <td className="min-width-170">
                                    {" "}
                                    <span>
                                      {client.Username} [{client.Clientname}]
                                    </span>{" "}
                                  </td>{" "}
                                  <td className="text-right text-Darkblue cursor-pointer min-width-80">
                                    {" "}
                                    <span className="clsPts clsCreditRefPts_3_384A434245585255394F673D">
                                      {client.Reference}{" "}
                                    </span>{" "}
                                    <span className="clsRs clsCreditRefRs_3_384A434245585255394F673D hide">
                                      0.00{" "}
                                    </span>{" "}
                                  </td>{" "}
                                  <td className="text-right min-width-80">
                                    {" "}
                                    <span className="clsPts clsPtsPts_3_384A434245585255394F673D">
                                      0.00{" "}
                                    </span>{" "}
                                    <span className="clsRs clsPtsRs_3_384A434245585255394F673D hide">
                                      {" "}
                                    </span>{" "}
                                  </td>{" "}
                                  <td className="text-right min-width-70 manageDLSettlementAction">
                                    {" "}
                                    <div
                                      className="clsPts clsSettlementPLPts_3_384A434245585255394F673D SettlmentPopup grid-button grid-button-amount btn btn-secondary text-right"
                                      onclick="SettlementPopup('384A434245585255394F673D','3','0.00','Aabbhhii',true)"
                                    >
                                      {" "}
                                      <span className="clsSettlementPLPtsAmt_3_384A434245585255394F673D">
                                        0.00{" "}
                                      </span>{" "}
                                    </div>{" "}
                                    <div
                                      className="clsRs clsSettlementPLRs_3_384A434245585255394F673D SettlmentPopup grid-button grid-button-amount btn btn-secondary text-right hide"
                                      onclick="SettlementPopup('384A434245585255394F673D','3','0.00','Aabbhhii',true)"
                                    >
                                      {" "}
                                      <span className="clsSettlementPLRsAmt_3_384A434245585255394F673D">
                                        0.00{" "}
                                      </span>{" "}
                                    </div>{" "}
                                    <button
                                      type="button"
                                      className="btn btn-info grid-button clsSettlementHistoryBtn no-export"
                                      onclick="SettlementHistoryView('384A434245585255394F673D', '3','Aabbhhii[Abhinav]')"
                                      data-plugin="tippy"
                                      data-tippy-arrowtype="round"
                                      data-tippy-arrow="true"
                                      data-tippy-animation="fade"
                                      data-tippy
                                      data-original-title="History"
                                    >
                                      H
                                    </button>{" "}
                                  </td>{" "}
                                  <td className="text-right min-width-50">
                                    {" "}
                                    <a
                                      className="clsPts cursor-pointer"
                                      onclick="ClientExposureList('384A434245585255394F673D','Aabbhhii',0)"
                                    >
                                      {client.Exposurelimit}{" "}
                                    </a>{" "}
                                    <a
                                      className="clsRs hide cursor-pointer"
                                      onclick="ClientExposureList('384A434245585255394F673D','Aabbhhii',0)"
                                    >
                                      0.00{" "}
                                    </a>{" "}
                                  </td>{" "}
                                  <td className="text-right min-width-80">
                                    {" "}
                                    <span className="clsPts clsAvailabelBalPts_3_384A434245585255394F673D">
                                    {client.Point}{" "}
                                    </span>{" "}
                                    <span className="clsRs clsAvailabelBalRs_3_384A434245585255394F673D hide">
                                      0.00{" "}
                                    </span>{" "}
                                  </td>{" "}
                                  <td className="text-center manageDLDWAction no-export">
                                    {" "}
                                    <button
                                      type="button"
                                      className="btn btn-warning grid-button"
                                      onClick={() => {
                                        openModal();
                                        handleButtonClick(client);
                                      }}
                                      data-plugin="tippy"
                                      data-tippy-arrowtype="round"
                                      data-tippy-arrow="true"
                                      data-tippy-animation="fade"
                                      data-tippy
                                      data-original-title="Deposit Credit"
                                    >
                                      D
                                    </button>{" "}
                                    <button
                                      type="button"
                                      className="btn btn-info grid-button"
                                      onClick={() => {
                                        openModalWithdraw();
                                        handleButtonClick(client);
                                      }}
                                      data-plugin="tippy"
                                      data-tippy-arrowtype="round"
                                      data-tippy-arrow="true"
                                      data-tippy-animation="fade"
                                      data-tippy
                                      data-original-title="Withdraw Credit"
                                    >
                                      W
                                    </button>{" "}
                                  </td>{" "}
                                  <td className="text-right"> 0 </td>{" "}
                                  <td className="text-right">
                                    {" "}
                                   1{" "}
                                  </td>{" "}
                                  <td className="min-width-300 no-export">
                                    {" "}
                                    <div>
                                      {" "}
                                      <button
                                        type="button"
                                        className="btn btn-info grid-button manageDLLimitAction"
                                        onclick="LoadUserLimitSettings('384A434245585255394F673D','3','5A5649762B324D574F6C493D','Abhinav [Aabbhhii]',false)"
                                        data-plugin="tippy"
                                        data-tippy-arrowtype="round"
                                        data-tippy-arrow="true"
                                        data-tippy-animation="fade"
                                        data-tippy
                                        data-original-title="Limit Setting"
                                      >
                                        L
                                      </button>{" "}
                                      <button
                                        type="button"
                                        className="btn btn-pink grid-button clsShowShare"
                                        onclick="sharePopup('384A434245585255394F673D','3','Aabbhhii [Abhinav]')"
                                        data-plugin="tippy"
                                        data-tippy-arrowtype="round"
                                        data-tippy-arrow="true"
                                        data-tippy-animation="fade"
                                        data-tippy
                                        data-original-title="Share"
                                      >
                                        S
                                      </button>{" "}
                                      <button
                                        type="button"
                                        className="btn btn-primary grid-button isShowReport"
                                        onclick="ClientAccountStatement('226643','Abhinav [Aabbhhii]');"
                                        data-plugin="tippy"
                                        data-tippy-arrowtype="round"
                                        data-tippy-arrow="true"
                                        data-tippy-animation="fade"
                                        data-tippy
                                        data-original-title="Report"
                                      >
                                        R
                                      </button>{" "}
                                      <div className="tooltip_">
                                        {" "}
                                        <span className="tooltiptextID_384A434245585255394F673D3 viewtooltiptext" />{" "}
                                      </div>{" "}
                                      <button
                                        type="button"
                                        className="btn btn-success grid-button manageDLPermissionAction isChangesPermission"
                                        onclick="UserLimitPermissionSetting('384A434245585255394F673D','3','true','true','false','Abhinav [Aabbhhii]','true')"
                                        data-plugin="tippy"
                                        data-tippy-arrowtype="round"
                                        data-tippy-arrow="true"
                                        data-tippy-animation="fade"
                                        data-tippy
                                        data-original-title="Permission"
                                      >
                                        P
                                      </button>{" "}
                                      <button
                                        type="button"
                                        className="btn btn-info grid-button isShowClientBlockMarket"
                                        id="btnPMS-384A434245585255394F673D"
                                        onclick="ClientBlockMarket('384A434245585255394F673D','Aabbhhii')"
                                        data-plugin="tippy"
                                        data-tippy-arrowtype="round"
                                        data-tippy-arrow="true"
                                        data-tippy-animation="fade"
                                        data-tippy
                                        data-original-title="Client Block Market"
                                      >
                                        B
                                      </button>{" "}
                                      <button
                                        type="button"
                                        className="btn btn-pink grid-button"
                                        onclick="LoadUserProfileDetails('384A434245585255394F673D', 3, '5A5649762B324D574F6C493D', 'Abhinav [Aabbhhii]', )"
                                        data-plugin="tippy"
                                        data-tippy-arrowtype="round"
                                        data-tippy-arrow="true"
                                        data-tippy-animation="fade"
                                        data-tippy
                                        data-original-title="More"
                                      >
                                        <i className="mdi mdi-dots-horizontal" />
                                      </button>{" "}
                                    </div>{" "}
                                  </td>{" "}
                                  <td className="text-center no-export">
                                    {" "}
                                    <a
                                      className="action-icon manageDLUserAction"
                                      onclick="EditClient('384A434245585255394F673D')"
                                      data-plugin="tippy"
                                      data-tippy-arrowtype="round"
                                      data-tippy-arrow="true"
                                      data-tippy-animation="fade"
                                      data-tippy
                                      data-original-title="Edit"
                                    >
                                      {" "}
                                      <span
                                        className="mdi mdi-square-edit-outline"
                                        aria-hidden="true"
                                      />{" "}
                                    </a>{" "}
                                  </td>{" "}
                                </tr>
                              ))}
                            </tbody>{" "}
                          </table>
                        </div>
                        <div id="divLoadMore" className="load-more">
                          <span>No More Data Available.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="maxchild-popup"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="modal-title">
                        <span>
                          <label>Max Child Level : </label>
                          <span
                            className="text-bold"
                            id="UserName_MaxChildLevelPopup"
                          />
                        </span>
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <form action="#" id="MaxChildForm">
                        <div className="row">
                          <div className="form-group col-sm-6 col-xs-12">
                            <label htmlFor="txtMinRate">Max Child No</label>
                            <div className="input-group">
                              <select
                                id="Dropdown_MaxChild"
                                className="form-control directorySelect"
                              />
                              <input
                                type="hidden"
                                id="hdnMaxChildPopup_UserID"
                              />
                              <input
                                type="hidden"
                                id="hdnMaxChildPopup_UserType"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row" style={{ float: "right" }}>
                          <div className="form-inline">
                            <button className="btn btn-primary" type="submit">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
              <div
                id="password-popup"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="modal-title">
                        <label>Confirm</label>
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <form action="#" id="PasswordForm">
                        <div className="form-group">
                          <input type="hidden" id="isAllow" defaultValue />
                          <label htmlFor="txtPassword">
                            Password<span className="text-danger">*</span>:
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              type="password"
                              id="txtPassword"
                              className="form-control"
                              placeholder="Enter Password"
                            />
                            <div
                              className="input-group-append"
                              data-password="false"
                              onclick="HideShowPassword()"
                            >
                              <div className="input-group-text">
                                <span className="password-eye" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group text-center">
                          <button className="btn btn-primary" type="submit">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              <div
                id="singlepassword-popup"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="modal-title">
                        <label>Confirm Password</label>
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <form action="#" id="SinglePasswordForm">
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-5 col-md-3 col-sm-12 col-xs-12">
                              <input
                                type="hidden"
                                id="isAllowPassword"
                                defaultValue
                              />
                              <div className="input-group input-group-merge">
                                <input
                                  type="password"
                                  id="txtpwd"
                                  className="form-control"
                                  placeholder="Enter Password"
                                />
                                <div
                                  className="input-group-append"
                                  data-password="false"
                                  onclick="HideShowPassword()"
                                >
                                  <div className="input-group-text">
                                    <span className="password-eye" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7 col-md-3 col-sm-12 col-xs-12">
                              <button
                                className="btn btn-success btnsaveall hide"
                                type="submit"
                                value="Saveall"
                              >
                                Save All
                              </button>
                              <button
                                className="btn btn-success"
                                type="submit"
                                value="Save"
                              >
                                Save
                              </button>
                              <button
                                className="btn btn-danger"
                                data-dismiss="modal"
                              >
                                Cancel
                              </button>
                            </div>
                            <div className="row float-right btnsaveall hide">
                              <span className="text-danger mt-1 btnsaveall hide">
                                Note:{" "}
                                <i>
                                  Click on "Save All" will save permission to
                                  all downline's user
                                </i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              <div
                id="ChipSettlment-popup"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="modal-title">
                        <span className="text-bold" id="ChipsummaryUname" />
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <form action="#" id="ChipsSettlmentForm">
                        <div className="row">
                          <input id="hdnUserID" type="hidden" />
                          <input id="hdnRefID" type="hidden" />
                          <input id="hdnRefType" type="hidden" />
                          <input id="hdnIsReverse" type="hidden" />
                          <table className="datatable table dt-responsive nowrap">
                            <tbody>
                              <tr>
                                <td>
                                  <label className="col-form-label">
                                    Profit/Loss :
                                  </label>
                                </td>
                                <td>
                                  <input
                                    id="txtCurrentBalance"
                                    className="form-control"
                                    disabled
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="col-form-label">
                                    Cash :
                                  </label>
                                </td>
                                <td>
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      id="txtAmount"
                                      autoComplete="off"
                                      ename="Settlment Amount"
                                      className="AllowDecimal form-control"
                                      required
                                    />
                                    <span className="input-group-text hidden-sm">
                                      PTS
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td />
                                <td>
                                  <a
                                    className="cursor-pointer clsGetFullAmount badge-soft-success"
                                    onclick="getFullAmount()"
                                  >
                                    Full Amount
                                  </a>
                                  <a
                                    className="cursor-pointer clsClearFullAmount badge badge-soft-danger"
                                    onclick="clearFullAmount()"
                                  >
                                    Clear
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="col-form-label">
                                    Remain Cash :
                                  </label>
                                </td>
                                <td>
                                  <span id="lblNewBalance" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="col-form-label">
                                    Remarks :
                                  </label>
                                </td>
                                <td>
                                  <textarea
                                    className="form-control textarea"
                                    cols={20}
                                    id="txtRemarkUserListSetellement"
                                    name="txtRemarkUserListSetellement"
                                    rows={2}
                                    defaultValue={""}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <label className="col-form-label">
                                    Password :
                                  </label>
                                </td>
                                <td>
                                  <div className="input-group input-group-merge">
                                    <input
                                      className="form-control"
                                      name="txtSettlementPassword"
                                      id="txtSettlementPassword"
                                      placeholder="Password"
                                      type="password"
                                    />
                                    <div
                                      className="input-group-append"
                                      data-password="false"
                                      onclick="HideShowPassword()"
                                    >
                                      <div className="input-group-text">
                                        <span className="password-eye" />
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="row" style={{ float: "right" }}>
                          <div className="form-inline">
                            <button
                              id="btnSettlement"
                              className="btn btn-primary"
                              type="submit"
                            >
                              Cash Settlement
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              <div
                id="UserProfileModal-Popup"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="modal-title">
                        <label id="userProfileDetails-apptitle" />
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <input type="hidden" id="hdn-upUserId" defaultValue />
                      <input type="hidden" id="hdn-upUserType" defaultValue />
                      <input
                        type="hidden"
                        id="hdn-upUserLoginType"
                        defaultValue
                      />
                      <div id="divUserProfileDetails" />
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              <div
                id="UserResetPasswordPopup"
                className="UserResetPasswordPopup"
              />
              <div
                id="UserDepositWithdrawPopup"
                className="UserDepositWithdrawPopup"
              />
              <div id="UserPermissionPopup" className="UserPermissionPopup" />
              <div id="UserSharesPopup" className="UserSharesPopup" />
              <div
                id="UserCreditReferencePopup"
                className="UserCreditReferencePopup"
              />
              <div
                id="UserPermissionLogPopup"
                className="UserPermissionLogPopup"
              />
              <div
                id="UserLimitModal-Popup"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="modal-title">
                        <label id="userlimit-apptitle" />
                      </h4>
                      <div className="row ml-2 col-md-6">
                        <div className="col-md-6 col-sm-6 col-xs-6 mb-1">
                          <div className="input-group">
                            <select
                              id="ddlSport"
                              className="form-control"
                              ename="Sport"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                          <div className="input-group">
                            <select
                              id="ddlTournament"
                              className="form-control"
                              ename="Tournament"
                            >
                              <option value>Tournament Limit</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <form action="#" id="UserLimitForm">
                        <div id="divUserLimitSetting_727A6B43615364784D50413D" />
                        <div id="divUserLimitSetting_656A6973414C6B4C5551633D" />
                        <div id="divUserLimitSetting_4D4E3764617254514747493D" />
                        <div id="divUserLimitSetting_74436251495938684D59513D" />
                        <div id="divUserLimitSetting_6E6663526A596E625754633D" />
                        <div id="divUserLimitSetting_7473545A6F6643505053673D" />
                        <div id="divUserLimitSetting_58434B6F393251624551383D" />
                        <div className="row">
                          <div className="col-md-4 mt-2">
                            <span className="red">
                              <i>Note: Please set limit as user point wise.</i>
                            </span>
                          </div>
                          <div className="col-md-8 modal-footer">
                            <div className="form-inline">
                              <input
                                type="hidden"
                                name="strUserDetail"
                                id="strUserDetail"
                              />
                              <select id="applyOn" className="form-control">
                                <option value>Select Apply Type</option>
                                <option value="Save">Save</option>
                                <option
                                  className="clsApplyType"
                                  value="SaveToAll"
                                >
                                  Save &amp; Save to all
                                </option>
                                <option
                                  className="clsApplyType"
                                  value="SaveToChild"
                                >
                                  Save &amp; Save to child
                                </option>
                                <option value="SaveToAllAgent">
                                  Save &amp; Save to all agent
                                </option>
                                <option
                                  className="clsApplyType"
                                  value="SaveToAllClient"
                                >
                                  Save &amp; Save to all client
                                </option>
                                <option value="SaveToChildAgent">
                                  Save &amp; Save to child agent
                                </option>
                                <option
                                  className="clsApplyType"
                                  value="SaveToChildClient"
                                >
                                  Save &amp; Save to child client
                                </option>
                              </select>
                              <div className="input-group input-group-merge">
                                <input
                                  className="form-control marginl15"
                                  type="password"
                                  id="txtUserLimitPassword"
                                  placeholder="Enter Password"
                                  style={{ marginRight: "10px" }}
                                />
                                <div
                                  className="input-group-append"
                                  data-password="false"
                                  onclick="HideShowPassword()"
                                >
                                  <div className="input-group-text">
                                    <span className="password-eye" />
                                  </div>
                                </div>
                              </div>
                              <button
                                className="btn btn-success"
                                type="button"
                                id="btnUpdateUserLimit"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
              {/* /.modal */}
              <div
                id="UserProfileModal-Popup"
                className="modal fade"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="modal-title">
                        <label id="userProfileDetails-apptitle" />
                      </h4>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        onclick="UserProfileModalClose()"
                        aria-hidden="true"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <input type="hidden" id="hdn-upUserId" defaultValue />
                      <input type="hidden" id="hdn-upUserType" defaultValue />
                      <input
                        type="hidden"
                        id="hdn-upUserLoginType"
                        defaultValue
                      />
                      <div id="divUserProfileDetails" />
                    </div>
                  </div>
                  {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
              </div>
            </div>
            {/* end page title */}
          </div>{" "}
          {/* container */}
        </div>{" "}
        {/* content */}
      </div>
    </>
  );
};

export default Userlist;
