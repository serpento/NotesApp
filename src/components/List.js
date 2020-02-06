import React, { useState, useEffect} from 'react';
import './List.css';
import "abortcontroller-polyfill";

function List (props) {


    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const abortController = new window.AbortController();
       
        fetch('https://jsonplaceholder.typicode.com/posts', { signal: abortController.signal})
          .then(response => response.json())
          .then(json => setNotes(json))
       
        return () => {
          abortController.abort();
        };
      }, ['https://jsonplaceholder.typicode.com/posts']);



    return (

        <ul>
            { notes.map((note) => <li key={ note.id.toString() }>
                <a href="#" onClick={() => props.updatePage({ slug: 'open', id: note.id })}>{ note.title }</a>
             </li>) }
        </ul>

    )
}

export default List;
