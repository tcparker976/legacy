import React from 'react';
import NavBar from './NavBar.jsx';

const App = (props) => {
  console.log('PROPS CHILDRENITOS')
  console.log(props.children);
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}

export default App; 
