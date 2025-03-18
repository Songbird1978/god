import React from "react";
import '../logo/logo.css';


function Logo({ onClick }) {

  return (

    <div onClick={onClick} style={{ cursor: "pointer" }} className="logo">
      <span>G</span>ary<span>O</span>'<span>D</span>onnell
    </div>
  );
}

export default Logo;