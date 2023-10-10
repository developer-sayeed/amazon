import { Link } from "react-router-dom";
import FooterPage from "../../components/Footer/FooterPage";
import { AiFillSound } from "react-icons/ai";
import Header from "../../components/Header/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="main-home">
        <div className="banner">
          <div className="banner-swap">
            <span className="j-item">
              <img src="https://www.flir.com/globalassets/industrial/iis/people-counting/people-counting-malls-banner.jpg" />
            </span>
          </div>
        </div>
        <div className="marquee-div">
          <AiFillSound />
          <marquee>
            Since FNAC has millions of users around the world performing product
            click tasks online at the same time, the product order click tasks
            dispatched by merchants are limited, so task orders with lower
            amounts are halved. Sorry for any inconveniences caused. If you want
            to get more commissions, please upgrade to a higher VIP level. The
            larger the amount, the higher the commissions, and you can work
            stably for a long time to earn higher commissions!
          </marquee>
        </div>
        <div className="module">
          <div className="m1">
            <div className="title">Commission Details</div>
            <a href="/" className="font-icon go-icon">
              Details
            </a>
          </div>
          <div className="m2">
            <div className="title">Company information</div>
            <a href="/" className="font-icon go-icon">
              Details
            </a>
          </div>
          <div className="m3">
            <div className="title">Recharge</div>
            <a href="/" className="font-icon go-icon">
              Details
            </a>
          </div>
          <div className="m4">
            <div className="title">Withdraw now</div>
            <a href="/" className="font-icon go-icon">
              Details
            </a>
          </div>
        </div>

        <div className="mission">
          <div className="module-list">
            <div className="module-title">Mission</div>
            <div className="task-list listv0 font-icon">
              <div className="item active">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758035394.png" />
                  <div className="vname">VIP 1</div>
                  <div className="info">earn $1.00 Per day</div>
                </div>
                {/* <div className="shadow noactive " />
                <div className="lock noactive" /> */}
              </div>
              <div className="item">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758035394.png" />
                  <div className="vname">VIP 2</div>
                  <div className="info">earn $9.00 Per day</div>
                </div>
                <div className="shadow noactive " />
                <div className="lock noactive" />
              </div>
              <div className="item">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758044968.png" />
                  <div className="vname">VIP 3</div>
                  <div className="info">earn $40.00 Per day</div>
                </div>
                <div className="shadow noactive " />
                <div className="lock noactive" />
              </div>
              <div className="item">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758054918.png" />
                  <div className="vname">VIP 4</div>
                  <div className="info">earn $135.00 Per day</div>
                </div>
                <div className="shadow noactive " />
                <div className="lock noactive" />
              </div>
              <div className="item">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758066003.png" />
                  <div className="vname">VIP 5</div>
                  <div className="info">earn $400.00 Per day</div>
                </div>
                <div className="shadow noactive " />
                <div className="lock noactive" />
              </div>
              <div className="item">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758075131.png" />
                  <div className="vname">VIP 6</div>
                  <div className="info">earn $1200.00 Per day</div>
                </div>
                <div className="shadow noactive " />
                <div className="lock noactive" />
              </div>
              <div className="item">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758088439.png" />
                  <div className="vname">VIP 7</div>
                  <div className="info">earn $3600.00 Per day</div>
                </div>
                <div className="shadow noactive " />
                <div className="lock noactive" />
              </div>
              <div className="item">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758098517.png" />
                  <div className="vname">VIP 8</div>
                  <div className="info">earn $6000.00 Per day</div>
                </div>
                <div className="shadow noactive " />
                <div className="lock noactive" />
              </div>
              <div className="item">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758110516.png" />
                  <div className="vname">VIP 9</div>
                  <div className="info">earn $12500.00 Per day</div>
                </div>
                <div className="shadow noactive " />
                <div className="lock noactive" />
              </div>
              <div className="item">
                <div className="img-swap">
                  <img src="https://mallv0.oss-accelerate.aliyuncs.com/adsShop/20230915/1694758119848.png" />
                  <div className="vname">VIP 10</div>
                  <div className="info">earn $30000.00 Per day</div>
                </div>
                <div className="shadow noactive " />
                <div className="lock noactive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
