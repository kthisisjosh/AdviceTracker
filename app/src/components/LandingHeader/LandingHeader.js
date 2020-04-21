import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div style={{ backgroundColor: "#FFFFFF", margin: "0" }}>
            <Grid container direction="row" alignItems="center">
                <svg xmlns="/" style={{width: "8vw", height: ""}}>
                    <image href="Logo.svg" x="50" y="25" height="75" width="75"></image>
                </svg>
                <Typography variant="h4" justify="left" style={{ paddingTop: "1vh", paddingBottom: "1vh", color: "black" }}>
                    Advice Tracker
                </Typography>
                <Grid item style={{ marginLeft: "50vw" }}>
                    <Link to="/browse" style={{ margin: "0 0 0 5vw", textDecoration: "none", color: "black" }}>
                        <Typography variant="button">Browse</Typography>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
