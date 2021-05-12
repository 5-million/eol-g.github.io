import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Link, RouteComponentProps } from "react-router-dom";
import { Viewer } from "@toast-ui/react-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { PostDetail } from "../../interfaces";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "./post.css";

interface MatchParams {
  id: string;
}

const Post: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { id } = match.params;
  const [detail, setDetail] = useState<PostDetail | null>(null);

  useEffect(() => {
    if (detail) return;

    axios
      .get(`http://localhost:8080/posts/${id}`)
      .then((response: AxiosResponse) => {
        const data: PostDetail | null = response?.data;
        if (data) setDetail(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {detail == null ? null : (
        <div className="container">
          <div className="post-title">
            <div className="post-title-header">
              <Link to={`/category/${detail.category}`}>
                📎 {detail?.category.toUpperCase()}
              </Link>
            </div>
            <div className="post-title-body">{detail?.subject}</div>
            <div className="post-upload-date">
              <FontAwesomeIcon icon={faClock} />
              &nbsp;{detail?.uploadDate}
            </div>
          </div>
          <div className="tui-viewer">
            <Viewer initialValue={detail?.content} />
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
