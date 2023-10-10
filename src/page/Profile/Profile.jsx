import React from "react";
import { BiMoney, BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlinePoweroff, AiOutlineRight } from "react-icons/ai";
import { BsFillCreditCard2FrontFill, BsPencilSquare } from "react-icons/bs";

import { SlDiamond } from "react-icons/sl";
import "./style.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="tab-panel tab-fund_mine profilepage" style={{}}>
      <div className="mine-uinfo">
        <div className="mine-top">
          <div className="left">
            <div className="login_id">demo@gmail.com</div>
            <div className="vip">0</div>
            <div className="ckeyswap">
              <span>Invite code : </span>
              <span className="ckey">u353459hjzj1</span>
            </div>
          </div>
        </div>
        <div className="money-div">
          <div>
            <div className="money">$0</div>
            <div className="m_bottom">Balance</div>
          </div>
          <div className="first">
            <div className="money">$55.20</div>
            <div className="m_bottom">Total balance</div>
          </div>
          <div>
            <Link to={"/withdwal"} className="tx-btn">
              Withdraw
            </Link>
          </div>
        </div>
        <div className="bottom" />
      </div>
      <div className="earning-history">
        <div className="flex-row">
          <div className="flex-item">
            <div>$0</div>
            <div>Today's Earnings</div>
          </div>
          <div className="flex-item">
            <div>$0.20</div>
            <div>Yesterday's Earnings</div>
          </div>
          <div className="flex-item">
            <div>$0.20</div>
            <div>Monthly income</div>
          </div>
        </div>
        <div className="flex-row">
          <div className="flex-item">
            <div>$0</div>
            <div>Earnings last month</div>
          </div>
          <div className="flex-item">
            <div>$0.20</div>
            <div>Total revenue</div>
          </div>
          <div className="flex-item">
            <div>$0</div>
            <div>Earnings this week</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <Link to={"/deposit"}>
            <h3 className="info1">Recharge</h3>
            <div className="info2">Unlock VIP to earn money</div>
          </Link>
        </div>
        <div>
          <h3 className="info1">Fund</h3>
          <div className="info2">Fight against inflation</div>
        </div>
      </div>

      <div className="tool-bar">
        <ul>
          <li>
            <Link to="/deposit/record">
              <div className="left">
                <BiMoney /> Deposit record
              </div>
              <div className="Right">
                <AiOutlineRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/withdwal/record">
              <div className="left">
                <BsFillCreditCard2FrontFill /> Withdrawals record
              </div>
              <div className="Right">
                <AiOutlineRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/withdwalmethod">
              <div className="left">
                <SlDiamond /> Withdrawals Method
              </div>
              <div className="Right">
                <AiOutlineRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="" onClick={() => alert("Coming Soon ")}>
              <div className="left">
                <BiMoneyWithdraw /> Investment Method
              </div>
              <div className="Right">
                <AiOutlineRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/changepassword">
              <div className="left">
                <BsPencilSquare /> Modify login password
              </div>
              <div className="Right">
                <AiOutlineRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/changeFundpassword">
              <div className="left">
                <BsPencilSquare /> Modify Fund password
              </div>
              <div className="Right">
                <AiOutlineRight />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="left">
                <AiOutlinePoweroff /> Logout
              </div>
              <div className="Right">
                <AiOutlineRight />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
