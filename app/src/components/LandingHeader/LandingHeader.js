import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import LoginButton from "../../components/LoginButtons/LoginButton"
import RegisterButton from "../../components/LoginButtons/RegisterButton"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header style={{ backgroundColor: "#FFFFFF", margin: "0", width: "100vw"}}>
            <Grid container direction="row" alignItems="center" style={{ height: "60px", alignContent: "center" }}>
                <svg xmlns="/" style={{ width: "7vw", height: "4vw", marginLeft: "10vw" }}>
                    <image href="Logo.svg" x="50" y="18" height="40" width="40"></image>
                </svg>
                <Typography variant="h4" justify="left" style={{ marginTop: "0.5vh", marginBottom: "1vh", marginLeft: "0.5vw", color: "black" }}>
                    Advice Tracker
                </Typography>
                <Grid item style={{ marginLeft: "25vw" }}>
                    <Link to="/browse" style={{ margin: "0 0 0 5vw", textDecoration: "none", color: "black" }}>
                        <Typography variant="button">Browse</Typography>
                    </Link>
                </Grid>
                <Grid item style={{ marginLeft: "5vw", marginRight: "1vw" }}>
                    <LoginButton />
                </Grid>
                <Grid item style={{ marginLeft: "1vw", marginRight: "1vw" }}>
                    <RegisterButton />
                </Grid>
            </Grid>
        </header>
    )
}

export default Header
