import React from 'react';
import './Header.css';

function Header (props) {

  return (
    <div className="App-header">
        {props.userId && <p>Welcome, {props.userId}</p>}
    </div>
  )
}

export default Header;
