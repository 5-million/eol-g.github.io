import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { DOMAIN } from "../../server-domain";
import { Posts } from "../../interfaces";

import "./home.css";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Posts[] | null>(null);

  useEffect(() => {
    axios.get(`${DOMAIN}/posts`).then((response: AxiosResponse) => {
      const data: Posts[] | null = response?.data;
      setPosts(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <ul className="post-list">
          {posts == null
            ? null
            : posts.map(
                (
                  { id, category, subject, uploadDate, status }: Posts,
                  index: number
                ) => {
                  return (
                    <li className="post-item" key={index}>
                      <Link to={`/posts/${id}`}>
                        <div className="post-card">
                          <div className="post-card-header">
                            📎 {category.toUpperCase()}
                          </div>
                          <div className="post-card-body">{subject}</div>
                          <div className="post-card-footer">
                            <div className="upload-date">
                              <FontAwesomeIcon icon={faClock} />
                              &nbsp;{uploadDate}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                }
              )}
        </ul>
      </div>
    </>
  );
};

export default Home;
