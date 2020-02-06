import React, { useState, useEffect } from 'react';
import List from './List.js';
import Content from './Content.js';

function Open (props) {

    const [openNote, setOpenNote] = useState([]);

    const [editing, setEditing] = useState(false);

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${ props.id }`)
            .then(response => response.json())
            .then(json => setOpenNote(json))

    });

    return (
        <div>
            {!editing && <div>
                <h2>{ openNote.title }</h2>
                <p>{ openNote.body }</p> 
                <button className="backButton" onClick={() => props.updatePage({ slug: 'list', id: null })}>
                    Back to list                
                </button>
                <button className="editButton" onClick={() => setEditing(true)}>Edit note</button>
            </div>}
            

            {editing && <form>
                <textarea defaultValue={ openNote.body }></textarea>
                <button className="saveButton">Save</button>
            </form>}
        </div>
    )
}

export default Open;
