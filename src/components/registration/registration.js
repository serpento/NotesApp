import React, { useState } from "react";
import "./registration.css";

function Registration(props) {
  const [userId, setUserId] = useState(null);

  function saveUserId(e) {
    setUserId(e.target.value);
  }

  function login() {
    props.login(userId);
    props.updatePage({ slug: "list", id: null });
  }

  return (
    <div className="App-registration">
      <form>
        <label>What is your ID, man?</label>
        <input type="text" onChange={ saveUserId } />

        <button className="button" onClick={ login }>
          Enter
        </button>
      </form>
    </div>
  );
}

export default Registration;
