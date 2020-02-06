import React, { useState, useEffect } from 'react';
import List from './List.js';
import Edit from './Edit.js';
import Content from './Content.js';

function Open (props) {

    const [openNote, setOpenNote] = useState([]);

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${ props.id }`)
            .then(response => response.json())
            .then(json => setOpenNote(json))

    });
    
    return (
        <div>
            <h2>{ openNote.title }</h2>
            <p>{ openNote.body }</p> 
            <button className="backButton" onClick={() => props.updatePage({ slug: 'list', id: null })}>
                Back to list                
            </button>
            <button className="editButton" onClick={() => props.updatePage({ slug: 'edit', id: null })} >Edit note</button>
        </div>
    )
}

export default Open;
