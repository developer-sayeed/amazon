import React from "react";
import "./style.css";
import { AiOutlineGlobal } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img
            src="https://www.pixelparfait.graphics/wp-content/uploads/2023/01/AMZN-e9f942e4.png"
            alt=""
          />
        </div>
        <div className="iocn">
          <AiOutlineGlobal />
        </div>
      </div>
    </>
  );
};

export default Header;
