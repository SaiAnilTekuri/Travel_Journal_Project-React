import React from "react";
import globelogo from '../images/globe-logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <img src={globelogo} alt="globe" className="globe--logo"/>
            <h1 className="navbar--header">My Travel Journal</h1>
        </div>
    )
}

export default Navbar