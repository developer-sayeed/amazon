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
                  1. The withdrawal amount Minimum 10$ and maximum Unlimited
                  <br /> <br />
                  2. Withdraw at most once a day.
                  <br /> <br />
                  3. Withdrawal will be completed within 48 hours of working
                  time.
                  <br /> <br />
                  4.10% withdrawal Goverment fee Tax, the minimum fee is $1.
                  <br /> <br />
                  5. For example: You withdraw 10$ You can get a cash withdrawal
                  fee subsidy of 1$.
                  <br /> <br />
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
