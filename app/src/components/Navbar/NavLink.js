import React from "react"
import { Link } from "react-router-dom"
import Typography from "@material-ui/core/Typography"

const NavLink = (props) => {
    return (
        <Link to={`/${props.to}`} className="landing-header-link" style={{ margin: "0 5vw 0 5vw", textDecoration: "none" }}>
            <Typography style={{ textDecoration: "none" }} variant="button">
                {props.to}
            </Typography>
        </Link>
    )
}

export default NavLink
