import React from "react";
import { Route } from "react-router";

import "./App.css";
import Home from "./components/home/Home";
import Naviagtion from "./components/navigation/Navigation";
import PostByCategory from "./components/post-by-category/PostByCategory";
import Post from "./components/post/Post";

import { closeSidebar } from "./functions";

const App: React.FC = () => {
  return (
    <>
      <Naviagtion />
      <div
        className="w3-overlay sidebar-none"
        id="sidebar-overlay"
        onClick={closeSidebar}
      ></div>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts/:id" component={Post} />
      <Route exact path="/category/:name" component={PostByCategory} />
    </>
  );
};

export default App;
