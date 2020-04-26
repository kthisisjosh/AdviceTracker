import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"

const Navbar = () => {
    return (
        <nav className="navbar" style={{ backgroundColor: "#EBEBEB", margin: "0", padding: "2vh 10vw 2vh 10vw" }}>
            <Link to="/dashboard" className="landing-header-link" style={{ margin: "0 5vw 0 5vw", textDecoration: "none" }}>
                <Typography style={{ textDecoration: "none" }} variant="button">
                    Dashboard
                </Typography>
            </Link>
            <Link to="/browse" className="landing-header-link" style={{ margin: "0 5vw 0 5vw", textDecoration: "none" }}>
                <Typography style={{ textDecoration: "none" }} variant="button">
                    Browse
                </Typography>
            </Link>
            <Link to="/submit" className="landing-header-link" style={{ margin: "0 5vw 0 5vw", textDecoration: "none" }}>
                <Typography style={{ textDecoration: "none" }} variant="button">
                    Submit
                </Typography>
            </Link>
        </nav>
    )
}

export default Navbar
