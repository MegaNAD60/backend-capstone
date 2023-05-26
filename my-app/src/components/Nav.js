import '../index.css';
import React from "react";
import { Link } from "react-router-dom"

function Nav(){
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Menus">Menu</Link>
            <Link to="/PostMenus">Post</Link>
        </nav>
    )
}

export default Nav;