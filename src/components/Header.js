import React from "react";
import negar from "../img/negar.png";
const Header = () => {
  return (
    <div className="absolute  w-full h-[60px] bg-[#eaecee] top-0 left-0 flex items-center justify-center">
      <div className="w-3/12 h-[50%]">
        <img src={negar} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Header;
