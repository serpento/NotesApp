import React, { useState, useEffect } from 'react';
import List from './List.js';
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
            <button onClick={() => props.updatePage({ slug: 'list' })}>
                Back to list                
            </button>
        </div>
    )
}

export default Open;
