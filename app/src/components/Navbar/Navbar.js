import React from "react"
import NavLink from "./NavLink"
import Typography from "@material-ui/core/Typography"

const Navbar = () => {
    return (
        <nav className="navbar" style={{ backgroundColor: "#EBEBEB", margin: "0", padding: "2vh 10vw 2vh 10vw" }}>
            <NavLink to="dashboard" />
            <NavLink to="dashboard/category/1" />
            <NavLink to="submit" />
        </nav>
    )
}

export default Navbar
