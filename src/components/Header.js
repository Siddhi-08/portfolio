import React from "react";
import logo from "../assets/logo.png";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img style={{ height: "60px" }} src={logo} alt="" />
          </a>
          <div className="flex items-center space-x-4">
            <a href="mailto:siddhijha0804@gmail.com">
              <button className="btn btn-sm">Hire Me</button>
            </a>
            <a href="https://leetcode.com/u/tech_whiz-04/" target="_blank">
              <SiLeetcode />
            </a>
            <a
              href="https://github.com/Siddhi-08?tab=repositories"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhi-jha-b2544522b/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/siddhijha/"
              target="_blank"
            >
              <SiGeeksforgeeks />
            </a>
            <a href="https://codeforces.com/profile/siddhi_04" target="_blank">
              <SiCodeforces />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
