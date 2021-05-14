import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { DOMAIN } from "../../../server-domain";
import "./sidebar.css";

const Sidebar: React.FC = () => {
  const [categories, setCategories] = useState<string[] | null>(null);
  useEffect(() => {
    axios.get(`${DOMAIN}/category`).then((response: AxiosResponse) => {
      const data: string[] | null = response?.data;
      setCategories(data);
    });
  }, []);

  return (
    <>
      <div
        className="w3-sidebar w3-bar-block w3-border-righ sidebar-none"
        id="sidebar"
      >
        <div className="sidebar-menu">
          <div className="categories">
            <h2 className="sidebar-menu-title">📎 Categories</h2>
            <ul className="category-list">
              {categories == null
                ? null
                : categories.map((category, index) => {
                    return (
                      <li className="category-item" key={index}>
                        <Link to={`/category/${category}`}>
                          <FontAwesomeIcon icon={faChevronRight} />
                          &nbsp;{category.toUpperCase()}
                        </Link>
                      </li>
                    );
                  })}
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
