import React, { Component } from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();
  }

 render() {
   return (<div>
     <span>
       <h1>Logo Goes Here</h1>
     </span>
     <nav>
         <Link to="/"><button>Home</button></Link>
         <span><SearchBarContainer /></span>
        
      </nav> 
   </div>)
 }

}

export default NavBar;

