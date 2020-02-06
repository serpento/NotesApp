import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import "abortcontroller-polyfill";

function App () {
  const [isLoggedIn, setLoggedIn] = useState(false);


  return (
    <div className="App-wrapper">
      <Header isLoggedIn={isLoggedIn} />
      <Content isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  )
}

export default App;
