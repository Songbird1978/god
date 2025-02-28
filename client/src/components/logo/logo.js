import React from "react";
import '../logo/logo.css';


function Logo({ onClick }) {

  return (

    <div onClick={onClick} style={{ cursor: "pointer" }} className="logo">
      Gary O'Donnell
    </div>
  );
}

export default Logo;