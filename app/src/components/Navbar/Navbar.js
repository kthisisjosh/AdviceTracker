import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"

const Navbar = () => {
    return (
        <div style={{ backgroundColor: "#EBEBEB", margin: "0", padding: "2vh 10vw 2vh 10vw" }}>
            <Link to="/home" style={{ margin: "0 5vw 0 5vw", textDecoration: "none", color: "black" }}>
                <Typography variant="button">Dashboard</Typography>
            </Link>
            <Link to="/friends" style={{ margin: "0 5vw 0 5vw", textDecoration: "none", color: "black" }}>
                <Typography variant="button">Friends</Typography>
            </Link>
        </div>
    )
}

export default Navbar