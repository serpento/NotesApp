import React, { useState, useEffect } from 'react';
import './Open.css';
import Content from './Content.js';

function Open (props) {

    const [openNote, setOpenNote] = useState([]);

    const [editing, setEditing] = useState(false);

    function deleteNote() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ props.id }`,{method: 'DELETE'})
        .then(props.updatePage({ slug: 'list', id: props.id  }))
    }
            

    useEffect(() => {
        const abortController = new window.AbortController();
       
        fetch(`https://jsonplaceholder.typicode.com/posts/${ props.id }`, { signal: abortController.signal})
          .then(response => response.json())
          .then(json => setOpenNote(json))
       
        return () => {
          abortController.abort();
        };
      }, []);

    return (
        <div>
            {!editing && <div>
                <span>User id: { openNote.userId }</span>
                <h2>{ openNote.title }</h2>
                <p>{ openNote.body }</p> 
                <button className="backButton button" onClick={() => props.updatePage({ slug: 'list', id: null })}>
                    Back to list                
                </button>
                <button className="editButton button" onClick={() => setEditing(true)}>Edit note</button>
                <button className="deleteButton button" onClick={() => deleteNote()}>Delete note</button>
            </div>}
            

            {editing && <form className="editNote">
                <textarea rows="20" defaultValue={ openNote.body }></textarea>
                <button className="saveButton button">Save</button>
            </form>}
        </div>
    )
}

export default Open;
