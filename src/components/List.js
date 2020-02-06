import React, { useState, useEffect } from "react";
import "./List.css";

function List(props) {
  const [notes, setNotes] = useState([]);

  const [noteTexts, setNoteTexts] = useState([]);

  const [noteText, setNoteText] = useState('');

  const [user, setUser] = useState('');

  function saveText(e) {
    setNoteText(e.target.value);
  }

  function saveUser(e) {
    setUser(e.target.value);
  }

  function storeText(e) {
    e.preventDefault();
    setNoteTexts([...noteTexts, { text: noteText, user: user}]);
    setNoteText('');
    setUser('');
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
        <div>
          <div>
            <label>User:</label><br/>
            <input onChange={saveUser} value={user}/>
            <br/>
            <label>Note text:</label><br/>
            <textarea onChange={saveText} value={noteText}/>
            <br/>
            <button className="saveButton button" onClick={storeText}>Send</button>
          </div>
          <div>
            { noteTexts.map((noteText, i) => <p key={i.toString()}><b>{noteText.user}:</b> {noteText.text}</p>) }
          </div>
        </div>
        <ul>
          {notes
            .filter(note => note.id !== props.id)
            .map(note => (
              <li key={note.id.toString()}>
                <a
                  href="#"
                  onClick={() => props.updatePage({ slug: "open", id: note.id })}
                >
                  {note.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
  );
}

export default List;
