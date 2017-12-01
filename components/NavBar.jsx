import React, { Component } from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();
  }

 render() {
   return (
   <div>
     <nav>
        <div className="logo-container">
            <div className="Kristina">
              <Link to="/"><img className="logo" src="/mars-logo.png"></img></Link>
            </div>
            <div>
              <h1 id="site-name">
                MarsKlif
              </h1>
            </div>
        </div>
        <div className="Albrey">
          <SearchBarContainer />
        </div>
      </nav> 
   </div>)
 }

}

export default NavBar;

