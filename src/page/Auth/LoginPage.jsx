import { Link } from "react-router-dom";
import "./style.css";
const LoginPage = () => {
  return (
    <>
      <div className="screen-1">
        <div className="logo">
          <img
            src="https://www.pixelparfait.graphics/wp-content/uploads/2023/01/AMZN-e9f942e4.png"
            alt=""
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <div className="sec-2">
            <ion-icon name="mail-outline" />
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Your Email Address"
            />
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline" />
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Type your password"
            />
            <ion-icon className="show-hide" name="eye-outline" />
          </div>
        </div>
        <button className="login">Login </button>
        <div className="footer">
          <Link to={"/register"}>Signup</Link>
          <Link to={"/register"}>Forgot Password?</Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
