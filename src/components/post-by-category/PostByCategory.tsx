import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Link, RouteComponentProps } from "react-router-dom";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DOMAIN } from "../../server-domain";
import { Posts } from "../../interfaces";

import "../home/home.css";

interface MatchParams {
  name: string;
}

const PostByCategory: React.FC<RouteComponentProps<MatchParams>> = ({
  match,
}) => {
  const { name } = match.params;
  const [posts, setPosts] = useState<Posts[] | null>(null);

  useEffect(() => {
    axios
      .get(`${DOMAIN}/posts/category?name=${name}`)
      .then((response: AxiosResponse) => {
        const data: Posts[] | null = response?.data;
        setPosts(data);
      });
  }, [name, posts]);

  return (
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
  );
};

export default PostByCategory;
