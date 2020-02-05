import React, { useState } from 'react';
import './Header.css';

function Header () {
  const [isLoggedIn, setLoggedIn] = useState(false);


  return (
    <div class="App-header">
        Header
    </div>
  )
}

export default Header;
