import React from 'react';

import PostList from './containers/PostListConnected'

import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const {
    name,
  } = props
  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React {name}!</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <PostList />
  </div>
)}

export default App;
