import React, { useState } from "react";
import "./Content.css";
import List from "../list";
import Open from "../open";
import Registration from "../registration";

function Content(props) {
  const [page, setPage] = useState({ slug: "list", id: null });

  function updatePage(page) {
    setPage(page);
  }

  return (
    <div className="App-content">
      {page.slug !== "login" && !props.userId && (
        <p>
          <a className="button enterButton" href="#" onClick={() => updatePage({ slug: "login", id: null })}>
            Enter
          </a>
        </p>
      )}
      {page.slug === "list" && <List updatePage={updatePage} {...page} />}
      {page.slug === "open" && (
        <Open updatePage={updatePage} userId={props.userId} {...page} />
      )}
      {page.slug === "login" && (
        <Registration
          updatePage={updatePage}
          login={id => props.saveUserId(id)}
          {...page}
        />
      )}
    </div>
  );
}

export default Content;
