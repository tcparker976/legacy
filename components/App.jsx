import React from 'react';
import NavBar from './NavBar.jsx';

const App = (props) => {
  return (
    <div className="AppContainer">
      <NavBar />
      {props.children}
    </div>
  );
}

export default App; 
