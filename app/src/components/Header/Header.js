import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div style={{ backgroundColor: "#434343", margin: "0" }}>
        <Grid container direction="row" alignItems="center">
            <Typography variant="h3" justify="left" style={{marginLeft: "5vw", paddingBottom: "1vh", color: "white"}}>Hysteria</Typography>
                <Grid item style={{marginLeft: "20vw"}}>
                    <Link to="/profile" style={{margin: "0 5vw 0 5vw", textDecoration: "none", color: "white" }}><Typography variant="button">Profile</Typography></Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
