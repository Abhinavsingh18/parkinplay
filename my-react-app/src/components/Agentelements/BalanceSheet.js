import React from 'react'

const BlanceSheet = () => {
  return (
    <>
    
    <div className="content">
  {/* Start Content*/}
  <div className="container-fluid">
    <div className="Loading" style={{display: 'none'}}>
      <button className="btn" type="button" disabled>
        <span className="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true" />
        Loading...
      </button>
    </div>
    <div className="page-loading" style={{display: 'none'}}>
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
      {/*end card-body*/}
      {/*</div>*/}{/*end card*/}
    </div>
    <div className="divNews pt-1 d-lg-none d-sm-block">
      <marquee behavior="scroll" direction="left" id="news" onmouseover="this.stop();" onmouseout="this.start();" className="vertical-align-middle">
        <div id="NewsDisplayBody"><div style={{display: 'inline'}} className>             <i className=" dripicons-blog" style={{verticalAlign: 'middle', display: 'inline', fontSize: '16px'}} ng-cloak />&nbsp;Jo bhi client 5-10 sec me Lay/Back karega uski bets delete ki jaayegi aur valid nhi maani jaayegi. &nbsp;&nbsp;&nbsp;&nbsp;       </div><div style={{display: 'inline'}} className>             <i className=" dripicons-blog" style={{verticalAlign: 'middle', display: 'inline', fontSize: '16px'}} ng-cloak />&nbsp;Our Centre Server facing malware attack So for now all system down. We setup new server once it will complete we inform you. It will setup in minimum 4 hours. Sorry for Inconvenience. &nbsp;&nbsp;&nbsp;&nbsp;       </div><div style={{display: 'inline'}} className>             <i className=" dripicons-blog" style={{verticalAlign: 'middle', display: 'inline', fontSize: '16px'}} ng-cloak />&nbsp;Dear Clients, Due to server issue site bnd hone ki vjah se all client ki bets cancel ki gyi he chahe woh loss me tha chahe woh profit me tha so please support with us. Sorry for Inconvenience.  &nbsp;&nbsp;&nbsp;&nbsp;       </div></div>
      </marquee>
    </div>
    {/* start page title */}
    <div id="pageData">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <div className="page-title-right">
              <ol className="breadcrumb m-0" id="tabSitemap">
              </ol>
            </div>
            <h4 className="page-title" id="FullNameID">Balance Sheet : Shiv4400</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="row">
              <div className="col-sm-9 col-xs-12">
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
                <div className="col-lg-5 col-md-8 col-sm-12 col-xs-12">
                  <div className="notification-list">
                    <label className="checkbox checkbox-info mr-1">
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
                <div className="col-lg-6 col-md-4 col-sm-12 col-xs-12">
                  <label className=" d-none d-md-block d-lg-block">&nbsp;</label>
                  <button type="button" className="btn btn-success r-margint25" onclick="SearchData();" id="btnSearch">
                    <i className="fa fa-search" />  Search
                  </button>
                </div>
              </div>
              <hr className="hidden-sm hidden-md hidden-lg" />
            </div>
            <div id="pageBreadcrumb" />
            <div className="col-md-12" id="NoInformationListChipSummery" style={{display: 'none'}}>
              <table className="table tables_ui">
                <thead>
                  <tr><td colSpan={4} className="information">  No Data Found. </td></tr>
                </thead>
              </table>
            </div>
            <div id="InformationListChipSummery" style={{}}>
              <div className="row">
                <div className="col-12">
                  <div className="mr-2 float-left">
                    <button className="btn btn-outline-success" onclick="cloneBalanceSheet('Excel')"><span>Excel</span></button>
                    <button className="btn btn-outline-danger" onclick="cloneBalanceSheet('PDF')"><span>PDF</span></button>
                    <button className="btn btn-outline-info" onclick="cloneBalanceSheet('CSV')"><span>CSV</span></button>
                    <div className="d-inline-block marginl15 align-bottom">
                      <span id="PointDetail" className="font-weight-bold Text-15">
                        <label className="switchPts">
                          <input type="checkbox" className="px" id="rbtnPTSINR" name="rbtn" defaultChecked onchange="PTSINR();" />
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
            </div>
          </div>
          <div className="card" id="carddata">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-1 float-right">
                    <input type="text" id="txtPlusSearch" className="form-control" placeholder="Search Min. 2 characters" />
                  </div>
                  <div id="PlusChips" className="table-responsive"><table className="table table-hover table-striped table-bordered table-UserList mb-0" id="tblPlusChips">         <thead>             <tr>                 <td className="nosort border-bottom-success">UserName[FullName]</td>                 <td className="text-right nosort border-bottom-success clsPts">Balance</td>                 <td className="text-right nosort border-bottom-success clsRs hide">Balance</td>                 <td className="text-center nosort border-bottom-success">Action</td>           </tr>       </thead>         <tbody id="tmpltblPlusBody"><tr className="OwnPlPlus" style={{}}>         <td>             <label className="btn btn-primary grid-button OwnPlPlus" style={{cursor: 'text'}}>Market PL</label>       </td>         <td className="text-right clsPts">             <span id="OwnPlPlusPts" className="OwnPlPlus clsPlusAmount">0.92</span>       </td>         <td className="text-right clsRs hide">             <span id="OwnPlPlusRs" className="OwnPlPlus clsPlusAmount">0.92</span>       </td>         <td />   </tr>     <tr className="MarketCommissionPlus" style={{display: 'none'}}>         <td>             <label className="btn btn-info grid-button MarketCommissionPlus" style={{cursor: 'text'}}>Market Commission</label>       </td>         <td className="text-right clsPts">             <span id="MarketCommissionPlusPts" className="MarketCommissionPlus clsPlusAmount" />       </td>         <td className="text-right clsRs hide">             <span id="MarketCommissionPlusRs" className="MarketCommissionPlus clsPlusAmount" />       </td>         <td />   </tr>     <tr className="SessionCommissionPlus" style={{display: 'none'}}>         <td>             <label className="btn btn-warning grid-button SessionCommissionPlus" style={{cursor: 'text'}}>Session Commission</label>       </td>         <td className="text-right clsPts">             <span id="SessionCommissionPlusPts" className="SessionCommissionPlus clsPlusAmount" />       </td>         <td className="text-right clsRs hide">             <span id="SessionCommissionPlusRs" className="SessionCommissionPlus clsPlusAmount" />       </td>         <td />   </tr>     <tr className="CashPlus" style={{display: 'none'}}>         <td>             <label className="btn btn-success grid-button CashPlus" style={{cursor: 'text'}}>Cash</label>       </td>         <td className="text-right clsPts">             <span id="CashPlusPts" className="CashPlus clsPlusAmount" />       </td>         <td className="text-right clsRs hide">             <span id="CashPlusRs" className="CashPlus clsPlusAmount" />       </td>         <td />   </tr>     <tr className="ParentPLPlus" style={{}}>         <td>             <label className="btn btn-warning grid-button ParentPLPlus" style={{cursor: 'text'}}>Settlement (Parent)</label>       </td>         <td className="text-right clsPts">             <span id="ParentPLPlusPts" className="ParentPLPlus clsPlusAmount">0.08</span>       </td>         <td className="text-right clsRs hide">             <span id="ParentPLPlusRs" className="ParentPLPlus clsPlusAmount">0.08</span>       </td>         <td />   </tr>     <tr className="ParentCashPlus" style={{display: 'none'}}>         <td>             <label className="btn btn-success grid-button ParentCashPlus" style={{cursor: 'text'}}>Cash (Parent)</label>       </td>         <td className="text-right clsPts">             <span id="ParentCashPlusPts" className="ParentCashPlus clsPlusAmount" />       </td>         <td className="text-right clsRs hide">             <span id="ParentCashPlusRs" className="ParentCashPlus clsPlusAmount" />       </td>         <td />   </tr></tbody>         <tfoot>             <tr>                 <td>Total</td>                 <td className="text-right clsPts">                     <span className="PlusAmountTotalPts">1.00</span>               </td>                 <td className="text-right clsRs hide">                     <span className="PlusAmountTotalRs">1.00</span>               </td>                 <td />           </tr>       </tfoot>   </table></div>
                </div>
                <div className="col-md-6">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-1 float-right">
                    <input type="text" id="txtMinusSearch" className="form-control" placeholder="Search Min. 2 characters" />
                  </div>
                  <div id="MinusChips" className="table-responsive"><table className="table table-hover table-striped table-bordered table-UserList mb-0" id="tblMinusChips">         <thead>             <tr>                 <td className="nosort border-bottom-danger">UserName[FullName]</td>                 <td className="text-right nosort border-bottom-danger clsPts">Balance</td>                 <td className="text-right nosort border-bottom-danger clsRs hide">Balance</td>                 <td className="text-center nosort border-bottom-danger">Action</td>           </tr>       </thead>         <tbody id="tmpltblMinusBody"><tr>         <td>                                        <span className="btn btn-warning grid-button userType" style={{cursor: 'text'}} data-plugin="tippy" data-tippy-arrow="true" data-tippy-arrowtype="round" data-tippy-animation="fade" data-tippy data-original-title="Client">C</span>             <span className="userName">mhskushwah[mahesh kushwah]</span>                    </td>         <td className="text-right clsMinusAmount clsPts">             <span>-1.00</span>       </td>         <td className="text-right clsMinusAmount clsRs hide">             <span>-1.00</span>       </td>         <td className="text-center">             <div className="btn-group">                                  <a className="btn btn-info grid-button waves-effect waves-light popup" href="javascript:" onclick="confirmBoxClearSettlement('53534558303353314944733D', '3', '-1','-1','false');">Clear</a>                 <a className="btn btn-warning grid-button waves-effect waves-light popup" href="javascript:" onclick="SettlementPopup('53534558303353314944733D', '3','-1','mhskushwah[mahesh kushwah]','false');" style={{cursor: 'pointer', fontWeight: 700}}>Settlement</a>                                                   <a className="btn btn-primary grid-button waves-effect waves-light" onclick="SettlementHistoryView('53534558303353314944733D', '3','mhskushwah[mahesh kushwah]')">History</a>           </div>       </td>   </tr>          <tr className="OwnPlMinus" style={{display: 'none'}}>         <td>             <label className="btn btn-primary grid-button OwnPlMinus" style={{cursor: 'text'}}>Market PL</label>       </td>         <td className="text-right clsPts">             <span id="OwnPlMinusPts" className="OwnPlMinus clsMinusAmount" />       </td>         <td className="text-right clsRs hide">             <span id="OwnPlMinusRs" className="OwnPlMinus clsMinusAmount" />       </td>         <td />   </tr>     <tr className="MarketCommissionMinus" style={{}}>         <td>             <label className="btn btn-info grid-button MarketCommissionMinus" style={{cursor: 'text'}}>Market Commission</label>       </td>         <td className="text-right clsPts">             <span id="MarketCommissionMinusPts" className="MarketCommissionMinus clsMinusAmount">0.00</span>       </td>         <td className="text-right clsRs hide">             <span id="MarketCommissionMinusRs" className="MarketCommissionMinus clsMinusAmount">0.00</span>       </td>         <td />   </tr>     <tr className="SessionCommissionMinus" style={{}}>         <td>             <label className="btn btn-warning grid-button SessionCommissionMinus" style={{cursor: 'text'}}>Session Commission</label>       </td>         <td className="text-right clsPts">             <span id="SessionCommissionMinusPts" className="SessionCommissionMinus clsMinusAmount">0.00</span>       </td>         <td className="text-right clsRs hide">             <span id="SessionCommissionMinusRs" className="SessionCommissionMinus clsMinusAmount">0.00</span>       </td>         <td />   </tr>     <tr className="CashMinus" style={{display: 'none'}}>         <td>             <label className="btn btn-success grid-button CashMinus" style={{cursor: 'text'}}>Cash</label>       </td>         <td className="text-right clsPts">             <span id="CashMinusPts" className="CashMinus clsMinusAmount" />       </td>         <td className="text-right clsRs hide">             <span id="CashMinusRs" className="CashMinus clsMinusAmount" />       </td>         <td />   </tr>     <tr className="ParentPLMinus" style={{display: 'none'}}>         <td>             <label className="btn btn-warning grid-button ParentPLMinus" style={{cursor: 'text'}}>Settlement (Parent)</label>       </td>         <td className="text-right clsPts">             <span id="ParentPLMinusPts" className="ParentPLMinus clsMinusAmount" />       </td>         <td className="text-right clsRs hide">             <span id="ParentPLMinusRs" className="ParentPLMinus clsMinusAmount" />       </td>         <td />   </tr>     <tr className="ParentCashMinus" style={{display: 'none'}}>         <td>             <label className="btn btn-primary grid-button ParentCashMinus" style={{cursor: 'text'}}>Cash from Parent</label>       </td>         <td className="text-right clsPts">             <span id="ParentCashMinusPts" className="ParentCashMinus clsMinusAmount" />       </td>         <td className="text-right clsRs hide">             <span id="ParentCashMinusRs" className="ParentCashMinus clsMinusAmount" />       </td>         <td />   </tr></tbody>         <tfoot>             <tr>                 <td>Total</td>                 <td className="text-right clsPts">                     <span className="MinusAmountTotalPts">-1.00</span>               </td>                 <td className="text-right clsRs hide">                     <span className="MinusAmountTotalRs">-1.00</span>               </td>                 <td />           </tr>       </tfoot>   </table></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row hide">
        <div className="col-md-6" id="lefttbl">
        </div>
        <div className="col-md-6" id="righttbl">
        </div>
      </div>
      <div className="row div-export hide">
        <div className="col-md-12 col-sm-12 col-xs-12" id="exporttbl">
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="ChipSettlmentModal" role="dialog" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-md" style={{maxWidth: '400px'}}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="modal-title">
                <label id="ChipsummaryUname" />
              </h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div className="modal-body">
              <form id="ChipsSettlmentForm">
                <table className="table dt-responsive w-100">
                  <tbody><tr>
                      <td>
                        Profit/Loss:
                      </td>
                      <td>
                        <div className="input-group">
                          <input id="txtCurrentBalance" className="form-control" disabled />
                          <span className="input-group-text hidden-sm">PTS</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Cash:</td>
                      <td>
                        <div className="input-group">
                          <input type="text" id="txtAmount" onkeyup="AmountChange(this,event)" ename="Settlment Amount" onkeydown="AmountChange(this,event)" className="numeric form-control" required />
                          <span className="input-group-text hidden-sm">PTS</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <a className="cursor-pointer clsGetFullAmount badge-soft-success" onclick="getFullAmount()">Full Amount</a>
                        <a className="cursor-pointer clsClearFullAmount badge badge-soft-danger" onclick="clearFullAmount()">Clear</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Remain Cash:
                      </td>
                      <td>
                        <div className="input-group">
                          <span id="lblNewBalance" className="form-control" />
                          <span className="input-group-text hidden-sm">PTS</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Remarks:</td>
                      <td><textarea id="txtRemarkBSSetellement" className="form-control" defaultValue={""} /></td>
                    </tr>
                    <tr>
                      <td><label className="col-form-label">Password :</label></td>
                      <td>
                        <div className="input-group input-group-merge">
                          <input className="form-control" name="txtSettlementPassword" id="txtSettlementPassword" placeholder="password" type="password" />
                          <div className="input-group-append" data-password="false" onclick="HideShowPassword()">
                            <div className="input-group-text">
                              <span className="password-eye" />
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr align="right">
                      <td colSpan={2}>
                        <input id="btnSettlement" type="submit" defaultValue="Cash Settlement" className="btn btn-primary" />
                      </td>
                    </tr>
                  </tbody></table>
                <input id="hdnUserID" type="hidden" name="hdnUserID" defaultValue />
                <input id="hdnRefID" type="hidden" name="hdnRefID" />
                <input id="hdnRefType" type="hidden" name="hdnRefType" />
                <input id="hdnIsReverse" type="hidden" name="hdnIsReverse" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end page title */}
  </div> {/* container */}
</div>

    
    
    
    </>
  )
}

export default BlanceSheet