import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="w3-sidebar w3-bar-block w3-border-right" id="sidebar">
        <div className="sidebar-menu">
          <div className="categories">
            <h2 className="sidebar-menu-title">📎 Categories</h2>
            <ul className="category-list">
              <li className="category-item">
                <Link to="#">
                  <FontAwesomeIcon icon={faChevronRight} />
                  &nbsp;SPRING
                </Link>
              </li>
              <li className="category-item">
                <Link to="#">
                  <FontAwesomeIcon icon={faChevronRight} />
                  &nbsp;language
                </Link>
              </li>
              <li className="category-item">
                <Link to="#">
                  <FontAwesomeIcon icon={faChevronRight} />
                  &nbsp;DevOps
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="github-icon">
            <a href="https://github.com/kjs3870" target="_black">
              <FontAwesomeIcon className="fa-2x" icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
