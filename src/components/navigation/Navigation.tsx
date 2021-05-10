import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './navigation.css';

import Sidebar from './sidebar/Sidebar';

const Naviagtion: React.FC = () => {
  let sidebarIsOpen: boolean = false;

  const toggleSidebar = () => {
    const sidebarStyle = document.getElementById('sidebar')?.style;
    if (sidebarStyle) {
      if (sidebarIsOpen) sidebarStyle.display = 'none';
      else sidebarStyle.display = 'block';

      sidebarIsOpen = !sidebarIsOpen;
    }
  };

  return (
    <>
      <nav className="navbar navbar-light fixed-top">
        <div className="container-fluid">
          <div className="sidebar-toggle">
            <FontAwesomeIcon className="fa-lg" icon={faBars} onClick={toggleSidebar} />
          </div>
          <Link to="/" className="blog-title">
            💻 pooro
          </Link>
        </div>
      </nav>
      <Sidebar />
    </>
  );
};

export default Naviagtion;
