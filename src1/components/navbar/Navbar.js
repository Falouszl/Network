import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/profile" activeStyle={{ backgroundColor: "#fff9" }}>Profile</NavLink>

            <NavLink to="/dialogs" activeStyle={{ backgroundColor: "#fff9" }}>Messages</NavLink>

            <NavLink to="/user" activeStyle={{ backgroundColor: "#fff9" }}>User</NavLink>
        </div>
    )
}
export default Navbar