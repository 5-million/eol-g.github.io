import { Viewer } from '@toast-ui/react-editor';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import './post.css';

const Post: React.FC = () => {
  let content = "# title\n```\nconsole.log('hellow world');\n```\n## title2\n### title3\nnomal font";
  content += '\n-1\n-2\n>ggg\n>>ggggg\n>>>gggg';

  return (
    <div className="container">
      <div className="post-title">
        <div className="post-title-header">📎 SPRING</div>
        <div className="post-title-body">POST SUBJECT</div>
        <div className="post-upload-date">
          <FontAwesomeIcon icon={faClock} />
          &nbsp;2021-05-06
        </div>
      </div>
      <div className="tui-viewer">
        <Viewer initialValue={content} />
      </div>
    </div>
  );
};

export default Post;
