import '../index.css';
import React from "react";
import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav className="navbar">
            <div className='nav-logo'>NAD</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Menus">Menu</Link></li>
            </ul>
            <div className='reg'>
                <button><Link to='/SignIn'>Sign In</Link></button>
                <button><Link to='/LogIn'>Log In</Link></button>
            </div>
        </nav>
    )
}

export default Nav;