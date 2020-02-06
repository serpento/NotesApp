import React, { useState, useEffect} from 'react';
import './List.css';

function List (props) {


    const [notes, setNotes] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setNotes(json))

    });



    return (

        <ul>
            { notes.map((note) => <li key={ note.id.toString() }>
                <a href="#" onClick={() => props.updatePage({ slug: 'open', id: note.id })}>{ note.title }</a>
             </li>) }
        </ul>

    )
}

export default List;
