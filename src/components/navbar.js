import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to={"/"}>Home </Link>
            <Link to={"/schools"}>Campuses </Link>
            <Link to={"/students"}>Students </Link>
        </nav>
    )
}

export default Navbar;