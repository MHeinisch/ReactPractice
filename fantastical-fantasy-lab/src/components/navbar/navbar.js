import React, { Component } from 'react';
import './navbar.css';

import Home from '../home/home.js';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 'home'
        };
    }
    handleClick(pageToRender) {
        
    }
    render() {
        return (
          <div className="inline">            
                <Home />
                <h4>About</h4>
                <h4>Contact</h4>
          </div>                 
        );
    }
}

export default Navbar;