import React, { useState } from "react";
import "./create.css";

function Create(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  function saveTitle(e) {
    setNoteTitle(e.target.value);
  }

  function saveText(e) {
    setNoteText(e.target.value);
  }

  function storeText(e) {
    e.preventDefault();

    props.updateNotes({
      title: noteTitle,
      body: noteText,
      userId: props.userId,
      id: Math.floor(Math.random() * 100) + 100
    });

    setNoteTitle("");
    setNoteText("");
  }

  return (
    <div>
      <div className="createNote">
        <form>

          <p>
            <label>Note title:</label>
            <input onChange={saveTitle} value={noteTitle} />
          </p>

          <p>
            <label>Note text:</label>
            <textarea onChange={saveText} value={noteText} />
          </p>

          <button className="saveButton button" onClick={storeText}>
            Save
          </button>

        </form>
      </div>
    </div>
  );
}

export default Create;
