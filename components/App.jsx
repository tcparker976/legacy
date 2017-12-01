import React from 'react';
import NavBar from './NavBar.jsx';

const App = (props) => {
  return (
    <div>
      <NavBar />
      <h1>MarsKliff</h1>
      {props.children}
    </div>
  );
}

export default App; 
