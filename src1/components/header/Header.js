import React from "react";
import logo from '../../img/logo.svg';
import './Header.css'
function Header(name) {
    return (
        <div className="header">
            <img src={logo}></img>
        </div>
    )
}
export default Header