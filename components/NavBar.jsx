import React, { Component } from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();
  }

 render() {
   return (<div>
     <nav>
        <ul>
          <li><Link to="/"><img className="logo" src="/mars-logo.png"></img></Link></li>
          <li><Link to="/">Home</Link></li>
          <li><SearchBarContainer /></li>
        </ul> 
      </nav> 
   </div>)
 }

}

export default NavBar;

