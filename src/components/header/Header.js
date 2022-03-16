import React from "react";
import logo from '../../img/logo.svg';
import './Header.css'
function Header() {
    return (
        <div className="header">
            <img src={logo}></img>
        </div>
    )
}
export default Header