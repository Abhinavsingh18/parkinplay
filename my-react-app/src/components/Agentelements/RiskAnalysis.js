import React from 'react'

const RiskAnalysis = () => {
  return (
    <>
    <div id="pageData">
  <style dangerouslySetInnerHTML={{__html: "\n    body[theme=dark] .widget-rounded-circle {\n        background-color: #3b4651;\n    }\n\n    body[theme=light] .widget-rounded-circle {\n        background-color: #f3f7f9;\n    }\n\n    .card-body {\n        min-height: 100px;\n    }\n\n    .table {\n        margin-bottom: 0;\n    }\n\n    .table-wrap {\n        border: 1px solid rgba(209, 208, 209, 0.29) !important\n    }\n\n    .table-book, .table-book td, .table-book th {\n        border: none !important;\n    }\n    body[theme=light] .market-row:hover {\n        background-color: #ffffff !important;\n        box-shadow: inset 0 0 30px #ddd;\n    }\n\n    body[theme=dark] .market-row:hover {\n        background-color: #4f5c69;\n    }\n\n    .table-book td {\n        border: none;\n        padding: 0.2rem;\n    }\n\n        .table-book td:not(:last-child) {\n            border-right: 1px solid rgba(209, 208, 209, 0.29) !important;\n        }\n\n    .notification-list-grid > .waves-effect {\n        padding: 0.5rem 0.8rem;\n    }\n\n    .table thead th {\n        padding: 4px;\n        text-align: center;\n    }\n\n    .BackColor {\n        background-color: #bbe1ee !important;\n        border-top-left-radius: 4px;\n        border-bottom-left-radius: 4px;\n    }\n\n    .Laycolor {\n        background-color: #f6c5c8 !important;\n        border-top-right-radius: 4px;\n        border-bottom-right-radius: 4px;\n    }\n\n    .ratebox {\n        display: inherit;\n        padding-right: 3px;\n        padding-left: 3px;\n    }\n\n    .price {\n        font-weight: 600;\n        line-height: 18px;\n        color: #444;\n        font-size: 14px;\n    }\n\n    .datatable {\n        border-color: rgba(209, 208, 209, 0.29) !important;\n    }\n\n    @media only screen and (max-width: 767px) {\n        .container-fluid {\n            padding: 5px;\n        }\n    }\n\n    .superadmin {\n        margin-top: 12px;\n        margin-bottom: auto;\n    }\n\n    .sideoptions {\n        margin-bottom: auto;\n    }\n" }} />
  {/* start page title */}
  <div className="row">
    <div className="col-12">
      <div className="page-title-box">
        <h4 className="page-title">RiskAnalysis</h4>
      </div>
    </div>
  </div>
  {/* end page title */}
  <div className="row d-flex flex-row-reverse">
    <div className="col-xl-12 col-sm-12">
      <div className="card">
        <ul className="nav nav-tabs nav-bordered pb-1">
          <li className="nav-item dashboard-detailview-box">
            <label className="lblDetailView">Risk Analysis</label>
            <div className="d-inline-flex pr-2">
              <span id="PointDetail" className="font-weight-bold Text-15">
                <label className="switch1 vertical-align-middle">
                  <input type="checkbox" className="px" id="chkDetailView" defaultChecked name="rbtn" onchange="GetDetailView();" />
                  <div className="slider1 round1">
                    <span className="on">True</span>
                    <span className="off">False</span>
                  </div>
                </label>
              </span>
            </div>
            <div className="clsSharing d-inline-flex text-center mt-1 pr-4">
              <span id="PointDetail1" className="font-weight-bold Text-15">
                <label className="switch1 vertical-align-middle">
                  <input type="checkbox" id="rbtnSharing" name="rbtn" defaultChecked />
                  <div className="toggle-switch-slider toggle-switch-round">
                    <span className="toggle-switch-on">Sharing Book</span>
                    <span className="toggle-switch-off">Sharing Book</span>
                  </div>
                </label>
              </span>
            </div>
            <div className="d-inline-flex">
              <span id className="font-weight-bold Text-15">
                <label className="switch1 vertical-align-middle">
                  <input type="checkbox" className="px" id="rbtnOldNew" name="rbtnOldNew" />
                  <div className="sliderPts roundPts">
                    <span className="onRound">New</span>
                    <span className="offRound">Old</span>
                  </div>
                </label>
              </span>
            </div>
            <div className="d-inline-flex">
              <span id="PointDetail" className="font-weight-bold Text-15">
                <label className="switch1 vertical-align-middle">
                  <input type="checkbox" className="px" id="rbtnPTSINR" name="rbtn" onchange="PTSINR();" />
                  <div className="sliderPts roundPts">
                    <span className="onRound">PTS</span>
                    <span className="offRound">INR</span>
                  </div>
                </label>
              </span>
            </div>
            <button id="btnRefreshPage" className="btn btn-success waves-effect waves-light input-group-btn input-group-append ml-1" data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" data-tippy data-original-title="Refresh"><i className="mdi mdi-autorenew" /></button>
          </li>
          <li className="nav-item dashboard-search-box">
            <input type="text" id="txtSearch" className="form-control " placeholder="Search" />
          </li>
          <li className="nav-item">
            <a href="#AllMatch" onclick="loadMarketTab('type-inplay')" data-toggle="tab" aria-expanded="false" className="nav-link active">
              In-Play
            </a>
          </li>
          <li className="nav-item">
            <a href="#AllMatch" onclick="loadMarketTab('type-all')" data-toggle="tab" aria-expanded="true" className="nav-link">
              All Match
            </a>
          </li>
        </ul>
        <div className="col-12 placeholder-content-effect hide">
          <div className="row">
            <div className="col-7 col-xs-12 tr-matchdetail placeholder-content" style={{lineHeight: '14px !important'}}>
              <div className="inter-right--first" />
              <div className="inter-right--bottom" />
            </div>
            <div className="col-5 col-xs-12 tr-matchdetail text-right placeholder-content">
              <div className="inter-crop" />
              <div className="inter-right--first" />
              <div className="inter-right--bottom" />
            </div>
          </div>
          <div className="row" style={{marginTop: '25px'}}>
            <div className="col-7 col-xs-12 tr-matchdetail placeholder-content" style={{lineHeight: '14px !important'}}>
              <div className="inter-right--first" />
              <div className="inter-right--bottom" />
            </div>
            <div className="col-5 col-xs-12 tr-matchdetail text-right placeholder-content">
              <div className="inter-crop" />
              <div className="inter-right--first" />
              <div className="inter-right--bottom" />
            </div>
          </div>
        </div>
   
        </div>
      </div> {/* end card-box*/}
    </div>
  </div>


    
    </>
  )
}

export default RiskAnalysis