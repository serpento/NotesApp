import React, { useState } from "react";
import "abortcontroller-polyfill";
import "./App.css";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

function App() {
  const [userID, setUserID] = useState(null);

  function saveUserId(id) {
    setUserID(id);
  }

  return (
    <div className="App-wrapper">
      <Header userId={userID} />
      <Content userId={userID} saveUserId={saveUserId} />
      <Footer />
    </div>
  );
}

export default App;
