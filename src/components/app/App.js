import React, { useState } from "react";
import "abortcontroller-polyfill";
import "./App.css";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";

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
