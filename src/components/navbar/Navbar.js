import React from "react";
import './navbar.css';
function Navbar() {
    return (
        <div className="navbar">
            <h1>navbar</h1>
            <a className="navbarlink" href="#">BLOG</a>
            <a className="navbarlink" href="#">CONTACT</a>
            <a className="navbarlink" href="#">PRICE</a>
        </div>
    )
}
export default Navbar