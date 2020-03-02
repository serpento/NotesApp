import React, { useState, useEffect } from "react";
import "./List.css";
import Create from "../create"

function List(props) {

  const [notes, setNotes] = useState([]); //массив объектов (постов), который тянем из API
  const [creating, setCreating] = useState(false); 

  function updateNotes(note) {
    setNotes([note, ...notes])
  }

  useEffect(() => {
    const abortController = new window.AbortController();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: abortController.signal
    })
      .then(response => response.json())
      .then(json => setNotes(json));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
      <div>
          <button className="button createNoteButton" onClick={() => setCreating(true)}> Create new note</button>         
          {creating && (<Create updateNotes={updateNotes}/>)}

          <ul>
            {notes
              .filter(note => note.id !== props.id)
              .map(note => (
                <li key={note.id.toString()}>
                  <a
                    href="#"
                    onClick={() => props.updatePage({ slug: "open", id: note.id })}>
                    {note.title} {note.id}
                  </a>
                </li>
              ))}
          </ul>
      </div>
  );
}

export default List;
