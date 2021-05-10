import React from 'react';
import { Route } from 'react-router';
import './App.css';
import Home from './components/home/Home';
import Naviagtion from './components/navigation/Navigation';
import PostByCategory from './components/post-by-category/PostByCategory';
import Post from './components/post/Post';

const App: React.FC = () => {
  return (
    <>
      <Naviagtion />
      <Route exact path="/" component={Home} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/category" component={PostByCategory} />
    </>
  );
};

export default App;
