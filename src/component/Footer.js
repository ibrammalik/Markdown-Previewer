import React from "react";
import Logo from "../assets/img/logo.png";
import Profile from "../assets/img/Profile.png";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer id="footer" className="flex flex-col bg-slate-900 text-white justify-center py-5">
      <div id="footer-content" className="flex justify-center flex-col items-center gap-y-4 gap-x-16 sm:flex-row ">
        <div id="logo" className="flex flex-col justify-center items-center">
          <img id="website-logo" src={Logo} alt="Website Logo" width="100px" height="100px"></img>
          <p id="website-name" className="text-center font-bold text-lg text-[#2ECC71] ">
            Markdown Previewer
          </p>
        </div>
        <div id="credit-container">
          <p id="credit-title" className="font-bold text-lg text-[#2ECC71]">
            Credit
          </p>
          <ul>
            <li>
              <a href="https://icons8.com/icon/21827/markdown" title="q icons" target="_blank" rel="noreferrer" className="text-gray-800 text-lg bg-slate-200 px-2 py-1 rounded-lg hover:bg-[#2ECC71]">
                Markdown icons by Icons8
              </a>
            </li>
          </ul>
        </div>
        <div id="aboutme">
          <p id="aboutme-title" className="font-bold text-lg text-[#2ECC71]">
            About Me
          </p>
          <div id="aboutme-detail" className="flex">
            <img src={Profile} id="profile-picture" alt="profile-ibrammalik" width="100px" height="100px"></img>
            <div id="social-media-container" className="flex flex-col ml-1">
              <p id="social-media-title" className="font-bold text-lg text-[#2ECC71]">
                Social Media
              </p>
              <a href="https://github.com/ibrammalik" target="_blank" rel="noreferrer" className="hover:text-[#2ECC71]">
                <FontAwesomeIcon icon={faGithub} /> <span>ibrammalik</span>
              </a>
              <a href="https://instagram.com/ibra_mmalik" target="_blank" rel="noreferrer" className="hover:text-[#2ECC71]">
                <FontAwesomeIcon icon={faInstagram} /> <span>ibra_mmalik</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright">
        <p className="text-center py-2">
          Copyright <FontAwesomeIcon icon={faCopyright} /> 2022 ibrammalik. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
