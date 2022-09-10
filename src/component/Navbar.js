import React from "react";
import logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg flex justify-between py-2 pl-11 pr-4 items-center ">
      <a href="/" className="flex items-center gap-x-1">
        <img src={logo} width="30px" alt="logo" />
      </a>

      <div className="font-bold">Markdown Previewer</div>
    </nav>
  );
}

export default Navbar;
