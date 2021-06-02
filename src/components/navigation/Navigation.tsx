import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

import Sidebar from "./sidebar/Sidebar";
import { openSidebar } from "../../functions";

const Naviagtion: React.FC = () => {
  useEffect(() => {
    const SIDEBAR_BTN: HTMLElement | null = document.getElementById(
      "sidebar-btn"
    );
    if (SIDEBAR_BTN) SIDEBAR_BTN.addEventListener("click", openSidebar);
  }, []);

  return (
    <>
      <nav className="navbar navbar-light fixed-top">
        <div className="container-fluid">
          <div className="sidebar-toggle">
            <FontAwesomeIcon className="fa-lg" icon={faBars} id="sidebar-btn" />
          </div>
          <Link to="/" className="blog-title">
            💻 eol-g
          </Link>
        </div>
      </nav>
      <Sidebar />
    </>
  );
};

export default Naviagtion;
