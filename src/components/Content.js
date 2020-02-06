import React, { useState } from "react";
import "./Content.css";
import List from "./List.js";
import Open from "./Open.js";

function Content(props) {
  const [page, setPage] = useState({ slug: "list", id: null });

  function updatePage(page) {
    setPage(page);
  }

  return (
    <div className="App-content">
      {page.slug === "list" && <List updatePage={updatePage} />}
      {page.slug === "open" && <Open updatePage={updatePage} {...page} />}
    </div>
  );
}

export default Content;
