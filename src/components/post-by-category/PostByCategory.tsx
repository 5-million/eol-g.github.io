import React from 'react';
import { Link } from 'react-router-dom';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../home/home.css';

const PostByCategory: React.FC = () => {
  return (
    <div className="container">
      <ul className="post-list">
        <li className="post-item">
          <Link to="#">
            <div className="post-card">
              <div className="post-card-header">📎 CATEGORY</div>
              <div className="post-card-body">POST SUBJECTPOST SUBJECTPOST SUBJECTPOST SUBJECTPOST</div>
              <div className="post-card-footer">
                <div className="upload-date">
                  <FontAwesomeIcon icon={faClock} />
                  &nbsp;2021-05-06
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PostByCategory;
