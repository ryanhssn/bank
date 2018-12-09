import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

export default class Header extends Component {
    
  
    render() {
      return (
        <nav className="indigo">
          <div className="nav-wrapper">
            
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/history">History</Link></li>
            </ul>
          </div>
        </nav>
      );
    }
  }