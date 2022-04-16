import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
function Navbar(props) {
    /*let selected = props.choose;
    if ( selected == 0 ) {

    }
    if ( selected == 1 ) {

    }
if ( selected == 2)*/
    return (
        <div className="navbar">
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/dialogs">Messages</NavLink>
            <NavLink to="/user">User</NavLink>
        </div>
    )
}
export default Navbar