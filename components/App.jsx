import React from 'react';
import NavBar from './NavBar.jsx';

const App = (props) => {
  return (
    <div>

      <NavBar />
      {props.children}
      {console.log('PROPS.CHILDREN: ', props.children)}
    </div>
  );
}

export default App; 
