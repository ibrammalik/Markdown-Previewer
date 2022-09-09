import React from "react";
import logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg flex justify-between py-2 px-11 items-center">
      <a href="/" className="flex items-center gap-x-1">
        <img src={logo} width="30px" alt="logo" />
        <span className="font-bold">Markdown Previewer</span>
      </a>

      <div className="font-bold">Menu</div>
    </nav>
  );
}

export default Navbar;
