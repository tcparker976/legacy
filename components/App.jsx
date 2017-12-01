import React from 'react';

const App = (props) => {
  return (
    <div>
      <nav>NAVBAR</nav>
      <h1>MarsKliff</h1>
      {props.children}
    </div>
  );
}

export default App; 
