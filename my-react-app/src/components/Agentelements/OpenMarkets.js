import React from 'react'

const OpenMarkets = () => {
  return (
    <div id="pageData">
  <style dangerouslySetInnerHTML={{__html: "\n    .marketrate {\n        width: 52px;\n        display: inline-block;\n        font-size: 14px;\n        padding: 0px 5px;\n    }\n\n    .marketrateinput {\n        margin: 5px 0px;\n    }\n\n    .notefont {\n        font-size: 9px;\n        font-weight: 800;\n    }\n" }} />
  <div className="row">
    <div className="col-12">
      <div className="page-title-box">
        <h4 className="page-title">Open Markets</h4>
      </div>
    </div>
  </div>
  {/* end page title */}
  <div className="row">
    <div className="col-12">
      <div className="card">
        <div className="row">
          <div className=" col-sm-3 col-xs-12">
            <input type="hidden" name="hdnMarketId" id="hdnMarketId" defaultValue />
            <button onclick="BlockUnblockAll(true)" className="btn btn-success waves-effect waves-light">Unblock Market</button>
            <button onclick="BlockUnblockAll(false)" className="btn btn-danger waves-effect waves-light">Block Market</button>
          </div>
          <div className=" col-sm-2 col-xs-12">
            <div className="input-group input-group-merge">
              <input type="text" id="txtSavePassword" className="form-control" placeholder="Enter Password" />
            </div>
          </div>
          <div className="col-sm-3 col-xs-12 accordion custom-accordion">
            <h5 className="m-0 position-relative">
              <a className="custom-accordion-title text-reset collapsed d-block text-right mr-3" data-toggle="collapse" href="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter">
                <span>Advance Search</span> <i className="mdi mdi-chevron-down accordion-arrow" />
              </a>
            </h5>
          </div>{/* end col*/}
        </div>
        <div id="collapseFilter" className="collapse">
          <hr />
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
              <select id="ddlSport" className="form-control filteroption" data-style="btn-danger"><option value={0}>Select Sport</option><option value="366A716D53314D7A376A493D">Cricket</option><option value="6534664F382F31746C56413D">Politics</option><option value="7A59686D784545443476733D">Tennis</option><option value="656A6973414C6B4C5551633D">Soccer</option></select>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
              <select id="ddlTournament" className="form-control filteroption">
                <option value={0}>Select Tournament</option>
              </select>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
              <select id="ddlMatch" className="form-control filteroption">
                <option value={0}>Select Match</option>
              </select>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
              <select id="ddlMarket" className="form-control filteroption">
                <option value={0}>Select Market</option>
              </select>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
              <select id="ddlMarketType" className="form-control"><option value={-1}>Select Market Type</option><option value="727A6B43615364784D50413D">Market</option><option value="656A6973414C6B4C5551633D">AdvanceSession</option><option value="4D4E3764617254514747493D">Bookmakers</option><option value="74436251495938684D59513D">LineMarket</option><option value="6E6663526A596E625754633D">ManualOdds</option><option value="7473545A6F6643505053673D">VirtualSportBook</option><option value="58434B6F393251624551383D">SportBook</option></select>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-5 col-md-8 col-sm-12 col-xs-12">
              <div className="notification-list">
                <label className="checkbox checkbox-info ml-1 mr-1">
                  <input type="checkbox" id="chkIsDate" defaultValue="true" />
                  <label htmlFor="chkIsDate" className="bold">Date Wise</label>
                </label>
              </div>
              <div className="input-group marginb5 div-datepicker">
                <input type="text" className="form-control datepicker flatpickr-input" name="ReportStartDate" id="StartDateFilter" disabled readOnly="readonly" />
                <span className="col-form-label">to</span>
                <input type="text" className="form-control datepicker flatpickr-input" name="ReportEndDate" id="EndDateFilter" disabled readOnly="readonly" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <label className=" d-none d-md-block d-lg-block">&nbsp;</label>
              <button type="button" className="btn btn-success" onclick="getMarket();" id="btnSearch">
                <i className="fa fa-search" />  Search
              </button>
              <button onclick="ResetMarketAction()" className="btn btn-primary waves-effect waves-light ml-2">Reset</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="col-12">
            <div className="row d-flex flex-row-reverse">
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12  mb-1">
                <input type="text" id="txtsearch" className="form-control" placeholder="Search Min. 2 characters" />
              </div>
              <div className="dt-buttons flex-wrap ol-lg-3 col-md-3 col-sm-12 col-xs-12 text-right">
                <a className="btn btn-secondary buttons-html5 btn-light mr-1" tabIndex={0} onclick="SearchCommonFilterDynamicData()" title="Advance Filter" style={{display: 'inline-block'}}><span><i className="fa fa-filter" /></span></a>
                <a className="btn btn-secondary buttons-html5 btn-light mr-1" tabIndex={0} onclick="ResetDynamicData()" title="Reset" style={{display: 'inline-block'}}><i className="fas fa-sync-alt" /></a>
                <a className="btn btn-secondary buttons-html5 btn-light mr-1" tabIndex={0} onclick="ExportTableData('CSV')" title="CSV" style={{display: 'inline-block'}}><span><i className=" fas fa-file-csv" /></span></a>
                <a className="btn btn-secondary buttons-html5 btn-light mr-1" tabIndex={0} aria-controls="tbllist" onclick="ExportTableData('Excel')" title="Excel" style={{display: 'inline-block'}}><span><i className="far fa-file-excel" /></span></a>
                <a className="btn btn-secondary buttons-html5 btn-light mr-1" tabIndex={0} aria-controls="tbllist" onclick="ExportTableData('PDF')" title="PDF" style={{display: 'inline-block'}}><span><i className="far fa-file-pdf" /></span></a>
              </div>
              <div className="col-md-7 col-sm-12">
                <div className="col-12 mt-2 font-weight-600">Showing&nbsp;<span id="lblselctedrecords">25</span>&nbsp;of&nbsp;<span id="lbltotalrecords">285</span>&nbsp;entries</div>
              </div>
            </div>
          </div>
          <div className="col-12 commonsearchquery pt-1 pb-1 mb-1 hide" id="commonsearchquery" />
          <div id="divList" className="table-responsive">
          </div>
          <div id="divLoadMore" className="load-more"><span onclick="BindDataToTable()">Load More</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default OpenMarkets