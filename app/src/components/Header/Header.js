import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header style={{ backgroundColor: "#434343", margin: "0" }}>
            <Grid container direction="row" alignItems="center">
                <Typography variant="h4" justify="left" style={{ marginLeft: "5vw", paddingTop: "1vh", paddingBottom: "1vh", color: "white" }}>
                    Advice Tracker
                </Typography>
                <Grid item style={{ marginLeft: "50vw" }}>
                    <Link to="/profile" style={{ margin: "0 0 0 5vw", textDecoration: "none", color: "white" }}>
                        <Typography variant="button">Profile</Typography>
                    </Link>
                    <Link to="/" style={{ margin: "0 5vw 0 5vw", textDecoration: "none", color: "white" }}>
                        <Typography variant="button">Logout</Typography>
                    </Link>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header
