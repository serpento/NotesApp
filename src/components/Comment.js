import React, { useState, useEffect } from "react";
import "./Comment.css";

function Comment() {

        const [comments, setComments] = useState([]);

        const [comment, setComment] = useState('');

        const [user, setUser] = useState('');

        function saveComment(e) {
            setComment(e.target.value);
        }

        function saveUser(e) {
            setUser(e.target.value);
        }

        function storeComment(e) {
            e.preventDefault();
            setComments([...comments, { text: comment, user: user}]);
            setComment('');
            setUser('');
        }

        return (
            <div>
                <div>
                    <label>User:</label><br/>
                    <input onChange={saveUser} value={user}/>
                    <br/>
                    <label>Comment:</label><br/>
                    <textarea onChange={saveComment} value={comment}/>
                    <br/>
                    <button className="saveButton button" onClick={storeComment}>Send</button>
                </div>
                <div>
                    { comments.map((comment, i) => <p key={i.toString()}><b>{comment.user}:</b> {comment.text}</p>) }
                </div>
            </div>
        )
    }

export default Comment;
