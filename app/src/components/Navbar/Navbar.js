import React from "react"
import NavLink from "./NavLink"

const Navbar = () => {
    return (
        <nav className="navbar" style={{ backgroundColor: "#EBEBEB", margin: "0", padding: "2vh 10vw 2vh 10vw" }}>
            <NavLink to="dashboard" />
            <NavLink to="browse" />
            <NavLink to="submit" />
        </nav>
    )
}

export default Navbar
