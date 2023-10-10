import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const VipMember = () => {
  return (
    <>
      <div className="vip-header" style={{}}>
        <div className="logo">
          <img
            src="https://www.pixelparfait.graphics/wp-content/uploads/2023/01/AMZN-e9f942e4.png"
            alt=""
          />
        </div>
        <span className="title">VIP Details</span>
        <span className="action">
          <Link to="/">View Detiles</Link>
        </span>
      </div>

      <div
        className="tab-panel tab-vip"
        style={{ paddingBottom: "50px", background: "#f3f4f5" }}
      >
        <div className="full-table vip-table task-list">
          <div className="vip-item curVip active">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 0</span>
                  <span> $0</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span> 2</span>
                </div>
                <div className="join" style={{ display: "none" }}>
                  Join now
                </div>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758015405.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$0.10</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$0.20</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$0.80</div>
                <div>
                  <span>4</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 1</span>
                  <span>$70.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>1</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758025125.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$1.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$1.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$365.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 2</span>
                  <span>$150.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>3</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758035394.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$3.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$9.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$3285.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 3</span>
                  <span>$380.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>8</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758044968.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$5.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$40.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$14600.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 4</span>
                  <span>$800.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>9</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758054918.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$15.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$135.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$49275.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 5</span>
                  <span>$2000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>10</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758066003.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$40.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$400.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$146000.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 6</span>
                  <span>$5000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>15</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758075131.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$80.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$1200.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$438000.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 7</span>
                  <span>$13000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>18</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758088439.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$200.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$3600.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$1314000.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 8</span>
                  <span>$25000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>20</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758098517.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$300.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$6000.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$2190000.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 9</span>
                  <span>$50000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>25</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758110516.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$500.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$12500.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$4562500.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
          <div className="vip-item">
            <div className="flex_v0 vip-main">
              <div className="main-left">
                <div>
                  <span className="name">VIP 10</span>
                  <span>$80000.00</span>
                </div>
                <div className="info">
                  <span>Daily tasks</span>
                  <span>30</span>
                </div>
                <button className="join" type="submit">
                  Join
                </button>
              </div>
              <div className="main-right">
                <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758119848.png" />
              </div>
            </div>
            <div className="flex_v0 vip-earn">
              <div>
                <div className="minfo">$1000.00</div>
                <div>Per order</div>
              </div>
              <div>
                <div className="minfo">$30000.00</div>
                <div>Daily</div>
              </div>
              <div>
                <div className="minfo">$10950000.00</div>
                <div>
                  <span>365</span>
                  <span>Day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VipMember;
