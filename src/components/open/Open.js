import React, { useState, useEffect } from "react";
import "./Open.css";
import Comment from "../comment";

function Open(props) {
  const [note, setNote] = useState({});

  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function saveNote(e) {
    e.preventDefault();
    setNote({ ...note, body: body || note.body, title: title || note.title});
    setEditing(false)
  }

  function deleteNote() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
      method: "DELETE"
    }).then(props.updatePage({ slug: "list", id: props.id }));
  }

  useEffect(() => {
    const abortController = new window.AbortController();

    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
      signal: abortController.signal
    })
      .then(response => response.json())
      .then(json => setNote(json));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      {!editing && (
        <div>
          <div className="noteOpened">
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <button
              className="backButton button"
              onClick={() => props.updatePage({ slug: "list", id: null })}
            >
              Back to list
            </button>
            {props.userId && (
              <button
                className="editButton button"
                onClick={() => setEditing(true)}
              >
                Edit note
              </button>
            )}

            {props.userId && (
              <button
                className="deleteButton button"
                onClick={() => deleteNote()}
              >
                Delete note
              </button>
            )}
          </div>
          {props.userId && <Comment userId={props.userId} />}
        </div>
      )}

      {editing && (
        <form className="editNote">
          <input
            defaultValue={note.title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            rows="20"
            defaultValue={note.body}
            onChange={e => setBody(e.target.value)}
          />
          <button className="saveButton button" onClick={saveNote}>
            Save
          </button>
        </form>
      )}
    </div>
  );
}

export default Open;
