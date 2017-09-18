import React from 'react';
import './css/_navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <div className="row">
                <ul className="main-nav">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/features" >Features</Link></li>
                    <li><Link to="/plans" >Plans</Link></li>
                    <li><Link to="/surveys/new" >Demo</Link></li>
                    <li><a href="/auth/google">Log in</a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;