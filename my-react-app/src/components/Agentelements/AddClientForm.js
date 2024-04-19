import React, { useEffect, useState } from "react";
import axios from "axios";

const AddClientForm = (props) => {

  const agentusername= props.agentusername;
  
  const [formData, setFormData] = useState({
    parentname:'',
    clientname:'',
    username: '',
    password: '',
    reference:'',
    point:'',
    exposurelimit:'',
    marketcommission:'',
    sessioncommission:''

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/submit-form', formData);
      alert('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data');
    }
  };

   


  return (
    <>
      <div
        className="content-page"
        style={{ backgroundSize: 0, marginTop: 0, marginLeft: 0 }}
      >
        <div className="content">
          {/* Start Content*/}
          <div className="container-fluid">
            <div className="Loading" style={{ display: "none" }}>
              <button className="btn" type="button" disabled="">
                <span
                  className="spinner-border spinner-border-sm mr-1"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </button>
            </div>
            <div className="page-loading" style={{ display: "none" }}>
              {/*<div class="card">
            <div class="card-body text-center">
                <div class="spinner-grow text-primary m-2" role="status"></div>
                <div class="spinner-grow text-secondary m-2" role="status"></div>
                <div class="spinner-grow text-success m-2" role="status"></div>
                <div class="spinner-grow text-danger m-2" role="status"></div>
                <div class="spinner-grow text-warning m-2" role="status"></div>
                <div class="spinner-grow text-info m-2" role="status"></div>
                <div class="spinner-grow text-dark m-2" role="status"></div>
                <div class="spinner-grow text-blue m-2" role="status"></div>
                <div class="spinner-grow text-pink m-2" role="status"></div>
            </div>*/}
            </div>
            <div className="divNews pt-1 d-lg-none d-sm-block">
              <marquee
                behavior="scroll"
                direction="left"
                id="news"
                onmouseover="this.stop();"
                onmouseout="this.start();"
                className="vertical-align-middle"
              >
                <div id="NewsDisplayBody">
                  <div style={{ display: "inline" }} className="">
                    {" "}
                    <i
                      className=" dripicons-blog"
                      style={{
                        verticalAlign: "middle",
                        display: "inline",
                        fontSize: 16,
                      }}
                      ng-cloak=""
                    />
                    &nbsp;Jo bhi client 5-10 sec me Lay/Back karega uski bets
                    delete ki jaayegi aur valid nhi maani jaayegi.
                    &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </div>
                  <div style={{ display: "inline" }} className="">
                    {" "}
                    <i
                      className=" dripicons-blog"
                      style={{
                        verticalAlign: "middle",
                        display: "inline",
                        fontSize: 16,
                      }}
                      ng-cloak=""
                    />
                    &nbsp;Our Centre Server facing malware attack So for now all
                    system down. We setup new server once it will complete we
                    inform you. It will setup in minimum 4 hours. Sorry for
                    Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  </div>
                  <div style={{ display: "inline" }} className="">
                    {" "}
                    <i
                      className=" dripicons-blog"
                      style={{
                        verticalAlign: "middle",
                        display: "inline",
                        fontSize: 16,
                      }}
                      ng-cloak=""
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
                  __html: "\n.col-md-8 {\nmin-height: 15px !important;\n}\n",
                }}
              />
              <div id="UserTreeModalDiv" />
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <div className="page-title-right"></div>
                    <h4 className="page-title">Add / Edit Client</h4>
                  </div>
                </div>
              </div>
              <form className="needs-validation" id="pageForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="col-lg-12">
                          <div className="row text-lg-right  form-group">
                            <div className="col-md-6" />
                            <div className="col-md-6 col-xs-6">
                              <a
                                className="btn w-sm btn-danger waves-effect waves-light"
                                onclick="userlist();"
                              >
                                <i className="mdi mdi-keyboard-return" />
                                &nbsp;Back
                              </a>
                              <div className="btn-group">
                                <button
                                  type="submit"
                                  className="btn w-sm btn-success waves-effect waves-light"
                                  
                                >
                                  <i className="mdi mdi-content-save-edit" />
                                  &nbsp;Save
                                </button>
                                <a
                                  className="dropdown-toggle btn w-sm btn-success waves-effect waves-light"
                                  data-toggle="dropdown"
                                  href="#"
                                  banner="button"
                                  aria-haspopup="false"
                                  aria-expanded="false"
                                >
                                  <i className="mdi mdi-chevron-down" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                  {/* item*/}
                                  <button
                                    
                                    onclick="saveType('SaveClose')"
                                    className="dropdown-item notify-item"
                                  >
                                    <i className="mdi mdi-content-save-move" />
                                    <span>Save &amp; Close</span>
                                  </button>
                                  <div className="dropdown-divider" />
                                  <button
                                    
                                    onclick="saveType('SaveAddNew')"
                                    className="dropdown-item notify-item"
                                  >
                                    <i className="mdi mdi-content-save" />
                                    <span>Save &amp; New</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="appClientID"
                          id="appClientID"
                        />
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label" htmlFor="parentname">
                                    Parent Name
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                  
              
                                    <input
                                      type="text"
                                      id="parentname"
                                      name="parentname"
                                      // defaultValue={agentusername}

                                      value={formData.parentname}
                                      onChange={handleChange}
                                      className="form-control"
                                      
                                      max={20}
                                      required=""
                                    />
                                    
  
                                    
                                    
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    className="col-sm-3 col-xs-12 col-form-label"
                                    htmlFor="clientname"
                                  >
                                    Client Name
                                  </label>

                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      type="text"
                                      id="Clientname"
                                      name="clientname"
                                      value={formData.clientname}
                                      onChange={handleChange}
                                      className="form-control"
                                      
                                      max={20}
                                      required=""
                                    />

                                    <div className="invalid-feedback">
                                      Please enter Client Name.
                                    </div>
                                  </div>
                                  <div className="clearfix" />
                                  <div className="col-md-offset-4 col-md-8"></div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    className="col-sm-3 col-xs-6 col-form-label"
                                    htmlFor="username"
                                  >
                                    Username
                                  </label>
                                  <div className="col-sm-8 col-xs-6">
                                    <input
                                      type="text"
                                      id="Username"
                                      name="username"
                                      defaultValue=""
                                      value={formData.username}
                                      onChange={handleChange}
                                      className="form-control"
                                      
                                     
                                      max={20}
                                      required=""
                                    />
                                    <div className="invalid-feedback">
                                      Please enter User Name.
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="form-group row"
                                  id="tblPassword"
                                >
                                  <label
                                    className="col-sm-3 col-xs-12 col-form-label"
                                    htmlFor="password"
                                  >
                                    Password
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <div className="input-group input-group-merge">
                                      <input
                                        type="password"
                                        id="Password"
                                        value={formData.password}
                                        name="password"
                                        onChange={handleChange}
                                        className="form-control"
                                        max={20}
                                        min={6}
                                        required=""
                                      />
                                      <div
                                        className="input-group-append"
                                        data-password="false"
                                      >
                                        <div className="input-group-text">
                                          <span className="password-eye" />
                                        </div>
                                      </div>
                                      <div className="invalid-feedback">
                                        Please enter Password.
                                      </div>

                                      

                                    </div>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    className="col-sm-3 col-xs-12 col-form-label"
                                    htmlFor="reference"
                                  >
                                    Reference
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      type="text"
                                      id="Reference"
                                      name="reference"
                                      onChange={handleChange}
                                      value={formData.reference}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label
                                    className="col-sm-3 col-xs-12 col-form-label"
                                    htmlFor="point"
                                  >
                                    Point
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      id="Point"
                                      type="text"
                                      name="point"
                                      onChange={handleChange}
                                      value={formData.point}
                                      className="form-control number"
                                      maxLength={6}
                                      
                                    />
                                    <input
                                      type="hidden"
                                      name="hdnappPoint"
                                      id="hdnappPoint"
                                      defaultValue={1}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    className="col-sm-3 col-xs-6 col-form-label"
                                    htmlFor="exposurelimit"
                                  >
                                    Exposure Limit
                                  </label>
                                  <div className="col-sm-8 col-xs-6">
                                    <div className="input-group">
                                      <input
                                        id="Exposurelimit"
                                        type="text"
                                        name="exposurelimit"
                                        value={formData.exposurelimit}
                                        onChange={handleChange}
                                        className="form-control  numeric-negative"
                                        max="99999999.99"
                                        min={-1}
                                        required=""
                                      />
                                      <span className="input-group-text hidden-sm">
                                        PTS
                                      </span>
                                    </div>
                                    <div className="notefont">
                                      [ Note: Point ( if No Limit then Enter -1
                                      ) ]
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    className="col-sm-3 col-xs-12 col-form-label"
                                    htmlFor="marketcommission"
                                  >
                                    Market Commission
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      id="Marketcommission"
                                      type="text"
                                      name="marketcommission"
                                      value={formData.marketcommission}
                                      onChange={handleChange}
                                      className="form-control numeric"
                                      onblur="MarketCommission()"
                                      required=""
                                      min={0}
                                      max={100}
                                    />
                                    <div className="invalid-feedback">
                                      Please enter Market Commission.
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    className="col-sm-3 col-xs-12 col-form-label"
                                    htmlFor="sessioncommission"
                                  >
                                    Session Commission
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      id="Sessioncommission"
                                      type="text"
                                      name="sessioncommission"
                                      value={formData.sessioncommission}
                                      onChange={handleChange}
                                      className="form-control numeric"
                                      onblur="SessionCommission()"
                                      required=""
                                      min={0}
                                      max={100}
                                    />
                                    <div className="invalid-feedback">
                                      Please enter Session Commission.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label">
                                    Is Approved{" "}
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <span className="custom-control custom-switch col-form-label">
                                      <input
                                        type="checkbox"
                                        id="chkIsApproved"
                                        className="custom-control-input"
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor="chkIsApproved"
                                      />
                                      <input
                                        type="hidden"
                                        name="appIsApproved"
                                        id="hdnappIsApproved"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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

export default AddClientForm;
