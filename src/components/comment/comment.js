import React, { useState } from "react";
import "./comment.css";

function Comment(props) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  function saveComment(e) {
    setComment(e.target.value);
  }

  function storeComment(e) {
    e.preventDefault();

    setComments([...comments, { text: comment, user: props.userId }]);
    setComment("");
  }

  function showComment (comment, i) {
    return (
        <li key={i.toString()}>
            <span>
              <b>{ comment.user }</b>
            </span>

            <hr />

            <p>{ comment.text }</p>
        </li>)
  }

  return (
    <div className="noteComments">
      <div>
        <p>
          <label>Comment:</label>
          <textarea onChange={ saveComment } value={ comment } />
        </p>

        <button className="saveButton button" onClick={ storeComment }>
          Send
        </button>

      </div>

      <ul>
        {comments
            .map(showComment)}
      </ul>

    </div>
  );
}

export default Comment;
