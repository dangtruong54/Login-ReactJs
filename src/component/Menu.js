import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Menu extends Component {
    render () {
        return (
            <Router>
                <div className="menu">
                    <nav className="menu-wrapper">
                        <Link to="/">Abivin</Link>
                        <ul>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>    
                        </ul>
                    </nav>                  
                </div>
            </Router>
        );

    }
}

export default Menu;