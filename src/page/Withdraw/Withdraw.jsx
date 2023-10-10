import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

const Withdraw = () => {
  return (
    <>
      <div className="withdwalSection">
        <div className="team-header">
          <Link to={"/profile"}>
            <AiOutlineLeft />
          </Link>
          <h2>Withdraw</h2>
          <Link to={"/withdwal/record"}>History</Link>
        </div>
        <div className="deposit-Body">
          <div className="full-table">
            <h3>Balance $400</h3>
            <form action="" onSubmit={() => alert("Coming Soon..")}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  disabled
                  value={"d79aa107ccbc.....1c70e13f2e4f9434"}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder="Please enter the Withdrwal amount"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="trxid"
                  placeholder="Please enter the Transaction password"
                />
              </div>

              <button className="submit">Submit</button>
            </form>
            <div className="withdwal-footer">
              <div className="note">
                <p>
                  1. The withdrawal amount is $10-$99999.
                  <br />
                  2. Withdraw salary at most once a day.
                  <br />
                  3. Withdrawal will be completed within 48 hours of working
                  time.
                  <br />
                  4.15% withdrawal fee, the minimum fee is $1.
                  <br />
                  5. Handling fee discount: only on the 1st, 11th, and 21st of
                  each month, you can enjoy an 8% cash withdrawal discount
                  <br />
                  For example: You withdraw 1000$ on the 11th. You can get a
                  cash withdrawal fee subsidy of 80$.
                  <br />
                  The conditions for this preferential subsidy are: you can
                  enjoy this discount if you do not initiate any cash withdrawal
                  within 9 days before the 1st, 11th, and 21st of each month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdraw;
