import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Agentform() {

  const [formData, setFormData] = useState({
    parentname: "",
    agentname: "",
    username: "",
    password: "",
    reference: "",
    childlevel: "",
    point: "",
    exposurelimit: "",
    remark: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/submit-form2", formData);
      alert("Data submitted successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data");
    }
  };
  return (
    <div id="pageData">
      <div id="UserTreeModalDiv" />
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right"></div>
            <h4 className="page-title">Add / Edit Agent</h4>
          </div>
        </div>
      </div>
      <form className="needs-validation" id="pageForm" noValidate="novalidate" onSubmit={handleSubmit}>
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
                        onclick="RedirectAgent();"
                      >
                        <i className="mdi mdi-keyboard-return" />
                        &nbsp;Back
                      </a>
                      <div className="btn-group">
                        <button
                          type="submit"
                          className="btn w-sm btn-success waves-effect waves-light"
                          onclick="saveType('SaveEdit')"
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
                            type="submit"
                            onclick="saveType('SaveClose')"
                            className="dropdown-item notify-item"
                          >
                            <i className="mdi mdi-content-save-move" />
                            <span>Save &amp; Close</span>
                          </button>
                          <div className="dropdown-divider" />
                          <button
                            type="submit"
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
                <div className="visible-xs">
                  <br />
                  <br />
                </div>
                <input type="hidden" name="appAgentID" id="appAgentID" />
                <div className="row">
                  <div className="col-lg-12">
                    {/* Portlet card */}
                    <div
                      className="accordion custom-accordion"
                      id="custom-accordion-one"
                    >
                      <div className="card  mb-0">
                        <div className="card-header" id="headingcardPersonal">
                          <h5 className="m-0 position-relative">
                            <a
                              className="custom-accordion-title text-reset d-block"
                              data-toggle="collapse"
                              href="#cardPersonal"
                              aria-expanded="true"
                              aria-controls="cardPersonal"
                            >
                              Personal Details{" "}
                              <i className="mdi mdi-chevron-down accordion-arrow" />
                            </a>
                          </h5>
                        </div>
                        <div
                          id="cardPersonal"
                          className="collapse show"
                          aria-labelledby="headingcardPersonal"
                          data-parent="#custom-accordion-one"
                        >
                          <div className="Portletcard-body">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label" htmlFor="parentname">
                                    Parent Name
                                  </label>
                                  <div
                                    className="form-control ParentName"
                                    onclick="SelectParent()"
                                    id="ParentName"
                                  >
                                    Shiv4400
                                  </div>
                                  <input
                                    type="hidden"
                                    id="strUserId"
                                    name="strUserId"
                                    defaultValue="5A5649762B324D574F6C493D"
                                  />
                                  <input
                                    type="hidden"
                                    id="strAgentId"
                                    name="strAgentId"
                                    defaultValue
                                  />
                                  <input
                                    type="hidden"
                                    id="FormOperation"
                                    name
                                  />
                                  <input
                                    type="hidden"
                                    id="isAdd"
                                    name="isAdd"
                                    defaultValue
                                  />
                                  <input
                                    type="hidden"
                                    id="isEdit"
                                    name="isEdit"
                                    defaultValue
                                  />
                                  <input
                                    type="hidden"
                                    id="strShares"
                                    name="strShares"
                                    defaultValue
                                  />
                                </div>
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label" htmlFor="agentname">
                                    Agent Name
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      type="text"
                                      id="txtAgentName"
                                      name="agentname"
                                      value={formData.agentname}
                                      className="form-control"
                                      onChange={handleChange}
                                      onblur="NameCheck(this);"
                                      onkeypress="maxchar(this, event);"
                                      max={20}
                                      required
                                    />
                                    <div className="invalid-feedback">
                                      Please enter Agent Name.
                                    </div>
                                  </div>
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
                                      id="username"
                                      name="username"
                                      value={formData.username}
                                      className="form-control"
                                      onblur="usernamecheck(this);"
                                      onChange={handleChange}
                                      onkeypress="maxchar(this, event);"
                                      max={20}
                                      required
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
                                        id="txtPassword"
                                        ename="txtPassword"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="form-control"
                                        onblur="passwordcheck(this);"
                                        max={20}
                                        min={6}
                                        required
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
                                  <label className="col-sm-3 col-xs-12 col-form-label" htmlFor="reference">
                                    Reference
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      type="text"
                                      id="txtReference"
                                      name="reference"
                                      value={formData.reference}
                                      onChange={handleChange}
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label" htmlFor="childlevel">
                                    Child Level
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <div className="input-group">
                                      <select
                                        id="ddlMaxChild"
                                        className="form-control"
                                        name="childlevel"
                                        value={formData.childlevel}
                                        onChange={handleChange}
                                        onclick="return IsAllownumeric(event, this)"
                                      >
                                        <option value={3}>3 - SubMaster</option>
                                        <option value={2}>2 - Agent</option>
                                        <option value={1}>1 - SubAgent</option>
                                      </select>
                                      <input
                                        type="hidden"
                                        id="hdnappMaxChild"
                                        defaultValue={4}
                                      />
                                      <span className="input-group-text">
                                        No
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label" htmlFor="point">
                                    Point
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      id="txtappPoint"
                                      type="text"
                                      className="form-control number"
                                      name="point"
                                      value={formData.point}
                                      onChange={handleChange}
                                      maxLength={6}
                                      // disabled="disabled"
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
                                  <label className="col-sm-3 col-xs-6 col-form-label" htmlFor="exposurelimit">
                                    Exposure Limit
                                  </label>
                                  <div className="col-sm-8 col-xs-6">
                                    <div className="input-group">
                                      <input
                                        id="txtExposureLimit"
                                        type="text"
                                        className="form-control numeric-negative"
                                        name="exposurelimit"
                                        max="99999999.99"
                                        value={formData.exposurelimit}
                                        onChange={handleChange}
                                        min={-1}
                                        required
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
                                  <div className="col-sm-3 col-xs-12 col-form-label" />
                                  <div className="col-sm-8 col-xs-12 input-group"></div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label" htmlFor="remark">
                                    Remark
                                  </label>
                                  <div className="col-sm-8 col-xs-12 input-group">
                                    <input
                                      type="text"
                                      id="txtDescription"
                                      className="form-control"
                                      name="remark"
                                      value={formData.remark}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end card*/}
                    </div>
                    <div
                      className="accordion custom-accordion"
                      id="custom-accordion-two"
                    >
                      {/* Portlet card */}
                      <div className="card  mb-0" id="divCreditReference">
                        <div className="card-header" id="headingcardSharing">
                          <h5 className="m-0 position-relative">
                            <a
                              className="custom-accordion-title text-reset d-block"
                              data-toggle="collapse"
                              href="#creditReference"
                              aria-expanded="true"
                              aria-controls="cardSharing"
                            >
                              Credit{" "}
                              <i className="mdi mdi-chevron-down accordion-arrow" />
                            </a>
                          </h5>
                        </div>
                        <div
                          id="creditReference"
                          className="collapse show"
                          aria-labelledby="headingcardSharing"
                          data-parent="#custom-accordion-two"
                        >
                          <div className="Portletcard-body">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label">
                                    Credit Reference
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      type="text"
                                      id="txtCreditReference"
                                      ename="Credit"
                                      className="form-control numeric"
                                      required
                                      defaultValue={0}
                                    />
                                    <div className="invalid-feedback">
                                      Please enter Credit.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label">
                                    Remark<span className="text-danger">*</span>
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      type="text"
                                      id="txtCreditRemark"
                                      ename="Credit Remark"
                                      className="form-control"
                                      defaultValue="Deposit Credit"
                                    />
                                    <div className="invalid-feedback">
                                      Please enter Remark.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end card*/}
                    </div>
                    <div
                      className="accordion custom-accordion"
                      id="custom-accordion-two"
                    >
                      {/* Portlet card */}
                      <div className="card  mb-0" id="divSharing">
                        <div className="card-header" id="headingcardSharing">
                          <h5 className="m-0 position-relative">
                            <a
                              className="custom-accordion-title text-reset d-block"
                              data-toggle="collapse"
                              href="#cardSharing"
                              aria-expanded="true"
                              aria-controls="cardSharing"
                            >
                              Sharing{" "}
                              <i className="mdi mdi-chevron-down accordion-arrow" />
                            </a>
                          </h5>
                        </div>
                        <div
                          id="cardSharing"
                          className="collapse show"
                          aria-labelledby="headingcardSharing"
                          data-parent="#custom-accordion-two"
                        >
                          <div className="Portletcard-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="ShareTables">
                                  <div
                                    id="ShareTables"
                                    className="table-responsive"
                                  >
                                    <table className="table table-hover table-bordered">
                                      <thead>
                                        <tr>
                                          <td>Game</td>
                                          <td
                                            style={{ minWidth: "130px" }}
                                            className="text-right"
                                          >
                                            Share
                                          </td>
                                          <td
                                            style={{ minWidth: "130px" }}
                                            className="text-right"
                                          >
                                            Parent Share
                                          </td>
                                        </tr>
                                      </thead>
                                      <tbody id="userShareBody">
                                        <tr className="shareTr shareTr_2">
                                          {" "}
                                          <td> Other Casino </td>{" "}
                                          <td className="text-right">
                                            {" "}
                                            <input
                                              type="text"
                                              ename="Other Casino Share"
                                              className="text-right form-control d-inline-block numeric sharetxt dUserShares UserShares_2"
                                              maxLength={5}
                                              onkeyup="ShareChange(this)"
                                              min={0}
                                              max={89.0}
                                              id="OwnShare_2"
                                              defaultValue={0.0}
                                              required
                                              style={{ width: "80%" }}
                                            />
                                            <span className="SharePercentage">
                                              %
                                            </span>{" "}
                                          </td>{" "}
                                          <td className="text-right">
                                            {" "}
                                            <input
                                              className="lblTextBox1 text-right dParentShares d-inline-block form-control ParentShares_2"
                                              maxLength={5}
                                              disabled
                                              id="NewParentShare_2"
                                              defaultValue={89.0}
                                              style={{ width: "80%" }}
                                            />
                                            <span className="SharePercentage">
                                              %
                                            </span>{" "}
                                            <input
                                              type="hidden"
                                              id="ParentShare_2"
                                              defaultValue={89.0}
                                            />{" "}
                                          </td>{" "}
                                        </tr>
                                        <tr className="shareTr shareTr_1">
                                          {" "}
                                          <td> Sport Game </td>{" "}
                                          <td className="text-right">
                                            {" "}
                                            <input
                                              type="text"
                                              ename="Sport Game Share"
                                              className="text-right form-control d-inline-block numeric sharetxt dUserShares UserShares_1"
                                              maxLength={5}
                                              onkeyup="ShareChange(this)"
                                              min={0}
                                              max={92.0}
                                              id="OwnShare_1"
                                              defaultValue={0.0}
                                              required
                                              style={{ width: "80%" }}
                                            />
                                            <span className="SharePercentage">
                                              %
                                            </span>{" "}
                                          </td>{" "}
                                          <td className="text-right">
                                            {" "}
                                            <input
                                              className="lblTextBox1 text-right dParentShares d-inline-block form-control ParentShares_1"
                                              maxLength={5}
                                              disabled
                                              id="NewParentShare_1"
                                              defaultValue={92.0}
                                              style={{ width: "80%" }}
                                            />
                                            <span className="SharePercentage">
                                              %
                                            </span>{" "}
                                            <input
                                              type="hidden"
                                              id="ParentShare_1"
                                              defaultValue={92.0}
                                            />{" "}
                                          </td>{" "}
                                        </tr>
                                        <tr className="shareTr shareTr_3">
                                          {" "}
                                          <td> Our Casino </td>{" "}
                                          <td className="text-right">
                                            {" "}
                                            <input
                                              type="text"
                                              ename="Our Casino Share"
                                              className="text-right form-control d-inline-block numeric sharetxt dUserShares UserShares_3"
                                              maxLength={5}
                                              onkeyup="ShareChange(this)"
                                              min={0}
                                              max={92.0}
                                              id="OwnShare_3"
                                              defaultValue={0.0}
                                              required
                                              style={{ width: "80%" }}
                                            />
                                            <span className="SharePercentage">
                                              %
                                            </span>{" "}
                                          </td>{" "}
                                          <td className="text-right">
                                            {" "}
                                            <input
                                              className="lblTextBox1 text-right dParentShares d-inline-block form-control ParentShares_3"
                                              maxLength={5}
                                              disabled
                                              id="NewParentShare_3"
                                              defaultValue={92.0}
                                              style={{ width: "80%" }}
                                            />
                                            <span className="SharePercentage">
                                              %
                                            </span>{" "}
                                            <input
                                              type="hidden"
                                              id="ParentShare_3"
                                              defaultValue={92.0}
                                            />{" "}
                                          </td>{" "}
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end card*/}
                    </div>
                    <div
                      className="accordion custom-accordion"
                      id="custom-accordion-three"
                    >
                      {/* Portlet card */}
                      <div className="card mb-0">
                        <div
                          className="card-header"
                          id="headingcardMarketCommision"
                        >
                          <h5 className="m-0 position-relative">
                            <a
                              className="custom-accordion-title text-reset d-block"
                              data-toggle="collapse"
                              href="#cardMarketCommision"
                              aria-expanded="true"
                              aria-controls="cardMarketCommision"
                            >
                              Market Commission Type{" "}
                              <i className="mdi mdi-chevron-down accordion-arrow" />
                            </a>
                          </h5>
                        </div>
                        <div
                          id="cardMarketCommision"
                          className="collapse show"
                          aria-labelledby="headingcardMarketCommision"
                          data-parent="#custom-accordion-three"
                        >
                          <div className="Portletcard-body">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label">
                                    Commission Type
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <select
                                      className="form-control AllowDecimal"
                                      disabled="disabled"
                                      id="ddlCommissionType"
                                      name="ddlCommissionType"
                                      onblur="return CommissionTypecheck()"
                                      onchange="return CommisionChange(this)"
                                      required="required"
                                    >
                                      <option value>
                                        Select Commission Type
                                      </option>
                                      <option value={1}>
                                        CommissionOnShare
                                      </option>
                                      <option value={2}>CommissionOnPL</option>
                                      <option value={3}>
                                        CommissionDirectToParent
                                      </option>
                                    </select>
                                    <input
                                      type="hidden"
                                      name="appCommissionType"
                                      id="hdnappCommissionType"
                                      defaultValue={1}
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label">
                                    Market Commission
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      id="nubMarketCommission"
                                      type="number"
                                      ename="Market Commission"
                                      className="form-control numeric"
                                      onblur="MarketCommission()"
                                      required
                                      disabled="disabled"
                                    />
                                    <div className="invalid-feedback">
                                      Please enter Market Commission.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group rowmt-3">
                                  <label className="col-sm-3 col-xs-12 col-form-label">
                                    Market Min. &amp; Max Commission
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <div className="row">
                                      <div className="col-6">
                                        <input
                                          id="txtMarketMinCommission"
                                          type="text"
                                          ename="Market Min. Commission"
                                          className="form-control numeric"
                                          required
                                          min={0}
                                          max={10}
                                        />
                                        <input
                                          type="hidden"
                                          name="hdnappMarketMinCommission"
                                          id="hdnappMarketMinCommission"
                                          defaultValue={0}
                                        />
                                        <div className="invalid-feedback">
                                          Please enter Market Min. Commission.
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <input
                                          id="txtMarketMaxCommission"
                                          type="text"
                                          ename="Market Max Commission"
                                          onblur="MarketMaxCommission()"
                                          className="form-control numeric"
                                          required
                                          min={0}
                                          max={10}
                                        />
                                        <input
                                          type="hidden"
                                          name="hdnappMarketMaxCommission"
                                          id="hdnappMarketMaxCommission"
                                          defaultValue={10}
                                        />
                                        <div className="invalid-feedback">
                                          Please enter Market Max. Commission.
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
                      {/* end card*/}
                    </div>
                    <div
                      className="accordion custom-accordion"
                      id="custom-accordion-four"
                    >
                      {/* Portlet card */}
                      <div className="card mb-0">
                        <div
                          className="card-header"
                          id="headingcardSessionCommision"
                        >
                          <h5 className="m-0 position-relative">
                            <a
                              className="custom-accordion-title text-reset d-block"
                              data-toggle="collapse"
                              href="#cardSessionCommision"
                              aria-expanded="true"
                              aria-controls="cardSessionCommision"
                            >
                              Session Commission Type{" "}
                              <i className="mdi mdi-chevron-down accordion-arrow" />
                            </a>
                          </h5>
                        </div>
                        <div
                          id="cardSessionCommision"
                          className="collapse show"
                          aria-labelledby="headingcardSessionCommision"
                          data-parent="#custom-accordion-four"
                        >
                          <div className="Portletcard-body">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label">
                                    Session Commission
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <input
                                      id="txtSessionCommission"
                                      type="text"
                                      ename="Session Commission"
                                      className="form-control numeric"
                                      onblur="SessionCommission()"
                                      onkeypress="maxnumber(this)"
                                      required
                                    />
                                    <div className="invalid-feedback">
                                      Please enter Session Commission.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group row">
                                  <label className="col-sm-3 col-xs-12 col-form-label">
                                    Session Min. &amp; Max Commission
                                  </label>
                                  <div className="col-sm-8 col-xs-12">
                                    <div className="row">
                                      <div className="col-6">
                                        <input
                                          id="txtSessionMinCommission"
                                          type="text"
                                          ename="Session Min. Commission"
                                          className="form-control numeric"
                                          required
                                          min={0}
                                          max={100}
                                        />
                                        <input
                                          type="hidden"
                                          name="hdnappSessionMinCommission"
                                          id="hdnappSessionMinCommission"
                                          defaultValue={0}
                                        />
                                        <div className="invalid-feedback">
                                          Please enter Session Min. Commission.
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <input
                                          id="txtSessionMaxCommission"
                                          type="text"
                                          ename="Session Max Commission"
                                          onblur="SessionMaxCommission()"
                                          className="form-control numeric"
                                          required
                                          min={0}
                                          max={100}
                                        />
                                        <input
                                          type="hidden"
                                          name="hdnappSessionMaxCommission"
                                          id="hdnappSessionMaxCommission"
                                          defaultValue={100}
                                        />
                                        <div className="invalid-feedback">
                                          Please enter Session Max. Commission.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end card*/}
                    </div>
                    <div
                      className="accordion custom-accordion"
                      id="custom-accordion-seven"
                    >
                      {/* Portlet card */}
                      <div className="card mb-0">
                        <div
                          className="card-header"
                          id="headingcardPermissions"
                        >
                          <h5 className="m-0 position-relative">
                            <a
                              className="custom-accordion-title text-reset d-block"
                              data-toggle="collapse"
                              href="#cardPermissions"
                              aria-expanded="true"
                              aria-controls="cardPermissions"
                            >
                              Permissions{" "}
                              <i className="mdi mdi-chevron-down accordion-arrow" />
                            </a>
                          </h5>
                        </div>
                        <div
                          id="cardPermissions"
                          className="collapse show"
                          aria-labelledby="headingcardPermissions"
                          data-parent="#custom-accordion-seven"
                        >
                          <div className="Portletcard-body">
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
                        </div>{" "}
                        {/* end card*/}
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
  );
}
